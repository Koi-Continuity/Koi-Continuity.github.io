import React from 'react';
import { useInView } from 'react-intersection-observer';

const CTACard: React.FC<{ 
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
}> = ({ title, description, buttonText, bgColor, textColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center ${bgColor} py-12 px-6 rounded-lg transition-transform duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>{title}</h2>
      <p className={`text-2xl mb-8 ${textColor}`}>{description}</p>
      <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-xl shadow-lg hover:bg-[#212427] hover:text-white transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <CTACard
          title="Ready to Get Started?"
          description="Join us today and improve your business continuity with our comprehensive solutions."
          buttonText="Sign Up Now"
          bgColor="bg-gradient-to-r from-[#212427] via-[#1B1D1F] to-[#1B1D1F]"
          textColor="text-[#F5F7FA]"
        />
      </div>
    </section>
  );
};

export default CTA;
