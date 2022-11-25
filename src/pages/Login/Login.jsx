import React, { useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./Login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { loginAPI } from "../../redux/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import ForgetPassWord from "../ForgetPassWord/ForgetPassWord";
import { setToken } from "../../redux/tokenSlice";
import { tokenService } from "../../services";

// import AuthToast from "../../Components/Toast/AuthToast";

const Login = () => {
  const accessToken = tokenService.getCookie("accessToken");
  const refreshToken = tokenService.getCookie("refreshToken");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const notify = (err) => toast.error(err);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Không được để trống ô này"),
      password: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: async (values) => {
      try {
        const result = await dispatch(
          loginAPI({
            username: formik.values.username,
            password: formik.values.password,
          })
        );
        const data = unwrapResult(result);
        tokenService.setCookie(
          "accessToken",
          "bearer " + data.access.token,
          1 * 60 * 1000
        );
        tokenService.setCookie(
          "refreshToken",
          "bearer " + data.refresh.token,
          2 * 24 * 60 * 60 * 1000
        );
        window.location.href = "/";
      } catch (err) {
        console.log(err);
        notify(err.message);
      }
    },
  });

  const handleClickForget = () => {
    navigate("/forget");
  };

  return (
    <div>
      {/* <AuthToast err="sai mat khau" /> */}
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
          <h1 className="title">Đăng nhập</h1>
          {/* form  */}
          <div className="form-login">
            <form
              className="flex flex-col items-center form-login_items"
              onSubmit={formik.handleSubmit}
            >
              <div style={{ marginTop: "47.31px" }} className="item">
                <input
                  style={{ marginTop: "47.31px" }}
                  type="text"
                  placeholder="Usermame"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username && formik.touched.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>
              <div style={{ paddingTop: "18.92px" }} className="item relative">
                <input
                  style={{ marginTop: "12.167px" }}
                  type={eye ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  placeholder="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!eye && (
                  <>
                    <div
                      className="icon absolute"
                      onClick={() => {
                        setEye(!eye);
                      }}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </div>
                  </>
                )}

                {eye && (
                  <>
                    <div
                      className="icon absolute"
                      onClick={() => {
                        setEye(!eye);
                      }}
                    >
                      <i className="fa-solid fa-eye-slash"></i>
                    </div>
                  </>
                )}
                {formik.errors.password && formik.touched.password ? (
                  <div style={{ padding: "10px 0 0 0" }} className="error">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <p
                onClick={handleClickForget}
                style={{ cursor: "pointer", marginTop: "15px" }}
              >
                Quên mật khẩu?
              </p>

              <button type="submit" className="Login">
                Đăng nhập
              </button>
              <div
                className="LoginWithFB"
                style={{ margin: "31.1px 0 32.1px 0" }}
                onClick={() =>
                  (window.location.href = `${process.env.REACT_APP_URL}/api/facebook/login`)
                }
              >
                <div className="LoginWithFB-icon">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="LoginWithFB-des">Đăng nhập bằng Facebook</div>
              </div>
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="Resgister"
              >
                Tạo tài khoản mới
              </button>
            </form>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Login;
