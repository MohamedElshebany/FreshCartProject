import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useProducts() {
  function getRecent(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  const responseObject = useQuery({
    queryKey:['recentProducts'],
    queryFn: getRecent,
    // refetchInterval:3000,
    // refetchIntervalInBackground:true

    staleTime:8000,
    // retry:6,
    // retryDelay:1000
  })
  return responseObject
}
