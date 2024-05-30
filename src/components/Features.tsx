import React from 'react';
import groupIcon from '../assets/group.png';
import buildIcon from '../assets/build.png';
import collabIcon from '../assets/collab.png';

const features = [
  {
    title: 'Business Continuity',
    description: 'Automate your approach to business continuity & disaster recovery planning to enable rapid, effective crisis management in one solution',
    icon: groupIcon,
  },
  {
    title: 'Risk Management',
    description: 'Identify risks to your business, manage them through online assessments and metrics, and respond & track with remediation or acceptance',
    icon: buildIcon,
  },
  {
    title: 'Vendor Management',
    description: 'Centralize vendor data, manage relationships, assess 3rd party risk, and ensure compliance with your policies & controls',
    icon: collabIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Manage What Matters
        </h2>
        <p className="text-2xl text-gray-600 mb-12">
          Easy To Use Tool, Global Consulting & ISO 22301 Audit Services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out max-w-xs mx-auto"
            >
              <img src={feature.icon} alt={feature.title} className="h-20 w-20 mb-4" />
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  
    </section>
  );
};

export default Features;
