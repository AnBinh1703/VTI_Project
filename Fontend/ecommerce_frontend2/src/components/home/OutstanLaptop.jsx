import React, { useContext, useEffect, useState } from 'react'
import Item from '../item/Item'
import { Link } from 'react-router-dom'
import instance from '../../api/api'
import { AppContext } from '../../context/AppProvider'
export const OutstanLaptop = () => {
    const [dataLaptopProduct, setDataLaptopProduct] = useState([])
    useEffect(() => {
        instance.get("/products/categories/2")
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
    const {setCategoryName} = useContext(AppContext) 
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/06/1200x200-tuan-le-01.png" alt="" />
            </div>
            <div className="box-product-header">
                <Link to={"/productCategory"} onClick={() => setCategoryName('laptop')} ><p>LAP TOP NỔI BẬT</p></Link>
            </div>
            <div className='box-product-content'>
                {filteredProducts && filteredProducts.map((item, index) => (
                    item.price>0 && <div key={index} className='box-product-item'>
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