import Image from "next/image";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Eight = () => {
  return (
    <div className="text-gray-800 mt-10 sm:mt-20">
      <div className="max-w-6xl ml-24 p-2 sm:p-2">
        {/* Newsletter Section */}
        <div className="relative flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-md sm:ml-2">
          <div className="w-full sm:w-2/3">
            <p className="text-lg font-medium text-gray-700 ">Subscribe to Newsletter</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
              />
              <button
                type="submit"
                className="bg-black text-white rounded-lg px-6 py-2 hover:bg-green-700 mt-4 sm:mt-0"
              >
                <span><BsTelegram /></span>
              </button>
            </form>
          </div>
          {/* Chair Image */}
          <div className="absolute right-[-50px] top-[-100px] sm:top-[-150px] w-full sm:w-1/3 flex justify-end mt-6 sm:mt-0">
            <Image
              src="https://untree.co/demos/furni/images/sofa.png"
              alt="Chair"
              width={400}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Footer Section */}
        {/* Footer Section */}
<footer className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-700 ">
  {/* Left Section */}
  <div className="flex flex-col sm:mr-8 text-center sm:text-left">
    <h2 className="text-2xl font-bold">Furni.</h2>
    <p className="mt-2 text-gray-600">
    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
     Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
    </p>
    <div className="mt-4 flex space-x-4 text-2xl justify-center sm:justify-start">
      <Link href="#" className="text-gray-600 hover:text-gray-800">
        <FaFacebook />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-gray-800">
        <FaTwitter />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-gray-800">
        <FaInstagram />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-gray-800">
        <FaLinkedin />
      </Link>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-wrap sm:flex-nowrap gap-x-2 sm:gap-x-24">
    <div className="flex flex-col space-y-2">
      <Link href="#" className="hover:underline">
        About
      </Link>
      <Link href="#" className="hover:underline">
        Services
      </Link>
      <Link href="#" className="hover:underline">
        Blog
      </Link>
      <Link href="#" className="hover:underline">
        Contact
      </Link>
    </div>
    <div className="flex flex-col space-y-2">
      <Link href="#" className="hover:underline">
        Support
      </Link>
      <Link href="#" className="hover:underline">
        Knowledgebase
      </Link>
      <Link href="#" className="hover:underline">
        Live Chat
      </Link>
    </div>
    <div className="flex flex-col space-y-2">
      <Link href="#" className="hover:underline">
        Jobs
      </Link>
      <Link href="#" className="hover:underline">
        Our team
      </Link>
      <Link href="#" className="hover:underline">
        Leadership
      </Link>
      <Link href="#" className="hover:underline">
        Privacy 
      </Link>
    </div>
    <div className="flex flex-col space-y-2">
      <Link href="#" className="hover:underline">
        Chair
      </Link>
      <Link href="#" className="hover:underline">
        Kruzo 
      </Link>
      <Link href="#" className="hover:underline">
         chairs
      </Link>
    </div>
  </div>
</footer>

<div className="mt-10 mb-4">
      <hr className="border-t border-gray-300" />
    </div>
     <div className="flex justify-between">
    <div>Copyright ©2025. All Rights Reserved. — Designed with love by Untree.co</div>
    <div className="">
      <Link href={"#"} className="mr-2">Terms & Conditions</Link>
     <Link href={"#"}> Privacy Policy</Link>
    </div>
    </div>
      </div>
    </div>

  );
};

export default Eight;
