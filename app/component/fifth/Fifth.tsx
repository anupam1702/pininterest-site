'use client'
import Image from 'next/image'
import React from 'react'

const Fifth = () => {
  return (
    <div className='flex  mx-auto my-10 md:my-20 lg:my-40 space-y-10'>
      {/* First Product */}
      <div className='flex flex-col md:flex-row items-center'>
        <Image src={'https://untree.co/demos/furni/images/product-1.png'} alt={'Nordic Chair 1'} height={80} width={80} />
        <div className='ml-0 md:ml-4 mt-4 md:mt-0'>
          <h2 className='font-bold'>Nordic Chairs</h2>
          <h4 className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cum.</h4>
          <button className='mt-2 text-blue-500'>Read more</button>
        </div>
      </div>

      {/* Second Product */}
      <div className='flex flex-col md:flex-row items-center'>
        <Image src={'https://untree.co/demos/furni/images/product-2.png'} alt={'Nordic Chair 2'} height={80} width={80} />
        <div className='ml-0 md:ml-4 mt-4 md:mt-0'>
          <h2 className='font-bold'>Nordic Chairs</h2>
          <h4 className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cum.</h4>
          <button className='mt-2 text-blue-500'>Read more</button>
        </div>
      </div>

      {/* Third Product */}
      <div className='flex flex-col md:flex-row items-center'>
        <Image src={'https://untree.co/demos/furni/images/product-3.png'} alt={'Nordic Chair 3'} height={80} width={80} />
        <div className='ml-0 md:ml-4 mt-4 md:mt-0'>
          <h2 className='font-bold'>Nordic Chairs</h2>
          <h4 className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cum.</h4>
          <button className='mt-2 text-blue-500'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Fifth
