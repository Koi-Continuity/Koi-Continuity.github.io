import React, {useEffect} from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Intro from '../components/Intro';

const Home: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Intro/>
      <Features />
      <CTA />
    </div>
  );
};

export default Home;
