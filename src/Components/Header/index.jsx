import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="title flex flex-row">
        <div className="title_avatar">
          <Link to="/" style={{ width: "100%" }}>
            <img src="/logo.png" style={{ width: "100%" }} />
          </Link>
        </div>

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
            </strong>
          </li>
          <li>
            <strong>
              Quốc gia
              <i
                style={{ marginLeft: "6px" }}
                className="fa-solid fa-caret-down"
              ></i>
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
