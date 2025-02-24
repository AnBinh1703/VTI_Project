import React, { useEffect, useState } from 'react'
import '../../styles/InfoAccount.css'
import instance from '../../api/api';
import { Button } from 'antd';
export const LoveProduct = () => {
  console.log(1);
  const username = localStorage.getItem('username');
  const userId = localStorage.getItem('userId');
  const [dataLoveProduct, setDataLoveProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    instance.get(`/product-love/${userId}`)
      .then(res => {
        setDataLoveProduct(res.data);
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    fetchData();
  }, [isLoading])
  const handleDelete = (item) => {
    instance.delete(`/product-love/${userId}/${item.optionId}`)
    .then(res => {
      console.log(res);
      setIsLoading(!isLoading);
    }).catch(err => {
      console.log(err);
    })
  }
  console.log(dataLoveProduct);
  return (
    <div className='account-info-container'>
      <div>
        <p className='title-infor-account'>Đơn hàng của bạn</p>
        <div className='bg'>
          <div className='bgv'>
            <h2>CHÀO MỪNG QUAY TRỞ LẠI, {username.toUpperCase()}</h2>
            <p>Xem và kiểm tra những sản phẩm yêu thích của bạn tại đây</p>
          </div>
          <img className='wishlist-image' src="src\assets\icon-account-wishlist.png" alt="" />
        </div>
        <div className='order-your-content'>
          <p className='title-update-order-your'>Danh sách sản phẩm</p>
          {dataLoveProduct.map((product, index) => (
            <div key={index} className='product-item'>
              <img src={product.image} alt={product.productName} />
              <p className='product-wish-name'>{product.productName}</p>
              <p>Giá: {product.priceSale.toLocaleString()} VND</p>
              <Button className='btn-redirect-item-detail'>Chi tiết sản phẩm</Button>
              <Button className='btn-delete-love-product' onClick={() => handleDelete(product)}>Xóa</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
