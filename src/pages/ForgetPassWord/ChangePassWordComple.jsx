import React from "react";
import "./ForgetPassWord.scss";
import { useNavigate } from "react-router-dom";

const ChangePassWordComple = (props) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const { toggleModal, toggleChangPassWord } = props;
  return (
    <div className="modal">
      <div className="modal_container" style={{ margin: "212.22px 380px" }}>
        <div className="modal_container_header relative">
          <h1>Thông báo</h1>
          <div className="icon absolute" onClick={toggleModal}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
        </div>

        <div className="modal_container_body">
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Đổi mật khẩu thành công
          </p>
          <button
            style={{
              width: "275.5px",
              height: "54.07px",
              margin: "0 259.67px 33.12px 250px",
            }}
            type="submit"
            className="again"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassWordComple;
