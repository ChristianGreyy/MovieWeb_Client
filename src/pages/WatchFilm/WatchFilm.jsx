import React, { useState, useRef, useEffect } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./WatchFilm.scss";
import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";
import Hls from "hls.js";
import { useParams } from "react-router-dom";
import { movieService } from "../../services";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const WatchFilm = () => {
  const { movieId, episode } = useParams();
  const [movie, setMovie] = useState([]);
  let videoSrc = "";
  console.log(movieId, episode);

  const video = useRef(null);
  const urlSlice = useSelector((state) => state.url);
  const navigate = useNavigate("/");

  useEffect(() => {
    (async () => {
      try {
        const res = await movieService.getVideo(movieId, episode);
        videoSrc = `${urlSlice.urlServer}/videos/${res.src}`;
        // console.log(videoSrc);

        if (video.current) {
          if (video.current.canPlayType("application/vnd.apple.mpegurl")) {
            video.current.src = videoSrc;
          } else if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video.current);
          }
        }
      } catch (err) {
        navigate("/");
        console.log(err);
      }

      const responseVideos = await movieService.getMovieById(movieId);
      setMovie(responseVideos.data.data.movie);
    })();
  }, [episode]);

  // console.log(video.current);anh

  const handleEpisode = (movie) => {
    const episodes = [];
    for (let i = 0; i < movie.episodeNumber; i++) {
      if (i % 6 == 0) {
        episodes.push(
          <div className="video__episode-item">
            <Link to={`/watch/${movieId}/${i + 1}`}>Tập {i + 1}</Link>
          </div>
        );
      } else {
        episodes.push(
          <div style={{ marginLeft: "30px" }} className="video__episode-item">
            <Link to={`/watch/${movieId}/${i + 1}`}>Tập {i + 1}</Link>
          </div>
        );
      }
    }
    return episodes;
    /* <div className="video__episode-item">Tập 1</div>
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
              </div> */
  };

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
              {handleEpisode(movie)}
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default WatchFilm;
