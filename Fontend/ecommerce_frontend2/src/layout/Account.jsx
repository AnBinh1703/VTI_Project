import React, { useContext, useState } from 'react'
import '../styles/Account.css'
import {UserOutlined, AppstoreOutlined, HeartOutlined, LoginOutlined } from '@ant-design/icons'
import { InfoAccount } from '../components/account/InfoAccount';
import { LoveProduct } from '../components/account/LoveProduct';
import { OrderYour } from '../components/account/OrderYour';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';
export const Account = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const handleLogout = () => {  
        navigate('/');
        console.log(0);
        localStorage.clear();
        console.log(1);
    }
    const {accountStatus, setAccountStatus, renderAccountContent} = useContext(AppContext)
    return (
    <div className='account-container'>
        <div className='account-side-bar'>
            <img className='logo-hoangha-mobile-account' src="src\assets\logoVti2.PNG" alt="" />
            <div className='account-logo'>
                <h1 className='image-user'>{username[0].toUpperCase()}</h1>
                <p className='account-username'>{username}</p>
            </div>
            <div className='account-navbar-content'>
                <p className={accountStatus === 'account-info' ? 'side-bar-item active' : 'side-bar-item'} onClick={() => setAccountStatus('account-info')}><UserOutlined className='account-icon' />Thông tin tài khoản</p>
                <p className={accountStatus === 'order-your' ? 'side-bar-item active' : 'side-bar-item'} onClick={() => setAccountStatus('order-your')}><AppstoreOutlined className='account-icon'/>Đơn hàng của bạn</p>
                <p className={accountStatus === 'love-product' ? 'side-bar-item active' : 'side-bar-item'} onClick={() => setAccountStatus('love-product')}><HeartOutlined className='account-icon'/>Sản phẩm yêu thích</p>
                <p className='side-bar-item' onClick={handleLogout}><LoginOutlined className='account-icon'/>Đăng xuất</p>
            </div>
            <Link className='account-to-home' to={'/'}>Trang chủ</Link>
        </div>
        <div className='account-body-content'>
            {renderAccountContent()}
        </div>
    </div>
  )
}
