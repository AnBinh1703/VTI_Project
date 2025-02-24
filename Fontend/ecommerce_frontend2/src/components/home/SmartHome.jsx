import React, { useContext } from 'react'
import Item from '../item/Item'
import Slider from 'react-slick';
import { AppContext } from '../../context/AppProvider';

export const SmartHome = () => {
    const items = [
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/08/smarock-s10-pro-3.png',
            title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
            priceSale: '$99.99',
            price: '$129.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/10/e10-3.png',
            title: 'Product 2',
            priceSale: '$49.99',
            price: '$69.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/10/x10-plus-6-33.png',
            title: 'Product 3',
            priceSale: '$79.99',
            price: '$99.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/15/xiaomi-mi-home-security-c200.png',
            title: 'Product 4',
            priceSale: '$59.99',
            price: '$79.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/05/24/xiaomi-smart-air-fryer-pro-4l-bhr-3.png',
            title: 'Product 5',
            priceSale: '$89.99',
            price: '$109.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/01/25/t-removebg-preview.png',
            title: 'Product 6',
            priceSale: '$69.99',
            price: '$89.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/12/xiaomi-smart-air-purifier-lite-7.png',
            title: 'Product 7',
            priceSale: '$69.99',
            price: '$89.99',
        },
    ]
    const { settings } = useContext(AppContext)
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/09/15/camera-an-ninh-1200x200.jpg" alt="" />
            </div>
            <div className="box-product-header">
                <p>CAMERA</p>
            </div>
            <div className='ins-content'>
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div className="slider-item" key={index}>
                            <Item
                                id = {item.productId}
                                img={item.img}
                                title={item.title}
                                priceSale={item.priceSale}
                                price={item.price}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
