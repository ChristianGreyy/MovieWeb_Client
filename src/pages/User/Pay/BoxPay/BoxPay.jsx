import React from "react";
import "./BoxPay.scss";
import { useDispatch, useSelector } from "react-redux";

const BoxPay = () => {
  const userSlice = useSelector((state) => state.user);

  return (
    <div className="BoxPay">
      <div className="BoxPay_info flex justify-between">
        <h2>UserName: </h2>
        <h2>{userSlice.user.username}</h2>
      </div>

      <div className="BoxPay_info flex justify-between">
        <h2>ID: </h2>
        <h2>{userSlice.user._id}</h2>
      </div>

      <div className="BoxPay_info flex justify-between">
        <h2>Số tài khoản: </h2>
        <h2>223141313132</h2>
      </div>

      <div className="BoxPay_info flex justify-between">
        <h2>Tên ngân hàng: </h2>
        <h2>Vietcombank</h2>
      </div>
    </div>
  );
};

export default BoxPay;
