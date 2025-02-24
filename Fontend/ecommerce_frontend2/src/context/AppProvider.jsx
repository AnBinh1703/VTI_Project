import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import { FormLogin } from '../components/form/FormLogin';
import { FormForgotPassword } from '../components/form/FormForgotPassword';
import FormRegister from '../components/form/FormRegister';
import { InfoAccount } from '../components/account/InfoAccount';
import { LoveProduct } from '../components/account/LoveProduct';
import { OrderYour } from '../components/account/OrderYour';

export const AppContext = React.createContext();
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: "flex",justifyContent:"center", alignItems:"center", backgroundColor:"#e0e0e0"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",justifyContent:"center", alignItems:"center", backgroundColor:"#e0e0e0" }}
      onClick={onClick}
    />
  );
}
export const AppProvider = ({children}) => {
  const [isStatusLogin, setIsStatusLogin] = useState("form-login")
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const renderLoginForm = () => <FormLogin/>
  const renderForgotPasswordForm = () => <FormForgotPassword/>
  const renderCreateAccountForm = () => <FormRegister/>
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [signIn, toggle] = React.useState(true);

  const showModal = () => {
      setIsModalOpen(true);
  };
  const handleOk = () => {
      setIsModalOpen(false);
  };
  const handleCancel = () => {
      setIsModalOpen(false);
  };
  const renderModalContent = () => {
      switch (isStatusLogin) {
          case 'form-login':
              return renderLoginForm();
          case 'form-forgot-password':
              return renderForgotPasswordForm();
          case 'form-create-account':
              return renderCreateAccountForm();
          default:
              return null;
      }
  };
  const [accountStatus, setAccountStatus] = useState('account-info');
  const renderAccountContent = () => {
      switch(accountStatus){
          case 'account-info':
              return <InfoAccount/>
          case 'love-product':
              return <LoveProduct/>   
          case 'order-your':
              return <OrderYour/>     
          default:
              return null;    
      }
  }
  const [status, setStatus] = useState('Dashboard');
  const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);
  const [productSortBy, setProductSortBy] = useState('id,desc');
  const [dataInputSearchProduct, setDataInputSearchProduct] = useState('');
  const [totalItemShopcart, setTotalItemShopcart] = useState(0);
  return (
    <AppContext.Provider 
      value={{settings,
        isStatusLogin,
        setIsStatusLogin,
        renderModalContent,
        isModalOpen,
        setIsModalOpen,
        showModal,
        handleOk,
        handleCancel,
        accountStatus,
        setAccountStatus,
        renderAccountContent,
        status,
        setStatus,
        isShowModalAddProduct,
        setIsShowModalAddProduct,
        productSortBy,
        setProductSortBy,
        dataInputSearchProduct,
        setDataInputSearchProduct,
        totalItemShopcart,
        setTotalItemShopcart
        }}>
      {children}
    </AppContext.Provider>
  )
}
