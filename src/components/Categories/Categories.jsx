import React, { useEffect, useState } from 'react'
import Style from './Categories.module.css'
import useProducts from '../../Hooks/useProducts';

export default function Categories() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{},[])
    const {data,isError,error,isLoading,isFetching} = useProducts();
    
    
  return <>
  <h2>Categories</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, nobis!</p>
  </>
}
