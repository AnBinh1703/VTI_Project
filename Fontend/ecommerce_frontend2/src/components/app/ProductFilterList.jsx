import React, { useState } from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import { Dropdown, Space, Menu } from 'antd';

import '../../styles/ProductFilterList.css'
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Apple
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Sam Sung
            </a>
        ),

    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Redme
            </a>
        ),
    },
    {
        key: '4',
        label: 'Oppo',
    },
    {
        key: '5',
        label: 'Xioame',
    },
    {
        key: '6',
        label: 'Vivo',
    },
    {
        key: '7',
        label: 'Nokia',
    },
    {
        key: '8',
        label: 'Galaxy',
    },
];
export const ProductFilterList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const handleMenuSelect = ({key}) => {
        setSelectedCategory(key)
    }
    const menu = (
        <Menu>
          {items.map(item => (
            <Menu.Item key={item.key} onClick={handleMenuSelect}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      );
    return (
        <div className='product-filter-list'>
            <h1 className='product-filter-title'>Lọc danh sách: </h1>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Danh mục
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Thương hiệu
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Giá
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                           Độ phân giải
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Kích thước màn hình
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            RAM
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='product-filter-item'>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Sắp xếp
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}
