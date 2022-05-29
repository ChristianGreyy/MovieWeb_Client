import React from "react";
import "./Register.scss";
import { registerAPI } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const Check = (props) => {
  const dispatch = useDispatch();
  const { toggleModal, email } = props;
  const arr = email.split("");
  for (let i = 3; i < arr.length - 10; i++) {
    arr[i] = "*";
  }
  const email2 = arr.join("");

  const handleSubmitAgain = async () => {
    const result = await dispatch(
      registerAPI({
        username: props.username,
        email: props.email,
        password: props.password,
        passwordagain: props.passwordagain,
      })
    );
  };

  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_container_header relative">
          <h1>Xác nhận đăng kí</h1>
          <div className="icon absolute" onClick={toggleModal}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </div>

        <div className="modal_container_body">
          <p>
            HTchill vừa gửi email chứa link xác nhận đến địa chỉ email đăng ký
            của bạn là {email2}. Vui lòng kiểm tra email này để lấy link xác
            nhận đăng kí. Nếu bạn chưa nhận được link, hãy bấm và nút Gửi lại ở
            bên dưới.
          </p>
          <button type="button" onClick={handleSubmitAgain} className="again">
            Gửi lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default Check;
