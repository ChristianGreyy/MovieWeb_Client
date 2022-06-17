import React from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import MenuFilm from "../InfoFilm/MenuFilm/MenuFilm";
import MovieNominations from "./MovieNominations/MovieNominations";
import NewMovie from "./NewMovie/NewMovie";
import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Body>
        <MovieNominations />

        <div className="Movie-series flex justify-evenly">
          <NewMovie content='PHIM BỘ MỚI CẬP NHẬT'/>
          <div className="menu_film_series">
            <MenuFilm contentFilm='Phim sắp chiếu'/>
          </div>
        </div>

        <div className="Movie-series flex justify-evenly">
          <NewMovie content='PHIM LẺ MỚI CẬP NHẬT'/>
          <div className="menu_film_series">
            <MenuFilm contentFilm='Phim sắp chiếu'/>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Home;
