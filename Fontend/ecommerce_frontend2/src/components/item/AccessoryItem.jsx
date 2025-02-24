import React from 'react'
import '../../styles/AccessoryItem.css'
const AccessoryItem = ({ image, description }) => {

  return (
    <div className='accessory-item'>
      <div className='accessory-item-content'>
        <a className='accessory-item-link' href=""><img className='accessory-item-img' src={image} alt="" /></a>
      </div>
      <p className='accessory-item-des'>{description}</p>
    </div>
  );
};

export default AccessoryItem;
