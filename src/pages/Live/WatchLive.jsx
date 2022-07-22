import React, { useEffect } from "react";

const WatchLive = () => {
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

  const shareScreen = async () => {
    alert("ok");
    const mediaStream = await getLocalScreenCaptureStream();

    const screenTrack = mediaStream.getVideoTracks()[0];

    // if (screenTrack) {
    //   console.log("replace camera track with screen track");
    //   replaceTrack(screenTrack);
    // }
  };

  // useEffect(() => {
  //   const screenShareButton = document.getElementById("screenShareButton");
  // }, []);

  // (async () => {
  //   const stream = await navigator.mediaDevices.getDisplayMedia();
  // })();

  return (
    <>
      <button
        id="screenShareButton"
        onClick={shareScreen}
        // disabled
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "12px",
        }}
      >
        Share Screen
      </button>

      <video
        src="/"
        className="video"
        width="1200px"
        id="video"
        autoPlay
        controls
      ></video>
    </>
  );
};

export default WatchLive;
