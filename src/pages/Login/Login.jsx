import React, { useRef, useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./Login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { loginAPI } from "../../redux/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import ForgetPassWord from "./ForgetPassWord";
import { setToken } from "../../redux/tokenSlice";
import { tokenService } from "../../services";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const accessToken = tokenService.getCookie("accessToken");
  const refreshToken = tokenService.getCookie("refreshToken");

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

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
      const result = await dispatch(
        loginAPI({
          username: formik.values.username,
          password: formik.values.password,
        })
      );
      const data = unwrapResult(result);
      setCookie("accessToken", data.access.token);
      setCookie("refreshToken", data.refresh.token);
      // dispatch(setToken(data));
      console.log(data);
    },
  });

  console.log(accessToken);
  console.log(refreshToken);

  return (
    <div>
      <Header />
      <Body>
        <div className="container flex flex-col items-center">
          <h1 className="title">Đăng nhập</h1>
          {/* form  */}
          <div className="form-login">
            <form
              className="flex flex-col items-center"
              onSubmit={formik.handleSubmit}
            >
              <input
                style={{ marginTop: "47.31px" }}
                type="text"
                placeholder="Usermame"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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
                    className="icon relative"
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
                    className="icon relative"
                    onClick={() => {
                      setEye(!eye);
                    }}
                  >
                    <i className="fa-solid fa-eye-slash"></i>
                  </div>
                </>
              )}
              <p style={{ cursor: "pointer" }}>Quên mật khẩu?</p>
              <button type="submit" className="Login">
                Đăng nhập
              </button>
              <p style={{ margin: "31.1px 0 32.1px 0" }}>
                Chính sách và quy định
              </p>
              <button className="Resgister">Tạo tài khoản mới</button>
            </form>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Login;
