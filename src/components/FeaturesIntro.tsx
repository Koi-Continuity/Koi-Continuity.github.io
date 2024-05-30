// src/components/FeaturesIntro.tsx
import React from 'react';

const FeaturesIntro: React.FC = () => {
  return (
    <section className="bg-[#F1F5FB] py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold text-[#1D1D1F] mb-6">
            Features
          </h1>
          <p className="text-xl text-[#1D1D1F] mb-6">Easy To Use Tool, Global Consulting and ISO 22301 Audit Services</p>
        </div>
        <div className="lg:w-1/3 flex flex-col space-y-4">
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Sitemap builder <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Wireframes <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Figma <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Export to file <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Notes <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Upload designs <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Estimate project costs <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Team dashboard <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            Sitemap.xml generator <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
          <a href="#" className="text-xl text-[#1D1D1F] flex items-center hover:text-purple-500 transition-colors duration-300">
            SEO Tags <span className="ml-2 text-purple-500">&#x2193;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntro;
