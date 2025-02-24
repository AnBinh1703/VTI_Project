import React, { useEffect, useState } from 'react'
import Item from '../item/Item'
import { Link } from 'react-router-dom'
import '../../styles/AppleProduct.css'
import instance from '../../api/api'
export const BoxProduct = () => {
    const [dataAppleProduct, setAppleProduct] = useState([])
    useEffect(() => {
        instance.get("/products/brand/1")
            .then(res => {
                setAppleProduct(res.data.content);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const filteredProducts = dataAppleProduct.map(product => {
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
            <div className="box-product-header">
                <p> <Link to={'apple'} >APPLE AUTHORISED RESELLER</Link></p>
            </div>
            <div className='box-product-content'>
                {filteredProducts.map((item, index) => (
                    item.price>0 && <div className='box-product-item' key={index}>
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
            </div>
        </div>
    )
}
