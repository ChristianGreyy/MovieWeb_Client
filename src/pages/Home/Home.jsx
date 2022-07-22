import React, { useState, useEffect } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import MenuFilm from "../InfoFilm/MenuFilm/MenuFilm";
import MovieNominations from "./MovieNominations/MovieNominations";
import NewMovie from "./NewMovie/NewMovie";
import "./Home.scss";
import { movieService } from "../../services";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await movieService.getMovies();
      setMovies(response.data.data.movies);
    })();
  }, []);
  return (
    <div className="Home">
      <Header />
      <Body>
        <MovieNominations movies={movies} />

        <div className="Movie-series flex justify-evenly">
          <NewMovie
            movies={movies}
            des="series"
            content="PHIM BỘ MỚI CẬP NHẬT"
          />
          <div className="menu_film_series">
            <MenuFilm contentFilm="Phim sắp chiếu" />
          </div>
        </div>

        <div className="Movie-series flex justify-evenly">
          <NewMovie
            movies={movies}
            des="feature"
            content="PHIM LẺ MỚI CẬP NHẬT"
          />
          <div className="menu_film_series">
            <MenuFilm contentFilm="Phim sắp chiếu" />
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Home;
