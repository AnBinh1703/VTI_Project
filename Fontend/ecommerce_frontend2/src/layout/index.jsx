import React from 'react'
import SlideShow from '../components/Slider';
import TopSale from "../components/TopSale";
import FlashSale from "../components/FlashSale";
import { LoveCp } from '../components/LoveCp';
import { BoxProduct } from '../components/AppleProduct';
import { OutstandProduct } from '../components/OutstandProduct';
import { SmartWatch } from '../components/SmartWatch';
import { OutstanLaptop } from '../components/OutstanLaptop';
import { OutstanScreen } from '../components/OutstanScreen';
import { OutstanSmartTV } from '../components/OutstanSmartTV';
import { OutstanHeadphone } from '../components/OutstanHeadphone';
import { Tablet } from '../components/Tablet';
import { Battery } from '../components/Battery';
import { SmartHome } from '../components/SmartHome';
import { Accessory } from '../components/Accessory';
import { Testimonial } from '../components/testimonial';
const Index = () => {
  return (
    <div>
      <SlideShow />
      <TopSale />
      <FlashSale />
      <LoveCp />
      <BoxProduct />
      <OutstandProduct />
      <SmartWatch />
      <OutstanLaptop />
      <OutstanScreen />
      <OutstanSmartTV />
      <Tablet />
      <OutstanHeadphone />
      <Battery />
      <SmartHome />
      <Accessory/>
      <Testimonial/>
    </div>
  )
}
export default Index;



