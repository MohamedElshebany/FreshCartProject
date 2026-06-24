import React, { useEffect, useState } from 'react'
import Style from './MainSlider.module.css'
import mainSlider from '../../assets/images/slider-image-3.jpeg'
import mainSlider2 from '../../assets/images/slider-image-2.jpeg'
import mainSlider3 from '../../assets/images/grocery-banner-2.jpeg'
import slide1 from '../../assets/images/slider-image-1.jpeg'
import slide2 from '../../assets/images/slider-2.jpeg'
import Slider from "react-slick";
import SliderModule from 'react-slick';
export default function MainSlider() {
  const Slider = SliderModule.default;
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    arrows:false,
  };
    const [counter, setCounter] = useState(0);
    useEffect(()=>{},[])
  return <>
  <div className="row">
    <div className="w-3/4">
     <Slider {...settings}>
      <img src={mainSlider} className='w-full h-[400px]' />
      <img src={mainSlider2} className='w-full h-[400px]' />
      <img src={mainSlider3} className='w-full h-[400px]' />
     </Slider>
    </div>
    <div className="w-1/4">
    <img src={slide1} className='w-full h-[200px]' />
    <img src={slide2} className='w-full h-[200px]' />
    </div>
  </div>
</>
}
