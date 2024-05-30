import React from 'react';
import { useInView } from 'react-intersection-observer';
import fishImage from '../assets/fish.gif'; // Make sure this path is correct

const Intro: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <section
      className="relative bg-gray-100 py-20 flex items-center justify-center"
      style={{
        backgroundImage: `url(${fishImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <div className="lg:w-1/2"></div> {/* Empty div to push the content to the right */}
        <div
          ref={ref}
          className={`bg-white p-12 lg:p-16 rounded-lg shadow-lg lg:w-5/12 md:w-1/2 sm:w-3/4 transition-transform duration-500 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-[#CBC02D]">Koi?</span>
          </h2>
          <section>
            <p className="text-2xl text-gray-800 mb-6">
              A single integrated repository and out of the box content for controls, risk, tracking and reporting.
            </p>
            <p className="text-2xl text-gray-800">
              A unified platform that is 100% cloud based. This provides user-configurable interfaces, reports and real-time dashboards for all governance, risk and compliance data.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Intro;
