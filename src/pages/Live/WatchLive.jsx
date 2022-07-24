import React, { useState, useRef, useEffect, useContext } from "react";
import socketContext from "../../contexts/socket.context";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/index";
import "./WatchLive.scss";

let peerConnection;
let localMediaStream;
let remoteId;

const WatchLive = () => {
  const [isPartner, setPartner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const socket = useContext(socketContext);
  const userSlice = useSelector((state) => state.user);
  const userId = userSlice.user._id;

  const localVideo = useRef();
  const remoteVideo = useRef();
  const callButton = useRef();
  const screenShareButton = useRef();
  const remoteMediaStream = new MediaStream();

  socket.onopen = () => {
    console.log("socket::open");
  };

  socket.on("server-to-client", async (data) => {
    try {
      const jsonMessage = JSON.parse(data);

      console.log("action", jsonMessage.action);
      switch (jsonMessage.action) {
        case "start":
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
    try {
      localMediaStream = await getLocalMediaStream();
      sendSocketMessage("start");
    } catch (error) {
      console.error("failed to start stream", error);
    }
  };

  const call = async () => {
    setPartner(true);
    setIsLoading(false);
    try {
      remoteId = document.getElementById("callId").value;
      console.log(remoteId);
      if (!remoteId) {
        alert("Please enter a remote id");

        return;
      }

      console.log("call: ", remoteId);
      await initializePeerConnection(localMediaStream.getTracks());
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      sendSocketMessage("offer", { offer, remoteId });
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

    peerConnection.onicecandidate = ({ candidate }) => {
      if (!candidate) return;

      console.log("peerConnection::icecandidate", candidate);
      console.log("remote", remoteId);
      sendSocketMessage("iceCandidate", { remoteId, candidate });
    };

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

  useEffect(() => {}, []);

  console.log(isLoading);

  return (
    <>
      <Header />
      {isModal && (
        <div className="video__live-modal">
          <div
            className="video__live-modal-close"
            onClick={() => setIsModal(false)}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <input
            type="text"
            id="callId"
            style={{
              width: "100%",
              height: "40px",
              padding: "4px",
              marginTop: "20px",
              color: "black",
            }}
            placeholder="Nhập id partner (Nếu có)"
          />
          <div className="video__live-modal-btn">
            <div
              onClick={() => {
                setIsLoading(true);
                setPartner(true);
              }}
              className="video__live-modal-btn-item video__live-modal-btn-random"
            >
              Ngẫu nhiên
            </div>
            <button
              className="video__live-modal-btn-item video__live-modal-btn-select"
              ref={callButton}
              id="callButton"
              style={{ marginRight: "12px" }}
              onClick={call}
            >
              Dò kênh
            </button>
          </div>
        </div>
      )}

      <div className="video__live">
        {isPartner && (
          <button
            ref={screenShareButton}
            id="screenShareButton"
            onClick={shareScreen}
            // disabled
          >
            Share Screen
          </button>
        )}
        <hr />
        <div className="video__live-content">
          <div
            style={{
              alignItems: isPartner ? "flex-start" : "center",
            }}
            className="localVideo__content"
          >
            {!isPartner && (
              <button className="localVideo__content-btn" onClick={start}>
                Start
              </button>
            )}

            <div>
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
            <h3
              className="localVideo__content-settings"
              onClick={() => {
                setIsModal(true);
              }}
            >
              Chức năng
            </h3>
          </div>
          {isPartner && (
            <div className="remoteVideo__content">
              <div>
                ID của partner: <span id="localId" />
              </div>

              {isLoading && (
                <img
                  style={{ height: "480px", width: "640px" }}
                  src="http://d3pr5r64n04s3o.cloudfront.net/tuts/377_loading_gif/final.gif"
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
      </div>
    </>
  );
};

export default WatchLive;
