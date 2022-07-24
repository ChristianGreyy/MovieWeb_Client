import React from 'react'
import Body from '../../../Components/Body';
import Header from "../../../Components/Header";
import NavBar from '../NavBar/NavBar';
import './Setting.scss'

const Setting = () => {
  return (
    <div className='Setting'>
        <Header />
        
        <Body>
            <div className="Setting_container flex">
                <NavBar />
                <div className="Setting_container_body">
                    <div className="Setting_container_body_icon">
                        <i class="fa-solid fa-cloud"></i>
                    </div>
                    <h1>Chức năng đang trong quá trình cập nhật...</h1>
                </div>
            </div>
        </Body>
    </div>
  )
}

export default Setting