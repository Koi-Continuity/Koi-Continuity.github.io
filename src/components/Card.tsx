// src/components/Card.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  children: React.ReactNode;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ children, bgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`py-12 px-6 rounded-lg transition-transform duration-500 ${bgColor} ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
