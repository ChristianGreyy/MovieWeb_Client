import React from 'react'
import './MenuFilm.scss'

const MenuContent = () => {
  return (
    <div className="menu-film flex">
      <div className='avatar'></div>
      <div className="content-menu">
        <p className='title'>Tình yêu từ 0 đến 1</p>
        <br /> <p className='content-subName'>Fall in love(2022)</p>
      </div>
    </div>
  )
}

const film = [
  <MenuContent />,
  <MenuContent />,
  <MenuContent />,
  <MenuContent />,
  <MenuContent />,
  <MenuContent />,
  <MenuContent />,
  <MenuContent />,
  <MenuContent />
]

const MenuFilm = () => {
  return (
    <div className='container-menu'>
      <div className="container-menu_main">
        <header className='container-menu_main_header'>
          <h1>Phim sắp chiếu</h1>
        </header>

        <div className="container-menu_main_scroolbar">
          {film && film.map(item => (
            <ul>
              <li key={item}>{item}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuFilm;