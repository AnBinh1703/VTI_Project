import React, { useState, useEffect, useContext } from 'react'
import { Header } from '../components/header/Header'
import { Link } from 'react-router-dom';
import '../styles/ShopCart.css'
import { Button } from 'antd';
import { Social } from '../components/app/Social';
import instance from '../api/api';
import { AppContext } from '../context/AppProvider';

export const ShopCart = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItemsTotalPrice, setSelectedItemsTotalPrice] = useState(0);

    const [dataShopcart, setDataShopcart] = useState([])
    const userId = localStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(false);
    const {totalItemShopcart, setTotalItemShopcart} = useContext(AppContext);
    const fetchData = () => {
        instance.get(`/shopcart/${userId}`)
        .then(res =>{
            console.log(res);
            setDataShopcart(res.data)
            setTotalItemShopcart(res.data.length);
            console.log(res.data.length);
        })
        .catch(err => {
            console.log(err);
        })
    };
    useEffect(() => {
        fetchData()
    }, [isLoading])
    const handleCheckboxChange = (id) => {
        setSelectedItems(prevItems => {
            if (prevItems.includes(id)) {
                return prevItems.filter(item => item !== id);
            } else {
                return [...prevItems, id];
            }
        });
    };
    const handleIncrement = (item) => {
        const optionId = item.optionId;
        const total = item.total + 1;
        const data = {
            userId: userId,
            optionId: optionId,
            total: total
        }
        instance.put("/shopcart", data)
        .then(res => {
            console.log(res);
            setIsLoading(!isLoading);
        }).catch(err => {
            console.log(err);
        })
    };

    const handleDecrement = (item) => {
        const optionId = item.optionId; 
        const total = item.total - 1;   
        if(total === 0) {
            instance.delete(`/shopcart/${userId}/${optionId}`)
            .then(res => {
                console.log(res);
                setIsLoading(!isLoading);
            }).catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("Ok");
                return;
            })
        }
        const data = {
            userId: parseInt(userId),
            optionId: optionId,
            total: total
        } 
        instance.put("/shopcart", data)
        .then(res => {
            console.log(res);
            setIsLoading(!isLoading);
        }).catch(err => {
            console.log(err);
        })
    };

    const calculateSelectedItemsTotalPrice = () => {
        const total = dataShopcart.reduce((accumulator, item) => {
            if (selectedItems.includes(item.optionId)) {
                return accumulator + item.total * item.price;
            }
            return accumulator;
        }, 0);
        setSelectedItemsTotalPrice(total);
    };
    useEffect(() => {
        calculateSelectedItemsTotalPrice();
    }, [selectedItems, dataShopcart])

    const handleSubmitOrder = () => {
        console.log(selectedItems);
    }
    return (
        <div className='shop-cart'>
            <Social/>
            <Header />
            <div>
                <Link to={'/'} className='btn-back-to-home'>Trang chủ</Link>
                <h1 className='shop-cart-title'>GIỎ HÀNG CỦA BẠN</h1>
                <table className='shop-cart-table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Image</th>
                            <th className='title-product-name'>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataShopcart.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type='checkbox'
                                        checked={selectedItems.includes(item.optionId)}
                                        onChange={() => handleCheckboxChange(item.optionId)}
                                    />
                                </td>
                                <td className='shop-cart-item-id'>{item.optionId}</td>
                                <td className='shop-cart-item-image'><img src={item.image} alt="" /></td>
                                <td className='shop-cart-item-name'>{item.productName}</td>
                                <td className='shop-cart-item-total'>
                                    <button className="btn-decrease" onClick={() => handleDecrement(item)}>
                                        -
                                    </button>
                                    <span className="item-total">{item.total}</span>
                                    <button className="btn-increase" onClick={() => handleIncrement(item)}>
                                        +
                                    </button>
                                </td>
                                <td className='shop-cart-item-price'>{item.price}</td>
                                <td className='shop-cart-item-sum-price'>{item.total * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='box-order'>
                    <p className='sum-price-total-selected-items'>Tổng giá: {selectedItemsTotalPrice}</p>
                    <Button className='btn-order' onClick={handleSubmitOrder}>ĐẶT HÀNG</Button>
                </div>

            </div>
        </div>
    )
}
