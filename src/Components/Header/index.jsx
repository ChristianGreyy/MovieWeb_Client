import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";
import tokenService from "../../services/token.service";
import { useSelector } from "react-redux";

const Header = () => {
  const userSlice = useSelector((state) => state.user);
  const urlSlice = useSelector((state) => state.url);

  const navigate = useNavigate();
  const refreshToken = tokenService.getCookie("refreshToken");

  // console.log(userSlice.user.avatar);

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

          {refreshToken && (
            <div className="title_content_bell">
              <i className="fa-solid fa-bell"></i>
            </div>
          )}

          <div className="title_content_buy">
            <button>
              <Link to="/transaction">MUA GÓI</Link>
            </button>
          </div>

          {refreshToken && (
            <div className="title_content_user">
              <img
                src={`${urlSlice.urlServer}${userSlice.user.avatar}`}
                class="title_content_user-avatar"
              />
            </div>
          )}
          {!refreshToken && (
            <div className="title_content_login">
              <Link to="/login">Đăng nhập</Link>
            </div>
          )}
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
