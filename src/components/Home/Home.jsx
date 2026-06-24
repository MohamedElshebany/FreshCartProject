import React, { useContext, useEffect, useState } from 'react'
import Style from './Home.module.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { CounterContext } from '../../Context/CounterContext';
import RecentProducts from '../RecentProducts/RecentProducts';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';



export default function Home() {
  const {counter , setCounter} = useContext(CounterContext)
    useEffect(()=>{},[])
  return <>
 <MainSlider/>
 <CategoriesSlider/>  
 <RecentProducts/>
  </>
}
