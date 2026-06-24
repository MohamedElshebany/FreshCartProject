import React, { useEffect, useState } from 'react'
import Style from './Products.module.css'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import axios from 'axios';
import useProducts from '../../Hooks/useProducts';


export default function Products() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{},[])
   const {data,isError,error,isLoading,isFetching} = useProducts()
   if(isLoading){
  return <div className='py-8 w-full flex justify-center'>
    <ClimbingBoxLoader color='green'/>
  </div> 
}
if(isError){
  return <div className='py-8 w-full flex justify-center'>
    <h3>{error}</h3>
  </div> 
}

  return <>
   <div className="row">

     {data?.data.data.map((product)=>
    <div key={product.id} className="w-1/6 px-2">
     <div className="product py-4">
      <Link to={`/productdetails/${product.id}/${product.category.name}`}>
        <img className='w-full' src={product.imageCover} alt={product.title} />
        <span className='block font-light mt-2 text-green-600'>{product.category.name}</span>
        <h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>

        <div className='flex justify-between items-center'>
          <span>{product.price} EGP</span> 
          <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-500'></i></span> 
        </div>
          <button className='btn'>add to cart</button>
      </Link>
     </div>
    </div>
    )}
   </div>
  </>


}
