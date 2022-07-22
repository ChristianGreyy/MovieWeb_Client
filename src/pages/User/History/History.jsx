import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import "./History.scss";

const History = () => {
  return (
    <div className="History">
      <Header />

      <Body>
        <div className="History_container flex justify-between">
          <NavBar />
          <div className="History_container_content">
            <div className="icon">
              <i class="fa-solid fa-file-circle-xmark"></i>
            </div>
            <h1>Không có dữ liệu!</h1>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default History;
