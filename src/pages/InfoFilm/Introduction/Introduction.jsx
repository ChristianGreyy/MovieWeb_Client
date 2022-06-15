import React, { useEffect, useRef, useState } from "react";
import "./Introduction.scss";
import axios from "axios";
import { movieService } from "../../../services";
import { useParams } from "react-router-dom";

const Introduction = () => {
  const likeRef = useRef(null);
  const likeRef1 = useRef(null);
  const cmtRef = useRef(null);

  const handleLike = (a) => {
    console.log(a.current);
    a.current.style.color = 'red';
  }

  const handlecmt = () => {
    cmtRef.current.style.display = 'flex';
  }

  // Thiết kế: 1520 x 885
  //
  const [movie, setMovie] = useState([]);

  let { movieId } = useParams();

  // const movieId = "62a5fd2b30383c765af36bd4";

  useEffect(() => {
    const getMovie = (async () => {
      const response = await movieService.getMovieById(movieId);
      setMovie(response.data.data.movie);
    })();
  }, []);

  // console.log(movie.user_stars.length);

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
              src={movie && "http://localhost:8080/" + movie.image}
            />
          </div>

          <div className="watch">
            <button>XEM PHIM</button>
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
          <p>V.I.P 1:</p>
          <div className="series flex flex-row-reverse">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
          </div>
        </div>

        <div className="VIP VIP2 flex">
          <p>V.I.P 2:</p>
          <div className="series flex">
            <button>13</button>
            <button>14</button>
          </div>
        </div>

        <div className="content">
          <p>Nội dung phim</p>
          <div className="container-film flex">
            <div className="avatar"></div>
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
                Tình yêu Từ 0 Đến 1, Fall In Love (2022) Đại tiểu thư ngạo kiều
                Cảnh Tri Hạ gặp phải chàng CEO hai nhân cách ngang ngược Phó
                Trạch Nhất và bắt đầu cho một "tam giác tình" ngọt ngào cay
                đáng. Nam nữ mạnh mẽ dứt khoát, xây dựng nên tình yêu của những
                người trưởng thành.
              </p>
            </div>
          </div>

          <div className="key-word">
            <p>Từ khóa: </p>
            <div className="key flex">
              <p>Tình yêu từ 0 đến 1</p>
              <p>Fall in love (2022)</p>
            </div>
          </div>
        </div>

        <div className="comment">
          <p>BÌNH LUẬN</p>

          <div className="container">
            <div className="head flex justify-between">
              <p>3 bình luận</p>

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
                <input type="text" placeholder="Viết bình luận" />
              </div>

              <div className="scroll-cmt">

                {/* cmt */}
                <div className="comment-list">
                  <div className="comment-list_main">
                    <div className="comment-list_main_head flex">
                      <div className="avt"></div>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Error blanditiis quo debitis nisi. Quam odio est voluptas
                        cumque ipsum sed nisi veniam quos! Sint nostrum soluta iste
                        voluptatem, tempora totam!
                      </p>
                    </div>
                    
                                    {/* icon */}
                    <div className="comment-list_icon flex">
                      <div onClick={() => handleLike(likeRef)} className="cmt comment-list_icon_like"><i ref={likeRef} class="fa-solid fa-heart"></i></div>
                      <div onClick={handlecmt} className="cmt comment-list_icon_asw"><i class="fa-solid fa-comment-dots"></i></div>
                    </div>
                  </div>

                  {/* Trả lời cmt */}
                  <div ref={cmtRef} className="asw flex">
                    <div className="avt"></div>
                    <input type="text" placeholder="Viết bình luận" />
                  </div>

                  <div style={{marginLeft: '37px', paddingTop: '20px'}} className="comment-list_main">
                    <div className="comment-list_main_head flex">
                      <div className="avt"></div>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Error blanditiis quo debitis nisi. Quam odio est voluptas
                        cumque ipsum sed nisi veniam quos! Sint nostrum soluta iste
                        voluptatem, tempora totam!
                      </p>
                    </div>
                    
                                    {/* icon */}
                    <div className="comment-list_icon flex">
                      <div ref={likeRef} onClick={() => handleLike(likeRef)} className="cmt comment-list_icon_like"><i class="fa-solid fa-heart"></i></div>
                      <div className="cmt comment-list_icon_asw"><i class="fa-solid fa-comment-dots"></i></div>
                    </div>
                  </div>
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
