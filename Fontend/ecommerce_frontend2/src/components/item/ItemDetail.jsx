import { Header } from "../header/Header";
import "../../styles/ItemDetail.css";
import { useContext, useEffect, useState, createRef } from "react";
import instance from "../../api/api";
import Footer from "../home/Footer";
import { Corevalue } from "../app/Corevalue";
import { Subscrip } from "../app/Subscrip";
import { Link } from "react-router-dom";
import {
  CarOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Social } from "../app/Social";
import { AppContext } from "../../context/AppProvider";

const ItemDetail = () => {
  const [dataItemDetail, setDataItemDetail] = useState([]);
  const [productOption, setProductOption] = useState([]);
  const [optionContent, setOptionContent] = useState([]);
  const [inputRefs, setInputRefs] = useState([]);

  const savedProductId = localStorage.getItem("productId");

  function createSnowflakes() {
    const snowflakes = 50;
    const container = document.querySelector(".itemDtail-container");

    for (let i = 0; i < snowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("tuyet");
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(snowflake);
    }
  }

  // Gọi hàm khi trang đã được load
  window.addEventListener("load", createSnowflakes);

  function formatCurrency(amount) {
    // Kiểm tra xem amount có phải là một số không
    if (typeof amount !== "number") {
      return "Invalid input";
    }

    // Chuyển đổi số thành chuỗi với định dạng tiền tệ và bỏ chữ "đ"
    const formattedAmount = amount
      .toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })
      .replace("₫", "");

    return formattedAmount;
  }

  useEffect(() => {
    instance
      .get(`/products/${savedProductId}`)
      .then((res) => {
        setDataItemDetail(res.data);
        setProductOption(res.data.productOptions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [savedProductId]);

  useEffect(() => {
    if (productOption.length > 0) {
      // Lấy hình ảnh từ productOption đầu tiên và đặt vào thuộc tính src của thẻ img
      setOptionContent(productOption[0]);
    }
  }, [productOption]);

  useEffect(() => {
    setInputRefs((inputRefs) =>
      Array(productOption.length)
        .fill()
        .map((_, i) => inputRefs[i] || createRef())
    );
  }, [productOption.length]);

  const handleOptionClick = (index) => {
    setOptionContent(productOption[index]);
    inputRefs[index].current.click();
  };
  const {totalItemShopcart, setAccountStatus, setTotalItemShopcart} = useContext(AppContext)
  const handleAddOptionToCart = () => {
    const optionId = optionContent.optionId;
    const userId = localStorage.getItem('userId');
    const data = {
      optionId: optionId,
      userId: userId,
      total: 1,
    }
    instance.post("/shopcart", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  const handleAddOptionToWishList = () => {
    const optionId = optionContent.optionId;
    const userId = localStorage.getItem('userId');
    const data = {
      optionId: optionId,
      userId: userId,
    }
    instance.post("/product-love", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  return (
    <>
    <Social/>
      <div className="itemDtail-container">
        <Header />
        <Link to={'/'} className='btn-back-to-home'>Trang chủ</Link>
        <div className="content-iteamDetail">
          <div className="content-iteamDetail-left">
            <img className="image-product-detail" src={optionContent.image} alt="Lỗi" />
          </div>
          <div className="content-iteamDetail-right">
            <div>
              <h2>
                {optionContent.priceSale > 0 ? (
                  <strong className="price-sale">
                    {formatCurrency(optionContent.priceSale)} <u>đ</u>
                  </strong>
                ) : (
                  <strong className="price-sale">
                    {formatCurrency(optionContent.price)} <u>đ</u>
                  </strong>
                )}
                {optionContent.priceSale > 0 && (
                  <strike className="price">
                    {formatCurrency(optionContent.price)} <u>đ</u>
                  </strike>
                )}
              </h2>
            </div>
            <h2>{dataItemDetail.productName}</h2>
            <div className="free-ship-product">
              <CarOutlined />
              MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC
            </div>
            <p>
              <b>Lựa chọn phiên bản và màu sắc</b>
            </p>
            <div className="content-iteamDetail-option">
              {productOption &&
                productOption.map((option, index) => (
                  <div className="box-options" key={index} onClick={() => handleOptionClick(index)}>
                    <input
                      className="radio-options"
                      ref={inputRefs[index]}
                      type="radio"
                      name="check-option"
                      id=""
                    />
                    <div className="options-color">
                      {option.ram}GB - {option.color}
                      <p style={{ color: "red" }}>
                        {option.priceSale > 0
                          ? formatCurrency(option.priceSale) + "đ"
                          : formatCurrency(option.price) + "đ"}
                      </p>
                    </div>


                  </div>
                ))}
            </div>
            <p>
              <b>Chi tiết sản phẩm</b>
            </p>
            <div className="content-iteamDetail-value">
              - Màu: {optionContent.color} <br />- Ram/Rom: {optionContent.ram}{" "}
              GB <br />
            </div>
            <div className="btn-pay-product">
              <h3>Mua ngay</h3>
              <h6>
                Giao tận nhà (CDO) <br />
                Hoặc nhận tại cửa hàng
              </h6>
            </div>
            <div className="btn-cart-product" onClick={() => handleAddOptionToCart()}>
              <ShoppingCartOutlined />
              <h5>Thêm vào giỏ hàng</h5>
            </div>
            <div className="btn-wishlist-product" onClick={() => handleAddOptionToWishList()}>
              <HeartOutlined />
              <h5>Thêm vào yêu thích</h5>
            </div>
          </div>
        </div>
        <Corevalue />
        <Subscrip />
        <Footer />
      </div>
    </>
  );
};

export default ItemDetail;
