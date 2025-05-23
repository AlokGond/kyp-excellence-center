import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import UpcomingBatches from '../components/home/UpcomingBatches';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import HomeAboutSection from '../components/home/HomeAboutSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <StatsSection />
      <UpcomingBatches />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
