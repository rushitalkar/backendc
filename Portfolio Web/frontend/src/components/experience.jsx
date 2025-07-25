import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import ts from '../assets/typescript.png'
import tailwind from '../assets/Tailwind.png'
import oracle from '../assets/oracle.png'
const Experience = () => {
    const cardItem = [
    {
       id : 1,
       logo : html,
       name : "HTML"
    },
    {
        id : 2,
       logo : css,
       name : "CSS"
    },
    {
        id : 3,
       logo : js,
       name : "JavaScript"
    },
    {
        id : 4,
       logo : ts,
       name : "TypeScript"
    },
    {
        id : 5,
        logo : tailwind,
        name : "Tailwind CSS"
    },
    {
        id : 6,
        logo : oracle,
        name : "Oracle"
    }



]
  return (
    <>
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
      <div>
        <h1 className='text-3xl font-bold md-5'>Experince</h1>
        <p className='font-semibold'>I'have more than 2 years of experince in below Technologies.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 my-5 gap-3'>
           {
            cardItem.map((item) => {
                return  <div className='flex flex-col items-center justify-center gap-4 border-2  border-amber-50  md:h-[230px] md:w-[230px]  rounded-full  shadow-lg p-1 cursor-pointer hover:scale-110 duration-200 ' key={item.id}>
                    <img className='w-[120px] h-[120px] rounded-full ' src={item.logo} alt="" />
                    <div>
                        <div className=' px-2 font-bold mb-2 text-xl md:text-2xl'>{item.name}</div>
                    </div>
                   
                </div>
                                
                                  
                    
                
            })
           }
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience
