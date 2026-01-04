import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
const CreateBook = () => {
    let navigate = useNavigate()
    
         const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm()
    

    
  return (
  
 
<div className="max-w-screen-2xl container mx-auto px-4 md:px-20  mb-2">
    <form >
        <h1 className="text-3xl font-bold mb-4 text-[#ff3b85] ">Create Book </h1>

        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <div className="w-64 font-bold h-6 mx-2 mt-3 ">Book Detils</div>
            <div className="flex-1 flex flex-col md:flex-row">
                <div className="w-full flex-1 mx-2">
                    <div className="my-2 p-1  flex border border-gray-200 rounded">
                        <input placeholder="Book Name" className="p-1 px-2 appearance-none outline-none w-full  "{...register("bookname", { required: true })} type="text" id="Username"/> </div>
                </div>
                <div className="w-full flex-1 mx-2">
                    <div className="my-2 p-1  flex border border-gray-200 rounded">
                        <input placeholder="Book title" className="p-1 px-2 appearance-none outline-none w-full  "/> </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row pb-4 mb-4">
            <div className="w-64 font-bold h-6 mx-2 mt-3 ">Address
                <div className="text-xs font-normal leading-none">Your billing address</div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col md:flex-row">
                  
                    <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 flex border border-gray-200 rounded">
                            <input placeholder="Book Price" className="p-1 px-2 appearance-none outline-none w-full  "/> </div>
                    </div>
                    <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 flex border border-gray-200 rounded">
                            <input placeholder="Book Category" className="p-1 px-2 appearance-none outline-none w-full  "/> </div>
                    </div>
                </div>
                <div className="m-2">
                    <div className="w-full flex-1">
                        <div className="my-4 p-1  flex border border-gray-200 rounded">
                        <input placeholder="Enter Image URL" className="p-1 px-2 appearance-none outline-none w-full  "/> </div>
                    </div>
                </div>
                <div className="m-2">
                    <div className="w-full flex-1">
                        <div className="my-2 p-1  flex border border-gray-200 rounded">
                        <input placeholder="Enter Book URl" className="p-1 px-2 appearance-none outline-none w-full  "/> </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="w-64 mx-2 font-bold h-6 "></div>
            <div className="flex-1 flex flex-col md:flex-row">
                <button className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded-sm font-bold cursor-pointer mb-4 
        hover:bg-pink-600 
        bg-pink-500
        text-white 
        ">Submit</button>
            </div>
        </div>
    </form>
</div>
    
  )
}

export default CreateBook
