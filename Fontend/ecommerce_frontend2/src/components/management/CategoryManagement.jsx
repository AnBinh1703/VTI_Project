import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Alert, Input, Modal, Form, Select, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import '../../styles/CategoryManagement.css';
import instance from '../../api/api';

const { Search } = Input;

export const CategoryManagement = () => {
  const [isModalEditCategory, setIsModalEditCategory] = useState(false);
  const [isShowModalAddCategory, setIsModalAddCategory] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [categorys, setCategorys] = useState([]);
  const [form] = useForm();
  const [form2] = useForm();
  const [sortBy, setSortBy] = useState('id,asc')
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
    instance.get(`/categories?sort=${sortBy}`)
      .then(res => {
        setCategorys(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(categorys);

  const columns = [
    {
      title: 'Category ID',
      dataIndex: 'id',
      key: 'category_id',
      width: 250,
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'category_name',
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
    setIsModalEditCategory(true);
    setEditItem(item);
  };



  const handleDelete = (item) => {
    Modal.confirm({
      title: 'Confirm delete',
      content: 'Are you sure you want to delete this category?',
      onOk() {
        const categoryId = item.id;
        instance.delete(`/categories/delete/${categoryId}`)
          .then(res => {
            console.log(res);
            setIsLoading(!isLoading);
          })
          .catch(err => {
            console.log(err);
          })
      },
      onCancel() {
        // Handle cancel
      },
    });
  };

  const onFinish = (values) => {
    const isNameExists = categorys.some(category => category.name === values.name);

    if (isNameExists) {
      Modal.error({
        title: 'Category name is existed',
      });
      form2.resetFields();
      return;
    }
    const categoryName = {
      name: values.name,
    };
    const categoryId = editItem.id;
    console.log(categoryName);
    instance.put(`/categories/update/${categoryId}`, categoryName)
      .then(res => {
        console.log("Update success", res);
        setIsLoading(false);
        fetchData();
      })
      .catch(err => {
        console.log(err);
      });
    setIsModalEditCategory(false);
  };


  const onFinishAddCategory = (values) => {
    const isNameExists = categorys.some(category => category.name === values.name);
    if (isNameExists) {
      Modal.error({
        title: 'Category name đã tồn tại',
      });
      form2.resetFields();
      return;
    }
    const dataAddCategory = {
      name: values.name,
    };
    form2.resetFields();
    instance.post('/categories', dataAddCategory)
      .then(res => {
        console.log(res);
        setIsLoading(!isLoading)
      })
      .catch(err => {
        console.log(err);
      })
    setIsModalAddCategory(false);
  };


  const handleChange = (value) => {
    console.log(`selected ${value}`);
    if (value == 'id,asc') {
      setSortBy(value)
    } else if (value === 'name,asc') {
      setSortBy('name,asc')
    } else if (value === 'name,desc') {
      setSortBy('name,desc')
    }
    setIsLoading(!isLoading)
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <h2 className='category-management-title'>Quản lý danh mục sản phẩm</h2>
      <div className='category-management-content'>
        <Button className='btn-add-category' onClick={() => setIsModalAddCategory(true)}>Thêm danh mục</Button>
        <div className='category-management-filter'>
          <div className='div-filter'>
            <Search className='search-category' placeholder="input search category name" onSearch={onSearch} enterButton />
          </div>
          <div className='div-sort'>
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
        <div className='table-category'>
          {categorys.length == 0 ? (
            <Spin size="large" />
          ) : (
            <Table columns={columns} dataSource={categorys} />
          )}
          <Modal
            title="Edit category"
            open={isModalEditCategory}
            onCancel={() => setIsModalEditCategory(false)}
            onOk={() => form.submit()}
          >
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                label="Category_name"
                name="name"
                rules={[{ required: true, message: 'Please input the category name' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Add category"
            open={isShowModalAddCategory}
            onCancel={() => setIsModalAddCategory(false)}
            onOk={() => form2.submit()}
          >
            <Form form={form2} onFinish={onFinishAddCategory}>
              <Form.Item
                label="Category_name"
                name="name"
                rules={[{ required: true, message: 'Please input the category name' }]}
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
