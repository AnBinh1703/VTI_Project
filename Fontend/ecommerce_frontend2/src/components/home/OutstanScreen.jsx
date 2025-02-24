import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';
import Item from '../item/Item';
import { AppContext } from '../../context/AppProvider';
import { Link } from 'react-router-dom';
import instance from '../../api/api';

export const OutstanScreen = () => {
    const [dataLaptopProduct, setDataLaptopProduct] = useState([])
    useEffect(() => {
        instance.get("/products?category=screen")
            .then(res => {
                setDataLaptopProduct(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const filteredProducts = dataLaptopProduct.map(product => {
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
    const { settings, setCategoryName } = useContext(AppContext);
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/09/14/msi-1200x200-01.png" alt="" />
            </div>
            <div className="box-product-header">
                <Link to={"/productCategory"} onClick={() => setCategoryName('screen')}><p>MÀN HÌNH NỔI BẬT</p></Link>
            </div>
            <div className='ins-content'>
                <Slider {...settings}>
                    {filteredProducts && filteredProducts.map((item, index) => (
                        item.price > 0 && <div key={index} className='box-product-item'>
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
    )
}    