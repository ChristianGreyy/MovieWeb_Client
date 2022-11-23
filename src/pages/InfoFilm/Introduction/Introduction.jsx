import React, { useEffect, useRef, useState } from "react";
import "./Introduction.scss";
import axios from "axios";
import { movieService } from "../../../services";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commentService } from "../../../services";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { evaluateMovie } from "../../../redux/movie/movieSlice";
import Comment from "./Comment";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const likeRef = useRef(null);
  const likeRef1 = useRef(null);
  const cmtRef = useRef(null);

  const handleLike = (a) => {
    // console.log(a.current);
    a.current.style.color = "red";
  };

  // Thiết kế: 1520 x 885
  const [commentSocket, setCommentSocket] = useState(false);
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [test, setTest] = useState(false);
  const urlSlice = useSelector((state) => state.url);
  const socketSlice = useSelector((state) => state.socket);
  const navigate = useNavigate();

  let { movieId } = useParams();

  const episode_Number = (length, videos, isVip) => {
    let ans = [];
    if (!isVip) {
      for (let i = 0; i < length; i++) {
        if (isVip == false) {
          const link =
            videos[i]?.episode == i + 1 && videos[i]?.isVip == isVip
              ? `/watch/${movieId}/${videos[i].episode}`
              : `/watch/${movieId}/ ${i + 1}`;

          ans.push(
            <button key={i}>
              <Link
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  lineHeight: "30px",
                }}
                to={link}
              >
                {i + 1}
              </Link>
            </button>
          );
        }
      }
      return ans;
    } else {
      for (let i = 0; i < length; i++) {
        if (videos[i]?.isVip == true) {
          const link =
            videos[i]?.episode == i + 1 && videos[i]?.isVip == isVip
              ? `/watch/${movieId}/${videos[i].episode}`
              : `/watch/${movieId}${i + 1}`;
          ans.push(
            <button key={i}>
              <Link
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  lineHeight: "30px",
                }}
                to={link}
              >
                {i + 1}
              </Link>
            </button>
          );
        }
      }
      return ans;
    }
  };

  const changeCommentLikeSocket = (value) => {
    console.log(value);
    let arr = comments.map((cmt) => {
      if (cmt._id == value._id) {
        return value;
      }
      return cmt;
    });
    setComments(arr);
  };

  const changeCommentSocket = (value) => {
    console.log(comments);
    setComments([value, ...comments]);
  };

  useEffect(() => {
    (async () => {
      const response = await movieService.getMovieById(movieId);
      setMovie(response.data.data.movie);
      const responseVideo = await movieService.getVideosById(movieId);
      setVideos(responseVideo.data.data);
      // console.log(commentService);
      const responseComments = await commentService.getComments(movieId);
      setComments(() => responseComments.data.data.comment);
    })();
  }, [commentSocket, movieId]);
  const dispatch = useDispatch();

  const notify = (msg, status) => {
    if (status === "error") {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
  };

  const handleEvaluate = (index) => {
    const star = 10 - index;
    (async () => {
      try {
        const result = await dispatch(
          evaluateMovie({
            star,
            movieId,
          })
        );
        const data = unwrapResult(result);
        console.log(data);
        notify(`Cảm ơn bạn dã đánh giá cho bộ phim "${movie.name}"`);
      } catch (err) {
        // navigate("/login");
        console.log(err);
        notify(err.message);
      }
    })();
  };

  const stars = () => {
    let ans = [];
    for (let i = 0; i < 10; i++) {
      ans.push(
        <input
          type="radio"
          name="star"
          onClick={() => {
            handleEvaluate(i);
          }}
        />
      );
    }
    return ans;
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

      <div className="container-introduct">
        <div
          className="header-film flex gap-x-5"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="film">
            <div className="avatar-film">
              <img
                style={{ width: "100%", height: "100%" }}
                src={movie && urlSlice.urlServer + movie.image}
              />
            </div>

            <div className="watch">
              <Link to={"/watch/" + movie._id + "/1"}>XEM PHIM</Link>
            </div>
          </div>

          <div className="content-film">
            <h1>
              {movie?.name && movie.name > 20
                ? movie.name.slice(0, 20).concat("...")
                : movie.name}
            </h1>
            <p>
              {" "}
              {movie?.english_name && movie.english_name > 20
                ? movie.english_name.slice(0, 20).concat("...")
                : movie.english_name}
              (2002)
            </p>

            <ul>
              <li style={{ marginTop: "18.66px" }}>Thể loại: tình cảm</li>
              <li>Trạng thái: Tập 7 vietsub</li>
              <li>Quốc gia: {movie && movie.original}</li>
              <li>Chất lượng: Bản đẹp</li>
              <li>Độ phân giải: Full HD</li>
              <li>Lượt xem: {movie && movie.views}</li>
            </ul>

            <div className="evaluate">
              <div className="star flex flex-row-reverse">{stars()}</div>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  textAlign: "center",
                  paddingBottom: "12px",
                }}
              >
                ({movie && movie.stars} điểm /{" "}
                {movie?.user_stars?.length && movie.user_stars.length} lượt)
              </p>
            </div>

            <div className="start">
              <p>Vietsub 20h thứ 3,5 hàng tuần trên HTchill.Net</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className=" VIP VIP1 flex">
            <p>V.I.P 0:</p>
            <div className="series flex flex-row-reverse">
              {episode_Number(movie.episodeNumber, videos, false)}
            </div>
          </div>

          <div className="VIP VIP2 flex">
            <p>V.I.P 1:</p>
            <div className="series flex">
              {episode_Number(movie.episodeNumber, videos, true)}
            </div>
          </div>

          <div className="content">
            <p>Nội dung phim</p>
            <div className="container-film flex">
              <div className="avatar">
                <img src={movie && urlSlice.urlServer + movie.image} />
              </div>
              <div className="content_film">
                <h1>{movie && movie.name}</h1>
                {/* <h1>Tình yêu từ 0 đến 1</h1> */}
                <p>{movie && movie.english_name}(2002)</p>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "7px",
                    fontWeight: "400",
                  }}
                >
                  {movie && movie.description}
                </p>
              </div>
            </div>

            <div className="key-word">
              <p>Từ khóa: </p>
              <div className="key flex">
                <p>{movie && movie.name}</p>
                <p>{movie && movie.english_name}(2002)</p>
              </div>
            </div>
          </div>
          <Comment
            movieId={movieId}
            comments={comments}
            changeCommentSocket={changeCommentSocket}
            changeCommentLikeSocket={changeCommentLikeSocket}
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
