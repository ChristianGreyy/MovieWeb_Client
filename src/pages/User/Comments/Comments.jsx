import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import "./Comments.scss";
import Modal from "./Modal/Modal";
// import ModalComment from './Modal/ModalComment';

const Comments = () => {
  return (
    <div className="comments">
      <Header />

      <Body>
        <div className="comments_container flex justify-around">
          <NavBar />
          <div style={{"width": "68%", "alignSelf": 'center'}} className="comments_container_content">
            <Modal />
          </div>
          {/* <ModalComment /> */}
        </div>
      </Body>
    </div>
  );
};

export default Comments;
