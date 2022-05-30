import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="title flex flex-row">
        <div className="title_avatar"></div>

        <div className="title_content flex justify-around">
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
          </div>

          <div className="title_content_buy">
            <button>
              <strong>MUA GÓI</strong>
            </button>
          </div>

          <div
            onClick={() => {
              navigate("/login");
            }}
            className="title_content_login"
          >
            Đăng nhập
          </div>
        </div>
      </div>

      {/* Phần menu */}
      <div className="menu">
        <ul className="flex justify-around">
          <li
            onClick={() => {
              navigate("/");
            }}
            style={{ marginLeft: "227.2px" }}
          >
            <strong>Trang chủ</strong>
          </li>
          <li>
            <strong>
              Thể loại
              <i className="fa-solid fa-caret-down"></i>
              <i className="fa-solid fa-caret-down"></i>
              <i className="fa-solid fa-caret-down"></i>
            </strong>
          </li>
          <li>
            <strong>Phim bộ</strong>
          </li>
          <li>
            <strong>Phim lẻ</strong>
          </li>
          <li style={{ marginRight: "316.67px" }}>
            <strong>TV Show</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
