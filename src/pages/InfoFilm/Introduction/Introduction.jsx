import React, { useEffect, useRef, useState } from "react";
import "./Introduction.scss";
import axios from "axios";
import { movieService } from "../../../services";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commentService } from "../../../services";

const Introduction = () => {
  const likeRef = useRef(null);
  const likeRef1 = useRef(null);
  const cmtRef = useRef(null);

  const handleLike = (a) => {
    // console.log(a.current);
    a.current.style.color = "red";
  };

  const handlecmt = () => {
    cmtRef.current.style.display = "flex";
  };

  // Thiết kế: 1520 x 885
  //
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const urlSlice = useSelector((state) => state.url);
  const socketSlice = useSelector((state) => state.socket);

  let { movieId } = useParams();

  const episode_Number = (length, videos, isVip) => {
    let ans = [];
    if (!isVip) {
      for (let i = 0; i < length; i++) {
        if (isVip == false) {
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
  useEffect(() => {
    (async () => {
      const response = await movieService.getMovieById(movieId);
      setMovie(response.data.data.movie);
      const responseVideo = await movieService.getVideosById(movieId);
      setVideos(responseVideo.data.data);
      // console.log(commentService);
      const responseComments = await commentService.getComments(movieId);
      setComments(responseComments.data.data.comment);
    })();
  }, []);

  const handleComment = (e) => {
    if (e.which == 13) {
      socketSlice.socket.emit("client-to-server-comment", {
        movieId: e.target.value,
        content: e.target.value,
      });

      alert("enter");
    }
  };

  console.log(comments);

  return (
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
          <h1>{movie && movie.name}</h1>
          <p>{movie && movie.english_name}(2002)</p>

          <ul>
            <li style={{ marginTop: "18.66px" }}>Thể loại: tình cảm</li>
            <li>Trạng thái: Tập 7 vietsub</li>
            <li>Quốc gia: {movie && movie.original}</li>
            <li>Chất lượng: Bản đẹp</li>
            <li>Độ phân giải: Full HD</li>
            <li>Lượt xem: {movie && movie.views}</li>
          </ul>

          <div className="evaluate">
            <div className="star flex flex-row-reverse">
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
            </div>

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

        <div className="comment">
          <p>BÌNH LUẬN</p>

          <div className="container">
            <div className="head flex justify-between">
              <p>{comments.length} bình luận</p>

              <div className="sort">
                <label style={{ marginRight: "5px" }} htmlFor="sort">
                  Sắp xếp theo:
                </label>
                <select name="sort" id="sort">
                  <option value="new">Mới nhất</option>
                  <option value="all">Tất cả</option>
                </select>
              </div>
            </div>

            <div className="body-content">
              {/* Viết cmt */}
              <div className="write-comment flex">
                <div className="avt"></div>
                <input
                  type="text"
                  placeholder="Viết bình luận"
                  onKeyDown={handleComment}
                />
              </div>

              <div className="scroll-cmt">
                <div className="comment-list">
                  {/* cmt */}
                  {comments &&
                    comments.map((cmt) => {
                      if (!cmt.origin) {
                        return (
                          <>
                            <div className="comment-list_main">
                              <div className="comment-list_main_head">
                                <div className="comment__info flex">
                                  <Link to={`/user/${cmt.user._id}`}>
                                    <img
                                      className="avt"
                                      src={urlSlice.urlServer + cmt.user.avatar}
                                    />
                                  </Link>
                                  <div className="comment__info-des">
                                    <h4 className="comment__info-name">
                                      <Link to={`/user/${cmt.user._id}`}>
                                        {cmt.user.username}
                                      </Link>
                                    </h4>
                                    <p>{cmt.content}</p>
                                  </div>
                                </div>
                              </div>

                              {/* icon */}
                              <div className="comment-list_icon flex">
                                <div
                                  onClick={() => handleLike(likeRef)}
                                  className="cmt comment-list_icon_like"
                                >
                                  <i
                                    ref={likeRef}
                                    className="fa-solid fa-heart"
                                  ></i>
                                </div>
                                <div
                                  onClick={handlecmt}
                                  className="cmt comment-list_icon_asw"
                                >
                                  <i className="fa-solid fa-comment-dots"></i>
                                </div>
                              </div>
                            </div>

                            <div ref={cmtRef} className="asw flex">
                              <div className="avt"></div>
                              <input type="text" placeholder="Viết bình luận" />
                            </div>

                            {comments &&
                              comments.map((childCmt) => {
                                if (childCmt.origin == cmt._id) {
                                  return (
                                    <div
                                      className="comment-list_main"
                                      style={{
                                        marginLeft: "46px",
                                        marginTop: "12px",
                                      }}
                                    >
                                      <div className="comment-list_main_head">
                                        <div className="comment__info flex">
                                          <Link
                                            to={`/user/${childCmt.user._id}`}
                                          >
                                            <img
                                              className="avt"
                                              src={
                                                urlSlice.urlServer +
                                                childCmt.user.avatar
                                              }
                                            />
                                          </Link>
                                          <div className="comment__info-des">
                                            <h4 className="comment__info-name">
                                              <Link
                                                to={`/user/${childCmt.user._id}`}
                                              >
                                                {childCmt.user.username}
                                              </Link>
                                            </h4>
                                            <p>{childCmt.content}</p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* icon */}
                                      <div className="comment-list_icon flex">
                                        <div
                                          onClick={() => handleLike(likeRef)}
                                          className="cmt comment-list_icon_like"
                                        >
                                          <i
                                            ref={likeRef}
                                            className="fa-solid fa-heart"
                                          ></i>
                                        </div>
                                        <div
                                          onClick={handlecmt}
                                          className="cmt comment-list_icon_asw"
                                        >
                                          <i className="fa-solid fa-comment-dots"></i>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                          </>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
