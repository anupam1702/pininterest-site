// components/InteriorDesignCard.tsx
import Image from 'next/image';

const Fourth = () => {
  return (
    <div className="flex flex-wrap bg-gray-50 p-8 rounded-lg">
      {/* Left Section with Overlapping Images */}
      <div className="flex-1 relative">
        {/* Image 1: Sofa with plants */}
        <div className="relative w-80 h-[400px] rounded-lg overflow-hidden z-10 shadow-md">
          <Image
            src="https://untree.co/demos/furni/images/img-grid-1.jpg"
            alt="Modern living room with plants"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Image 2: Office chairs */}
        <div className="absolute top-16 left-44 w-64 h-72 rounded-lg overflow-hidden z-20 shadow-lg">
          <Image
            src="https://untree.co/demos/furni/images/img-grid-2.jpg"
            alt="Office space with chairs"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Image 3: Wooden stool */}
        <div className="absolute top-56 left-20 w-60 h-72 rounded-lg overflow-hidden z-30 shadow-2xl">
          <Image
            src="https://untree.co/demos/furni/images/img-grid-3.jpg"
            alt="Minimalist wooden stool"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="flex-1 px-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">We Help You Make Modern Interior Design</h2>
        <p className="text-gray-600 mb-4">
          Discover the perfect blend of style and functionality. Transform your living and workspaces with
          contemporary designs tailored to your needs.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <div className='flex gap-x-4 gap-y-4'>
         <div> <li>Custom furniture designs for modern interiors</li>
          <li>Natural elements to create warmth </li>
          </div>
          <div>
          <li>Optimized layouts for functionality and style</li>
          <li>Personalized consultations to meet taste</li>
          </div>
          </div>
        </ul>
        <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Fourth;
