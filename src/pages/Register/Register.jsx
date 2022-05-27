import React, { useState } from "react";
import Header from "../../Components/Header";
import Body from "../../Components/Body";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      passWord: "",
      confirmPassWord: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Không được để trống ô này"),
      email: Yup.string().required("Không được để trống ô này"),
      passWord: Yup.string().required("Không được để trống ô này"),
      confirmPassWord: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: (values) => {
      alert("Đã đăng nhập đúng");
    },
  });

  return (
    <>
      {/* weight: 1520
      height: 730 */}

      {/* Thiết kế
      weight: 1920
      height: 1080 */}
      <Header />

      <Body>
        <div className="container flex flex-col items-center">
          <h1 className="title">Đăng ký tài khoản</h1>

          {/* form  */}
          <div className="form-register">
            <form
              className="flex flex-col items-center"
              onSubmit={formik.handleSubmit}
            >
              <input
                style={{ marginTop: "47.31px" }}
                type="text"
                placeholder="Nhập usermame"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                style={{ marginTop: "18.92px" }}
                type="email"
                placeholder="Nhập email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                style={{ marginTop: "18.92px" }}
                type="password"
                placeholder="Mật khẩu"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                style={{ marginTop: "18.92px" }}
                type="password"
                placeholder="Nhập lại mật khẩu"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* <div className="icon relative">
                <i class="fa-solid fa-eye"></i>
              </div> */}

              {/* <div className="icon relative">
                <i class="fa-solid fa-eye-slash"></i>
              </div> */}

              <p style={{ marginTop: "18.92px" }}>
                Khi bấm vào nút đăng ký, bạn đã đồng ý với
              </p>
              <p style={{ marginTop: "1px" }}>Chính sách và quy định</p>
              <button type="submit" className="Register">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </Body>
    </>
  );
};

export default Register;
