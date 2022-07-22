import Body from "../../Components/Body";
import Header from "../../Components/Header";
import Introduction from "./Introduction/Introduction";
import MenuFilm from "./MenuFilm/MenuFilm";
import "./WatchFilm.scss";
// thiết kế: 1520 x 855
// Thực tế: 1520 x 760

const InfoFilm = () => {
  return (
    <div>
      <Header />
      <Body>
        <div className="container container__info flex gap-x-16">
          <div className="introduction">
            <Introduction />
          </div>
          <div className="menu">
            <div className="menu-list">
              <MenuFilm contentFilm="Phim mới nhất" />
            </div>
            <div className="menu-list">
              <MenuFilm contentFilm="Top phim bộ hot" sort="stars" />
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};
export default InfoFilm;
