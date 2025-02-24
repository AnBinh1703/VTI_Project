import React, { useContext, useEffect, useState } from 'react';

import '../../styles/Heading.css';
import { Input, Space } from 'antd';
import { MenuUnfoldOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
import instance from '../../api/api';

const { Search } = Input;

export const Heading = () => {
    const username = localStorage.getItem('username');
    const {totalItemShopcart, setAccountStatus, setTotalItemShopcart} = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false);
    const userId = localStorage.getItem('userId');
    const fetchData = () => {
        instance.get(`/shopcart/${userId}`)
        .then(res =>{
            console.log(res);
            setTotalItemShopcart(res.data.length);
        })
        .catch(err => {
            console.log(err);
        })
    };
    useEffect(() => {
        fetchData()
    }, [isLoading, totalItemShopcart])
    const onSearch = (value, _e, info) => console.log(info?.source, value)
    return (
        <div className='heading-web'>
            <div className='heading-container'>
                
                <div className='heading-logo'>
                    <Link to={'/'}>
                        <img className='logo-hoanghamobile' src="src\assets\logo.png" alt="logo-hoanghamobile" />
                    </Link>
                </div>
                <div className='heading-search-box'>
                    <Search placeholder="Hôm nay bạn cần tìm gì ?" onSearch={onSearch} enterButton />
                </div>
                <div className='heading-orders-tools'>
                    <div className='check-order'>
                        <Link to={username ? '/account' : '/check-order'} onClick={() => setAccountStatus('order-your')}  className='btn-check-order' href="">
                            <MenuUnfoldOutlined className='icon-check-order' />
                            <span className='check-order-text'>Kiểm tra đơn<br/> hàng</span>
                        </Link>
                    </div>
                    <div className='cart'>
                        <Link to={'/shop-cart'} className='btn-cart' href="">
                            <ShoppingCartOutlined className='icon-cart' />
                            <span className='total-product-in-cart'>{totalItemShopcart}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
