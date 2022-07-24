import React, { useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";

import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Transaction.scss";
import { createPaymentURL } from "../../redux/transaction/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

// import AuthToast from "../../Components/Toast/AuthToast";

const Transaction = () => {
  const notify = (err) => toast.error(err);

  const [bankCode, setBankCode] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountText, setAmountText] = useState("0");
  const [month, setMonth] = useState("0");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSlice = useSelector((state) => state.user);

  const onSubmit = async () => {
    try {
      const result = await dispatch(
        createPaymentURL({
          amount,
          bankCode,
        })
      );
      const res = unwrapResult(result);
      console.log(res.url);
      window.location = res.url;
    } catch (err) {
      console.log(err);
      notify(err.message);
    }
  };

  const handleChangeTop = (price) => {
    if (price.search("66.000") != -1) {
      setAmount(66000);
      setMonth("1 tháng");
      setAmountText("66.000");
    } else if (price.search("396.000") != -1) {
      setAmount(396000);
      setMonth("6 tháng");
      setAmountText("396.000");
    } else if (price.search("792.000") != -1) {
      setAmount(792000);
      setMonth("12 tháng");
      setAmountText("792.000");
    }
  };

  const handleChangeBottom = (des) => {
    if (des.search("NCB") !== -1) {
      setBankCode("NCB");
    } else if (des.search("Exim Bank") !== -1) {
      setBankCode("EXIMBANK");
    } else if (des.search("Visa") !== -1) {
      setBankCode("VISA");
    }
  };

  const liLeftTop = (month, price) => {
    return (
      <li>
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id={month}
            onChange={() => {
              handleChangeTop(price);
            }}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor={month}
          >
            {month}
          </label>
        </div>
        <h4 className="price">{price} </h4>
      </li>
    );
  };

  const liLeftBottom = (img, des) => {
    return (
      <li>
        <div className="form-check">
          <img src={img} />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor={des}
          >
            {des}
          </label>
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id={des}
            onChange={() => {
              handleChangeBottom(des);
            }}
          />
        </div>
      </li>
    );
  };

  const liRight = (key, value) => {
    return (
      <li>
        <h4>{key}</h4>
        <div>{value}</div>
      </li>
    );
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Body>
        <div className="container__transaction">
          <h2>Thanh toán</h2>
          <div className="form-transaction">
            <div className="form-transaction__left">
              <div className="form-transaction__left-top">
                <form>
                  <h4>Gói MAX ưu đãi</h4>
                  <ul>
                    {liLeftTop("1 tháng", "66.000VNĐ")}
                    {liLeftTop("6 tháng", "396.000VNĐ")}
                    {liLeftTop("12 tháng", "792.000VNĐ")}
                  </ul>
                </form>
              </div>
              <div className="form-transaction__left-bottom">
                <form>
                  <h4>Gói MAX ưu đãi</h4>
                  <ul>
                    {liLeftBottom("/transactions/ncb.jpeg", "Ngân hàng NCB")}
                    {liLeftBottom(
                      "/transactions/eximbank.png",
                      "Ngân hàng Exim Bank"
                    )}
                    {liLeftBottom(
                      "/transactions/visa.png",
                      "Thẻ ngân hàng quốc tế Visa"
                    )}
                  </ul>
                </form>
              </div>
            </div>
            <div className="form-transaction__right">
              <h4>Thông tin thanh toán</h4>
              <ul>
                {liRight("Username: ", userSlice.user.username)}
                {liRight("Tên ngân hàng: ", bankCode)}
                {liRight("Gói dịch vụ mua: ", "Gói MAX")}
                {liRight("Giá gói: ", amountText + " VNĐ")}
                {liRight("Loại gói dịch vụ: ", month)}
                <div
                  style={{
                    borderBottom: "1px sollid white",
                    height: "1px",
                    margin: "30px 0",
                    background: "white",
                  }}
                ></div>
                {liRight("Số tiền phải thanh toán: ", amountText + " VNĐ")}
              </ul>
              <div className="button">
                <button onClick={onSubmit}>Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Transaction;
