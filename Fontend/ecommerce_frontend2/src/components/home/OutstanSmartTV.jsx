import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';
import Item from '../item/Item';
import { AppContext } from '../../context/AppProvider';
import { Link } from 'react-router-dom';
import instance from '../../api/api';

export const OutstanSmartTV = () => {
    const [dataSmartTVProduct, setDataSmartTVProduct] = useState([])
    useEffect(() => {
        instance.get("/products?category=TV")
            .then(res => {
                setDataSmartTVProduct(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const filteredProducts = dataSmartTVProduct.map(product => {
        const productInfo = {
            productId: product.id,
            productName: product.productName,
            price: 0,
            priceSale: 0,
            image: product.productOptions.image,
        };
        if (product.productOptions.length > 0) {
            const firstOption = product.productOptions[0];
            productInfo.price = firstOption.price;
            productInfo.image = firstOption.image;
            if (firstOption.priceSale > 0) {
                productInfo.priceSale = firstOption.priceSale;
            }
        }
        return productInfo;
    });    
    const {setCategoryName, settings} = useContext(AppContext) 
    const setting = { ...settings }
    setting.slidesToShow = 2;
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/02/web-tv-xiaomi-t11-03.jpg" alt="" />
            </div>
            <div className="box-product-header">
                <Link to={'/productCategory'} onClick={() => setCategoryName('smart TV')}><p>SMART TV NỔI BẬT</p></Link>
            </div>
            <div className='ins-content'>
                <Slider {...settings}>
                    {filteredProducts && filteredProducts.map((item, index) => (
                        <div className="slider-item" key={index}>
                            <Item
                                id = {item.productId}                            
                                img={item.image}
                                name={item.productName}
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