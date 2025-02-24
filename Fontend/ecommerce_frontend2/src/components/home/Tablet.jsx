import React, { useContext } from 'react'
import Slider from 'react-slick';
import Item from '../item/Item';
import { AppContext } from '../../context/AppProvider';

export const Tablet = () => {
    const items = [
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/08/10/xiaomi-pad-6.png',
            title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
            priceSale: '$99.99',
            price: '$129.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/08/24/htc-a103-6.png',
            title: 'Product 2',
            priceSale: '$49.99',
            price: '$69.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/28/lenovotabm10gen3-2.png',
            title: 'Product 3',
            priceSale: '$79.99',
            price: '$99.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/21/image-removebg-preview-3.png',
            title: 'Product 4',
            priceSale: '$59.99',
            price: '$79.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/03/image-removebg-preview-18.png',
            title: 'Product 5',
            priceSale: '$89.99',
            price: '$109.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/21/image-removebg-preview-3.png',
            title: 'Product 6',
            priceSale: '$69.99',
            price: '$89.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/05/tcl-tab-10-gen-2-glacier-blue-front-back.png',
            title: 'Product 7',
            priceSale: '$69.99',
            price: '$89.99',
        },
    ]
    const { settings } = useContext(AppContext)
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/31/web-htc-wildfire-e3-lite-03.jpg" alt="" />
            </div>
            <div className="box-product-header">
                <p>TABLET</p>
            </div>
            <div className='ins-content'>
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div className="slider-item" key={index}>
                            <Item
                                id={item.productId}
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