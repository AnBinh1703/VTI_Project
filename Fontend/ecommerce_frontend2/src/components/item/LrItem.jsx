import React from 'react'
import '../../styles/LrItem.css'
export const LrItem = (props) => {
  return (
    <div className='lr-item-container'>
        <a className='lr-item-link' href="">
            <img className='lr-item-image' src={props.image} alt="" />
        </a>
    </div>
  )
}
