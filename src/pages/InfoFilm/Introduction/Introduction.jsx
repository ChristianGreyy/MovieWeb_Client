import React from "react";
import "./Introduction.scss";

const Introduction = () => {
  // Thiết kế: 1520 x 885
  //
  return (
    <div className="container-introduct">
      <div className="header-film flex gap-x-5">
        <div className="film">
          <div className="avatar-film"></div>

          <div className="watch">
            <button>XEM PHIM</button>
          </div>
        </div>

        <div className="content-film">
          <h1>Tình yêu từ 0 đến 1</h1>
          <p>Fall in love(2002)</p>

          <ul>
            <li style={{ marginTop: "18.66px" }}>Thể loại: tình cảm</li>
            <li>Trạng thái: Tập 7 vietsub</li>
            <li>Sắp chiếu: Tập 8 vietsub</li>
            <li>Đạo diễn: Updating</li>
            <li>Diễn viên: Trương Thành Hưng,...</li>
          </ul>

          <div className="evaluate">
            <div className="star flex flex-row-reverse">
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
              <input type="radio" name='star' />
            </div>

            <p style={{fontSize: '18px', fontWeight: '400', textAlign: 'center', paddingBottom: '12px'}}>(9.5 điểm / 507 lượt)</p>
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
