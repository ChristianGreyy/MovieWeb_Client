import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import "./SearchFilm.scss";
import Body from "../../Components/Body";
import { movieService } from "../../services";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchFilm = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const urlSlice = useSelector((state) => state.url);

  useEffect(() => {
    (async () => {
      console.log(value);
      const response = await movieService.getMovies(`?name=${value}`);
      setMovies(() => response.data.data.movies);
    })();
  }, [value]);

  console.log(movies);

  // const handleSearchFilm = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className="searchFilm">
      <Header />
      <Body>
        <div className="searchFilm_container">
          <input
            className="searchFilm_container__search"
            type="text"
            placeholder="Tìm kiếm tại đây ..."
            onKeyUp={(e) => {
              console.log(e.target.value);
              setValue(e.target.value);
            }}
          />
          {value == "" && (
            <div className="searchFilm_container_content flex justify-around">
              <div className="searchFilm_container_content_left">
                <div className="searchFilm_container_content_left_body">
                  <h2>Phim bộ</h2>
                  <p>
                    <span>Hoa ngữ,</span>
                    <span> Hàn Quốc</span>
                    <span>,...</span>
                  </p>
                </div>

                <div className="searchFilm_container_content_left_body">
                  <h2>TiviShow</h2>
                  <p>
                    <span>GameShow,</span>
                    <span> Ai là triệu phú,</span>
                    <span>...</span>
                  </p>
                </div>

                <div className="searchFilm_container_content_left_body">
                  <h2>Anime</h2>
                  <p>
                    <span>Hành động,</span>
                    <span> tình cảm,</span>
                    <span>...</span>
                  </p>
                </div>

                <div className="searchFilm_container_content_left_body">
                  <h2>Phim chiếu rạp</h2>
                  <p>
                    <span>hành động,</span>
                    <span> tâm lý,</span>
                    <span>...</span>
                  </p>
                </div>

                <div className="searchFilm_container_content_left_body">
                  <h2>Phim lẻ</h2>
                  <p>
                    <span>Thái Lan,</span>
                    <span> Việt Nam,</span>
                    <span>...</span>
                  </p>
                </div>
              </div>

              <div className="searchFilm_container_content_right">
                <h1>Tìm kiếm hàng đầu</h1>
                <div className="searchFilm_container_content_right_body">
                  <div className="searchFilm_container_content_right_body_row flex">
                    <div className="searchFilm_container_content_right_body_row_box">
                      Trương Thành Hưng =)))
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Doraemon
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Songoku
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Luffy
                    </div>
                  </div>

                  <div className="searchFilm_container_content_right_body_row flex">
                    <div className="searchFilm_container_content_right_body_row_box">
                      Green Tea
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Sơn Tùng MTP
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                  </div>

                  <div className="searchFilm_container_content_right_body_row flex">
                    <div className="searchFilm_container_content_right_body_row_box">
                      Hoàng Minh Huệ
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                  </div>

                  <div className="searchFilm_container_content_right_body_row flex">
                    <div className="searchFilm_container_content_right_body_row_box">
                      Lại Hoàng Tùng
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Naruto
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Minion
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Minion
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Minion
                    </div>
                  </div>

                  <div className="searchFilm_container_content_right_body_row flex">
                    <div className="searchFilm_container_content_right_body_row_box">
                      Việt Nam
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Minion
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      Minion
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      running man
                    </div>
                    <div className="searchFilm_container_content_right_body_row_box">
                      running man
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {value != "" && (
            <div className="searchFilm_container_result flex">
              {movies &&
                movies.map((movie) => {
                  return (
                    <li
                      className="searchFilm_container_result-item"
                      style={{ display: "block", marginLeft: "5px" }}
                    >
                      <Link to={`/InfoFilm/${movie._id}`}>
                        <img
                          className="searchFilm_container_result-item__img"
                          src={urlSlice.urlServer + movie.image}
                        />
                      </Link>
                      <Link to={`/InfoFilm/${movie._id}`}>
                        <h6 className="searchFilm_container_result-item__name">
                          {movie.name}
                        </h6>
                      </Link>
                    </li>
                  );
                })}
            </div>
          )}
        </div>
      </Body>
    </div>
  );
};

export default SearchFilm;
