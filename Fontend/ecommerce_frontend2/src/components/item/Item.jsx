import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Item.css';
const Item = (props) => {
  function formatCurrency(amount) {
    // Kiểm tra xem amount có phải là một số không
    if (typeof amount !== 'number') {
      return 'Invalid input';
    }

    // Chuyển đổi số thành chuỗi với định dạng tiền tệ và bỏ chữ "đ"
    const formattedAmount = amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'VND',
    }).replace('₫', '');

    return formattedAmount;
  }
  return (
    <Link
      to="/productDetail"
      onClick={() => localStorage.setItem("productId", props.id)}
    >
      <div className={`item-content ${props.style === 1 ? 'style-boder' : ''}`}>
        <div className='img'>
          <img src={props.img} alt="" />
        </div>
        <div className='item-info'>
          <h2 className='item-title'>{props.name}</h2>
          {props.priceSale > 0 ? (
            <strong className='price-sale'>
              {formatCurrency(props.priceSale)} <u>đ</u>
            </strong>
          ) : (
            <strong className='price-sale'>
              {formatCurrency(props.price)} <u>đ</u>
            </strong>
          )}
          {props.priceSale > 0 && (
            <strike className='price'>
              {formatCurrency(props.price)} <u>đ</u>
            </strike>
          )}
        </div>
      </div>
    </Link>
  )
}
export default Item;
