'use client';
import Image from 'next/image';
import React from 'react';
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const First = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="bg-customGreen text-white flex justify-between items-center p-4">
        <h1 className="ml-10 text-2xl font-bold">Furni.</h1>
        <nav className="flex items-center">
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
          <h1 className="text-7xl font-bold mb-4">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, non!
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition">
              Shop Now
            </button>
            <button className="rounded-full border border-white text-white px-6 py-2 hover:bg-white hover:text-customGreen transition">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://untree.co/demos/furni/images/couch.png"
            alt="couch"
            width={600}
            height={1200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
