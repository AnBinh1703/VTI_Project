import React, { useContext, useEffect, useState } from 'react'
import '../../styles/LoveCp.css';
import Slider from 'react-slick'
import Item from '../item/Item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from '../../context/AppProvider';
import instance from '../../api/api';

export const LoveCp = () => {
    const [dataFlashSale, setDataFlashSale] = useState([])
    useEffect(() => {
        instance.get("/products")
            .then(res => {
                setDataFlashSale(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const filteredProducts = dataFlashSale.map(product => {
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
                productInfo.priceSale = product.productOptions[0].price;;
            }
        }
        return productInfo;
    });
    const { settings } = useContext(AppContext)
    return (
        <div>
            <div className='ads'>
                <a href=""><img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/01/flip4-s22-ultra-1200x200.png" alt="" /></a>
            </div>
            <div className='ins-preview'>
                <div className='ins-title'>
                    <p className='ins-text'>CÓ THỂ BẠN SẼ THÍCH</p>
                </div>
                <div className='ins-content'>
                    <Slider {...settings}>
                        {filteredProducts && filteredProducts.map((item, index) => (
                            item.price > 0 && <div className="slider-item" key={index}>
                                <Item
                                    style={1}
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
        </div>
    )
}
