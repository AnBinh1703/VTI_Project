import React from 'react'
import AccessoryItem from '../item/AccessoryItem'
import '../../styles/AccessoryItem.css'
export const Accessory = () => {
    const items = [
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-2.png",
            des: "Thẻ nhớ-USB"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-15.png",
            des: "Tai nghe"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-10.png",
            des: "Sạc dự phòng"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-1.png",
            des: "Quạt mini"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-14.png",
            des: "Loa"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-xanh-2.png",
            des: "Dây đeo đồng hồ"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-9.png",
            des: "Dây cáp"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-2.png",
            des: "Camera"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-11.png",
            des: "Thiết bị mạng"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-3.png",
            des: "Apple"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-6.png",
            des: "Ốp da"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-xanh-5.png",
            des: "Dán màn hình"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-xanh-3.png",
            des: "Phụ kiện laptop"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-xanh-4.png",
            des: "Camera hành trình"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-10.png",
            des: "Sạc dự phòng"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-1.png",
            des: "Quạt mini"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-14.png",
            des: "Loa"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-xanh-2.png",
            des: "Dây đeo đồng hồ"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-9.png",
            des: "Dây cáp"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/icon-moi-11.png",
            des: "Thiết bị mạng"
        },
    ]
    return (
        <div className='assessory-content'>
            <div className='accessory-title'>
                <p className='accessory-text'>PHỤ KIỆN</p>
            </div>
            <div className='accessory-box-content'>
                {items.map((item, index) => (
                    <div key={index} className='accessory-box-item'>
                        <AccessoryItem
                            image={item.img}
                            description={item.des} />
                    </div>
                ))}
            </div>

        </div>
    )
}
