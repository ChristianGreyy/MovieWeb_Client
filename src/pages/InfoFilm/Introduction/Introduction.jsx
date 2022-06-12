import React, { useEffect, useState } from "react";
import "./Introduction.scss";
import axios from "axios";
import { movieService } from "../../../services";
import { useParams } from "react-router-dom";

const Introduction = () => {
  // Thiết kế: 1520 x 885
  //
  const [movie, setMovie] = useState([]);

  let { movieId } = useParams();

  // const movieId = "62a5fd2b30383c765af36bd4";

  useEffect(() => {
    const getMovie = (async () => {
      const response = await movieService.getMovieById(movieId);
      setMovie(response.data.data.movie);
    })();
  }, []);

  // console.log(movie.user_stars.length);

  return (
    <div className="container-introduct">
      <div
        className="header-film flex gap-x-5"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="film">
          <div className="avatar-film">
            <img
              style={{ width: "100%", height: "100%" }}
              src={movie && "http://localhost:8080/" + movie.image}
            />
          </div>

          <div className="watch">
            <button>XEM PHIM</button>
          </div>
        </div>

        <div className="content-film">
          <h1>{movie && movie.name}</h1>
          <p>{movie && movie.english_name}(2002)</p>

          <ul>
            <li style={{ marginTop: "18.66px" }}>Thể loại: tình cảm</li>
            <li>Trạng thái: Tập 7 vietsub</li>
            <li>Quốc gia: {movie && movie.original}</li>
            <li>Chất lượng: Bản đẹp</li>
            <li>Độ phân giải: Full HD</li>
            <li>Lượt xem: {movie && movie.views}</li>
          </ul>

          <div className="evaluate">
            <div className="star flex flex-row-reverse">
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
              <input type="radio" name="star" />
            </div>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                textAlign: "center",
                paddingBottom: "12px",
              }}
            >
              ({movie && movie.stars} điểm /{" "}
              {movie?.user_stars?.length && movie.user_stars.length} lượt)
            </p>
          </div>

          <div className="start">
            <p>Vietsub 20h thứ 3,5 hàng tuần trên HTchill.Net</p>
          </div>
        </div>
      </div>

      <div className="footer flex">
        <p>V.I.P 1:</p>
        <div className="series flex flex-row-reverse">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>11</button>
          <button>12</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
