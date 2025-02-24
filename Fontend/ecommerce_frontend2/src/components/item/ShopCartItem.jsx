import React, { useState } from 'react'
import '../../styles/ShopCartItem.css'
export const ShopCartItem = (props) => {
    const [itemTotal, setItemTotal] = useState(props.total);

    const handleIncrement = () => {
        setItemTotal(itemTotal + 1);
    };

    const handleDecrement = () => {
        if (itemTotal > 0) {
            setItemTotal(itemTotal - 1);
        }
    };

    return (
        <tr className="cart-item">
          <td>
            <input type="checkbox" className="item-checkbox" />
          </td>
          <td className="item-id">{props.id}</td>
          <td>
            <img className="shop-cart-item-image" src={props.image} alt="" />
          </td>
          <td className="item-name">{props.name}</td>
          <td className="shop-cart-total">
            <button className="btn-decrease" onClick={handleDecrement}>
              -
            </button>
            <span className="item-total">{itemTotal}</span>
            <button className="btn-increase" onClick={handleIncrement}>
              +
            </button>
          </td>
          <td className="item-price">{props.price}</td>
          <td className="item-sum-price">{props.price * itemTotal}</td>
        </tr>
      );
};