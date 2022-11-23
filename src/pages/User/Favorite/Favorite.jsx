import React from "react";
import Body from "../../../Components/Body";
import Header from "../../../Components/Header";
import NavBar from "../NavBar/NavBar";
import Items from "./Items/Items";
import "./Favorite.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorite = () => {
  const userSlice = useSelector((state) => state.user);
  const movies = userSlice.user?.movies;
  return (
    <div className="Favorite">
      <Header />
      <Body>
        <div className="Favorite_container flex justify-around">
          <NavBar />
          <div style={{ width: "68%" }} className="Favorite_container_content">
            <div className="Favorite_container_content_row flex flex-wrap justify-center">
              {movies &&
                movies.map((movie) => {
                  return (
                    <Link to={`/InfoFilm/${movie._id}`}>
                      <Items movie={movie} />;
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Favorite;
