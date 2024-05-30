// src/components/LoadingSpinner.tsx
import React from 'react';
import loadingGif from '../assets/loading.gif'; // Adjust the path to your loading GIF

const LoadingSpinner: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
      }}
    >
      <img
        src={loadingGif}
        alt="Loading..."
        style={{ width: '300px', height: '300px' }} // Adjust the size as needed
      />
    </div>
  );
};

export default LoadingSpinner;

