import React, { useState, useRef, useEffect } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./WatchFilm.scss";
import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";
import Hls from "hls.js";
import { useParams } from "react-router-dom";
import { movieService } from "../../services";

const WatchFilm = () => {
  const { movieId } = useParams();
  let videoSrc = "";

  const video = useRef(null);

  useEffect(() => {
    const streamming = (async () => {
      videoSrc = await movieService.streamming(movieId);
      videoSrc = "http://localhost:8080/videos/" + videoSrc.data;
      console.log(videoSrc);

      if (video.current) {
        if (video.current.canPlayType("application/vnd.apple.mpegurl")) {
          video.current.src = videoSrc;
        } else if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(videoSrc);
          hls.attachMedia(video.current);
        }
      }
    })();
  }, [movieId]);

  // console.log(video.current);anh

  return (
    <div>
      <Header />
      <Body>
        <div className="video__container">
          <div className="video__play">
            <video
              ref={video}
              src={videoSrc}
              className="video"
              width="1200px"
              id="video"
              autoPlay
              controls
            ></video>
          </div>
          <div className="video__description">
            <h4 className="video__heading">Tập phim</h4>
            <div className="video__all">Tập 1 - Tập 16</div>
            <div className="video__episode-container">
              <div className="video__episode-item">Tập 1</div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 2
              </div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 3
              </div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 4
              </div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 5
              </div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 6
              </div>
              <div className="video__episode-item">Tập 7</div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 8
              </div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 9
              </div>
              <div
                style={{ marginLeft: "30px" }}
                className="video__episode-item"
              >
                Tập 10
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default WatchFilm;
