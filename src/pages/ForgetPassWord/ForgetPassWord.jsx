import React, { useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ForgetPassWord.scss";
import CheckOTP from "./CheckOTP";

const ForgetPassWord = () => {
  // Modal forgetPassword
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: (values) => {
      alert("Đã đăng nhập đúng");
    },
  });

  // const formikOTP = useFormik({
  //   initialValues: {
  //     OTP: "",
  //   },
  //   validationSchema: Yup.object({
  //     OTP: Yup.string().required("Không được để trống ô này"),
  //   }),
  //   onSubmit: (values) => {
  //     alert('Đã nhập đúng');
  //   },
  // });

  return (
    <div>
      <Header />
      <Body>
        <div className="container flex flex-col items-center">
          <h1 className="title">Quên mật khẩu</h1>

          {/* form  */}
          <div className="form-forget">
            <p>Vui lòng nhập email</p>
            <form
              className="flex flex-col items-center"
              onSubmit={formik.handleSubmit}
            >
              <input
                style={{ "marginTop": "47.31px" }}
                name="email"
                type="text"
                placeholder="Nhập email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && <div className="error">{formik.errors.email}</div>}
              <button type="submit" onClick={toggleModal} className="Login">
                Khôi phục mật khẩu
              </button>
            </form>
          </div>
        </div>
      </Body>

      {/* modal xác nhận*/}
      {/* {modal && (
        <div className="modal">
          <div className="overlay"></div>
            <div className="modal-content">
              
            </div>
        </div>
      )} */}

      {/* {modal && (<CheckOTP />)} */}
    </div>
  );
};

export default ForgetPassWord;
