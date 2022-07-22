import React, { useRef } from 'react'
import Modal from './Modal';
import './Modal.scss';

const ModalComment = () => {
    const refModal = useRef(null);
    const [modalcmt, setModalcmt] = React.useState(false);
    const handleModalcmt = () => {
        setModalcmt(!modalcmt);
        refModal.current.style.display = 'none'
    }
  return (
    <>
        <div ref={refModal} className='Modal ModalCmt'>
            <div  className="Modal_header flex justify-center relative">
            <div onClick={handleModalcmt} className="Modal_header_icon absolute">
                <i class="fa-solid fa-circle-left"></i>
            </div>
              <h1>Chung tay cải thiện HTchill</h1>
              <div className="Modal_header_icon absolute">
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
            </div>
            <div className="ModalCmt_body">
                <h1>Chúng tôi có thể cải thiện như thế nào?</h1>
              <textarea></textarea>
            </div>
        </div>

        {modalcmt && (
            <>
                <Modal />
            </>
        )}
    </>
  )
}

export default ModalComment