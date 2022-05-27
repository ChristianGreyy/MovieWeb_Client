import React, { useState } from "react";
import Header from "../../Components/Header";
import Body from "../../Components/Body";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss";
import Check from "./Check";
import CheckComple from "./CheckComple";

const Register = () => {
  //modal check đăng ký
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passwordagain, setPasswordagain] = useState("");
  const [eyePass, setEyePass] = useState(false);
  const [eyeRePass, setEyeRePass] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordagain: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Username phải trên 5 ký tự!")
        .required("Không được để trống ô này!"),
      email: Yup.string()
        .email("Địa chỉ email này không hợp lệ!")
        .required("Không được để trống ô này!"),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
          "Mật khẩu cần có ít nhất 1 số, 1 chữ, 1 ký tự đặc biệt, và ít nhất là 8 ký tự!"
        )
        .required("Không được để trống ô này!"),
      passwordagain: Yup.string()
        .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp!")
        .required("Không được để trống ô này!"),

    }),
    onSubmit: (values) => {
      alert("Đã đăng nhập đúng");
      // console.log(values.email);
      // setEmail(values.email);
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
              className="flex flex-col items-center form-register_items"
              onSubmit={formik.handleSubmit}
            >
              <div className="item" style={{ paddingTop: "47.31px" }}>
                <input
                  name="username"
                  type="text"
                  placeholder="Nhập usermame"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username ? (
                  <p className="error">{formik.errors.username}</p>
                ) : null}
              </div>
              <div className="item">
                <input
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="item">
                <div className="item__input">
                  <input
                    name="password"
                    type={eyePass ? "text" : "password"}
                    placeholder="Mật khẩu"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {!eyePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyePass(!eyePass)}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </div>
                    </>
                  )}
                  {eyePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyePass(!eyePass)}
                      >
                        <i class="fa-solid fa-eye-slash"></i>
                      </div>
                    </>
                  )}
                </div>
                {formik.errors.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="item">
                <div className="item__input">
                  <input
                    name="passwordagain"
                    type={eyePass ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {!eyeRePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyeRePass(!eyeRePass)}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </div>
                    </>
                  )}
                  {eyeRePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyeRePass(!eyeRePass)}
                      >
                        <i class="fa-solid fa-eye-slash"></i>
                      </div>
                    </>
                  )}
                </div>
                {formik.errors.passwordagain ? (
                  <p className="error">{formik.errors.passwordagain}</p>
                ) : null}
              </div>

              <p style={{ "margin-top": "18.92px" }}>
                Khi bấm vào nút đăng ký, bạn đã đồng ý với
              </p>
              <p style={{ "margin-top": "1px" }}>Chính sách và quy định</p>
              <button type="submit" className="Register" onClick={toggleModal}>

                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </Body>

      {/* modal */}
      {modal && (
        <Check
          email={email}
          setEmail={setEmail}
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
        />
      )}
      {/* {modal && (
        <CheckComple modal={modal} setModal={setModal} toggleModal={toggleModal}/>
      )} */}
    </>
  );
};

export default Register;
