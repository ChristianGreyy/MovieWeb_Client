import React, { useRef, useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import "./Login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Không được để trống ô này"),
      password: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: (values) => {
      alert("Đã đăng nhập đúng");
    },
  });

  // const navigate = useNavigate();

  // const handleClickForget = () => {
  //   navigate('/forget');
  // }

  return (
    <div>
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
                  name="username"
                  type="text"
                  placeholder="Usermame"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>
              <div style={{'paddingTop': "18.92px"}} className="item">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username ? (
                  <div style={{'padding': "10px 0 0 0"}} className="error">{formik.errors.username}</div>
                ) : null}
              </div>
              {/* <div className="icon relative">
                <i class="fa-solid fa-eye"></i>
              </div> */}

              {/* <div className="icon relative">
                <i class="fa-solid fa-eye-slash"></i>
              </div> */}

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
