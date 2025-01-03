'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const First = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className=''>
      
      {/* Navbar Section */}
      <div className="bg-customGreen text-white flex justify-between items-center p-4">
        <h1 className="ml-10 text-2xl font-bold">Furni.</h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger Icon */}
        </button>

        {/* Navbar Links */}
        <nav className={`lg:flex items-center mr-14 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          {["Home", "Shop", "About Us", "Services", "Contact Us"].map((item, index) => (
            <h2 key={index} className="mx-4 relative group cursor-pointer">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </h2>
          ))}
          <span className="ml-4 text-2xl"><CiUser /></span>
          <span className="ml-4 text-2xl"><CiShoppingCart /></span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-customGreen text-white flex flex-col md:flex-row items-center p-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ml-7">
            Modern Interior <br /> Design Studio
          </h1>
          <p className="mb-6 text-lg ml-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, non!
          </p>
          <div className="flex gap-4 ml-7">
            <button className="rounded-full bg-yellow-500 text-black px-6 py-2 hover:bg-orange-600 transition">
              Shop Now
            </button>
            <button className="rounded-full border border-white text-white px-6 py-2 hover:bg-white hover:text-customGreen transition">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="https://untree.co/demos/furni/images/couch.png"
            alt="couch"
            width={800}
            height={1200}
            className="object-contain"
          />
        </div>
      </div>
      
    </div>
  );
};

export default First;
