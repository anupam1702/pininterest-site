'use client';
import React from 'react';
import Image from 'next/image';

const Second = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-between p-8">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-6xl font-bold mb-4">Crafted with excellent material.</h1>
        <p className="text-gray-600 text-lg mb-6">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Explore
        </button>
      </div>

      {/* Product Section */}
      <div className="md:w-1/2 flex flex-wrap justify-center gap-6 md:gap-12">
        {/* Nordic Chair */}
        <div className="text-center w-full md:w-1/3">
          <Image
            src="https://untree.co/demos/furni/images/product-1.png"
            alt="Nordic Chair"
            width={250}
            height={250}
            className="mx-auto"
          />
          <h2 className="text-lg font-medium mt-4">Nordic Chair</h2>
          <p className="text-gray-700">$50.00</p>
        </div>

        {/* Kruzo Aero Chair */}
        <div className="text-center w-full md:w-1/3">
          <Image
            src="https://untree.co/demos/furni/images/product-2.png"
            alt="Kruzo Aero Chair"
            width={250}
            height={250}
            className="mx-auto"
          />
          <h2 className="text-lg font-medium mt-4">Kruzo Aero Chair</h2>
          <p className="text-gray-700">$78.00</p>
        </div>

        {/* Ergonomic Chair */}
        <div className="text-center w-full md:w-1/3">
          <Image
            src="https://untree.co/demos/furni/images/product-3.png"
            alt="Ergonomic Chair"
            width={250}
            height={250}
            className="mx-auto"
          />
          <h2 className="text-lg font-medium mt-4">Ergonomic Chair</h2>
          <p className="text-gray-700">$43.00</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
