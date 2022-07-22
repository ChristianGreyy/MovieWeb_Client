import React, { useState } from "react";
import "./NewMovie.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NewMovie = ({ content, movies, des }) => {
  const urlSlice = useSelector((state) => state.url);

  return (
    <div className="new-movie">
      <p>{content}</p>

      <div className="new-movie_container relative flex justify-evenly flex-wrap">
        {movies &&
          movies.map((movie) => {
            if (des == "series") {
              if (movie.episodeNumber > 1) {
                return (
                  <Link
                    style={{ display: "block" }}
                    className="new-movie_container_list  relative"
                    to={`/InfoFilm/${movie._id}`}
                  >
                    <div className="post absolute top-0 bottom-0 left-0 right-0"></div>
                    <div className="avt">
                      <img
                        src={`${urlSlice.urlServer}/${movie.image}`}
                        alt=""
                      />
                    </div>
                    <div className="series absolute">
                      <p>Tập 1 Vietsub</p>
                    </div>
                    <div className="name absolute">
                      <p>
                        {movie.name} <br />{" "}
                        <span style={{ fontWeight: "400" }}>
                          {movie.english_name}(2022)
                        </span>
                      </p>
                    </div>
                  </Link>
                );
              }
            } else {
              if (movie.episodeNumber == 1) {
                return (
                  <Link
                    style={{ display: "block" }}
                    className="new-movie_container_list  relative"
                    to={`/InfoFilm/${movie._id}`}
                  >
                    <div className="post absolute top-0 bottom-0 left-0 right-0"></div>
                    <div className="avt">
                      <img
                        src={`${urlSlice.urlServer}/${movie.image}`}
                        alt=""
                      />
                    </div>
                    <div className="series absolute">
                      <p>Tập 1 Vietsub</p>
                    </div>
                    <div className="name absolute">
                      <p>
                        {movie.name} <br />{" "}
                        <span style={{ fontWeight: "400" }}>
                          {movie.english_name}(2022)
                        </span>
                      </p>
                    </div>
                  </Link>
                );
              }
            }
          })}

        {des == "feature" && (
          <div className="new-movie_container_list relative">
            <div className="post absolute top-0 bottom-0 left-0 right-0"></div>
            <div className="avt">
              <img
                src="https://static.phimdacap.com/poster/jpg/Poster-titanic-titanic-id_1981_1912056273RBV1p.jpg"
                alt=""
              />
            </div>
            <div className="series absolute">
              <p>Tập 1 Vietsub</p>
            </div>
            <div className="name absolute">
              <p>
                Titacnic <br />{" "}
                <span style={{ fontWeight: "400" }}>Titanic(1997)</span>
              </p>
            </div>
          </div>
        )}
        {des == "feature" && (
          <div className="new-movie_container_list relative">
            <div className="post absolute top-0 bottom-0 left-0 right-0"></div>
            <div className="avt">
              <img
                src="https://static.phimdacap.com/poster/jpg/Poster-titanic-titanic-id_1981_1912056273RBV1p.jpg"
                alt=""
              />
            </div>
            <div className="series absolute">
              <p>Tập 1 Vietsub</p>
            </div>
            <div className="name absolute">
              <p>
                Titacnic <br />{" "}
                <span style={{ fontWeight: "400" }}>Titanic(1997)</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewMovie;
