import React from "react";
import Header from "../../Components/Header";
import "./SearchFilm.scss";
import Body from "../../Components/Body";

const SearchFilm = () => {
  return (
    <div className="searchFilm">
      <Header />
      <Body>
        <div className="searchFilm_container">
          <input type="text" placeholder="Tìm kiếm tại đây ..." />

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
                        <div className="searchFilm_container_content_right_body_row_box">
                            Naruto
                        </div>
                    </div>
                    
                    <div className="searchFilm_container_content_right_body_row flex">
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
                        <div className="searchFilm_container_content_right_body_row_box">
                            Naruto
                        </div>
                    </div>

                    <div className="searchFilm_container_content_right_body_row flex">
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
                        <div className="searchFilm_container_content_right_body_row_box">
                            Naruto
                        </div>
                    </div>

                    <div className="searchFilm_container_content_right_body_row flex">
                        <div className="searchFilm_container_content_right_body_row_box">
                            Naruto
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
                            Minion
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
        </div>
      </Body>
    </div>
  );
};

export default SearchFilm;