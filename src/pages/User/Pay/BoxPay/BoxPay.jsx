import React from 'react'
import './BoxPay.scss'

const BoxPay = () => {
  return (
    <div className='BoxPay'>
        <div className="BoxPay_info flex justify-between">
            <h2>UserName: </h2>
            <h2>LaiTungCute</h2>
        </div>

        <div className="BoxPay_info flex justify-between">
            <h2>ID: </h2>
            <h2>1222323232</h2>
        </div>

        <div className="BoxPay_info flex justify-between">
            <h2>Số tài khoản: </h2>
            <h2>223141313132</h2>
        </div>

        <div className="BoxPay_info flex justify-between">
            <h2>Tên ngân hàng: </h2>
            <h2>Vietcombank</h2>
        </div>
    </div>
  )
}

export default BoxPay