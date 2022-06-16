import React from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import MovieNominations from "./MovieNominations/MovieNominations";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Body>
        <MovieNominations />
      </Body>
    </div>
  );
};

export default Home;
