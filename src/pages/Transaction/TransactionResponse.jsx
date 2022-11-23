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
import { useNavigate } from "react-router-dom";

const TransactionResponse = () => {
  // const socketSlice = useSelector((state) => state.socket);
  // const accessToken = tokenService.getCookie("accessToken");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const url = window.location.href;
  console.log(url);
  let amount, name_bank;
  try {
    name_bank = url.split("vnp_BankCode=")[1].split("&")[0];
    amount = url.split("?")[1].split("&")[0].split("=")[1];
  } catch (err) {
    navigate("/error/404");
  }

  (async () => {
    try {
      const result = await dispatch(
        response({
          amount,
          name_bank,
        })
      );
      const res = unwrapResult(result);
      console.log(res.url);
    } catch (err) {
      navigate("/error/404");
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
