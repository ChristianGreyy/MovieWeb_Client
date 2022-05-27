import React from 'react'
import "./Register.scss";
import {useNavigate} from 'react-router-dom'

const CheckComple = (props) => {
    const navigate = useNavigate();
    const handleLogin = ()=> {
        navigate('/login');
    }
    const {toggleModal} = props
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_container_header relative">
          <h1>Thông báo</h1>
          <div className="icon absolute" onClick={toggleModal}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
        </div>

        <div className="modal_container_body">
          <p>
            Đăng ký thành công
          </p>
          <button type="submit" className="again" onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckComple;