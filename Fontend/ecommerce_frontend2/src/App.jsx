import { Route, Routes, BrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./layout/Home";
import { Apple } from "./layout/Apple";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MobilePhone } from './layout/MobilePhone';
import { CheckOrder } from './layout/CheckOrder';
import { ShopCart } from './layout/ShopCart';
import { Management } from './layout/Management';
import { Account } from './layout/Account';
import { ProductCategory } from './layout/ProductCategory';
import ItemDetail from './components/item/ItemDetail';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return null;
}
function App() {
  return (
    <>
      <BrowserRouter >
        <ScrollToTop />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Apple} path="/apple" />
          <Route Component={MobilePhone} path='/mobilephone' />
          <Route Component={CheckOrder} path='/check-order'/>
          <Route Component={ShopCart} path='/shop-cart'/>
          <Route Component={Management} path='/management'/>
          <Route Component={Account} path='/account'/>
          <Route Component={ProductCategory} path='/productCategory'/>
          <Route Component={ItemDetail} path='/productDetail'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
