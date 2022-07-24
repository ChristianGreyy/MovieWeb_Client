import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import BoxHis from "./BoxHis/BoxHis";
import "./History.scss";

const List = [<BoxHis />, <BoxHis />];

const History = () => {
  return (
    <div className="History">
      <Header />

      <Body>
        <div className="History_container flex justify-between">
          <NavBar />
          <div className="History_container_content">
            {/* <div className="icon">
              <i class="fa-solid fa-file-circle-xmark"></i>
            </div>
            <h1>Không có dữ liệu!</h1> */}
            {/* <BoxHis /> */}
            {List.length > 0 ? (
              List.map((item, index) => (
                <ul key={index}>
                  <li>{item}</li>
                </ul>
              ))
            ) : (
              <>
                <div className="icon">
                  <i class="fa-solid fa-file-circle-xmark"></i>
                </div>
                <h1>Không có dữ liệu!</h1>
              </>
            )}
          </div>
        </div>
      </Body>
    </div>
  );
};

export default History;
