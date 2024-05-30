// src/components/Features.tsx
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import riskFeature from '../assets/risk_feature.png';
import metricFeature from '../assets/metric_feature.png';
import staffFeature from '../assets/staff_feature.png';
import simplifyFeature from '../assets/simplify_feature.png';
import emergencyFeature from '../assets/emergency_feature.png';
import CTA from '../components/CTA';

const FeatureCard: React.FC<{ 
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  reverse?: boolean;
}> = ({ id, title, description, image, bgColor, textColor, reverse = false }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      id={id}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center ${bgColor} py-12 px-6 rounded-lg transition-transform duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="lg:w-1/2 px-4">
        <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>{title}</h2>
        <p className={`text-2xl ${textColor}`}>{description}</p>
      </div>
      <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
        <img src={image} alt={title} className="w-full max-w-sm mx-auto lg:max-w-none" />
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20">
      {/* Features Overview Card */}
      <div className="container mx-auto mb-12">
        <div className="bg-[#CBC02D] py-12 px-6 rounded-lg text-center transition-transform duration-500 translate-y-0 opacity-100">
          <h2 className="text-5xl font-bold mb-4 text-white">Features</h2>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto space-y-12">
        <FeatureCard
          id="riskAssessment"
          title="One Risk Assessment"
          description="From business continuity risk assessments to enterprise risk assessments to risk control and self assessments, your department heads are tired of giving out the same information in different template formats. At Koi, we’ve come up with one single risk assessment that meets the needs of enterprise, operational and business continuity risks."
          image={riskFeature}
          bgColor="bg-[#0174bb]"
          textColor="text-white"
        />
        <FeatureCard
          id="metrics"
          title="Metrics"
          description="We believe in dynamic not static measurements. Your executives don’t want to see stats from the last quarter, they want to know right now as of today, how ready is your department to resume your operations if they can’t come back to work for the next 3 days or 3 months? We’ve developed a live readiness scoring methodology that shows not only each critical department’s readiness to resume their operations but also for your organization today."
          image={metricFeature}
          bgColor="bg-[#90e1ee]"
          textColor="text-gray-800"
          reverse
        />
        <FeatureCard
          id="staffTraining"
          title="Staff Training, Raising Awareness, and Exercising"
          description="We can develop presentations for your departments to raise awareness and get buy-in so your resumption teams will know what they need to do, before, during and after a business interruption. Train your leaders to train their employees, conduct annual department exercises and get them excited to be part of your business continuity program."
          image={staffFeature}
          bgColor="bg-[#fe8b85]"
          textColor="text-white"
        />
        <FeatureCard
          id="simplifyContinuity"
          title="Simplify Your Business Continuity Programs"
          description="We make business continuity simple, relevant and usable. We don’t believe in gathering data to meet audit checkmarks or for FOMO (fear of missing out). Every piece of data that we gather and document is used for a purpose."
          image={simplifyFeature}
          bgColor="bg-[#fffaf4]"
          textColor="text-gray-800"
          reverse
        />
        <FeatureCard
          id="emergencyPreparedness"
          title="Emergency Preparedness, Crisis Management and Staff Notifications"
          description="Make your emergency management program simple for staff to remember and act when a fire or power outage strikes. They don’t need two pages for each emergency scenario – keep it to three to five points and use graphics for mnemonics just like the use of “drop, cover & hold” for earthquake response."
          image={emergencyFeature}
          bgColor="bg-[#fcddc8]"
          textColor="text-gray-800"
        />
      </div>
      <CTA />
    </section>
  );
};

export default Features;
