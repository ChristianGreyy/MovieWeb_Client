import React from "react";
import "./Box.scss";

const Box = ({ icon, title, content }) => {
  return (
    <div className="Box flex">
      <div className="Box_icon">
        <i className={`${icon}`}></i>
      </div>

      <div className="Box_content">
        <h1>{title}</h1>
        <div className="content">{content}</div>
        {/* <div className="content">
          <input />
        </div> */}
      </div>
    </div>
  );
};

export default Box;
