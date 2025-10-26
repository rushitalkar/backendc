import React from 'react'
import { useRef } from 'react'
import { X } from 'lucide-react';
import { data, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({setmodel , mode }) => {
 
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
 let userInfo = {
      email: data.email,
      password: data.password,
    }
  
  try {

   const res = await axios.post("http://localhost:4001/user/login", userInfo)
  console.log(res);
    
    
   if (res.data) {
     toast.success(res.data.message)
     localStorage.setItem("User" , JSON.stringify(res.data.user))
     setmodel(false)
     setTimeout(() => {
        window.location.reload()

     },2000)
   }
  } catch (error) {
    toast.error(error.response.data.message)
  }  
    
  }
  return (
 
    

<form onSubmit={handleSubmit(onSubmit)}  className={`max-w-sm mx-auto  items-center space-y-4 w-94  shadow-2xl rounded-2xl md:p-6 p-8 `}>
<div className='flex justify-between'>
  <h1 className=' text-2xl font-bold'>Login</h1>
  <button onClick={()=>setmodel(false)} ><X className=' cursor-pointer' /></button>
  


</div>
  <div className="mb-5">
    <label htmlFor='email' className="block mb-2 text-sm font-medium  ">Your email</label>
    <input {...register("email", { required: true })}  type="email" id="email" className=" border  text-sm rounded-lg  block w-full p-2.5    " placeholder="name@gmail.com"  />
    {errors.email && <span className='text-sm font-bold text-red-500'>This Email is required</span>}

  </div>
  <div className="mb-5">
    <label htmlFor='password' className="block mb-2 text-sm font-medium">Your password</label>
    <input {...register("password", { required: true })} type="password" id="password" className=" border  text-sm rounded-lg block w-full p-2.5 "  />
  {errors.password && <span className='text-sm font-bold text-red-500'>Password is Require</span>}

  </div>

  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input {...register("remember", { required: true })} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 "  />
     {errors.remember && <span>Check is Require</span>}

    </div>

    <label for="remember" class="ms-2 text-sm font-medium">Remember me</label>
  </div>
  <div className='flex justify-between'>
     <button  type="submit" className="cursor-pointer bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Login</button>
    <button onClick={()=>setmodel(false)}   className="cursor-pointer bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "><NavLink to='/signup'>Signup</NavLink></button>

  </div>
  

</form>



  )
}

export default Login
