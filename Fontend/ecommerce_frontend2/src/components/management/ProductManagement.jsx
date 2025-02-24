import React, { useContext, useEffect, useState } from 'react'
import TableProduct from './TableProduct'
import { Button, Input, Select } from 'antd'
import '../../styles/ProductManagement.css'
import axios from 'axios'
import instance from '../../api/api'
import { AppContext } from '../../context/AppProvider'
const { Search } = Input


export const ProductManagement = () => {
  const {productSortBy, setProductSortBy} = useContext(AppContext);
  const {isShowModalAddProduct, setIsShowModalAddProduct,setDataInputSearchProduct} = useContext(AppContext)
  const onSearch = (value, _e, info) => {console.log(value);setDataInputSearchProduct(value)};
  const handleChange = (value) => {
    console.log(value);
    setProductSortBy(value)
  };


  return (
    <div className='product-management-container'>
      <h1 className='product-management-title'>QUẢN LÝ SẢN PHẨM</h1>
      <div>
        <Button className='btn-add-product' onClick={() => setIsShowModalAddProduct(true)}>Thêm sản phẩm</Button>
        <Button className='btn-reset-list-product' onClick={() => {setDataInputSearchProduct(''); setProductSortBy('id,desc')}}>Reset</Button>
        <div className='product-management-filter'>
          <Search className='search-category' placeholder="input search product name" onSearch={onSearch} enterButton />
          <div>
            <span>Sort by </span>
            <Select
              defaultValue="productName,asc"
              style={{
                width: 160,
              }}
              onChange={handleChange}
              options={[
                {
                  value: 'productName,asc',
                  label: 'Tăng dần theo tên',
                },
                {
                  value: 'productName,desc',
                  label: 'Giảm dần theo tên',
                },
              ]}
            />
          </div>  
        </div>
      </div>
      <TableProduct />
    </div>
  )
}
