import React, { useContext, useEffect, useState } from 'react';
import { Badge, Space, Table, Button, Input, Modal, Form, Select } from 'antd';
import '../../styles/TableProduct.css';
import { useForm } from 'antd/es/form/Form';
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from '../../context/AppProvider';
import { getAllBrand, getAllCategory } from '../features/recallApiLoading';
import axios from 'axios';
import FormData from 'form-data';
import instance from '../../api/api';
const { Option } = Select;
const { InputNumber } = Input;

const TableProduct = () => {
  const [isShowModalEditProduct, setIsShowModalEditProduct] = useState(false);
  const { isShowModalAddProduct, setIsShowModalAddProduct } = useContext(AppContext)
  const [isShowEditOptionModal, setIsShowEditOptionModal] = useState(false);
  const [isShowAddOptionModal, setIsShowAddOptionModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form1] = useForm();
  const [form2] = useForm();
  const {productSortBy, setProductSortBy, dataInputSearchProduct} = useContext(AppContext);
  const handleOk = () => {

  };
  const handleCancel = () => {
    setIsShowEditOptionModal(false);
  };
  const dispatch = useDispatch();
  const responseBrandApi = useSelector(state => state.apiSave?.responApiBrand);

  useEffect(() => {
    // Dispatch the action to fetch brand data when the component mounts
    dispatch(getAllBrand());
  }, [dispatch]);


  useEffect(() => {
    if (responseBrandApi) {
      // console.log(responseBrandApi.content);
    }
  }, [responseBrandApi]);
  const responseCategoryApi = useSelector(state => state.apiSave?.responApiCategory);

  useEffect(() => {
    // Dispatch the action to fetch brand data when the component mounts
    dispatch(getAllCategory());
  }, [dispatch]);

  // Log the data when it changes
  useEffect(() => {
    if (responseCategoryApi) {
      // console.log(responseCategoryApi.content);
    }
  }, [responseCategoryApi]);
  const [productEdit, setProductEdit] = useState({
    id: '',
    name: '',
    categoryId: '',
    brandId: '',
  })

  const [form] = Form.useForm();
  const [formAdd] = Form.useForm();

  useEffect(() => {
    if (selectedOption) {
      // Set form values when the selected option changes
      form.setFieldsValue({
        color: selectedOption.color,
        price: selectedOption.price,
        priceSale: selectedOption.priceSale,
        quantity: selectedOption.quantity,
        ram: selectedOption.ram,
        image: selectedOption.image,
        optionId: selectedOption.optionId, 
      });
    }
  }, [selectedOption, form]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [isLoading, productSortBy, dataInputSearchProduct]);

  const fetchData = () => {
    console.log(1);
    instance
      .get(`/products?page=0&size=999&sort=${productSortBy}&filterName=${dataInputSearchProduct}`)
      .then((res) => {
        setProducts(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dataProduct = products.map((product) => {
    return {
      id: product.id,
      name: product.productName,
      category: product.category.name,
      brand: product.brand.name,
      options: product.productOptions.map((option) => {
        return {
          optionId: option.optionId,
          image: option.image,
          color: option.color,
          price: option.price,
          priceSale: option.priceSale,
          ram: option.ram,
          quantity: option.quantity, 
          productId: option.productId,
        };
      }),
    };
  });
  const onFinishUpdateOptions = (values) => {
    // Update the selected option with the form values
    const updatedOption = {
      color: values.color,
      price: values.price,
      priceSale: values.priceSale,
      quantity: values.quantity,
      ram: values.ram,
      image: values.image,
    };
    const id = selectedOption.optionId;
    instance.put(`/product-options/update/${id}`, updatedOption)
    .then(res => {
      fetchData();
    }).catch(err => {
      console.log(err);
    })
    form.resetFields();
    setIsShowEditOptionModal(false);
  };

  useEffect(() => {
    handleOk();
  }, []);
  const showModalEditOption = (record) => {
    console.log("here: ",record);
    setSelectedOption(record);
    setIsShowEditOptionModal(true);
  }

  const onFinishAddProduct = (values) => {
    const addProduct = {
      name: values.name,
      categoryId: values.category,
      brandId: values.brand,
    }
    instance.post("/products", addProduct)
      .then(res => {
        setProductSortBy('id,desc')
        fetchData();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(!isLoading);
        setIsShowModalAddProduct(false);
        form2.resetFields();
      });
  }
  const onFinish = (values) => {
    const dataEdit = {
      name: values.name,
      categoryId: getCategoryIDByName(values.category), // Use the category ID directly
      brandId: getBrandIDByName(values.brand),       // Use the brand ID directly
    };
    const id = productEdit.id;
    instance.put(`/products/update/${id}`, dataEdit)
      .then(res => {
      }).catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsShowModalEditProduct(false);
        form1.resetFields();
        setIsLoading(!isLoading)
      })

  };




  const showModalEditProduct = (item) => {
    console.log(item);
    setProductEdit(item);
    setIsShowModalEditProduct(true);
    form1.setFieldsValue({
      name: item.name,
      category: item.category,
      brand: item.brand,
    });
  };



  const expandedRowRender= (record) => {
    const optionColumns = [
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <img src={image} alt='product' style={{ maxWidth: '50px', maxHeight: '50px' }} />
      },
      {
        title: 'Color',
        dataIndex: 'color',
        key: 'color',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Price Sale',
        dataIndex: 'priceSale',
        key: 'priceSale',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'RAM',
        dataIndex: 'ram',
        key: 'ram',
      },
      {
        title: 'Action',
        key: 'operation',
        render: (_, option) => (
          <Space>
            <a onClick={() => {showModalEditOption(option)}}>Edit</a>
            <a onClick={() => handleDeleteOption(option)}>Delete</a>
          </Space>
        ),
      },
    ];
    console.log(record);
    return <Table columns={optionColumns} rowKey={(option) => option.id} dataSource={record.options} pagination={false} />;
  };
  const handleDeleteOption = (item) => {
    Modal.confirm({
      title: 'Confirm delete',
      content: 'Are you sure you want to delete this option?',
      onOk() {
        const optionId = item.optionId;
        instance
          .delete(`/product-options/${optionId}`)
          .then((res) => {
            console.log("Delete option successfully");
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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Brand', // New column for Branch
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Action',
      key: 'operation',
      render: (_, record) => (
        <Space>
          <a onClick={() => {showModalEditProduct(record)}}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
          <a onClick={() => { setIsShowAddOptionModal(true); setSelectedProduct(record) }}>Add option</a>
        </Space>
      ),
    },
  ];

  const handleDelete = (item) => {
    Modal.confirm({
      title: 'Confirm delete',
      content: 'Are you sure you want to delete this brand?',
      onOk() {
        const productId = item.id;
        instance
          .delete(`/products/delete/${productId}`)
          .then((res) => {
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
  const onFinishAddOption = (values) => {
    const form = {
      color: values.color,
      price: values.price,
      priceSale: values.priceSale,
      quantity: values.quantity,
      ram: values.ram,
      image: values.image,
      productId: selectedProduct.id,
    };
    instance.post("/product-options", form)
    .then(res => {
      fetchData();
      formAdd.resetFields();
    }).catch(err => {
      console.log(err);
    })
    setIsShowAddOptionModal(false);
  };
  const getCategoryIDByName = (categoryName) => {
    const category = responseCategoryApi?.content.find((c) => c.name === categoryName);
    return category ? category.id : null;
  };

  const getBrandIDByName = (brandName) => {
    const brand = responseBrandApi?.find((b) => b.name === brandName);
    return brand ? brand.id : null;
  };
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 12,  // Đặt số lượng bản ghi mỗi trang theo mong muốn
  });
  return (
    <>
      <Table
        columns={columns}
        // expandable={{
        //   expandedRowRender: (record) => {expandedRowRenderTable(record)},
        //   defaultExpandedRowKeys: ['0'],
        // }}
        expandable={{expandedRowRender}}
        rowKey={(record) => record.id}
        dataSource={dataProduct}
        size="middle"
        pagination={pagination}
        onChange={(pagination, filters, sorter) => {
          // Lưu ý: Nếu bạn sử dụng server-side pagination, bạn có thể cần gọi fetchData lại với các tham số mới từ pagination, filters, sorter.
          setPagination(pagination);
        }}
      />
      <Modal
        title="Edit product"
        visible={isShowModalEditProduct}
        onCancel={() => setIsShowModalEditProduct(false)}
        onOk={() => form1.submit()}
      >
        <Form form={form1} onFinish={onFinish}>
          <Form.Item label="Product name" name="name" rules={[{ required: true, message: 'Please input the category name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select the category' }]}>
            <Select
              placeholder="Select a category"
              onChange={(value, option) => form1.setFieldsValue({ category: option?.key })}
            >
              {responseCategoryApi &&
                responseCategoryApi.content.map((category) => (
                  <Option key={category.name} value={category.name}>
                    {category.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Brand" name="brand" rules={[{ required: true, message: 'Please select the brand' }]}>
            <Select
              placeholder="Select a brand"
              onChange={(value, option) => form1.setFieldsValue({ brand: option?.key })}
            >
              {responseBrandApi &&
                responseBrandApi.map((brand, index) => (
                  <Option key={index} value={brand.name}>
                    {brand.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Add product"
        key="addProductModal"
        open={isShowModalAddProduct}
        onCancel={() => setIsShowModalAddProduct(false)}
        onOk={() => form2.submit()}
      >
        <Form form={form2} onFinish={onFinishAddProduct}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the product name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select the category' }]}>
            <Select placeholder="Select a category">
              {responseCategoryApi &&
                responseCategoryApi.content.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Brand" name="brand" rules={[{ required: true, message: 'Please select the brand' }]}>
            <Select placeholder="Select a brand">
              {responseBrandApi &&
                responseBrandApi.map((brand) => (
                  <Option key={brand.id} value={brand.id}>
                    {brand.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Basic Modal"
        key="editOptionModal"
        open={isShowEditOptionModal}
        onCancel={handleCancel}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onFinishUpdateOptions}>
          <Form.Item label="Image" name="image">
            <Input placeholder='Nhập đường dẫn ảnh' />
          </Form.Item>
          <Form.Item label="Color" name="color">
            <Input placeholder='Color' />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <Input placeholder='Price' />
          </Form.Item>
          <Form.Item label="PriceSale" name="priceSale">
            <Input placeholder='PriceSale' />
          </Form.Item>
          <Form.Item label="Quantity" name="quantity">
            <Input placeholder='Quantity' />
          </Form.Item>
          <Form.Item label="RAM" name="ram">
            <Input placeholder='Ram' />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Basic Modal"
        key="addOptionModal"
        open={isShowAddOptionModal}
        onCancel={() => setIsShowAddOptionModal(false)}
        onOk={() => formAdd.submit()}
      >
        <Form form={formAdd} onFinish={onFinishAddOption}>
          <Form.Item label="Image" name="image">
            <Input placeholder='Nhập đường dẫn ảnh' />
          </Form.Item>
          <Form.Item label="Color" name="color">
            <Input placeholder='Color' />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <Input placeholder='Price' />
          </Form.Item>
          <Form.Item label="PriceSale" name="priceSale">
            <Input placeholder='PriceSale' />
          </Form.Item>
          <Form.Item label="Quantity" name="quantity">
            <Input placeholder='Quantity' />
          </Form.Item>
          <Form.Item label="RAM" name="ram">
            <Input placeholder='Ram' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TableProduct;
