import React, { useContext } from 'react'
import { Input, Button } from 'antd'
import { Header } from '../components/header/Header'
import { AppContext } from '../context/AppProvider'
import '../styles/CheckOrder.css';
import { Link } from 'react-router-dom';
import { Social } from '../components/app/Social';
export const CheckOrder = () => {
    const { setIsModalOpen } = useContext(AppContext)
    return (
        <div className='order-your'>
            <Social />
            <Header />
            <div className='check-order-container'>
                <Link to={'/'} className='btn-back-to-home'>Home</Link>

                <div className='check-order-form'>
                    <p className='check-order-title'>Kiểm tra đơn hàng của bạn</p>
                    <Input id='check-order-input' placeholder='Vui lòng nhập mã đơn hàng của bạn' />
                    <Button className='btn-check-orders'>TRA CỨU</Button>
                </div>
                <div className='you-know'>
                    <img className='icon-you-know' src="src\assets\icon-youknow.png" alt="" />
                    <div className='ctn'>
                        <p className='you-know-text'>ĐĂNG NHẬP SẼ GIÚP BẠN QUẢN LÝ ĐƠN HÀNG CỦA MÌNH VÀ TRẢI NGHIỆM WEBSITE TỐT HƠN <span className='btn-login-in-check-order' onClick={() => setIsModalOpen(true)}>Đăng nhập</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
