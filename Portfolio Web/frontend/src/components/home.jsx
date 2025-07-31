import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

import dev from '../assets/dev.png'


const Home = () => {

    return (

        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 my-20  md:px-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome in my Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>

                            <h1>Hello,I'm a </h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                               className='text-red-700 font-bold'
                                strings={[
                                    "Developer",
                                    "Designer",
                                    "Freelancer",
                                    "Coder",
                                    "Programmer",
                                    "UI/UX Designer",
                                    "Desktop Support Enginner"

                                ]}
                                typeSpeed={100}
                                loop= {true}
                            />

                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>My Self Rushikesh Talkar, I am a Web Developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression        .</p>
                        <br />
                        <div className='flex flex-col md:flex-row items-center justify-between  flex-y-2 md:flex-y-0 '>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        {" "}
                                        <a href="https://www.instagram.com/" ><FaInstagram className='text-2xl cursor-pointer' /></a>
                                        
                                    </li>

                                    <li>
                                        {" "}
                                        <a href="https://www.linkedin.com/in/rushikesh-talkar-5562a9293/" target='_blank'><FaLinkedinIn className='text-2xl cursor-pointer' /></a>
                                    </li>

                                    <li>
                                        {" "}
                                       <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"> <SiIndeed className='text-2xl cursor-pointer' /></a>
                                    </li>
                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold '>Currently Working On</h1>
                                <div className='flex space-x-5'>
                                    <DiMongodb className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full ' />
                                    <SiExpress className='text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full ' />
                                    <FaReact className='text-xl cursor-pointer   md:text-2xl hover:scale-110 duration-200 rounded-full ' />
                                    <FaNodeJs className='text-xl cursor-pointer  md:text-2xl hover:scale-110 duration-200 rounded-full ' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={dev} className='rounded-full md:h-[400px] md:w-[400px]' alt=""  />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
