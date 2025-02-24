import React, { useContext } from 'react'
import { TestimonialItem } from '../item/TestimonialItem'
import '../../styles/Testimonial.css'
import Slider from 'react-slick';
import { AppContext } from '../../context/AppProvider';


export const Testimonial = () => {
    const items = [
        {
            img: "https://cdn.hoanghamobile.com/i/idol/Uploads/2021/12/24/anh-2-linh.jpg",
            name: "NSND Trung Anh",
            des: "Diễn viên truyền hình",
            note: "Tôi biết Hoàng Hà qua 1 lần hợp tác quảng cáo, từ đó về sau là biết tới 1 thương hiệu giá cạnh tranh mà ngày càng phát triển, ngày càng nhiều chi nhánh"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/idol/Uploads/2021/12/24/anh-2-linh.jpg",
            name: "NSND Trung Anh",
            des: "Diễn viên truyền hình",
            note: "Tôi biết Hoàng Hà qua 1 lần hợp tác quảng cáo, từ đó về sau là biết tới 1 thương hiệu giá cạnh tranh mà ngày càng phát triển, ngày càng nhiều chi nhánh"
        },
        {
            img: "https://cdn.hoanghamobile.com/i/idol/Uploads/2021/12/24/anh-2-linh.jpg",
            name: "NSND Trung Anh",
            des: "Diễn viên truyền hình",
            note: "Tôi biết Hoàng Hà qua 1 lần hợp tác quảng cáo, từ đó về sau là biết tới 1 thương hiệu giá cạnh tranh mà ngày càng phát triển, ngày càng nhiều chi nhánh"
        }
    ]
    const { settings } = useContext(AppContext)
    const setting = { ...settings }
    setting.slidesToShow = 2;
    return (
        <div>
            <div className="box-product-header">
                <p>TIN CÔNG NGHỆ</p>
            </div>
            <div className="box-product-header">
                <p>KHÁCH HANG CỦA HOÀNG HÀ </p>
            </div>
            <div className='testimonial-container'>
                <Slider {...setting}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <TestimonialItem
                                id={item.productId}
                                image={item.img}
                                name={item.name}
                                des={item.des}
                                note={item.note}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    )
}
