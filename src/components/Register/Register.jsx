import React, { useContext, useEffect, useState } from 'react'
import Style from './Register.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { UserContext } from '../../Context/UserContext';




export default function Register() {
  const {setUserLogin} = useContext(UserContext)
  const navigate = useNavigate()
  const [apiError, setApiError] = useState('');
  const [isLodaing, setIsLodaing] = useState(false);

  function handleRegister(formValues){
    setIsLodaing(true)
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , formValues )
  .then((response)=>{
    localStorage.setItem('userToken' , response.data.token) 
    setUserLogin(response.data.token)
    navigate("/")
  })
  .catch((error) => {
    setIsLodaing(false)
   console.log(error);
   
  })
 }


const validationSchema = Yup.object().shape({
  name:Yup.string().min(3 , 'name minimum length is 3').max(10 , 'name maximum length is 10').required("name is required"),
  email:Yup.string().email('email is inValid').required("email is required"),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/ , 'phone must be valid egyption number').required("phone is required"),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with uppercase letter').required("password is required"),
  rePassword:Yup.string().oneOf([Yup.ref('password')] , 'password and rePassword must be match').required('rePassword is required')
})



  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },
    validationSchema,
    onSubmit:handleRegister
  })

  return <>
   <div className='max-w-xl mx-auto py-6'>

     {apiError?<div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-red-300" role="alert">
     {apiError}   
   </div>:null}
    <h2 className='text-3xl text-green-600 font-bold mb-8'>Register Now</h2>
    
     <form onSubmit={formik.handleSubmit}>

      <div className="relative z-0 w-full mb-5 group">
       <input id='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
       <label htmlFor="name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Your Name :</label>
      </div>

      {formik.errors.name && formik.touched.name ?<div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-red-300" role="alert">
       {formik.errors.name}
      </div>:null}

       
       <div className="relative z-0 w-full mb-5 group">
       <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
       <label htmlFor="email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Your Email Address :</label>
      </div>

      {formik.errors.email && formik.touched.email ?<div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-red-300" role="alert">
       {formik.errors.email}
      </div>:null}


       <div className="relative z-0 w-full mb-5 group">
       <input id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
       <label htmlFor="password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Your Password :</label>
      </div>

      {formik.errors.password && formik.touched.password ?<div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-red-300" role="alert">
       {formik.errors.password}
      </div>:null}


       <div className="relative z-0 w-full mb-5 group">
       <input id='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="Password" name="rePassword" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
       <label htmlFor="rePassword" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Your rePassword :</label>
      </div>

      {formik.errors.rePassword && formik.touched.rePassword ?<div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-red-300" role="alert">
       {formik.errors.rePassword}
      </div>:null}


       <div className="relative z-0 w-full mb-5 group">
       <input id='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " />
       <label htmlFor="phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Your Phone Number :</label>
      </div>

      {formik.errors.phone && formik.touched.phone ?<div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-red-300" role="alert">
       {formik.errors.phone}
      </div>:null}

       <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 box-border border border-transparent dark:hover:bg-green-700 focus:ring-4 dark:focus:ring-green-800 shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none">
        {isLodaing?<i className='fas fa-spinner fa-spin'></i>:'Submit'}
        </button>
     </form>
   </div>
 </>
}
