import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { postComment, likeComment } from "../../../redux/comment/comment";
import socketContext from "../../../contexts/socket.context";

const Comment = ({ movieId, comments, changeCommentSocket }) => {
  const socket = useContext(socketContext);
  const urlSlice = useSelector((state) => state.url);
  const userSlice = useSelector((state) => state.user);
  // const socketSlice = useSelector((state) => state.socket);
  const [checkComment, setCheckComment] = useState();
  const dispatch = useDispatch();

  const handlecmt = (index) => {
    setCheckComment(index);
  };

  useEffect(() => {
    socket.on("server-to-client-comment", (value) => {
      changeCommentSocket();
    });

    socket.on("server-to-client-like", (value) => {
      changeCommentSocket();
      // console.log(value);
    });
  }, [socket]);

  const HandleComment = (e, commentId) => {
    if (e.which == 13) {
      socket.emit("client-to-server-comment", {
        movieId,
        content: e.target.value,
        commentId,
      });
      (async () => {
        try {
          const result = await dispatch(
            postComment({
              content: e.target.value,
              commentId: commentId,
              movieId: movieId,
            })
          );
          const data = unwrapResult(result);
          // console.log(data);
        } catch (err) {
          console.log(err);
          // notify(err.message);
        }
      })();
      e.target.value = "";
    }
  };

  const handleLike = (commentId) => {
    socket.emit("client-to-server-like", {
      commentId,
    });
    (async () => {
      console.log("callling api");
      try {
        const result = await dispatch(
          likeComment({
            commentId: commentId,
          })
        );
        const data = unwrapResult(result);
        // console.log(data);
      } catch (err) {
        console.log(err);
        // notify(err.message);
      }
      socket.off("server-to-client-comment");
    })();
  };

  // console.log(userSlice.user);

  return (
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
            <Link to="/">
              <img
                className="avt"
                src="http://localhost:8080/avatars/default.jpg"
              />
            </Link>
            <input
              type="text"
              placeholder="Viết bình luận"
              onKeyDown={(e) => HandleComment(e)}
            />
          </div>

          <div className="scroll-cmt">
            <div className="comment-list">
              {/* cmt */}
              {comments &&
                comments.map((cmt, i) => {
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
                          <div className="comment-list_icon flex items-center">
                            <div
                              className="cmt comment-list_icon_like"
                              style={
                                cmt.likes.find(
                                  (like) => like == userSlice.user._id
                                )
                                  ? { color: "red" }
                                  : { color: "white" }
                              }
                              onClick={() => handleLike(cmt._id)}
                            >
                              <i className="fa-solid fa-heart"></i>
                            </div>
                            <div
                              className="comment-list_icon_like-number"
                              style={{ fontSize: "14px" }}
                            >
                              {cmt.likes.length}
                            </div>
                            <div
                              onClick={() => handlecmt(i)}
                              className="cmt comment-list_icon_asw"
                              style={{ marginLeft: "12px" }}
                            >
                              <i className="fa-solid fa-comment-dots"></i>
                            </div>
                          </div>
                        </div>

                        {checkComment == i && (
                          <div className="asw flex">
                            <Link to={`/user/${cmt.user._id}`}>
                              <img
                                className="avt"
                                src={urlSlice.urlServer + cmt.user.avatar}
                              />
                            </Link>
                            <input
                              type="text"
                              placeholder="Viết bình luận"
                              onKeyDown={(e) => HandleComment(e, cmt._id)}
                            />
                          </div>
                        )}

                        {comments &&
                          comments.map((childCmt, i) => {
                            if (childCmt.origin == cmt._id) {
                              return (
                                <div
                                  className="comment-list_main"
                                  style={{
                                    marginLeft: "46px",
                                    marginTop: "12px",
                                  }}
                                  key={i}
                                >
                                  <div className="comment-list_main_head">
                                    <div className="comment__info flex">
                                      <Link to={`/user/${childCmt.user._id}`}>
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
                                  <div className="comment-list_icon flex items-center">
                                    <div
                                      className="cmt comment-list_icon_like"
                                      style={
                                        childCmt.likes.find(
                                          (like) => like == userSlice.user._id
                                        )
                                          ? { color: "red" }
                                          : { color: "white" }
                                      }
                                      onClick={() => handleLike(childCmt._id)}
                                    >
                                      <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <div
                                      className="comment-list_icon_like-number"
                                      style={{ fontSize: "14px" }}
                                    >
                                      {childCmt.likes.length}
                                    </div>
                                    <div
                                      onClick={handlecmt}
                                      className="cmt comment-list_icon_asw"
                                      style={{ marginLeft: "12px" }}
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
  );
};

export default Comment;
