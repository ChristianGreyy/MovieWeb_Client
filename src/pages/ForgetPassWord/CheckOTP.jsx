import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import ChangePassWord from "./ChangePassWord";
import "./ForgetPassWord.scss";

const CheckOTP = (props) => {
  const { toggleModal, email, modal, setModal} = props;
  const arr = email.split("");
  for (let i = 3; i < arr.length - 10; i++) {
    arr[i] = "*";
  }
  const email2 = arr.join("");

  const [modalOTP, setModalOTP] = useState(false);

  const modalRef = useRef(null);

  const toggleOTP = () => {
    setModalOTP(!modalOTP);
  }

  const [OTPcode, setOTPcode] = useState('');

  const formik = useFormik({
    initialValues: {
      OTP: ""
    },
    validationSchema: Yup.object({
      OTP: Yup.string().required("Không được để trống ô này"),
    }),
    onSubmit: (values) => {
      setOTPcode(values.OTP);
    },
  });

  return (
    <div>
      <div ref={modalRef} className="modal">
        <div style={{ margin: "162.22px 416px" }} className="modal_container">
          <div className="modal_container_header relative">
            <h1>Xác nhận OTP</h1>
            <div className="icon absolute" onClick={toggleModal}>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <div className="modal_container_body">
            <form onSubmit={formik.handleSubmit} className="form_OTP">
              <div className="Check_OTP">
                <input
                  type="text"
                  placeholder="Nhập mã OTP"
                  name="OTP"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.OTP}
                />
              </div>
              <div className="content_OTP">
                <p>
                  Vui lòng nhập mã xác thực và gửi tới mail
                  <br />
                  {email2}
                </p>
              </div>
              <div className="button_OTP flex justify-around">
                <button type="submit" className="button_OTP_again">
                  Gửi lại
                </button>
                <button type="submit" className="button_OTP_check" onClick={() => {
                  if(formik.errors.OTP ||OTPcode==='') return;
                  else toggleOTP();
                }}>
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalOTP && (<>
        <ChangePassWord modal ={modal} setModal={setModal} modalOTP={modalOTP} setModalOTP={setModalOTP} toggleModal={toggleModal} />
        {modalRef.current.style.display = "none"}
      </>)}
    </div>
  );
};

export default CheckOTP;