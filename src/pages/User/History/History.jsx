import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import BoxHis from "./BoxHis/BoxHis";
import { useDispatch, useSelector } from "react-redux";
import "./History.scss";

const History = () => {
  const userSlice = useSelector((state) => state.user);
  const transactions = userSlice.user?.transaction;
  console.log(transactions);
  return (
    <div className="History">
      <Header />

      <Body>
        <div className="History_container flex justify-around">
          <NavBar />
          <div style={{ width: "68%" }} className="History_container_content">
            {/* <div className="icon">
              <i class="fa-solid fa-file-circle-xmark"></i>
            </div>
            <h1>Không có dữ liệu!</h1> */}
            {/* <BoxHis /> */}
            {transactions && transactions.length > 0 ? (
              transactions.map((item, index) => (
                <ul key={index}>
                  <li>
                    <BoxHis
                      username={userSlice.user.username}
                      bank_name={item.name_bank}
                      service_package={item.service_package}
                      money={item.money / 10 + "đ"}
                      kind_package={item.kind_package}
                    />
                  </li>
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
