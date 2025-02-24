import React, { useContext, useState } from 'react'
import '../styles/Management.css'
import {HddOutlined, CodeOutlined, BarChartOutlined, LoginOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Dashboard } from '../components/management/Dashboard'
import { CategoryManagement } from '../components/management/CategoryManagement'
import { ProductManagement } from '../components/management/ProductManagement'
import Statistics from '../components/management/Statistics'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppProvider'
import { BrandManagement } from '../components/management/BrandManagement'
export const Management = () => {
    const {status, setStatus} = useContext(AppContext)
    const navigate = useNavigate();
    const renderContent = () => {
        switch(status) {
            case 'dashboard':
                return <Dashboard/>
            case 'management-category':
                return <CategoryManagement/>
            case 'management-product':
                return <ProductManagement/> 
            case 'statistics':
                return <Statistics/>   
            case 'management-brand':
                return <BrandManagement/>   
            default:
                return null;            
        }
    }
    const handleLogout = () => {  
        navigate('/');
        console.log(0);
        localStorage.clear();
        console.log(1);
    }
    return (
        <div className='box-management-container'>
            <div className='box-management-title'>
                <Link to={'/'} className='box-logo-branch'>
                    <img className='logo-branch' src="src\assets\klipartz.com (4).png" alt="" />
                    <p className='back-to-home'>Trang chủ</p>
                </Link>
                <img src="src\assets\logo.png" alt="" className='logo-hoangha-mobile' />
            </div>
            <div className='box-management-content'>
                <div className='box-management-left'>
                    <p className='management-select' onClick={() => setStatus('dashboard')}><BarChartOutlined className='management-icon'/>Dashboard</p>
                    <p className='management-select' onClick={() => setStatus('management-category')}><HddOutlined className='management-icon'/>Quản lý danh mục sản phẩm</p>
                    <p className='management-select' onClick={() => setStatus('management-brand')}><HddOutlined className='management-icon'/>Quản lý thương hiệu</p>
                    <p className='management-select' onClick={() => setStatus('management-product')}><CodeOutlined className='management-icon'/>Quản lý sản phẩm</p>
                    <p className='management-select' onClick={() => setStatus('statistics')}><HddOutlined className='management-icon'/>Thống kê</p>
                    <p className='management-select' onClick={handleLogout}><LoginOutlined className='management-icon'/>Đăng xuất</p>
                </div>
                <div className='box-management-right'>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}
