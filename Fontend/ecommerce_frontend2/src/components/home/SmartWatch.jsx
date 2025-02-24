import React, { useContext, useEffect, useState } from 'react'
import Item from '../item/Item'
import Slider from 'react-slick';
import { AppContext } from '../../context/AppProvider';
import { Link } from 'react-router-dom';
import instance from '../../api/api';
export const SmartWatch = () => {
    const { settings } = useContext(AppContext)
    const [dataMobileProduct, setdataMoblieProduct] = useState([])
    useEffect(() => {
        instance.get("/products/categories/5")
            .then(res => {
                setdataMoblieProduct(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const filteredProducts = dataMobileProduct.map(product => {
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
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/24/tecno-spark-10.png" alt="" />
            </div>
            <div className="box-product-header">
                <Link to={'/clock'}><p>ĐỒNG HỒ THÔNG MINH</p></Link>
            </div>
            <div className='ins-content'>
                <Slider {...settings}>
                    {filteredProducts.map((item, index) => (
                        item.price >0 && <div className="slider-item" key={index}>
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
