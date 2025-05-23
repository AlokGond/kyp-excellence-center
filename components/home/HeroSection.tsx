import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { FiArrowRight, FiCpu, FiMessageSquare, FiUsers } from 'react-icons/fi';
import ImageCarousel from './ImageCarousel';
import { HERO_SLIDES } from '../../constants';

const ProgramHighlight: React.FC<{ icon: React.ElementType; title: string; description: string; bgColor: string; textColor: string }> = ({ icon: Icon, title, description, bgColor, textColor }) => (
  <div className={`p-6 rounded-xl shadow-lg ${bgColor} ${textColor} text-center transform hover:scale-105 transition-transform duration-300`}>
    <Icon className="text-5xl mx-auto mb-4" />
    <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <div className="relative text-kyp-text-on-magenta min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden pt-20"> {/* pt-20 for navbar height */}
      <div className="absolute inset-0 z-0 h-full">
        <ImageCarousel slides={HERO_SLIDES} autoPlayInterval={6000} />
         {/* Overlay to ensure text readability on diverse images, if not handled by carousel itself */}
        <div className="absolute inset-0 bg-kyp-magenta/40 md:bg-kyp-magenta/30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 md:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight text-kyp-yellow animate-fade-in-up">
          KYP <span className="text-kyp-white">के संग</span>
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight text-kyp-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          युवा भरेंगे <span className="text-kyp-yellow">कौशल के रंग</span>
        </h2>
        
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-kyp-white/90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          बिहार सरकार की एक पहल, कुशल युवा कार्यक्रम के माध्यम से अपने भविष्य को सशक्त बनाएं। आईटी, भाषा और सॉफ्ट स्किल्स में महारत हासिल करें।
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <ProgramHighlight 
            icon={FiCpu} 
            title="BS-CIT" 
            description="डिजिटल दुनिया के अनुरूप बनायें"
            bgColor="bg-kyp-blue-accent/80 backdrop-blur-sm"
            textColor="text-kyp-white"
          />
          <ProgramHighlight 
            icon={FiMessageSquare} 
            title="BS-CLS" 
            description="अपनी भाषा और संवाद कौशल को निखारें"
            bgColor="bg-kyp-pink-accent/80 backdrop-blur-sm"
            textColor="text-kyp-white"
          />
          <ProgramHighlight 
            icon={FiUsers} 
            title="BS-CSS" 
            description="सॉफ्ट स्किल्स से बनायें अपनी पहचान"
            bgColor="bg-kyp-green-accent/80 backdrop-blur-sm"
            textColor="text-kyp-white"
          />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/courses">
            <Button variant="primary" size="lg" rightIcon={<FiArrowRight />}>
              Explore Courses
            </Button>
          </Link>
          <Link to="/contact">
             <Button variant="secondary" size="lg" className="border-kyp-yellow text-kyp-yellow hover:bg-kyp-yellow hover:text-kyp-magenta">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
