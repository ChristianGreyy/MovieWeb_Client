import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> main
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="title flex flex-row">
        <div className="title_avatar"></div>

        <div className="title_content flex justify-around">
<<<<<<< HEAD
          <div className="title_content_search flex">
            <div className="title_content_search_input">
              <input type="text" placeholder="tìm kiếm" />
            </div>
            <div className="title_content_search_icon">
              <i
                style={{ cursor: "pointer" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </div>
=======
          <div className="title_content_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
>>>>>>> main
          </div>

          <div className="title_content_buy">
            <button>
              <strong>MUA GÓI</strong>
            </button>
          </div>

<<<<<<< HEAD
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="title_content_login"
          >
            Đăng nhập
=======
          <div className="title_content_login">
            <strong>Đăng nhập</strong>
>>>>>>> main
          </div>
        </div>
      </div>

      {/* Phần menu */}
      <div className="menu">
        <ul className="flex justify-around">
<<<<<<< HEAD
          <li
            onClick={() => {
              navigate("/");
            }}
            style={{ "margin-left": "227.2px" }}
          >
=======
          <li style={{ marginLeft: "227.2px" }}>
>>>>>>> main
            <strong>Trang chủ</strong>
          </li>
          <li>
            <strong>
              Thể loại
<<<<<<< HEAD
              <i class="fa-solid fa-caret-down"></i>
=======
              <i className="fa-solid fa-caret-down"></i>
>>>>>>> main
            </strong>
          </li>
          <li>
            <strong>
              Quốc gia
<<<<<<< HEAD
              <i class="fa-solid fa-caret-down"></i>
=======
              <i className="fa-solid fa-caret-down"></i>
>>>>>>> main
            </strong>
          </li>
          <li>
            <strong>Phim bộ</strong>
          </li>
          <li>
            <strong>Phim lẻ</strong>
          </li>
<<<<<<< HEAD
          <li style={{ "margin-right": "316.67px" }}>
=======
          <li style={{ marginRight: "316.67px" }}>
>>>>>>> main
            <strong>TV Show</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
