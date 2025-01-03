import Image from 'next/image';
import React from 'react';

const Seventh = () => {
  return (
    <div className="p-4 mb-40 bg-grey-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-40">
        <h1 className="text-4xl font-bold ml-40">Recent Blog</h1>
        <h3 className="text-blue-500 underline cursor-pointer mr-20">View All Posts</h3>
      </div>
      
      {/* Blog Images Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className='flex flex-col'>
        <Image
          src="https://untree.co/demos/furni/images/product-1.png"
          alt="Nordic Chair 1"
          className="bg-gray-200 border rounded-lg"
          width={350} // Moderately increased width
          height={300}
        />
        <div className='flex flex-col ml-2 my-2'>
        <div className='font-bold'>First time Home Owner Ideas</div>
        <div>by Kristen Watson on Dec 19,2021</div>
        </div>
        </div>
        <div className='flex flex-col'>
        <Image
          src="https://untree.co/demos/furni/images/product-1.png"
          alt="Nordic Chair 2"
          className="bg-gray-200 border rounded-lg"
          width={350} // Moderately increased width
          height={300}
        />
        <div className='flex flex-col ml-2 my-2'>
        <div className='font-bold'>First time Home Owner Ideas</div>
        <div>by Kristen Watson on Dec 19,2021</div>
        </div>
        </div>
        <div className='flex flex-col'>
        <Image
          src="https://untree.co/demos/furni/images/product-1.png"
          alt="Nordic Chair 3"
          className="bg-gray-200 border rounded-lg"
          width={350} // Moderately increased width
          height={300}
        />
        <div className='flex flex-col ml-2 my-2'>
        <div className='font-bold'>First time Home Owner Ideas</div>
        <div>by Kristen Watson on Dec 19,2021</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
