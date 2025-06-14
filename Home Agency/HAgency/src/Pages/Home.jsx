import React from 'react'
import pic from '../assets/pic.png'
import pro from '../assets/pro.png'
const Home = () => {
    console.log("home");
    
  return (
    <div className='bg-[#28293e]  max-w-screen-2xl container mx-auto px-4 md:px-20' style={{height:"120vh", marginTop:"60px"}}>
       <div style={{margin:"auto"}} className='flex justify-between items-center'>
        <div className='text-white text-6xl' style={{fontWeight:"bold"}}>
          <p className='tracking-[2px] font-normal
 text-xl text-[#EF6D58]'>MORDEN STUDIO</p>
          <h1>We're Help</h1> 
          <h1>To Build Your</h1> 
          <h1>Dream Project</h1>
           <br />
          <p className='font-normal text-lg'>Agency provides a full service range including technical </p>
          <p className='font-normal text-lg'>skills, design, business understanding.</p>

          
          
        </div>
        <div>
            <img src={pic} className='h-120 w-120 rounded-full' alt="" />
        </div>
       </div>
       <div>
           <button type="button" class="text-white bg-[#ef6d58]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#ef6d58] dark:hover:bg-[#ef6d58] focus:outline-none dark:focus:ring-blue-800">HOW WE WORK</button>
           <button type="button" class="text-white bg-[#28293e] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-[#28293e] dark:focus:ring-gray-700 dark:border-gray-700">Contact Us</button>

          </div>
          <br />
          
          <div className='flex space-x-2  items-center'>
          
            <img src={pro} className='h-10 w-10 rounded-full' alt="" />
            <div >
            <p className='font-normal text-lg text-gray-400'>"Put themselves in the merchant's shoes"</p>
            <p className='font-normal text-lg text-white'> &nbsp;Meta Inc.</p>
            <p></p>
            </div>
          </div>

    </div>
  )
}

export default Home
