import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className='title flex flex-row'>
        <div className='title_avatar'>

        </div>

        <div className='title_content flex justify-around'>
            <div className='title_content_icon'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className='title_content_buy'>
                <button>
                    <strong>MUA GÓI</strong>
                </button>
            </div>

            <div className='title_content_login'>
                <strong>Đăng nhập</strong>
            </div>
        </div>
      </div>

        {/* Phần menu */}
        <div className='menu'>
          <ul className='flex justify-around'>
            <li style={{"margin-left": '227.2px'}}><strong>Trang chủ</strong></li>
            <li>
              <strong>
                Thể loại
                  <i class="fa-solid fa-caret-down"></i>
              </strong>
            </li>
            <li>
              <strong>
                Quốc gia
                  <i class="fa-solid fa-caret-down"></i>
              </strong>
            </li>
            <li><strong>Phim bộ</strong></li>
            <li><strong>Phim lẻ</strong></li>
            <li style={{"margin-right": '316.67px'}}><strong>TV Show</strong></li>
          </ul>
        </div>
    </div>
  )
}

export default Header