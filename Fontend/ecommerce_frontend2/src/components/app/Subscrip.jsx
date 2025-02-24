import React from 'react'
import { Input, Space } from 'antd';
import '../../styles/Subscrip.css';

const { Search } = Input;
export const Subscrip = () => {
const onSearch = (value, _e, info) => console.log(info?.source, value)
  return (
    <div className='sub-scrip-container'>
        <div>
            <img className='sub-scrip-image' src="https://hoanghamobile.com/Content/web/img/sub-logo.png" alt="https://hoanghamobile.com/Content/web/img/sub-logo.png" />
        </div>
        <div className='sub-scrip-content'>
            <h3>Đăng ký nhận tin</h3>
            <p className='subscrip-ct'>Đăng ký để nhận những chương trình khuyến mại hot nhất của Hoàng Hà Mobile</p>
        </div>
        <div className='search-new-content'>
        <Search id='search-news' placeholder="Nhập E-mail của bạn" onSearch={onSearch} enterButton />
        </div>
    </div>
  )
}
