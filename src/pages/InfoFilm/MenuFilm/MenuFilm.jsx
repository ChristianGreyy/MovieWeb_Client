import React, { useState, useEffect } from "react";
import "./MenuFilm.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuContent = ({ name, english_name, image }) => {
  return (
    <div className="menu-film flex">
      <div className="avatar">
        <img
          style={{ width: "100%", height: "100%" }}
          src={`${process.env.REACT_APP_URL}/` + image}
        />
      </div>
      <div className="content-menu">
        <p className="title-menu">{name}</p>
        <p className="content-subName">{english_name}</p>
      </div>
    </div>
  );
};

const MenuFilm = ({ contentFilm, sort }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/api/movie?sort=-${sort}&limit=5`
      );
      // console.log(res.data.data.movies);
      setMovies(res.data.data.movies);
    })();
    console.log(movies);
  }, []);

  return (
    <div className="container-menu">
      <div className="container-menu_main">
        <header className="container-menu_main_header">
          <h1>{contentFilm}</h1>
        </header>

        <div className="container-menu_main_scroolbar">
          {movies &&
            movies.map((item, index) => (
              <ul>
                <li key={index}>
                  <Link to={"/InfoFilm/" + item._id}>
                    <MenuContent
                      name={item.name}
                      english_name={item.english_name}
                      image={item.image}
                    />
                  </Link>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilm;
