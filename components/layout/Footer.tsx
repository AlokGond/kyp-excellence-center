import React from 'react';
import { APP_NAME, NAV_LINKS, CONTACT_DETAILS } from '../../constants';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#', name: 'Facebook' },
    { icon: FaTwitter, href: '#', name: 'Twitter' },
    { icon: FaInstagram, href: '#', name: 'Instagram' },
    { icon: FaLinkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-kyp-dark-magenta text-kyp-white/80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-poppins font-semibold text-kyp-yellow mb-4">{APP_NAME}</h3>
            <p className="text-base">
              Empowering youth with essential skills for a brighter future. Join us to unlock your potential.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold text-kyp-yellow mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-base hover:text-kyp-yellow transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold text-kyp-yellow mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-kyp-white/80 hover:text-kyp-yellow transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
             <p className="mt-4 text-base">
              {CONTACT_DETAILS.address.split(',')[0]} {/* Show only first part of address */}
              <br />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-kyp-yellow">{CONTACT_DETAILS.email}</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-kyp-light-magenta pt-8 text-center">
            <p className="text-base">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
            <p className="text-base mt-2">
            Made with <span className="text-red-500">&hearts;</span> by{' '}
            <a
              href="https://www.instagram.com/mrabhiii93"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kyp-yellow transition-colors duration-300"
            >
              Alok Gond
            </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
