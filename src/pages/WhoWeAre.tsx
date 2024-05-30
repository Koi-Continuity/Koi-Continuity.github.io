import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import introImage1 from '../assets/introImage1.jpg';
import introImage2 from '../assets/introImage.png';
import introImage3 from '../assets/introImage2.jpg';
import CTA from '../components/CTA';

const WhoWeAre: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gray-800 text-center text-white py-20">
        <div className="bg-opacity-100 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold">Who We Are</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#F9DBD3] py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
          <div className="lg:w-1/2 p-6 order-2 lg:order-1 flex justify-center">
            <img src={introImage1} alt="Introduction" className="w-full max-w-md" />
          </div>
          <div className="lg:w-1/2 p-6 order-1 lg:order-2">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              We've Been In Your Shoes
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              We don’t believe in developing 50+ page plans or documents. How do you even maintain these plans?
            </p>
            <p className="text-xl text-gray-600 mb-4">
              We believe pictures speak a thousand words. If you can’t explain risk or business continuity in one diagram, chances are that your departments don’t understand either.
            </p>
            <p className="text-xl text-gray-600 mb-4">
              Your plans and documents are also likely out of date too. We’ve built programs and plans using mnemonics and infographics from the ground up for every industry from national financial institutions, multi-billion dollar global retailers to complex healthcare industries.
            </p>
            <Link to="/features">
              <button className="mt-6 px-6 py-3 bg-gray-800 text-[#FAFAF5] font-semibold rounded-md hover:bg-[#212427] transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#FAFAF5] py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
          <div className="lg:w-1/2 p-6 order-1 lg:order-1">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">The Koi Fish</h2>
            <p className="text-2xl text-gray-600 mb-4">
              The Koi fish symbolizes resilience and prosperity.
            </p>
            <p className="text-2xl text-gray-600 mb-4">
              Risk management and business continuity ensures your business is like the Koi well prepared and will be around for a very long time.
            </p>
          </div>
          <div className="lg:w-1/2 p-6 order-2 flex justify-center">
            <img src={introImage2} alt="Koi Fish" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-[#E5D8EC] py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
          <div className="lg:w-1/2 p-6 order-2 lg:order-1 flex justify-center">
            <img src={introImage3} alt="What Works" className="w-full max-w-md" />
          </div>
          <div className="lg:w-1/2 p-6 order-1 lg:order-2">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              We Understand What Works and What Doesn't 
            </h2>
            <p className="text-2xl text-gray-600 mb-4">
              Focus on resumption capabilities rather than paperwork.
            </p>
            <p className="text-2xl text-gray-600 mb-4">
              Reduce your workload now so your organization can be ready for the next crisis event.
            </p>
            <p className="text-2xl text-gray-600 mb-4">
              Simplify your program now with our cloud based tool to get buy-in from your departments and executives.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default WhoWeAre;
