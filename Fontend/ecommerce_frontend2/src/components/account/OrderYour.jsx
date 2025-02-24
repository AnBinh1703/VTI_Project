import React from 'react'
import '../../styles/InfoAccount.css'
export const OrderYour = () => {
  const username = localStorage.getItem('username');
  return (
    <div className='account-info-container'>
            <div>
                <p className='title-infor-account'>Đơn hàng của bạn</p>
                <div className='bg'>
                    <div className='bgv'>
                        <h2>CHÀO MỪNG QUAY TRỞ LẠI, {username.toUpperCase()}</h2>
                        <p>Kiểm tra thông tin đơn hàng của bạn tại đây</p>
                    </div>
                    <img src="src\assets\icon-account-order.png" alt="" />
                </div>
                <div className='order-your-content'>
                  <p className='title-update-order-your'>Đơn hàng của bạn</p>
                </div>
            </div>
        </div>
  )
}
