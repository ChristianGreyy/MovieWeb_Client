import React, { useState, useRef, useEffect, useContext } from "react";
import socketContext from "../../contexts/socket.context";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Components/Header/index";
import "./WatchLive.scss";
import { setSocketId } from "../../redux/socketIdSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let peerConnection;
let localMediaStream;
let remoteId;

const WatchLive = () => {
  const [isPartner, setPartner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isMyCamera, setIsMyCamera] = useState(false);
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.socketId).socketId;
  const socket = useContext(socketContext);
  const userSlice = useSelector((state) => state.user);
  const userId = userSlice.user._id;
  const notify = (err) => toast.error(err);

  const localVideo = useRef();
  const remoteVideo = useRef();
  const callButton = useRef();
  const screenShareButton = useRef();
  const remoteMediaStream = new MediaStream();

  socket.onopen = () => {
    console.log("socket::open");
  };
  socket.once("server-to-client", async (data) => {
    try {
      const jsonMessage = JSON.parse(data);

      // console.log("action", jsonMessage.action);
      switch (jsonMessage.action) {
        case "error":
          notify(jsonMessage.error);
          break;
        case "start":
          console.log(jsonMessage);

          dispatch(setSocketId(jsonMessage.socketId));

          console.log("start", jsonMessage.id);
          callButton.disabled = false;
          document.getElementById("localId").innerHTML = jsonMessage.id;
          break;
        case "offer":
          remoteId = jsonMessage.data.remoteId;
          delete jsonMessage.data.remoteId;
          setPartner(true);
          await initializePeerConnection(localMediaStream.getTracks());
          await peerConnection.setRemoteDescription(
            new RTCSessionDescription(jsonMessage.data.offer)
          );

          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(answer);

          sendSocketMessage("answer", { remoteId, answer });
          break;
        case "answer":
          await peerConnection.setRemoteDescription(
            new RTCSessionDescription(jsonMessage.data.answer)
          );
          break;
        case "iceCandidate":
          await peerConnection.addIceCandidate(jsonMessage.data.candidate);
          break;
        default:
          console.warn("unknown action", jsonMessage.action);
      }
    } catch (error) {
      console.error("failed to handle socket message", error);
    }
  });

  socket.onerror = (error) => {
    console.error("socket::error", error);
  };

  socket.onclose = () => {
    console.log("socket::close");
    stop();
  };

  const sendSocketMessage = (action, data) => {
    console.log("send start");
    const message = { action, data };
    socket.send(JSON.stringify(message));
  };

  const start = async () => {
    setIsMyCamera(true);
    try {
      localMediaStream = await getLocalMediaStream();
      sendSocketMessage("start");
    } catch (error) {
      console.error("failed to start stream", error);
    }
  };

  const call = async (status) => {
    try {
      if (status == "search") {
        remoteId = document.getElementById("callId").value;
        // console.log(remoteId);
        if (!remoteId) {
          alert("Please enter a remote id");
          return;
        }
        await initializePeerConnection(localMediaStream.getTracks());
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        sendSocketMessage("offer", { offer, remoteId });
        setPartner(true);
        setIsLoading(false);
      } else {
        remoteId = "";
        setTimeout(async () => {
          await initializePeerConnection(localMediaStream.getTracks());
          const offer = await peerConnection.createOffer();
          await peerConnection.setLocalDescription(offer);
          sendSocketMessage("offer", { offer, remoteId });
          setPartner(true);
          setIsLoading(false);
        }, 3000);
      }
    } catch (error) {
      console.error("failed to initialize call", error);
    }
  };

  const shareScreen = async () => {
    const mediaStream = await getLocalScreenCaptureStream();

    const screenTrack = mediaStream.getVideoTracks()[0];

    if (screenTrack) {
      console.log("replace camera track with screen track");
      replaceTrack(screenTrack);
    }
  };

  const stop = () => {
    if (!localVideo.srcObject) return;

    for (const track of localVideo.srcObject.getTracks()) {
      console.log("stop track", track);
      track.stop();
    }

    for (const sender of peerConnection.getSenders()) {
      sender.track.stop();
    }

    peerConnection.close();
    callButton.disabled = true;
    // hangupButton.disabled = true;
    screenShareButton.disabled = true;
    localVideo.current.srcObject = undefined;
    remoteVideo.current.srcObject = undefined;
  };

  const getLocalMediaStream = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      console.log("got local media stream");
      // console.log(localVideo);
      localVideo.current.srcObject = mediaStream;
      // localVideo.current.controls = true;

      return mediaStream;
    } catch (error) {
      console.error("failed to get local media stream", error);
    }
  };

  const initializePeerConnection = async (mediaTracks) => {
    const config = {
      iceServers: [{ urls: ["stun:stun1.l.google.com:19302"] }],
    };
    peerConnection = new RTCPeerConnection(config);

    // Sent to request that the specified candidate be transmitted to the remote peer.
    peerConnection.onicecandidate = ({ candidate }) => {
      if (!candidate) return;

      console.log("peerConnection::icecandidate", candidate);
      console.log("remote", remoteId);
      sendSocketMessage("iceCandidate", { remoteId, candidate });
    };

    // Sent when the state of the ICE connection changes, such as when it disconnects.
    peerConnection.oniceconnectionstatechange = () => {
      console.log(
        "peerConnection::iceconnectionstatechange newState=",
        peerConnection.iceConnectionState
      );
      // If ICE state is disconnected stop
      if (peerConnection.iceConnectionState === "disconnected") {
        alert("Connection has been closed stopping...");
        socket.close();
      }
    };

    // Sent after a new track has been added to one of the
    // RTCRtpReceiver instances which comprise the connection.
    peerConnection.ontrack = ({ track }) => {
      console.log("peerConnection::track", track);
      remoteMediaStream.addTrack(track);
      remoteVideo.current.srcObject = remoteMediaStream;
      remoteVideo.current.controls = true;
    };

    for (const track of mediaTracks) {
      peerConnection.addTrack(track);
    }

    // hangupButton.disabled = false;
    screenShareButton.disabled = false;
  };

  const getLocalScreenCaptureStream = async () => {
    try {
      const constraints = { video: { cursor: "always" }, audio: false };
      const screenCaptureStream = await navigator.mediaDevices.getDisplayMedia(
        constraints
      );

      return screenCaptureStream;
    } catch (error) {
      console.error("failed to get local screen", error);
    }
  };

  const replaceTrack = (newTrack) => {
    const sender = peerConnection
      .getSenders()
      .find((sender) => sender.track.kind === newTrack.kind);

    if (!sender) {
      console.warn("failed to find sender");

      return;
    }

    sender.replaceTrack(newTrack);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />

      <div className="video__live">
        <div
          className="video__live-content"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* solve localVideo */}
          {!isMyCamera && (
            <div className="localVideo__content" style={{ width: "50%" }}>
              <button className="localVideo__content-introduction">
                <i class="fa-solid fa-tv"></i>
                HTChill TV
              </button>
              <div
                style={{
                  height: "480px",
                  width: "640px",
                  backgroundColor: "#666878",
                }}
              ></div>
              {!isPartner && (
                <button className="localVideo__content-btn" onClick={start}>
                  Bắt đầu với camera
                </button>
              )}
            </div>
          )}
          {isMyCamera && (
            <div className="localVideo__content">
              <div style={{ color: "white", margin: "10px" }}>
                ID của bạn: <span id="localId" />
              </div>

              <video
                ref={localVideo}
                id="localVideo"
                style={{ height: "480px", width: "640px" }}
                width="640"
                height="480"
                autoPlay
                muted
              ></video>
            </div>
          )}
          {!isPartner && (
            <div
              className="remoteVideo__content"
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                id="callId"
                style={{
                  width: "50%",
                  height: "40px",
                  paddingLeft: "8px",
                  marginTop: "20px",
                  color: "white",
                  backgroundColor: "#666878",
                }}
                placeholder="Nhập id partner (Nếu có)"
              />
              <div className="remoteVideo__content-btn">
                <div
                  onClick={() => {
                    if (!isMyCamera) {
                      alert("Vui lòng bật camera của bạn!!");
                      return;
                    }
                    setIsLoading(true);
                    setPartner(true);
                    call("random");
                  }}
                  className="remoteVideo__content-btn-item remoteVideo__content-btn-random"
                >
                  Ngẫu nhiên
                </div>
                <div
                  className="remoteVideo__content-btn-item remoteVideo__content-btn-select"
                  ref={callButton}
                  id="callButton"
                  onClick={() => call("search")}
                >
                  Dò kênh
                </div>
              </div>
            </div>
          )}
          {isPartner && (
            <div className="remoteVideo__content">
              <div style={{ color: "white", margin: "10px" }}>
                ID của partner: <span id="localId" />
              </div>
              {isLoading && (
                <img
                  style={{ height: "480px", width: "640px" }}
                  src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
                />
              )}
              {!isLoading && (
                <video
                  ref={remoteVideo}
                  id="remoteVideo"
                  style={{ height: "480px", width: "640px" }}
                  width="640"
                  height="480"
                  autoPlay
                ></video>
              )}
            </div>
          )}
        </div>
        {isPartner && (
          <div className="share__button">
            <button
              ref={screenShareButton}
              id="screenShareButton"
              onClick={shareScreen}
              // disabled
            >
              Chia sẻ màn hình của bạn
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WatchLive;
