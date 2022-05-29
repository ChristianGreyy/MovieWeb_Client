import React, { useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ForgetPassWord.scss";
import CheckOTP from "./CheckOTP";
import ChangePassWord from "./ChangePassWord";
import ChangePassWordComple from "./ChangePassWordComple";

const ForgetPassWord = () => {
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
    onSubmit: (values) => {
      setEmail(values.email);
      // console.log(values.email);
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
                style={{ "marginTop": "47.31px" }}
                name="email"
                type="email"
                placeholder="Nhập email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && <div className="error">{formik.errors.email}</div>}
              <button type="submit" onClick={() => {if(formik.errors.email || email===''){
                return;
              } else toggleModal()}} className="Login">
                Khôi phục mật khẩu
              </button>
            </form>
          </div>
        </div>
      </Body>

      {/* modal xác nhận*/}
      {modal && (<CheckOTP email={email} setEmail={setEmail} modal={modal} setModal={setModal} toggleModal={toggleModal}/>)}
    </div>
  );
};

export default ForgetPassWord;