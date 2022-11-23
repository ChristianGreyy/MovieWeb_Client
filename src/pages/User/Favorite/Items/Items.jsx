import React from "react";
import "./items.scss";
import { useSelector } from "react-redux";

const Items = ({ movie }) => {
  const urlSlice = useSelector((state) => state.url);

  return (
    <div className="item-movie_container_list relative">
      <div className="post absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="avt">
        <img src={`${urlSlice.urlServer}/${movie.image}`} alt="" />
      </div>
      <div className="series absolute">
        <p>
          {movie.episodeNumber > 1 && <p>Tập 1 Vietsub</p>}
          {movie.episodeNumber == 1 && <p>Phim mới</p>}
        </p>
      </div>
      <div className="name absolute">
        <p>
          {movie.name} <br />{" "}
          <span style={{ fontWeight: "400" }}>{movie.english_name}(2021)</span>
        </p>
      </div>
    </div>
  );
};

export default Items;
