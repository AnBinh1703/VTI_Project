import { Route, Routes, BrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./layout/Home";
import { Apple } from "./layout/Apple";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OutstandProduct } from './components/home/OutstandProduct';
import { MobilePhone } from './layout/MobilePhone';
import { Laptop } from './layout/Laptop';
import { Clock } from './layout/Clock';
import { Screen } from './layout/Screen';
import { SmartTV } from './layout/SmartTV';
import { CheckOrder } from './layout/CheckOrder';
import { ShopCart } from './layout/ShopCart';
import { Management } from './layout/Management';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return null;
}
function AccountRoute() {
  return (
    <>
      <BrowserRouter >
        <ScrollToTop />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Apple} path="/apple" />
          <Route Component={MobilePhone} path='/mobilephone' />
          <Route Component={Laptop} path='/laptop' />
          <Route Component={Clock} path='/clock' />
          <Route Component={Screen} path='/screen'/>
          <Route Component={SmartTV} path='/smart-tv'/>
          <Route Component={CheckOrder} path='/check-order'/>
          <Route Component={ShopCart} path='/shop-cart'/>
          <Route Component={Management} path='/management'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AccountRoute;