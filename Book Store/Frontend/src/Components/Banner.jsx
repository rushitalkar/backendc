import React from 'react'
import book from '../Assets/book.png'
const Banner = () => {
  return (
    <div>
      <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-col items-center md:flex-row my-1'>
        <div className='w-full order-2 md:order-1 md:w-1/2  mt-12 md:mt-12'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold'>Hello, Welcome Here to learn Something  <span className='text-pink-500'> New Everyday</span></h1>
            <p className='text-xl font-semibold'>Books are synonymous with learning and education, and have been a concrete source of information and knowledge for many generations. It is essential for children to develop a habit of reading books from a young age as it builds their vocabulary and self-study skills. Considering the role books play in education</p>

            <label className="flex items-center w-full space-x-2 border border-gray-200 rounded p-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input className='grow outline-none' style={{ width: "100%" }} type="email" placeholder="Email" required />
            </label>
            <div>
              <button className='bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer'>Submit</button>
            </div>
            <div className="validator-hint hidden">Enter valid email address</div>

          </div>
        </div>

        <div className='w-full order-1 md:order-2 md:w-1/2 flex justify-end'>
          <img className='w-122 h-122 ' src={book} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
