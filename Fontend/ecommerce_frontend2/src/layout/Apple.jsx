import React, { useContext, useState } from 'react'
import { BoxProduct } from '../components/home/AppleProduct'
import { AppleOutlined } from '@ant-design/icons'
import '../styles/Apple.css'
import Slider from 'react-slick'
import { AppContext } from '../context/AppProvider'
import Item from '../components/item/Item'
import { Button } from 'antd'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Social } from '../components/app/Social'
export const Apple = () => {
  const [showAll, setShowAll] = useState(false)
  const images = [
    {
      img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/09/12/iphone-14-pro-max-apc.png'
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/07/frame-3.png'
    }
  ]
  const items = [
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/01/12/image-removebg-preview-16.png',
      title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
      priceSale: '$99.99',
      price: '$129.99',
      note: 'Sẵn hàng các màu',
      km: '10',
      priceUp: '$19.99'
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/05/07/image-removebg-preview_637875529202208799.png',
      title: 'Product 2',
      priceSale: '$49.99',
      price: '$69.99',
      note: 'Sẵn hàng các màu',
      km: '10',
      priceUp: '$19.99'
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/12/13/image-removebg-preview-2022-12-13t084823-161.png',
      title: 'Product 3',
      priceSale: '$79.99',
      price: '$99.99',
      note: 'Sẵn hàng các màu',
      km: '10',
      priceUp: '$19.99'
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/27/samsung-galaxy-a05-4.png',
      title: 'Product 4',
      priceSale: '$59.99',
      price: '$79.99',
      note: 'Sẵn hàng các màu',
      km: '10',
      priceUp: '$19.99'
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/09/29/S20%20FE%20(1).png',
      title: 'Product 5',
      priceSale: '$89.99',
      price: '$109.99',
      note: 'Sẵn hàng các màu',
      km: '10',
      priceUp: '$19.99'
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/10/z-flip-4.jpg',
      title: 'Product 6',
      priceSale: '$69.99',
      price: '$89.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/02/yuho.png',
      title: 'Product 7',
      priceSale: '$69.99',
      price: '$89.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/01/12/image-removebg-preview-16.png',
      title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
      priceSale: '$99.99',
      price: '$129.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/05/07/image-removebg-preview_637875529202208799.png',
      title: 'Product 2',
      priceSale: '$49.99',
      price: '$69.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/12/13/image-removebg-preview-2022-12-13t084823-161.png',
      title: 'Product 3',
      priceSale: '$79.99',
      price: '$99.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/09/27/samsung-galaxy-a05-4.png',
      title: 'Product 4',
      priceSale: '$59.99',
      price: '$79.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/09/29/S20%20FE%20(1).png',
      title: 'Product 5',
      priceSale: '$89.99',
      price: '$109.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/10/z-flip-4.jpg',
      title: 'Product 6',
      priceSale: '$69.99',
      price: '$89.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/03/02/yuho.png',
      title: 'Product 7',
      priceSale: '$69.99',
      price: '$89.99',
    },
    {
      img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/01/12/image-removebg-preview-16.png',
      title: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng',
      priceSale: '$99.99',
      price: '$129.99',
    },
  ]

  const settings = useContext(AppContext);
  const setting = { ...settings }
  setting.slidesToShow = 1;
  setting.arrows = false;
  setting.autoplay = true;
  const handleShowAllClick = () => {
    setShowAll(!showAll);
  }

  const handleNavItemClick = (sectionId) => {
    console.log(sectionId);
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const visibleItems = showAll ? items : items.slice(0, 5);
  return (
    <div className='apple-product'>
      <Social />
      <div className='apple-navbar'>
        <div className='apple-navbar-item'>
          <div className='icon-authorise-apple'><AppleOutlined className='icon-apple' /></div>
          <p>
            Authorised<br />
            Reseller
          </p>
        </div>
        <Link to="iphone" smooth={true} className='apple-navbar-item' onClick={() => handleNavItemClick('iphone')}>
          Iphone
        </Link>
        <Link to='ipad' smooth={true} className='apple-navbar-item' onClick={() => handleNavItemClick('ipad')}>
          Ipad
        </Link>
        <Link to='mac' smooth={true} className='apple-navbar-item' onClick={() => handleNavItemClick('mac')}>
          Mac
        </Link>
        <Link to='apple-watch' smooth={true} className='apple-navbar-item' onClick={() => handleNavItemClick('apple-watch')}>
          Apple Watch
        </Link>
        <Link to="airpord" smooth={true} className='apple-navbar-item' onClick={() => handleNavItemClick('airpord')}>
          Airpord
        </Link>
        <Link to='accessory' smooth={true} className='apple-navbar-item' onClick={() => handleNavItemClick('accessory')}>
          Phụ kiện Apple
        </Link>
      </div>
      <div className='apple-slider'>
        <Slider {...setting}>
          {images.map((item, index) => (
            <div key={index} className='apple-slider-item'>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <div className='apple-new-product'>
        <h1 className='apple-new-product-title'>Sản phẩm mới</h1>
        <div className='apple-new-product-images'>
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/09/18/anhdoc-2.jpg;width=410" alt="" />
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/09/14/anhdoc-1.jpg;width=410" alt="" />
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/09/14/anhdoc-3.jpg;width=410" alt="" />
        </div>
      </div>
      <div id='iphone' className='iphone-list'>
        <div>
          <h2 className='list-product-title'>Iphone</h2>
        </div>
        <div className='list-product-iphone'>
          {visibleItems.map((item, index) => (
            <div key={index} className='list-product-iphone-item'>
              <Item
                style={1}
                img={item.img}
                title={item.title}
                priceSale={item.priceSale}
                price={item.price}
              ></Item>
            </div>
          ))}
        </div>
        <div className='btn-show-product'>
          <Button className='btn-show-product-iphone' onClick={handleShowAllClick}>{showAll ? `Ẩn ${items.length - 5} sản phẩm` : `xem thêm ${items.length - 5} sản phẩm`}</Button>
        </div>
      </div>
      <div id='ipad' className='ipad-list'>
        <div>
          <h2 className='list-product-title'>Ipad</h2>
        </div>
        <div className='list-product-iphone'>
          {visibleItems.map((item, index) => (
            <div key={index} className='list-product-iphone-item'>
              <Item
                style={1}
                img={item.img}
                title={item.title}
                priceSale={item.priceSale}
                price={item.price}
              ></Item>
            </div>
          ))}
        </div>
        <div className='btn-show-product'>
          <Button className='btn-show-product-iphone' onClick={handleShowAllClick}>{showAll ? `Ẩn ${items.length - 5} sản phẩm` : `xem thêm ${items.length - 5} sản phẩm`}</Button>
        </div>
      </div>
      <div id='apple-watch' className='ipad-list'>
        <div>
          <h2 className='list-product-title'>Apple Watch</h2>
        </div>
        <div className='list-product-iphone'>
          {visibleItems.map((item, index) => (
            <div key={index} className='list-product-iphone-item'>
              <Item
                style={1}
                img={item.img}
                title={item.title}
                priceSale={item.priceSale}
                price={item.price}
              ></Item>
            </div>
          ))}
        </div>
        <div className='btn-show-product'>
          <Button className='btn-show-product-iphone' onClick={handleShowAllClick}>{showAll ? `Ẩn ${items.length - 5} sản phẩm` : `xem thêm ${items.length - 5} sản phẩm`}</Button>
        </div>
      </div>
      <div id='mac' className='ipad-list'>
        <div>
          <h2 className='list-product-title'>Mac</h2>
        </div>
        <div className='list-product-iphone'>
          {visibleItems.map((item, index) => (
            <div key={index} className='list-product-iphone-item'>
              <Item
                style={1}
                img={item.img}
                title={item.title}
                priceSale={item.priceSale}
                price={item.price}
              ></Item>
            </div>
          ))}
        </div>
        <div className='btn-show-product'>
          <Button className='btn-show-product-iphone' onClick={handleShowAllClick}>{showAll ? `Ẩn ${items.length - 5} sản phẩm` : `xem thêm ${items.length - 5} sản phẩm`}</Button>
        </div>
      </div>
      <div id='airpord' className='ipad-list'>
        <div>
          <h2 className='list-product-title'>AirPord</h2>
        </div>
        <div className='list-product-iphone'>
          {visibleItems.map((item, index) => (
            <div key={index} className='list-product-iphone-item'>
              <Item
                style={1}
                img={item.img}
                title={item.title}
                priceSale={item.priceSale}
                price={item.price}
              ></Item>
            </div>
          ))}
        </div>
        <div className='btn-show-product'>
          <Button className='btn-show-product-iphone' onClick={handleShowAllClick}>{showAll ? `Ẩn ${items.length - 5} sản phẩm` : `xem thêm ${items.length - 5} sản phẩm`}</Button>
        </div>
      </div>
      <div className='ipad-list' id='accessory'>
        <div>
          <h2 className='list-product-title'>Phụ kiện iphone</h2>
        </div>
        <div className='list-product-iphone'>
          {visibleItems.map((item, index) => (
            <div key={index} className='list-product-iphone-item'>
              <Item
                style={1}
                img={item.img}
                title={item.title}
                priceSale={item.priceSale}
                price={item.price}
              ></Item>
            </div>
          ))}
        </div>
        <div className='btn-show-product'>
          <Button className='btn-show-product-iphone' onClick={handleShowAllClick}>{showAll ? `Ẩn ${items.length - 5} sản phẩm` : `xem thêm ${items.length - 5} sản phẩm`}</Button>
        </div>
      </div>
      <div className='apple-utility'>
        <h1 className='apple-utility-title'>Lợi ích khi mua sản phẩm Apple tại Hoàng Hà Mobile</h1>
        <div className='apple-utility-content'>
          <div className='apple-utility-item'>
            <img className='apple-utility-image-apple' src="https://hoanghamobile.com/Content/Apple/icon/icon-apple.png" alt="" />
            <p>
              Hoàng Hà Mobile là Nhà bán lẻ ủy quyền
              chính thức của Apple tại Việt Nam
            </p>
          </div>
          <div className='apple-utility-item'>
            <img className='apple-utility-image' src="https://hoanghamobile.com/Content/Apple/icon/apple-freeship.svg" alt="" />
            <p>
              Đặt online, free ship COD hoặc thanh toán ngay và nhận hàng chỉ sau 1 - 3 ngày
            </p>
          </div>
          <div className='apple-utility-item'>
            <img className='apple-utility-image' src="https://hoanghamobile.com/Content/Apple/icon/apple-money.svg" alt="" />
            <p>
              Những sản phẩm Apple chính hãng sẽ được trao tới tay khách hàng với mức giá tốt hàng đầu thị trường
            </p>
          </div>
          <div className='apple-utility-item'>
            <img className='apple-utility-image' src="https://hoanghamobile.com/Content/Apple/icon/apple-tragop.svg" alt="" />
            <p>
              Hỗ trợ trả góp 0% qua nhiều thẻ tín dụng ngân hàng và các công ty tài chính
            </p>
          </div>
          <div className='apple-utility-item'>
            <img className='apple-utility-image' src="https://hoanghamobile.com/Content/Apple/icon/apple-trade.svg" alt="" />
            <p>
              Tham gia chương trình thu cũ giá cao, đổi mới ưu đãi giảm thêm tới 2 triệu đồng (Xem chi tiết)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
