import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header fixed">
      <div className="title flex flex-row">
        <Link to="/">
          <div className="title_avatar">
            <img src="/logo.png" style={{ width: "100%", height:'100%' }} alt="ảnh"/>
          </div>
        </Link>

        <div className="title_content flex justify-around">
          <div className="title_content_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="title_content_buy">
            <button>
              <strong>
                <Link to="/transaction" style={{ width: "100%" }}>
                  MUA GÓI
                </Link>
              </strong>
            </button>
          </div>

          <div
            onClick={() => {
              navigate("/login");
            }}
            className="title_content_login"
          >
            <strong>Đăng nhập</strong>
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
              <i
                style={{ marginLeft: "6px" }}
                className="fa-solid fa-caret-down"
              ></i>

              <ul className="menu_navbar">
                <li>Phim hành động</li>
                <li>Phim ngôn tình</li>
                <li>Phim kinh dị</li>
              </ul>
            </strong>
          </li>
          <li>
            <strong>
              Quốc gia
              <i
                style={{ marginLeft: "6px" }}
                className="fa-solid fa-caret-down"
              ></i>

              <ul className="menu_navbar">
                <li>Hàn Quốc</li>
                <li>Mỹ</li>
                <li>Việt Nam</li>
                <li>Nhật Bản</li>
              </ul>
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