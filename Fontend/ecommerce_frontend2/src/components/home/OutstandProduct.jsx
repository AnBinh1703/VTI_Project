import React, { useContext, useEffect, useState } from 'react'
import Item from '../item/Item'
import { Link } from 'react-router-dom'
import instance from '../../api/api'
import { AppContext } from '../../context/AppProvider'
export const OutstandProduct = ({ a }) => {
    const [dataMobileProduct, setdataMoblieProduct] = useState([])
    useEffect(() => {
        instance.get("/products/categories/1")
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
    const {setCategoryName} = useContext(AppContext);
    return (
        <div>
            {a && (
                <>
                    <div className='ads'>
                        <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/12/07/chuyen-muc-noen-1.gif" alt="" />
                    </div>
                    <div className="box-product-header">
                        <Link to={"/productCategory"} onClick={() => setCategoryName('mobilephone')}><p>ĐIỆN THOẠI NỔI BẬT</p></Link>
                    </div>
                </>
            )}
            <div className='box-product-content'>
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
            </div>
        </div>
    )
}
