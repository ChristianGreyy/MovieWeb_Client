import React, { useRef, useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./Login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const formik = useFormik({
    initialValues: {
      userName: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Không được để trống ô này"),
      passWord: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: (values) => {
      alert("Đã đăng nhập đúng");
    },
  });

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
                style={{ "margin-top": "47.31px" }}
                type="text"
                placeholder="Usermame"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                style={{ "margin-top": "12.167px" }}
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* <div className="icon relative">
                <i class="fa-solid fa-eye"></i>
              </div> */}

              {/* <div className="icon relative">
                <i class="fa-solid fa-eye-slash"></i>
              </div> */}

              

              <p>Quên mật khẩu?</p>
              <button className="Login">Đăng nhập</button>
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
