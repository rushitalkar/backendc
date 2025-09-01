import React from 'react'
import { useForm } from 'react-hook-form';

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 p-4 '>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-6 rounded-xl border shadow-2xl  ">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
          <input {...register("email", { required: true })} type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" />
             {errors.email && <span className='text-sm font-bold text-red-500'>This Email is required</span>}


        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
          <input {...register("email", { required: true })} type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          {errors.password && <span className='text-sm font-bold text-red-500'>This Email is required</span>}

        </div>
        <div className="mb-5">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium">Repeat password</label>
          <input {...register("password", { required: true })} type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          {errors.password && <span className='text-sm font-bold text-red-500'>This Email is required</span>}

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
