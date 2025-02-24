import React, { useEffect, useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import axios from "axios";
import instance from "../../api/api";

const Statistics = () => {
  const [form, setForm] = useState({
    color: "",
    price: 0,
    quantity: 0,
    ram: 0,
    productId: 0,
  });
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = async (file) => {
    try {
      // Convert file to base64 string
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result.split(",")[1]; // Extract base64 data
        // Create a new FormData object
        const formData = new FormData();
        formData.append("image", base64Image); // Add base64 image to the form
        setImage(formData); // Update image state with the form
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("form", JSON.stringify(form));
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/product-options",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product option added successfully", response);
      // Clear form and image after successful submission
      setForm({
        color: "",
        price: 0,
        quantity: 0,
        ram: 0,
        productId: 0,
      });
      setImage(null);
    } catch (error) {
      console.error("Error adding product option", error);
    }
  };
  const [img, setImg] = useState('');
  useEffect(() => {
    instance.get("/products")
    .then(res => {
      console.log(res.data.content[0].productOptionDTOs[0].image);
      setImg(res.data.content[0].productOptionDTOs[0].image)
    })
    .catch(err => {
      console.log(err);
    })
  },[])
return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Color">
        <Input name="color" value={form.color} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Price">
        <Input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Quantity">
        <Input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="RAM (GB)">
        <Input
          type="number"
          name="ram"
          value={form.ram}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Product ID">
        <Input
          type="number"
          name="productId"
          value={form.productId}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Image">
        <Upload onChange={handleImageChange}>
          <Button>Select Image</Button>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Product Option
      </Button>
      <img src={img} alt="" />
    </Form>
  );
};

export default Statistics;