import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import Items from "../Favorite/Items/Items";
import NavBar from "../NavBar/NavBar";
import "./Watching.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Watching = () => {
  const userSlice = useSelector((state) => state.user);
  const movies = userSlice.user?.movies;
  return (
    <div className="Watching">
      <Header />
      <Body>
        <div className="Watching_container flex justify-around">
          <NavBar />
          <div style={{ width: "68%" }} className="Setting_container_body">
            <div className="Setting_container_body_icon">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <h1>Chức năng đang trong quá trình cập nhật...</h1>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Watching;
