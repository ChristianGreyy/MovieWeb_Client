import React, { useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ForgetPassWord.scss";
import { forgotPWAPI } from "../../redux/auth/authSlice";
import CheckOTP from "./CheckOTP";
import ChangePassWord from "./ChangePassWord";
import ChangePassWordComple from "./ChangePassWordComple";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { setToken } from "../../redux/tokenSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPassWord = () => {
  const dispatch = useDispatch();
  const notify = (msg, status) => {
    if (status === "error") {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
  };

  // Modal forgetPassword
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: async (values) => {
      try {
        const result = await dispatch(
          forgotPWAPI({
            email: formik.values.email,
          })
        );
        const res = unwrapResult(result);
        console.log(res.data.emailToken);
        notify("Mã OTP đã được gửi, vui lòng kiểm tra email", "success");
        dispatch(setToken(res.data.emailToken));
        toggleModal();
      } catch (err) {
        notify(err.message, "error");
        console.log(err);
      }
    },
  });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                style={{ marginTop: "47.31px" }}
                name="email"
                type="email"
                placeholder="Nhập email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
              <button
                type="submit"
                // onClick={() => {
                //   console.log("ok");
                //   if (formik.errors.email || email === "") {
                //     console.log("error");
                //     return;
                //   } else toggleModal();
                // }}
                className="Login"
              >
                Khôi phục mật khẩu
              </button>
            </form>
          </div>
        </div>
      </Body>

      {/* modal xác nhận*/}
      {modal && (
        <CheckOTP
          email={formik.values.email}
          setEmail={setEmail}
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default ForgetPassWord;
