import React from "react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { FaExpandArrowsAlt } from "react-icons/fa";

const Third: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-8">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fast & Free Shipping */}
            <div className="flex flex-col  space-y-4">
              <div className="p-3 text-5xl">
               <CiDeliveryTruck />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Fast & Free Shipping</h4>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            {/* Easy to Shop */}
            <div className="flex flex-col  space-y-4">
              <div className="p-3 text-5xl">
                <IoBagOutline />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Easy to Shop</h4>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            {/* 24/7 Support */}
            <div className="flex flex-col  space-y-4">
              <div className="p-3 text-5xl">
                <LuShieldCheck />
              </div>
              <div>
                <h4 className="text-lg font-semibold">24/7 Support</h4>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            {/* Hassle-Free Returns */}
            <div className="flex flex-col  space-y-4">
              <div className="p-3 text-5xl">
                <FaExpandArrowsAlt />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Hassle-Free Returns</h4>
                <p className="text-gray-500 text-sm">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-100 rounded-full z-0" />
          <Image
            src="https://untree.co/demos/furni/images/why-choose-us-img.jpg"
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg z-10 relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Third;
