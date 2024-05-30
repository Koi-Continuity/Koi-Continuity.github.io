import React from 'react';
import heroImage from '../assets/heroImage.png'; // Adjust the path to your hero image

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F5F7FA] pt-16 pb-20"> {/* Adjusted padding to move up */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left lg:ml-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
            Simplify Your Risk Programs <span className="text-[#CBC02D]">And Make it Better</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
            One single tool for staff notification, incident response, risk mitigation, exercising & testing, real-time metrics, vendor & program management.
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#CBC02D] text-white font-semibold rounded-md hover:bg-[#A9A422] transition duration-300">
            Register
          </button>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:ml-8">
          <img src={heroImage} alt="Hero Illustration" className="w-full max-w-xs sm:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
