import React, { useContext, useEffect, useState } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext';

export default function Cart() {

    const {getLoggedUserCart , deleteProductItem , updateCartItemCount} = useContext(CartContext)
  
    const [cartDetails, setCartDetails] = useState(null);

    async function getCartItem(){
      const response = await getLoggedUserCart();
      console.log(response.data.data);
      setCartDetails(response.data.data)
      
    }

    async function deleteItem(productId){
      const response = await deleteProductItem(productId);
      console.log(response.data.data);
      setCartDetails(response.data.data)
      
    }

    async function updateCartCount(productId , count){
      const response = await updateCartItemCount(productId,count);
       console.log(response.data.data);
       setCartDetails(response.data.data)
      
    }

    useEffect(()=>{
      getCartItem();
    },[])

  return <>
  
<div className="relative overflow-x-auto sm:rounded-lg">
  <h2 className='text-3xl text-center text-green-600 pb-5'> Shopping Cart </h2>
  <h3 className='text-center text-slate-600 text-lg font-light'>Total Cart Price : {cartDetails?.totalCartPrice} EGP</h3>
  <table className="w-3/4 mx-auto my-6 text-sm text-left text-gray-600">
    <thead className="text-sm text-gray-700 bg-gray-100 border-b border-gray-200">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Product
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Qty
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Price
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Action
        </th>
      </tr>
    </thead>

    <tbody>
      {cartDetails?.products.map((product)=>  
      
        <tr key={product.product.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="p-4">
          <img
            src={product.product.imageCover}
            className="w-16 md:w-24 max-w-full max-h-full"
            alt={product.product.title}
          />
        </td>

        <td className="px-6 py-4 font-semibold text-gray-900">
          {product.product.title}
        </td>

        <td className="px-6 py-4">
          <form className="max-w-xs mx-auto">
            <label htmlFor="counter-input-1" className="sr-only">
              Choose quantity:
            </label>

            <div className="relative flex items-center">
              <button
                onClick={()=>updateCartCount(product.product.id , product.count-1)}
                type="button"
                className="flex items-center justify-center text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 rounded-full text-sm h-6 w-6"
              >
                <svg
                  className="w-3 h-3 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14"
                  />
                </svg>
              </button>

             <span className='px-2'>{product.count}</span>

              <button
               onClick={()=>updateCartCount(product.product.id , product.count+1)}
                type="button"
                className="flex items-center justify-center text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 rounded-full text-sm h-6 w-6"
              >
                <svg
                  className="w-3 h-3 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </td>

        <td className="px-6 py-4 font-semibold text-gray-900">
          {product.price} EGP
        </td>

        <td className="px-6 py-4">
          <button onClick={()=>deleteItem(product.product.id)} className="font-medium cursor-pointer text-red-600 hover:underline">
            Remove
          </button>
        </td>
      </tr>

      )}
      
    </tbody>
  </table>
</div>

 </>
}
