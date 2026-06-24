import React, { useEffect, useState } from 'react'
import Style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import SliderModule from 'react-slick';
import axios from 'axios';

export default function CategoriesSlider() {
  const Slider = SliderModule.default;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:1500,
  };

  const [categories, setCategories] = useState([]);

  function getCategories(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then(({data})=>{
      setCategories(data.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

    useEffect(()=>{
      getCategories()
    },[])
  return <>
  <div className='py-5'>
    <h2 className='py-4 text-gray-800 font-medium text-xl'>Shop Populer Categories</h2>
    <Slider {...settings}>
       {categories.map((category)=>
      <div key={category.id}>
        <img className='category-img w-full' src={category.image} alt={category.name}/>
        <h3 className='font-medium mt-2'>{category.name}</h3>
      </div>
      )}
    </Slider>
  </div>
 </>
}
