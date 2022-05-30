import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import ChangePassWordComple from "./ChangePassWordComple";
import "./ForgetPassWord.scss";
import { resetPWAPI } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const ChangePassWord = (props) => {
  const { toggleModal, email } = props;

  const [modalChangePassWord, setmodalChangPassWord] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const toggleChangPassWord = () => {
    setmodalChangPassWord(!modalChangePassWord);
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newPasswordAgain: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
          "Mật khẩu cần có ít nhất 1 số, 1 chữ, 1 ký tự đặc biệt, và ít nhất là 8 ký tự!"
        )
        .required("Không được để trống ô này!"),
      newPasswordAgain: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không khớp!")
        .required("Không được để trống ô này!"),
    }),
    onSubmit: async (values) => {
      // setPassword(values.newPassword);
      // setPasswordAgain(values.newPasswordAgain);

      try {
        const result = await dispatch(
          resetPWAPI({
            email: email,
            password: formik.values.newPassword,
            passwordagain: formik.values.newPasswordAgain,
          })
        );
        const res = unwrapResult(result);
        console.log(res);
        toggleChangPassWord();
      } catch (err) {
        console.log(err);
      }
    },
  });

  const modalRef = useRef(null);

  return (
    <div>
      <div ref={modalRef} className="modal">
        <div style={{ margin: "118.22px 416px" }} className="modal_container">
          <div className="modal_container_header relative">
            <h1>Tạo mật khẩu mới</h1>
            <div onClick={toggleModal} className="icon absolute">
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <div className="modal_container_body">
            <form onSubmit={formik.handleSubmit} className="form_change">
              <div className="form_change_pass">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Mật khẩu mới"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.newPassword && formik.touched.newPassword ? (
                  <p className="errors_p">{formik.errors.newPassword}</p>
                ) : null}
              </div>
              <div className="form_change_pass-again">
                <input
                  type="password"
                  name="newPasswordAgain"
                  placeholder="Nhập lại mật khẩu mới"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.newPasswordAgain &&
                formik.touched.newPasswordAgain ? (
                  <p className="errors_p">{formik.errors.newPasswordAgain}</p>
                ) : null}
              </div>

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                  padding: "20px 68.875px 29.06px",
                }}
              >
                Xác nhận OTP thành công. Vui lòng nhập mật khẩu cho tài khoản
                của bạn.
              </p>
              <div className="button_check">
                <button type="submit">Xác nhận</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {modalChangePassWord && (
        <>
          <ChangePassWordComple
            modalChangePassWord={modalChangePassWord}
            setmodalChangPassWord={setmodalChangPassWord}
            toggleChangPassWord={toggleChangPassWord}
            toggleModal={toggleModal}
          />
          {(modalRef.current.style.display = "none")}
        </>
      )}
    </div>
  );
};

export default ChangePassWord;
