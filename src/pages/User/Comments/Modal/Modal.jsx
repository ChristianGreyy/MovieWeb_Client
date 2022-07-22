import React, { useRef, useState } from 'react'
import './Modal.scss';
import ModalComment from './ModalComment';


const Modal = () => {
  const refModal = useRef(null);
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
    refModal.current.style.display = 'none'
  }
  return (
    <>
      <div ref={refModal} className='Modal'>
          <div className="Modal_header flex justify-center relative">
            <h1>Đóng góp ý kiến cho HTchill</h1>
            <div className="Modal_header_icon absolute">
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <div className="Modal_body">
            <div className="Modal_body_container flex">
              <div className="icon"></div>
              <div onClick={handleModal} className="Modal_body_container_content">
                <h1>Chung tay cải thiện HTchill</h1>
                <p>Đóng góp ý kiến về trải nghiệm sử dụng web HTchill của bạn</p>
              </div>
            </div>
            <div onClick={handleModal} className="Modal_body_container flex">
              <div className="icon">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div className="Modal_body_container_content">
                <h1>Đã xảy ra lỗi</h1>
                <p>Hãy cho chúng tôi biết về tính năng bị lỗi</p>
              </div>
            </div>
          </div>
      </div>

      {modal && (
        <>
          <ModalComment />
          
        </>
      )}
    </>
  )
}

export default Modal