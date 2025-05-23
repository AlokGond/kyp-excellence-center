import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ABOUT_CONTENT } from '../../constants';
import Button from '../ui/Button';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Card from '../ui/Card'; // Assuming Card uses light background now

const HomeAboutSection: React.FC = () => {
  const { title, subtitle, description, features, benefitsTitle, benefits } = HOME_ABOUT_CONTENT;

  return (
    <section className="py-16 md:py-24 bg-kyp-section-background text-kyp-text-on-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-kyp-magenta">
            {title}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-kyp-text-on-light/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mb-12 md:mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Card className="p-6 md:p-8 bg-kyp-card-background shadow-xl">
            <p className="text-lg md:text-xl text-kyp-text-on-light/90 leading-relaxed text-center">
              {description}
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="animate-fade-in-up" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
              <Card className="p-6 h-full bg-kyp-card-background shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="text-3xl text-kyp-magenta mr-4" />
                  <h3 className="text-xl font-poppins font-semibold text-kyp-magenta">{feature.title}</h3>
                </div>
                <p className="text-kyp-text-on-light/80">{feature.text}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Card className="p-6 md:p-8 bg-kyp-light-magenta/10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-kyp-magenta text-center mb-8">
              {benefitsTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <FiCheckCircle className="text-kyp-green-accent h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-kyp-text-on-light/90">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/about">
                <Button variant="primary" size="lg" rightIcon={<FiArrowRight />}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
