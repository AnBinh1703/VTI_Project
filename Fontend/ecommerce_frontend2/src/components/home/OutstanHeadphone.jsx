import React, { useContext } from 'react'
import Slider from 'react-slick';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={onClick}
        />
    );
}
export const OutstanHeadphone = () => {
    const items = [
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/22/image-removebg-preview-8.png',
            title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
            priceSale: '$99.99',
            price: '$129.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/29/redmi-buds-4-lite-1.png',
            title: 'Product 2',
            priceSale: '$49.99',
            price: '$69.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/10/image-removebg-preview_637957687304481353.png',
            title: 'Product 3',
            priceSale: '$79.99',
            price: '$99.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/15/image-removebg-preview-34.png',
            title: 'Product 4',
            priceSale: '$59.99',
            price: '$79.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/02/13/image-removebg-preview.png',
            title: 'Product 5',
            priceSale: '$89.99',
            price: '$109.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/03/09/enco-air-2-2.png',
            title: 'Product 6',
            priceSale: '$69.99',
            price: '$89.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/03/18/xiaomi-buds-3t-pro-3.png',
            title: 'Product 7',
            priceSale: '$69.99',
            price: '$89.99',
        },
    ]
    const { settings } = useContext(AppContext);
    return (
        <div>
            <div className="box-product-header">
                <p>TAI NGHE NỔI BẬT</p>
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