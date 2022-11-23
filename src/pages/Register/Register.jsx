import React, { useState, useContext } from "react";
import Header from "../../Components/Header";
import Body from "../../Components/Body";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.scss";
import Check from "./Check";
import CheckComple from "./CheckComple";
import { registerAPI } from "../../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import socketContext from "../../contexts/socket.context";

const Register = () => {
  //modal check đăng ký
  const [modal, setModal] = useState(false);
  const [modalResult, setModalResult] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModalResult = () => {
    setModalResult(!modalResult);
  };

  const dispatch = useDispatch();

  const notify = (msg, status) => {
    if (status === "error") {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    onSubmit: async (values) => {
      try {
        const result = await dispatch(
          registerAPI({
            username: formik.values.username,
            email: formik.values.email,
            password: formik.values.password,
            passwordagain: formik.values.passwordagain,
          })
        );

        const data = unwrapResult(result);

        // notify("Bạn đã đăng ký thành công, vùi lòng check email", "success");
        setEmail(values.email);
        setUsername(values.username);
        setPassword(values.password);
        setPasswordagain(values.passwordagain);
        toggleModal();
      } catch (err) {
        notify(err.message, "error");
      }
    },
  });

  // const socketSlice = useSelector((state) => state.socket);
  const socket = useContext(socketContext);

  socket.on("register-success", (values) => {
    setModal(false);
    setModalResult(true);
    formik.values.username = "";
    formik.values.email = "";
    formik.values.password = "";
    formik.values.passwordagain = "";
  });

  return (
    <>
      <ToastContainer />

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
                  value={formik.values.username}
                />
                {formik.errors.username && formik.touched.username ? (
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
                {formik.errors.email && formik.touched.email ? (
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
                    value={formik.values.password}
                  />
                  {!eyePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyePass(!eyePass)}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </div>
                    </>
                  )}
                  {eyePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyePass(!eyePass)}
                      >
                        <i className="fa-solid fa-eye-slash"></i>
                      </div>
                    </>
                  )}
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="item">
                <div className="item__input">
                  <input
                    name="passwordagain"
                    type={eyeRePass ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordagain}
                  />
                  {!eyeRePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => setEyeRePass(!eyeRePass)}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </div>
                    </>
                  )}
                  {eyeRePass && (
                    <>
                      <div
                        className="icon relative"
                        onClick={() => {
                          setEyeRePass(!eyeRePass);
                        }}
                      >
                        <i className="fa-solid fa-eye-slash"></i>
                      </div>
                    </>
                  )}
                </div>
                {formik.errors.passwordagain && formik.touched.passwordagain ? (
                  <p className="error">{formik.errors.passwordagain}</p>
                ) : null}
              </div>

              <p style={{ marginTop: "18.92px", color: "#ffffff61" }}>
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

      {modalResult && <CheckComple toggleModalResult={toggleModalResult} />}

      {/* modal */}
      {modal && (
        <Check
          username={formik.values.username}
          password={formik.values.password}
          passwordagain={formik.values.passwordagain}
          email={formik.values.email}
          setEmail={setEmail}
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
          notify={notify}
        />
      )}
    </>
  );
};

export default Register;
