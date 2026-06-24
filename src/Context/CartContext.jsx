import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartContextProvider(props){
   
   const headers = {
    token: localStorage.getItem('userToken')
   }


    function getLoggedUserCart(){
       return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function deleteProductItem(productId){
       return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
            headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function addProductToCart(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` ,
             {
             productId : productId
             } , {
            headers
        }).then((response)=> response)
          .catch((error)=> error)
    }

    function updateCartItemCount(productId , count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
             {
             count : count
             } , {
            headers
        }).then((response)=> response)
          .catch((error)=> error)
    }


    return <CartContext.Provider value={{getLoggedUserCart , deleteProductItem , addProductToCart , updateCartItemCount}}>
            {props.children}
           </CartContext.Provider>
}

