import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import "./Account.scss";
import Box from "./Box/Box";

const Account = () => {
  return (
    <div className="Account">
      <Header />
      <Body>
        <div className="Account_container flex justify-between">
          <NavBar />
          <div className="Account_container_content">
            {/* header */}
            <div className="Account_container_content_header flex justify-evenly">
              <div className="Account_container_content_header_title">
                <div style={{"marginLeft": "19%"}} className="Account_container_content_header_title_img"></div>
                <div className="Account_container_content_header_title_name">
                  <h1>LaiTungcute</h1>
                  <h3>ID: 22222222</h3>
                </div>
              </div>
              <div className="Account_container_content_header_setting flex">
                <i class="fa-solid fa-pen-to-square"></i>
                <h1>Sửa thông tin</h1>
              </div>
            </div>

            {/* body */}
            <div className="Account_container_content_body">
              <div className="Account_container_content_body_row flex justify-between">
                <Box icon = 'fa-solid fa-user' title='Username' content='Laitungcute'/>
                <Box icon = 'fa-solid fa-user' title='Họ tên' content='Lại Hoàng Tùng'/>
                <Box icon = 'fa-solid fa-id-badge' title='ID' content='22222222'/>
              </div>

              <div className="Account_container_content_body_row flex justify-between">
                <Box icon = 'fa-solid fa-phone' title='Số điện thoại' content='0932230873'/>
                <Box icon = 'fa-solid fa-envelope' title='Email' content='(Chưa cập nhật)'/>
                <Box icon = 'fa-solid fa-user-group' title='Giới tính' content='Nam'/>
              </div>

              <div className="Account_container_content_body_row flex justify-between">
                <Box icon = 'fa-solid fa-location-dot' title='Địa chỉ' content='(Chưa cập nhật)'/>
                <Box icon = 'fa-solid fa-calendar' title='Ngày sinh' content='(Chưa cập nhật)'/>
                <Box icon = 'fa-solid fa-key' title='<ID>' content='**********'/>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Account;
