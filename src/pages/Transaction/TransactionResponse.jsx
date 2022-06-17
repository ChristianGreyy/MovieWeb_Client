import React, { useState } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import * as Yup from "yup";
import "./TransactionResponse.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import tokenService from "../../services/token.service";
import { response } from "../../redux/transaction/transactionSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const TransactionResponse = () => {
  // const socketSlice = useSelector((state) => state.socket);
  // const accessToken = tokenService.getCookie("accessToken");
  const dispatch = useDispatch();

  const url = window.location.href;
  const amount = url.split("?")[1].split("&")[0].split("=")[1];

  (async () => {
    try {
      const result = await dispatch(
        response({
          amount,
        })
      );
      const res = unwrapResult(result);
      console.log(res.url);
    } catch (err) {
      console.log(err);
    }
  })();

  return (
    <div>
      <Header />
      <Body>
        <div className="container__transaction-response">
          <div className="transaction__table">
            <div className="transaction__icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="transaction__status">Thanh toán thành công</div>
            <div className="transaction__des">
              Chúc mừng quý khách dã nạp vip thành công
            </div>
            <div className="transaction__btn">
              <Link to="/transaction">Quay về trang giao dịch</Link>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default TransactionResponse;
