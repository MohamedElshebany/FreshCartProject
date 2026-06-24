import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import Notfound from './components/Notfound/Notfound'
import Layout from './components/Layout/Layout'
import { CounterContextProvider } from './Context/CounterContext'
import { UserContextProvider } from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CartContextProvider } from './Context/CartContext'
import { Toaster } from 'react-hot-toast'





const query = new QueryClient();


const x = createBrowserRouter([
  {path:'' , element:<Layout/>,children:[
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"products" , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:"productdetails/:id/:category" , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"login" , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'*' , element:<Notfound/>}
  ]}
])
function App() {

  return <>
    <QueryClientProvider client={query}>
     <UserContextProvider>
      <CounterContextProvider>
       <CartContextProvider>
        <RouterProvider router={x}/>
        <ReactQueryDevtools initialIsOpen='false'/>
        <Toaster/>
       </CartContextProvider>
      </CounterContextProvider>
     </UserContextProvider>
    </QueryClientProvider>
  


  </>
}

export default App
