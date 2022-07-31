import React from 'react'
import Body from '../../../Components/Body'
import Header from '../../../Components/Header'
import Items from '../Favorite/Items/Items'
import NavBar from '../NavBar/NavBar'
import './Watching.scss'

const Watching = () => {
  return (
    <div className='Watching'>
      <Header />
      <Body>
        <div className="Watching_container flex justify-around">
          <NavBar/>
          <div style={{"width": '68%'}} className="Watching_container_content">
            <div className="Watching_container_content_row flex">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>

            <div className="Watching_container_content_row flex">
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

export default Watching