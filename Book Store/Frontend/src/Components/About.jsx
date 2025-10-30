// AboutUs.js

import React, { use } from 'react';
import books from '../assets/books.png';
import { useNavigate } from 'react-router-dom';

function About() {
  let navigate = useNavigate();
  return (
    <div   className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
    <h1 className="font-bold text-3xl md:text-4xl pl-1.5">About <span className="text-[#ff3b85]">Book Store</span></h1>

    <div className="flex flex-col md:flex-row items-center min-h-[80vh]   md:pr:1.5 max-w-[1100px] mx-auto">
    
      {/* Left Content */}
      <div className="flex flex-1 items-center pr-10">
        <div className="w-full space-y-6">
          <p className="text-lg md:text-xl">At Book Store, our mission is to inspire curiosity and empower readers of all ages with knowledge. We believe that every day is an opportunity to discover something new, grow your mind, and connect with a world of ideas.</p>
          <h2 className="font-semibold text-2xl md:text-3xl">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Curated collection of books for lifelong learning</li>
            <li>Community driven recommendations</li>
            <li>Personalized reading experiences</li>
            <li>Support for students, educators, and lifelong readers</li>
          </ul>
          <div className="flex space-x-4 mt-10">
            <button onClick={()=> navigate("/contact")} className="hover:bg-[#fff]  hover:text-[#ff3b85]  bg-[#ff3b85] text-white px-6 py-2 rounded-full font-semibold cursor-pointer">Contact Us</button>
            <button onClick={()=> navigate("/course")} className="hover:bg-[#ff3b85] bg-white hover:text-white text-[#ff3b85] px-6 py-2 rounded-full font-semibold  cursor-pointer">Explore Books</button>
          </div>

        </div>
      </div>
      {/* Right Image */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src={books}
          alt="Stack of books"
          className="max-w-[380px] rounded-lg shadow-lg"
        />
      </div>
    </div>
    </div>
  );
}

export default About;

/*******  d725bf47-e5dd-4e93-8597-e7cd2ef0a15f  *******/