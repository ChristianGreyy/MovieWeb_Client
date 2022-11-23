import React, { useRef } from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const container = [
  {
    icon: "fa-solid fa-user-pen",
    content: "Tài khoản",
    rout: "/User/1",
    color: "#F25624",
  },
  {
    icon: "fa-solid fa-wallet",
    content: "Quản lý thẻ thanh toán",
    rout: "/User/Pay",
    color: "#fff",
  },
  {
    icon: "fa-solid fa-heart",
    content: "Yêu thích",
    rout: "/User/Favorite",
    color: "#fff",
  },
  {
    icon: "fa-solid fa-clock",
    content: "Đang xem",
    rout: "/User/Watching",
    color: "#fff",
  },
  {
    icon: "fa-solid fa-clock-rotate-left",
    content: "Lịch sử giao dịch",
    rout: "/User/History",
    color: "#fff",
  },
  {
    icon: "fa-solid fa-gear",
    content: "Cài đặt",
    rout: "/User/Setting",
    color: "#fff",
  },
  {
    icon: "fa-solid fa-right-from-bracket",
    content: "Đăng xuất",
    rout: "/",
    color: "#fff",
  },
  {
    icon: "fa-solid fa-circle-exclamation",
    content: "Đóng góp ý kiến",
    rout: "/User/Comments",
    color: "#fff",
  },
];

const NavBar = () => {
  const containerRef = useRef();
  const navigate = useNavigate();
  const userSlice = useSelector((state) => state.user);

  const handleClick = (id) => {
    const newArr = [...container];
    newArr &&
      newArr.map((item, index) => {
        if (index === id) {
          navigate(item.rout);
          item.color = "#F25624";
        } else {
          item.color = "#fff";
        }
      });
  };

  return (
    <div className="NavBar_container">
      <div className="User">
        <div className="User_container">
          <h1>Tài khoản</h1>
        </div>
      </div>

      <div className="NavBar">
        <div className="NavBar_title flex justify-around">
          <h1 className="NavBar_title_name">{userSlice.user.username}</h1>
          <div className="NavBar_title_icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
        <div className="NavBar_point flex justify-evenly">
          <p
            style={{
              paddingRight: "16px",
              borderRight: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            T-point <br />
            <span style={{ color: "#F34A14" }}>30</span>
          </p>
          <p>
            Hạng thẻ <br />{" "}
            <span
              style={{
                padding: "2px 5px",
                background: "#20BB1D",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              Green
            </span>
          </p>
        </div>

        {container.length > 0 &&
          container.map((item, index) => (
            <ul key={index}>
              <li>
                <div
                  style={{ color: `${item.color}` }}
                  ref={containerRef}
                  onClick={() => {
                    if (index == 6) {
                      document.cookie =
                        "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                      console.log(index);
                      window.location.href = "/";
                    } else {
                      handleClick(index);
                    }
                  }}
                  className="NavBar_main NavBar_Account flex"
                >
                  <div className="NavBar_main_icon">
                    <i class={`${item.icon}`}></i>
                  </div>
                  <p>{item.content}</p>
                </div>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
