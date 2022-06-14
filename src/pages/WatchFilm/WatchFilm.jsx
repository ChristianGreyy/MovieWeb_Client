import React, { useState, useRef, useEffect } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./WatchFilm.scss";
import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";
import Hls from "hls.js";
import { useParams } from "react-router-dom";

const WatchFilm = () => {
  const { movieId } = useParams();
  let videoSrc = "http://localhost:8080/videos/output.hls";
  console.log(movieId);

  const video = useRef(null);

  useEffect(() => {
    if (video.current) {
      if (video.current.canPlayType("application/vnd.apple.mpegurl")) {
        video.current.src = videoSrc;
      } else if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video.current);
      }
    }
  }, []);

  // console.log(video.current);anh

  return (
    <div>
      <Header />
      <Body>
        <div className="name">
          <video
            ref={video}
            src={videoSrc}
            id="video"
            width="1280px"
            height="600px"
            autoPlay
            controls
          ></video>
          {/* <ReactPlayer width="1280px" height="600px" controls url={videoSrc} /> */}
          {/* <ReactHlsPlayer
            src={url}
            controls
            hlsConfig={{
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              lowLatencyMode: true,
            }}
          /> */}
        </div>
      </Body>
    </div>
  );
};

export default WatchFilm;
