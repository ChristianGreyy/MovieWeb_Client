import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import ChangePassWord from "./ChangePassWord";
import "./ForgetPassWord.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkForgotPWAPI } from "../../redux/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const CheckOTP = (props) => {
  const { toggleModal, email, modal, setModal } = props;
  const arr = email.split("");
  for (let i = 3; i < arr.length - 10; i++) {
    arr[i] = "*";
  }
  const email2 = arr.join("");

  const [modalOTP, setModalOTP] = useState(false);

  const modalRef = useRef(null);

  const toggleOTP = () => {
    setModalOTP(!modalOTP);
  };

  const dispatch = useDispatch();

  const otp = useSelector((state) => state.token.otp);

  const [OTPcode, setOTPcode] = useState("");

  const formik = useFormik({
    initialValues: {
      OTP: "",
    },
    validationSchema: Yup.object({
      OTP: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: async (values) => {
      if (formik.values.OTP !== otp) {
        alert("OTP không hợp lệ");
        return;
      }

      try {
        console.log(email, formik.values.OTP);
        const result = await dispatch(
          checkForgotPWAPI({
            email: email,
            otp: formik.values.OTP,
          })
        );
        const res = unwrapResult(result);
        console.log(res);
        toggleOTP();
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      <div ref={modalRef} className="modal">
        <div style={{ margin: "162.22px 416px" }} className="modal_container">
          <div className="modal_container_header relative">
            <h1>Xác nhận OTP</h1>
            <div className="icon absolute" onClick={toggleModal}>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <div className="modal_container_body">
            <form onSubmit={formik.handleSubmit} className="form_OTP">
              <div className="Check_OTP">
                <input
                  type="text"
                  placeholder="Nhập mã OTP"
                  name="OTP"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.OTP}
                />
              </div>
              <div className="content_OTP">
                <p>
                  Vui lòng nhập mã xác thực và gửi tới mail
                  <br />
                  {email2}
                </p>
              </div>
              <div className="button_OTP flex justify-around">
                <button type="submit" className="button_OTP_again">
                  Gửi lại
                </button>
                <button type="submit" className="button_OTP_check">
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalOTP && (
        <>
          <ChangePassWord
            modal={modal}
            setModal={setModal}
            modalOTP={modalOTP}
            setModalOTP={setModalOTP}
            toggleModal={toggleModal}
            email={email}
          />
          {(modalRef.current.style.display = "none")}
        </>
      )}
    </div>
  );
};

export default CheckOTP;
