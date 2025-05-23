import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-kyp-magenta to-kyp-dark-magenta text-kyp-white overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="smallGridCta" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#smallGridCta)" /></svg>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-kyp-yellow animate-fade-in-up">
          Ready to Transform Your Career?
        </h2>
        <p className="mt-4 text-lg text-kyp-white/90 max-w-xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Join KYP Kateya today and take the first step towards a successful and fulfilling professional life.
        </p>
        <div className="mt-8 animate-fade-in-up flex justify-center" style={{animationDelay: '0.4s'}}>
          <Link to="/contact">
            <Button variant="primary" size="lg" rightIcon={<FiArrowRight />}>
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
