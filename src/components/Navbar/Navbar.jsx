import React, { useContext, useEffect, useState } from 'react'
import Style from './Navbar.module.css'
import logo from '../../assets/images/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';


export default function Navbar() {
  const navigate = useNavigate()
  const {userLogin , setUserLogin} = useContext(UserContext)

  function LogOut(){
    localStorage.removeItem('userToken')
    setUserLogin(null)
    navigate('/login')

  }

    useEffect(()=>{},[])
  return <>
    <nav className='bg-gray-100 static lg:fixed top-0 right-0 left-0 z-50 '>
      <div className="container justify-between mx-auto flex items-center flex-col lg:flex-row">
         
        <div className='flex flex-col lg:flex-row items-center'>
          <img width={110} src={logo} alt="fresh cart logo" />

          <ul className='flex flex-col lg:flex-row items-center'>
            {userLogin? <>
            <li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="">Home</NavLink></li>
            <li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="cart">Cart</NavLink></li>
            <li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="products">Products</NavLink></li>
            <li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="brands">Brands</NavLink></li>
            <li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="categories">Categories</NavLink></li>
            </> : null }
          </ul>
        </div>


        <div className='flex flex-col lg:flex-row items-center'>
          <ul className='flex flex-col lg:flex-row py-2'>
            {!userLogin ? <><li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="login">Login</NavLink></li>
            <li className='py-2'><NavLink className="mx-2 py-2 text-slate-900 font-light text-lg" to="register">Register</NavLink></li></> 
          :<li className='py-2'><span onClick={LogOut} className="mx-2 py-2 text-slate-900 font-light text-lg cursor-pointer" >Logout</span></li> } 
          </ul>

          <ul className='list-none flex lg:flex-row items-center'>
          <li className='items-center'>
            <i className='fab mx-2 fa-facebook'></i>
            <i className='fab mx-2 fa-twitter'></i>
            <i className='fab mx-2 fa-instagram'></i>
            <i className='fab mx-2 fa-youtube'></i>
            <i className='fab mx-2 fa-tiktok'></i>
          </li>
          </ul>
        </div>

      </div>
    </nav>
  </>
}
