import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";
import SelectElementSlider from "./SelectElementSlider";


function SlideShow() {
  const imagePaths = [
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/03/web-xiaomi-12-web.jpg",
      title: "Marshall Motif II ANC",
      description: "Siêu phẩm gập - Mở đẳng cấp"
    },
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/08/1200x375-lnv.png",
      title: "Hotsale Xiaomi Redmi note 12",
      description: "Ưu đãi chỉ còn 3.690.000đ"
    },
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/08/1200x375-lnv.png",
      title: "Laptop MSI RTX 40 Series",
      description: "Vượt qua mọi giới hạn"
    },
    {
      img: "https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/31/1200x375-tuanlexiaomi-311023.jpg",
      title: "Hotsale Xiaomi Redmi note 12",
      description: "Sale sốc tới 50%"
    }
  ];

  const sliderRef = useRef(null);

  const [indexActive, setIndexActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current, next) => setIndexActive(next),
  };

  const imageSlides = imagePaths.map((path, index) => (
    <div key={index}>
      <img className="sl_img_item" src={path.img} alt={`Slide ${index + 1}`} />
    </div>
  ));

  const divItems = imagePaths.map((path, index) => (
    <div
      key={index}
      className={index === indexActive ? 'box-des active' : 'box-des'}
      onClick={() => {
        setIndexActive(index);
        sliderRef.current.slickGoTo(index);
      }}
    >
      <p className="slides-title">{path.title}</p>
      <small>{path.description}</small>
    </div>
  ));

  return (
    <div className="SlideShow">
      <Slider ref={sliderRef} {...settings}>
        {imageSlides}
      </Slider>
      <div className="content_slider">{divItems}</div>
    </div>
  );
}

export default SlideShow;
