import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage =  () => {
  let navigate = useNavigate()

     const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

    
    

  const onSubmit = async (data) => {
    let userInfo = {
      username: data.Username,
      email: data.email,
      password: data.password,
    }
  
  

  try {

   const res = await axios.post("http://localhost:4001/user/signup", userInfo)
  console.log(res);
    
    
   if (res.data) {
     alert("User Created Successfully")

   }
  } catch (error) {
    alert("User Email Already Exist" , error)
  }
  }
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 p-4 '>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-6 rounded-xl border shadow-2xl  ">
        <div className="mb-5">
          <label htmlFor="Username" className="block mb-2 text-sm font-medium">Username</label>
          <input {...register("Username", { required: true })} type="text" id="Username" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" />
             {errors.Username && <span className='text-sm font-bold text-red-500'>Username is required</span>}
            

        </div>
         <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
          <input {...register("email", { required: true })} type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" />
             {errors.email && <span className='text-sm font-bold text-red-500'>This Email is required</span>}


        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
          <input {...register("password", { required: true 
          })}
          type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
          {errors.password && <span className='text-sm font-bold text-red-500'>Password is required</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">Repeat password</label>
          <input type="password" {...register('confirmPassword', {
          required: 'Confirm Password is required',
          validate: (value) =>
            value === getValues('password') || 'Passwords do not match',
        })}
          id="confirmPassword" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
         {errors.confirmPassword && <p className='text-sm font-bold text-red-500'>{errors.confirmPassword.message}</p>}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input {...register("checkbox", { required: true })} id="terms" type="checkbox" value="" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
            {errors.checkbox && <span className='text-sm font-bold text-red-500'>This Checkbox is required</span>}

          </div>
          <label  htmlFor="terms" className="ms-2 text-sm font-medium  ">I agree with the <a href="#" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">terms and conditions</a></label>
        </div>
        <button type="submit" className="text-white cursor-pointer bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">Register new account</button>
      </form>
    </div>
  )
}

export default SignupPage
