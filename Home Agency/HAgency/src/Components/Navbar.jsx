import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  const navItems = [{
      id : 1,
      name : 'About'
  },
  {
      id : 2,
      name : 'Services'
  },
  {
      id : 3,
      name : 'Pricing'
  },
  {
      id : 4,
      name : 'Blog'
  }
]
  return (
    <div className='text-white max-w-screen-2xl container mx-auto px-4 md:px-20  h-16 fixed top-0 right-0 left-0  bg-[#28293e]'>
       <div className='flex justify-between items-center h-16 z-[1]' >
          
          <div className='flex space-x-2'>

           {/* <img src={dev} className='h-12 w-12 rounded-full' alt="" />*/}
            <h1 className='font-semibold text-2xl cursor-pointer'>Agency</h1>
          </div>
          <div>
          <ul className=' hidden md:flex space-x-30'>
             {navItems.map((item) => (
              <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer text-[17px]  ' style={{fontWeight : 10 }}> {item.name}</li>
             ))}
          </ul>
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          {toggle ? <IoMdClose size={24}/> : <AiOutlineMenu size={24}/>}
          </div>
          </div>

          <div className='flex space-x-2'>

          
            <h1 className='text-[14px]  font-bold  px-6 py-2' style={{fontFamily : "Epilogue" , border : "1px solid white" , borderRadius : "5px"}}>CONTACTS</h1>
          </div>
      
       </div>
       {/*When Toggle is true then it shows */}
       {
        toggle && (
          <div>
        <ul className='md:hidden flex flex-col items-center justify-center h-screen text-xl'>
        {navItems.map((item) => (
              <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer font-semibold ' onClick={()=>(setToggle(!toggle))}> {item.name}</li>
             ))}
        </ul>
        
        
       </div>
        )
       }
       
    </div>
  )
}

export default Navbar

