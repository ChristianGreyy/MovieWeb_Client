import React from 'react'
import './BoxHis.scss'

const BoxHis = () => {
  return (
    <div className='BoxHis'>
        <div className="BoxHis_info flex justify-between">
            <h2>UserName: </h2>
            <h2>LaiTungCute</h2>
        </div>

        <div className="BoxHis_info flex justify-between">
            <h2>Tên ngân hàng: </h2>
            <h2>Vietcombank</h2>
        </div>

        <div className="BoxHis_info flex justify-between">
            <h2>Gói dịch vụ: </h2>
            <h2>Gói MAX</h2>
        </div>

        <div className="BoxHis_info flex justify-between">
            <h2>Giá gói: </h2>
            <h2>369.000VNĐ</h2>
        </div>

        <div className="BoxHis_info flex justify-between">
            <h2>Loại gói dịch vụ: </h2>
            <h2>6 tháng</h2>
        </div>
    </div>
  )
}

export default BoxHis