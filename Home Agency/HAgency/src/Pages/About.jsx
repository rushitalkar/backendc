import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import table from '../assets/table.png'

const About = () => {
  return (
    <div className='bg-[#fdf0e9] md:h-[190vh]   max-w-screen-2xl container mx-auto px-4 md:px-20'>
      <div style={{ borderBottom: "1px solid #F3D1BF" }} className='md:flex space-x-2 justify-between items-center relative py-12 '>

        <img src={logo1} className='h-42px w-147px px-2 py-2' alt="" />
        <img src={logo2} className='h-42px w-147px px-2 py-2 ' alt="" />
        <img src={logo3} className='h-42px w-147px px-2 py-2' alt="" />
        <img src={logo4} className='h-42px w-147px px-2 py-2' alt="" />
        <img src={logo5} className='h-42px w-147px px-2 py-2' alt="" />




      </div>



      <div className='flex justify-between items-center'>
        <div>
          <img src={table} className='md:w-500px md:h-370px h-auto w-auto' alt="" />
        </div>
        <div>
          <div className='text-white text-6xl'>
            <p className='tracking-[2px] font-normal
             text-xl text-[#EF6D58] my-3'>ABOUT</p>
            <h1 className='text-[#391400] font-bold'>An Experience </h1>
            <h1 className='text-[#391400] font-bold'>Design Agency</h1>


            <p className='font-normal text-lg text-[#391400] my-4'>Provides a full service range </p>
            <p className='font-normal text-lg text-[#391400A3]'>Ability to put themselves in the merchant's shoes. It is <br /> meant to partner on the long run, and work as an <br />extension  of the merchant's team.</p>


            <button type="button" class="text-[#391400] bg-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-white focus:outline-none dark:focus:ring-blue-800">ABOUT US</button>


          </div>
        </div>
      </div>

      <div  className='flex items-center py-19 '>
        <div style={{ border: "1px solid #F3D1BF" }} className='w-[391px] h-[150px] flex flex-col align-center items-center justify-center '>
          <h1 className='text-5xl font-bold my-2 mx-auto ' > 42%</h1>
          <p className='my-2 text-xl'>Years of Experience</p>
        </div>
        <div style={{ border: "1px solid #F3D1BF" }} className='w-[391px] h-[150px] flex flex-col align-center items-center justify-center'>
          <h1 className='text-5xl font-bold my-2 '> 73+</h1>
          <p className='my-2 text-xl'>Agency Member</p>
        </div>
        <div style={{ border: "1px solid #F3D1BF" }} className='w-[391px] h-[150px] flex flex-col align-center items-center justify-center'>
          <h1 className='text-5xl font-bold my-2 '>5000</h1>
          <p className='my-2 text-xl'>Project complete</p>
        </div>
      </div>
    </div>
  )
}

export default About
