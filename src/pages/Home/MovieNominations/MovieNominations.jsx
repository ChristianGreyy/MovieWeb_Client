import React from "react";
import "./MovieNominations.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieNominations = ({ movies }) => {
  const urlSlice = useSelector((state) => state.url);
  // return (
  //   <div>
  //     <p className="title-film">PHIM ĐỀ CỬ</p>

  //     <div
  //       id="carouselExampleCaptions"
  //       className="carousel slide relative"
  //       data-bs-ride="carousel"
  //     >
  //       <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
  //         <button
  //           type="button"
  //           data-bs-target="#carouselExampleCaptions"
  //           data-bs-slide-to="0"
  //           className="active hidden"
  //           aria-current="true"
  //           aria-label="Slide 1"
  //         ></button>
  //         <button
  //           type="button"
  //           data-bs-target="#carouselExampleCaptions"
  //           data-bs-slide-to="1"
  //           aria-label="Slide 2"
  //           className="hidden"
  //         ></button>
  //         <button
  //           type="button"
  //           data-bs-target="#carouselExampleCaptions"
  //           data-bs-slide-to="2"
  //           aria-label="Slide 3"
  //           className="hidden"
  //         ></button>
  //       </div>
  //       <div className="carousel-inner relative overflow-hidden">
  //         <div className="carousel-item item-film active relative float-left">
  //           <div className="menu flex justify-around">
  //
  //           </div>
  //         </div>
  //       </div>
  //       <button
  //         className="btn absolute top-0 left-24 bottom-0 flex items-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide="prev"
  //       >
  //         <span
  //           className="carousel-control-prev-icon inline-block bg-no-repeat"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Previous</span>
  //       </button>
  //       <button
  //         className="btn absolute top-0 right-24 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
  //         type="button"
  //         data-bs-target="#carouselExampleCaptions"
  //         data-bs-slide="next"
  //       >
  //         <span
  //           className="carousel-control-next-icon inline-block bg-no-repeat"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Next</span>
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <p className="title-film">PHIM ĐỀ CỬ</p>

      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active hidden"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="hidden"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="hidden"
          ></button>
        </div>
        <div className="carousel-inner relative overflow-hidden">
          <div className="carousel-item item-film active relative float-left">
            <div className="menu flex justify-around">
              {movies &&
                movies.map((movie, index) => {
                  if (index <= 5) {
                    return (
                      <Link
                        className="film-list relative"
                        to={`/InfoFilm/${movie._id}`}
                        key={index}
                      >
                        <div className="post absolute top-0 bottom-0 left-0 right-0"></div>
                        <div className="avt">
                          <img
                            src={`${urlSlice.urlServer}/${movie.image}`}
                            alt=""
                          />
                        </div>
                        <div className="series absolute">
                          {movie.episodeNumber > 1 && <p>Tập 1 Vietsub</p>}
                          {movie.episodeNumber == 1 && <p>Phim mới</p>}
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
                })}
            </div>
          </div>
          <div className="carousel-item item-film relative float-left">
            <div className="menu flex justify-around">
              {movies &&
                movies.map((movie, index) => {
                  if (index <= 5) {
                    return (
                      <Link
                        className="film-list relative"
                        to={`/InfoFilm/${movie._id}`}
                        key={index}
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
                })}
            </div>
          </div>
          <div className="carousel-item relative item-film float-left">
            <div className="menu flex justify-around">
              {movies &&
                movies.map((movie, index) => {
                  if (index <= 5) {
                    return (
                      <Link
                        key={index}
                        className="film-list relative"
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
                })}
            </div>
          </div>
        </div>
        <button
          className="btn absolute top-0 left-24 bottom-0 flex items-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span> */}
          <i className="fa-solid fa-angle-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="btn absolute top-0 right-24 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <i className="fa-solid fa-angle-right"></i>
          {/* <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span> */}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MovieNominations;
