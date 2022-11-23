import React, { useState, useEffect } from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import "./Account.scss";
import Box from "./Box/Box";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../redux/user/user";
import { unwrapResult } from "@reduxjs/toolkit";

const Account = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const urlSlice = useSelector((state) => state.url);

  useEffect(() => {
    (async () => {
      try {
        const result = await dispatch(getUserById(userId));
        const data = unwrapResult(result);
        console.log(data);
        setUser(data.data.data.user);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="Account">
      <Header />
      <Body>
        <div className="Account_container flex justify-around">
          <NavBar />
          <div style={{ width: "68%" }} className="Account_container_content">
            {/* header */}
            <div className="Account_container_content_header flex flex-col align-center">
              <div className="Account_container_content_header_title flex flex-col items-center	">
                <div className="Account_container_content_header_title_img">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                    src={user && urlSlice.urlServer.concat(user.avatar)}
                  />
                </div>
                <div className="Account_container_content_header_title_name">
                  <h1>{user && user.username}</h1>
                  <h3>ID: {user && user._id}</h3>
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
                <Box
                  icon="fa-solid fa-user"
                  title="Username"
                  content={user && user.username}
                />
                <Box
                  icon="fa-solid fa-user"
                  title="Họ tên"
                  content={user && user.username}
                />
                <Box
                  icon="fa-solid fa-id-badge"
                  title="ID"
                  content={user && user._id}
                />
              </div>

              <div className="Account_container_content_body_row flex justify-between">
                <Box
                  icon="fa-solid fa-phone"
                  title="Số điện thoại"
                  content="(Chưa cập nhật)"
                />
                <Box
                  icon="fa-solid fa-envelope"
                  title="Email"
                  content={
                    user && user?.email?.length > 21
                      ? user?.email.slice(0, 18) + "..."
                      : user?.email
                  }
                />
                <Box
                  icon="fa-solid fa-user-group"
                  title="Giới tính"
                  content="(Chưa cập nhật)"
                />
              </div>

              <div className="Account_container_content_body_row flex justify-between">
                <Box
                  icon="fa-solid fa-location-dot"
                  title="Địa chỉ"
                  content="(Chưa cập nhật)"
                />
                <Box
                  icon="fa-solid fa-calendar"
                  title="Ngày sinh"
                  content="(Chưa cập nhật)"
                />
                <Box icon="fa-solid fa-key" title="<ID>" content="**********" />
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Account;
