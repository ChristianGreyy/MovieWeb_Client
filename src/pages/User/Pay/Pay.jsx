import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import BoxPay from "./BoxPay/BoxPay";
import "./Pay.scss";

const Pay = () => {
  return (
    <div className="Pay">
      <Header />

      <Body>
        <div className="Pay_container flex justify-around">
          <NavBar />
          <div style={{"width": '68%'}} className="Pay_container_content">
            {/* <div className="icon"><i class="fa-solid fa-file-circle-xmark"></i></div>
            <h1>Không có dữ liệu!</h1> */}

            <BoxPay />
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Pay;
