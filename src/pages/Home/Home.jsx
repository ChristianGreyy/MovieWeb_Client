import React, { useState, useEffect } from "react";
import Body from "../../Components/Body";
import Header from "../../Components/Header";
import MenuFilm from "../InfoFilm/MenuFilm/MenuFilm";
import MovieNominations from "./MovieNominations/MovieNominations";
import NewMovie from "./NewMovie/NewMovie";
import "./Home.scss";
import { movieService } from "../../services";
import { useParams } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [moviesIntro, setMoviesIntro] = useState([]);

  const { kind } = useParams();
  useEffect(() => {
    (async () => {
      try {
        let response;
        if (kind) {
          response = await movieService.getMovies(`?kind=${kind}`);
          setMovies(response.data.data.movies);
        } else {
          response = await movieService.getMovies();
          setMoviesIntro(response.data.data.movies);
          setMovies(response.data.data.movies);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [kind]);

  console.log(movies);
  return (
    <div className="Home">
      <Header />
      <Body>
        <MovieNominations movies={moviesIntro} />

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
