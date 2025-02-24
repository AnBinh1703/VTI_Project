import React from 'react'
import SlideShow from '../components/app/Slider';
import TopSale from "../components/home/TopSale";
import FlashSale from "../components/home/FlashSale";
import { LoveCp } from '../components/home/LoveCp';
import { BoxProduct } from '../components/home/AppleProduct';
import { OutstandProduct } from '../components/home/OutstandProduct';
import { SmartWatch } from '../components/home/SmartWatch';
import { OutstanLaptop } from '../components/home/OutstanLaptop';
import { OutstanScreen } from '../components/home/OutstanScreen';
import { OutstanSmartTV } from '../components/home/OutstanSmartTV';
import { OutstanHeadphone } from '../components/home/OutstanHeadphone';
import { Tablet } from '../components/home/Tablet';
import { Battery } from '../components/home/Battery';
import { SmartHome } from '../components/home/SmartHome';
import { Accessory } from '../components/home/Accessory';
import { Testimonial } from '../components/home/Testimonial';
import { Corevalue } from '../components/app/Corevalue';
import { Header } from '../components/header/Header';
import Footer from '../components/home/Footer';
import '../styles/Home.css'
import { Social } from '../components/app/Social';
import { Subscrip } from '../components/app/Subscrip';
const Home = () => {
  return (
    <div className='home'>
      <Social/>
      <Header />
      <SlideShow />
      <TopSale />
      <FlashSale />
      <LoveCp />
      <BoxProduct />
      <OutstandProduct a={true} />
      <SmartWatch />
      <OutstanLaptop />
      <OutstanScreen />
      <OutstanSmartTV />
      <Tablet />bbbbbbbb
      {/* <OutstanHeadphone />
      <Battery />
      <SmartHome />
      <Accessory /> */}
      <Testimonial />
      <Corevalue />
      <Subscrip/>      
      <Footer/>
    </div>
  )
}
export default Home;



