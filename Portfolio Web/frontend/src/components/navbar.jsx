import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link, Element } from 'react-scroll';
import dev from '../assets/dev.png'

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  const navItems = [{
      id : 1,
      name : 'Home'
  },
  {
      id : 2,
      name : 'About'
  },
  {
      id : 3,
      name : 'Portfolio'
  },
  {
      id : 4,
      name : 'Experience'
  } ,
  {
    id : 5,
    name : 'Contacts'
} 
]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0  bg-white'>
       <div className='flex justify-between items-center h-16 z-[1]' >
          
          <div className='flex space-x-2'>

            {<img src={dev} className='h-12 w-12 rounded-full' alt="" />}
            <h1 className='font-semibold text-xl cursor-pointer'>Rush<span className='text-green-500 text-2xl'>ii</span>
            <p className='text-sm'>Web Developer</p></h1>
          </div>
          <div>
          <ul className=' hidden md:flex space-x-8'>
             {navItems.map((item) => (
              <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer'><Link
              to={item.name}
              smooth={true}
              duration={700}
              offset={-70}
              activeClass='active'
              > {item.name}</Link></li>
             ))}
          </ul>
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          {toggle ? <IoMdClose size={24}/> : <AiOutlineMenu size={24}/>}
          </div>
          </div>
       
       </div>
       {/*When Toggle is true then it shows */}
       {
        toggle && (
          <div>
        <ul className='md:hidden flex flex-col items-center justify-center h-screen text-xl'>
        {navItems.map((item) => (
              <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer font-semibold '><Link
              onClick={()=>(setToggle(!toggle))}
              to={item.name}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass='active'
              > {item.name}</Link></li>
             ))}
        </ul>
        
       </div>
        )
       }
       
    </div>
  )
}

export default Navbar
