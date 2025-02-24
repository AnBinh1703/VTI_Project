import React from 'react'
import Item from '../item/Item'
export const Battery = () => {
    const items = [
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/05/07/i11pro-5960.jpg',
            title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
            priceSale: '$99.99',
            price: '$129.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/03/image.png',
            title: 'Product 2',
            priceSale: '$49.99',
            price: '$69.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/03/soft-600x600.jpg',
            title: 'Product 3',
            priceSale: '$79.99',
            price: '$99.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/10/06/image-removebg-preview-29.png',
            title: 'Product 4',
            priceSale: '$59.99',
            price: '$79.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/10/06/image-removebg-preview-29.png',
            title: 'Product 5',
            priceSale: '$89.99',
            price: '$109.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/27/ip-5c-2x-100.jpg',
            title: 'Product 6',
            priceSale: '$69.99',
            price: '$89.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/04/05/ip7-637449430788149335.png',
            title: 'Product 7',
            priceSale: '$69.99',
            price: '$89.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/04/05/ip6s.png',
            title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
            priceSale: '$99.99',
            price: '$129.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/27/ip-8-2x-100.jpg',
            title: 'Product 2',
            priceSale: '$49.99',
            price: '$69.99',
        },
        {
            img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/11/27/ip-x-2x-100.jpg',
            title: 'Product 3',
            priceSale: '$79.99',
            price: '$99.99',
        },

    ]
    return (
        <div>
            <div className='ads'>
                <img className='ads-img' src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/06/1200x200-tuan-le-01.png" alt="" />
            </div>
            <div className="box-product-header" style={{ width: "450px" }}>
                <p>THAY PIN IPHONE CHÍNH HÃNG VÀ SỬA CHỮA</p>
            </div>
            <div className='box-product-content'>
                {items.map((item, index) => (
                    <div key={index} className='box-product-item'>
                        <Item
                            style={1}
                            id = {item.productId}
                            img={item.img}
                            title={item.title}
                            priceSale={item.priceSale}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}