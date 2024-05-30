import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path to your logo file

const navLinks = [
  { id: 'features', title: 'Features', path: '/features' },
  { id: 'whoweare', title: 'Who We Are', path: '/whoweare' },
  { id: 'contact', title: 'Contact', path: 'mailto:someone@example.com' }, // Replace with the desired email address
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF5] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4">
        <Link to="/" className="ml-2"> {/* Adjusted logo position */}
          <img src={logo} alt="MyCompany" className="h-10 sm:h-16 cursor-pointer" />
        </Link>
        <ul className="hidden sm:flex items-center space-x-6">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              {nav.id === 'contact' ? (
                <a
                  href={nav.path}
                  className="text-base sm:text-lg font-medium px-4 py-2 rounded-md transition-colors duration-300 text-[#212427] hover:text-white hover:bg-black"
                >
                  {nav.title}
                </a>
              ) : (
                <Link
                  to={nav.path}
                  className={`text-base sm:text-lg font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
                    location.pathname === nav.path
                      ? 'text-white bg-black'
                      : 'text-[#212427] hover:text-white hover:bg-black'
                  }`}
                >
                  {nav.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex items-center">
          <button className="text-base font-medium text-[#212427] px-3 py-2 rounded-md hover:text-white hover:bg-[#212427] transition-colors duration-300">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
