import React, { useState } from "react";
import Header from "../../../Components/Header";
import Body from "../../../Components/Body/index";
import * as Yup from "yup";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  // const socketSlice = useSelector((state) => state.socket);
  // const accessToken = tokenService.getCookie("accessToken");

  // const amount = url.split("?")[1].split("&")[0].split("=")[1];

  // (async () => {
  //   try {
  //     const result = await dispatch(
  //       response({
  //         amount,
  //       })
  //     );
  //     const res = unwrapResult(result);
  //     console.log(res.url);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })();

  return (
    <div>
      <Header />
      <Body>
        <div className="container__notfound">
          <div className="container__notfound-title">404</div>
          <div className="container__notfound-des_eng">
            This page could not be found
          </div>
          <div className="container__notfound-des_viet">
            Trang này đã bị xóa hoặc liên kết không tồn tại
          </div>
          <div className="container__notfound-btn">
            <Link to="/">Trang chủ</Link>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default NotFound;
