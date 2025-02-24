import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Modal, Input } from 'antd';
import '../../styles/TopNavigation.css'
import { AppContext } from '../../context/AppProvider';
import { Link, useNavigate } from 'react-router-dom';
import {IdcardOutlined} from '@ant-design/icons'

export const TopNavigation = () => {
    const { isModalOpen, setIsModalOpen, showModal, handleOk, handleCancel } = useContext(AppContext)
    const { renderModalContent, status, setStatus } = useContext(AppContext)
    const modalFooter = null;
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const {setAccountStatus} = useContext(AppContext)
    const navigate = useNavigate();
    const handleLogout = () => {  
        navigate('/');
        console.log(0);
        localStorage.clear();
        console.log(1);
    }

    return (
        <div className='top-navigation'>
            <div className='top-navigation-content'>
                <ul>
                    {role === 'Admin' ? (
                        <li className='btn-management'><Link to={'/management'} onClick={() => setStatus('dashboard')}>Quản lý website</Link></li>
                    ) : (
                        ''
                    )}
                    <li>Bản mobile</li>
                    <li>Giới thiệu</li>
                    <li>Sản phẩm đã xem</li>
                    <li>Trung tâm bảo hành</li>
                    <li>Hệ thống 127 siêu thị</li>
                    <li>Tuyển dụng</li>
                    <li>Tra cứu đơn hàng</li>
                    {username ? (
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn"><Link to={'/account'}><IdcardOutlined className='id-card-icon' /> {username}</Link></button>
                                <div class="dropdown-content">
                                    <Link to={'/account'} onClick={() => setAccountStatus('account-info')}>Thông tin tài khoản</Link>
                                    <Link to={'/account'} onClick={() => setAccountStatus('order-your')}>Lịch sử giao dịch</Link>
                                    <Link to={'/account'} onClick={() => setAccountStatus('love-product')}>Sản phẩm yêu thích</Link>
                                    <Link onClick={handleLogout}><p>Đăng xuất</p></Link>
                                </div>
                            </div>
                        </li>

                    ) : (
                        <li><button className='btn-show-login' onClick={showModal}>Đăng nhập</button></li>
                    )}
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={modalFooter} width={1100}>
                        {renderModalContent()}
                    </Modal>
                </ul>
            </div>
        </div>
    )
}
