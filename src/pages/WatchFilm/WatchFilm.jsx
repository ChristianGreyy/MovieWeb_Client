import React from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import video from './ReactApp.mp4';
import './WatchFilm.scss'
// import ReactPlayer from 'react-player'

const WatchFilm = () => {
  return (
    <div>
      <Header />
      <Body>
        {/* <ReactPlayer url={video}/> */}
        <div className="name">
            <video width='1280px' height='40vh' src={video} typeof='video/mp4' controls></video>
        </div>
      </Body>
    </div>
  );
};

export default WatchFilm;
