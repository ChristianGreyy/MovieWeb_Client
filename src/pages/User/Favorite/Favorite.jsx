import React from 'react'
import Body from '../../../Components/Body'
import Header from '../../../Components/Header'
import NavBar from '../NavBar/NavBar'
import Items from './Items/Items'
import './Favorite.scss';

const Favorite = () => {
  return (
    <div className='Favorite'>
      <Header />
      <Body>
        <div className="Favorite_container flex justify-between">
          <NavBar />
          <div className="Favorite_container_content">
            <div className="Favorite_container_content_row flex">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>

            <div className="Favorite_container_content_row flex">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>

            <div className="Favorite_container_content_row flex">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>

            <div className="Favorite_container_content_row flex">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>
          </div>
        </div>
      </Body>
    </div>
  )
}

export default Favorite