import React, { useContext, useEffect, useState } from 'react'
import Style from './RecentProducts.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ClimbingBoxLoader } from 'react-spinners';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';




export default function RecentProducts() {

  const {addProductToCart} = useContext(CartContext)

  async function addProduct(productId){
    const response = await addProductToCart(productId)
    
    if(response.data.status === "success"){
      toast.success(response.data.message , {
        duration:2000,
        position:'bottom-left'
      })
    }else {
      toast.error(response.data.message , {
        duration:2000,
        position:'bottom-left'
      })
    }

    console.log(response);
    
  }

  function getRecent(){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  const {data,isError,error,isLoading,isFetching} = useQuery({
    queryKey:['recentProducts'],
    queryFn: getRecent,
    refetchInterval:1000,
    refetchIntervalInBackground:true,
    refetchOnWindowFocus : false ,
    staleTime:0,
    // retry:6,
    // retryDelay:1000,
    select:(data)=> data.data.data
  })

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

     {data.map((product)=>
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
      </Link>

       <button onClick={()=> addProduct(product.id)} className='btn'>add to cart</button>

     </div>
    </div>
    )}
    


   </div>
  </>
}
