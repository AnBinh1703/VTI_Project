import React from 'react'
import '../../styles/Testimonial.css'
export const TestimonialItem = (props) => {
  return (
    <div className='testimonail-item-content'>
        <div className='testimonail-item-img'>
            <img className='testimonail-item-image' src={props.image} alt={props.name} />
        </div>
        <div className='testimonail-item-info'>
            <h3 className='testimonail-item-name'>{props.name}</h3>
            <h4 className='testimonail-item-des'>{props.des}</h4>
            <div className='testimonail-note'>{props.note}</div>
        </div>
    </div>
  )
}
