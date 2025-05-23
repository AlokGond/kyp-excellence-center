import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APP_NAME } from '../../constants';
import type { NavLinkItem } from '../../types';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  logoUrl: string;
  navLinks: NavLinkItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl, navLinks }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Adjusted for new theme: kyp-yellow for active, kyp-white for inactive on magenta background
  const activeLinkClass = "text-kyp-yellow font-bold border-b-2 border-kyp-yellow";
  const inactiveLinkClass = "text-kyp-white hover:text-kyp-yellow transition-colors duration-300";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out 
                  bg-kyp-magenta shadow-lg`} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              {/* Ensure logo is visible on magenta; consider a version with a white outline or background if needed */}
              <img className="h-12 sm:h-14" src={logoUrl} alt={`${APP_NAME} Logo`} style={{ filter: 'brightness(0) invert(1)' }} /> {/* Invert colors if logo is dark */}
            </Link>
            <Link to="/" className="ml-2 text-lg sm:text-xl font-poppins font-bold text-kyp-white hover:text-kyp-yellow transition-colors">
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => 
                  `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-base font-medium font-poppins`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-kyp-white hover:text-kyp-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kyp-yellow"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-kyp-magenta shadow-lg border-t border-kyp-light-magenta">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `${isActive ? activeLinkClass : inactiveLinkClass} block px-3 py-2 rounded-md text-base font-medium font-poppins`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
