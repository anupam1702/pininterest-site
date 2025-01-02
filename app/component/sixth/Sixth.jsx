// components/TestimonialsCard.tsx
import { FC } from 'react';
import Image from 'next/image';

const Sixth = () => {
  return (
    <div className=" relative bg-gray-50 py-16 px-8 flex flex-col items-center text-center space-y-8 rounded-lg">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800">Testimonials</h2>

      {/* Testimonial Text */}
      <p className="text-gray-600 max-w-2xl">
        “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
      </p>

      {/* User Information */}
      <div className="flex flex-col items-center space-y-2">
        {/* Profile Picture */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="https://untree.co/demos/furni/images/person-1.png" // Replace with a valid image source
            alt="User profile picture"
            width={64}
            height={64}
            objectFit="cover"
          />
        </div>

        {/* User Name and Title */}
        <div>
          <p className="font-medium text-gray-800">Maria Jones</p>
          <p className="text-sm text-gray-500">CEO, Co-Founder, XYZ Inc.</p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center space-x-4">
        {/* Left Arrow */}
        <button
          className=" absolute left-4 top-32 w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <span className="text-xl">&#8592;</span>
        </button>

        {/* Indicator Dots */}
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 top-32  w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          aria-label="Next testimonial"
        >
          <span className="text-xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default Sixth;
