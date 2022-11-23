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

  console.log(userSlice);

  return (
    <div className="header fixed">
      <div className="title flex flex-row">
        <Link to="/">
          <div className="title_avatar">
            <img
              src="/logo.png"
              style={{ position: "absolute", top: "-42px" }}
              alt="ảnh"
            />
          </div>
        </Link>

        <div className="title_content flex justify-around">
          <Link to="/live">
            <div className="title_content_icon">
              <i class="fa-solid fa-tv"></i>
            </div>
          </Link>

          <Link to="/Search">
            <div className="title_content_icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </Link>

          {/* {refreshToken && (
            <div className="title_content_bell">
              <i className="fa-solid fa-bell"></i>
            </div>
          )} */}

          <div className="title_content_buy">
            <button>
              <Link to="/transaction">MUA GÓI</Link>
            </button>
          </div>

          {refreshToken && (
            <div className="title_content_user">
              <Link to={`/user/${userSlice.user._id}`}>
                <img
                  src={`${urlSlice.urlServer}${userSlice.user.avatar}`}
                  class="title_content_user-avatar"
                />
              </Link>
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
              <ul className="menu_navbar">
                <li>
                  <Link
                    style={{ width: "100%", height: "100%", display: "block" }}
                    to="/Hành-động"
                  >
                    Hành động
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ width: "100%", height: "100%", display: "block" }}
                    to="/Lãng-mạng"
                  >
                    Lãng mạng
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Phim-hài"
                  >
                    Phim hài
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Cổ-trang"
                  >
                    Cổ trang
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Hoạt-hình"
                  >
                    Hoạt hình
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Chiến-tranh"
                  >
                    Chiến tranh
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Võ-thuật"
                  >
                    Võ thuật
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Phiêu-liêu"
                  >
                    Phiêu liêu
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Viễn-tưởng"
                  >
                    Viễn tưởng
                  </Link>
                </li>
                <li>Hài hước</li>
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
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Hàn-Quốc"
                  >
                    Hàn Quốc
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Âu-Mỹ"
                  >
                    Âu Mỹ
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Việt-Nam"
                  >
                    Việt Nam
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Nhật-Bản"
                  >
                    Nhật Bản
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    to="/Trung-Quốc"
                  >
                    Trung Quốc
                  </Link>
                </li>
                <li>Mỹ</li>
                <li>Việt Nam</li>
                <li>Nhật Bản</li>
              </ul>
            </strong>
          </li>
          <li>
            <strong>
              <Link
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                to="/Phim-bộ"
              >
                Phim bộ
              </Link>
            </strong>
          </li>
          <li>
            <strong>
              {" "}
              <Link
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                to="/Phim-lẻ"
              >
                Phim lẻ
              </Link>
            </strong>
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
