// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Features from './pages/Feature';
import LoadingSpinner from './components/LoadingSpinner';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timeoutId = setTimeout(handleComplete, 1000); // Simulate async load, remove this in actual usage

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/features" element={<Features />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
