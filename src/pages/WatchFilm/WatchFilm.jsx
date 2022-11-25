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

  const video = useRef(null);
  const urlSlice = useSelector((state) => state.url);
  const navigate = useNavigate("");
  let videoSrc = `${urlSlice.urlServer}/api/movie/video/${movieId}/${episode}`;

  useEffect(() => {
    (async () => {
      try {
        // const res = await movieService.getVideo(movieId, episode);
        // console.log(res);
        // videoSrc = `${urlSlice.urlServer}/videos/${res.src}`;
        // console.log(videoSrc);
        // if (video.current) {
        //   if (video.current.canPlayType("application/vnd.apple.mpegurl")) {
        //     video.current.src = videoSrc;
        //   } else if (Hls.isSupported()) {
        //     var hls = new Hls();
        //     hls.loadSource(videoSrc);
        //     hls.attachMedia(video.current);
        //   }
        // }
      } catch (err) {
        navigate("/error/404");
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
            <div className="video__all">Tập 1 - Tập {movie.episodeNumber}</div>
            <div className="video__episode-container">
              {handleEpisode(movie)}
            </div>
          </div>
          <div className="video__information">
            <div className="video__information-left">
              <img
                src={`${urlSlice.urlServer}${movie.image}`}
                className="video__information-left-img"
              />
              <div className="video__information-left-des">
                <div className="video__information-left-des-name">
                  {movie.name}
                </div>
                <div className="video__information-left-des-name-eng">
                  {movie.english_name} (2022)
                </div>
                <div className="video__information-left-des-button">
                  <div
                    to="/"
                    className="video__information-left-des-button-item video__information-left-des-button-follow"
                  >
                    <div className="video__information-left-des-button-item-icon">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className="video__information-left-des-button-item-des">
                      Theo dõi
                    </div>
                  </div>
                  <div
                    style={{ marginLeft: "12px" }}
                    to="/"
                    className="video__information-left-des-button-item video__information-left-des-button-share"
                  >
                    <div className="video__information-left-des-button-item-icon">
                      <i class="fa-solid fa-share-nodes"></i>{" "}
                    </div>
                    <div className="video__information-left-des-button-item-des">
                      Chia sẻ
                    </div>
                  </div>
                </div>
                <div className="video__information-left-des-text">
                  {movie.description}
                </div>
              </div>
            </div>
            <ul className="video__information-right">
              <li className="video__information-right-item">
                <div className="video__information-right-item-key">Stars:</div>
                <div className="video__information-right-item-value">
                  {movie.stars}
                </div>
              </li>
              <li className="video__information-right-item">
                <div className="video__information-right-item-key">Số tập:</div>
                <div className="video__information-right-item-value">
                  {`${episode}/${movie.episodeNumber}`}
                </div>
              </li>
              <li className="video__information-right-item">
                <div className="video__information-right-item-key">
                  Thể loại:
                </div>
                <div className="video__information-right-item-value">
                  {movie?.category && movie.category.slice(0, 20) + "..."}
                </div>
              </li>{" "}
              <li className="video__information-right-item">
                <div className="video__information-right-item-key">
                  Quốc gia:
                </div>
                <div className="video__information-right-item-value">
                  {movie.original}
                </div>
              </li>
              <li className="video__information-right-item">
                <div className="video__information-right-item-key">
                  Phát hành:
                </div>
                <div className="video__information-right-item-value">2022</div>
              </li>
            </ul>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default WatchFilm;
