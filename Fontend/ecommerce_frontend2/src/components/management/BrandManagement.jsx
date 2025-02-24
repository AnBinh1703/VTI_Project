import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Alert, Input, Modal, Form, Select, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import '../../styles/CategoryManagement.css';
import instance from '../../api/api';

const { Search } = Input;

export const BrandManagement = () => {
  const [isModalEditBrand, setIsModalEditBrand] = useState(false);
  const [isShowModalAddBrand, setIsModalAddBrand] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [brands, setBrands] = useState([]);
  const [form] = useForm();
  const [form2] = useForm();
  const [sortBy, setSortBy] = useState('id,asc');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (editItem) {
      form.setFieldsValue({
        name: editItem.name,
      });
    }
  }, [editItem, form]);

  useEffect(() => {
    fetchData();
  }, [isLoading]);

  const fetchData = () => {
    instance
      .get(`/brand?sort=${sortBy}`)
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(brands);

  const columns = [
    {
      title: 'Brand ID',
      dataIndex: 'id',
      key: 'brand_id',
      width: 250,
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Brand Name',
      dataIndex: 'name',
      key: 'brand_name',
      width: 600,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModalEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  const showModalEdit = (item) => {
    setIsModalEditBrand(true);
    setEditItem(item);
  };

  const handleDelete = (item) => {
    Modal.confirm({
      title: 'Confirm delete',
      content: 'Are you sure you want to delete this brand?',
      onOk() {
        const brandId = item.id;
        instance
          .delete(`/brand/delete/${brandId}`)
          .then((res) => {
            console.log(res);
            setIsLoading(!isLoading);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      onCancel() {
        // Handle cancel
      },
    });
  };

  const onFinish = (values) => {
    const isNameExists = brands.some((brand) => brand.name === values.name);

    if (isNameExists) {
      Modal.error({
        title: 'Brand name is existed',
      });
      form2.resetFields();
      return;
    }
    const brandName = {
      name: values.name,
    };
    const brandId = editItem.id;
    console.log(brandName);
    instance
      .put(`/brand/update/${brandId}`, brandName)
      .then((res) => {
        console.log('Update success', res);
        setIsLoading(false);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
    setIsModalEditBrand(false);
  };

  const onFinishAddBrand = (values) => {
    const isNameExists = brands.some((brand) => brand.name === values.name);
    if (isNameExists) {
      Modal.error({
        title: 'Brand name đã tồn tại',
      });
      form2.resetFields();
      return;
    }
    const dataAddBrand = {
      name: values.name,
    };
    form2.resetFields();
    instance
      .post('/brand', dataAddBrand)
      .then((res) => {
        console.log(res);
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsModalAddBrand(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    if (value === 'id,asc') {
      setSortBy(value);
    } else if (value === 'name,asc') {
      setSortBy('name,asc');
    } else if (value === 'name,desc') {
      setSortBy('name,desc');
    }
    setIsLoading(!isLoading);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <h2 className="category-management-title">Quản lý thương hiệu sản phẩm</h2>
      <div className="category-management-content">
        <Button className="btn-add-category" onClick={() => setIsModalAddBrand(true)}>
          Thêm thương hiệu
        </Button>
        <div className="category-management-filter">
          <div className="div-filter">
            <Search
              className="search-category"
              placeholder="input search brand name"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <div className="div-sort">
            <span>Sort </span>
            <Select
              defaultValue="id,asc"
              style={{
                width: 160,
              }}
              onChange={handleChange}
              options={[
                {
                  value: 'id,asc',
                  label: 'Mặc định',
                },
                {
                  value: 'name,asc',
                  label: 'Tăng dần theo tên',
                },
                {
                  value: 'name,desc',
                  label: 'Giảm dần theo tên',
                },
              ]}
            />
          </div>
        </div>
        <div className="table-category">
          {brands.length == 0 ? (
            <Spin size="large" />
          ) : (
            <Table columns={columns} dataSource={brands} />
          )}
          <Modal
            title="Edit brand"
            open={isModalEditBrand}
            onCancel={() => setIsModalEditBrand(false)}
            onOk={() => form.submit()}
          >
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                label="Brand_name"
                name="name"
                rules={[{ required: true, message: 'Please input the brand name' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Add brand"
            open={isShowModalAddBrand}
            onCancel={() => setIsModalAddBrand(false)}
            onOk={() => form2.submit()}
          >
            <Form form={form2} onFinish={onFinishAddBrand}>
              <Form.Item
                label="Brand_name"
                name="name"
                rules={[{ required: true, message: 'Please input the brand name' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};
