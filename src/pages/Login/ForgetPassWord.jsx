import React from 'react';
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.scss";

const ForgetPassWord = () => {
    const formik = useFormik({
        initialValues: {
          email:''
        },
        validationSchema: Yup.object({
          email: Yup.string().required("Không được để trống ô này")
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
          <h1 className="title">Quên mật khẩu</h1>

          {/* form  */}
          <div className="form-forget">
              <p>Vui lòng nhập email</p>
            <form
              className="flex flex-col items-center"
              onSubmit={formik.handleSubmit}
            >
              <input
                style={{ "margin-top": "47.31px" }}
                type="text"
                placeholder="Nhập email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button type="submit" className="Login">Khôi phục mật khẩu</button>
            </form>
          </div>
        </div>
      </Body>
    </div>
  )
}

export default ForgetPassWord