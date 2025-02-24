import React, { useContext } from 'react'
import { AppContext } from '../../context/AppProvider'
import Slider from 'react-slick'
import { LrItem } from '../item/LrItem'
export const Category = () => {
    const items = [
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/19/honor-logo-2022-svg.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/12/24/xorr.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tcl.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(6).png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png"
        }
    ]

    const { settings } = useContext(AppContext)
    const setting = { ...settings }
    setting.slidesToShow = 8
    setting.autoplay = false
    return (
        <div className='category-content'>
            <Slider {...setting}>
                {items.map((item, index) => (
                    <div key={index} className='category-item'>
                        <LrItem image={item.img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
