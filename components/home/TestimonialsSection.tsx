import React from 'react';
import { MOCK_TESTIMONIALS } from '../../constants';
import { Testimonial } from '../../types';
import Card from '../ui/Card';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="p-6 h-full flex flex-col bg-kyp-card-background shadow-xl hover:shadow-2xl" hoverEffect={true}>
      <FaQuoteLeft className="text-4xl text-kyp-yellow opacity-70 mb-4" />
      <p className="text-kyp-text-on-light/80 italic mb-4 flex-grow">"{testimonial.text}"</p>
      <div className="flex items-center mt-auto">
        {testimonial.avatarUrl ? (
          <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-kyp-light-magenta" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-kyp-magenta text-kyp-white flex items-center justify-center text-xl font-semibold mr-4">
            {testimonial.initials}
          </div>
        )}
        <div>
          <p className="font-poppins font-semibold text-kyp-magenta">{testimonial.name}</p>
          <p className="text-sm text-kyp-text-on-light/70">{testimonial.course}</p>
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-kyp-section-background"> {/* Light background for contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-kyp-magenta sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-kyp-text-on-light/80 max-w-2xl mx-auto">
            Hear from those who have experienced the KYP Kateya difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
