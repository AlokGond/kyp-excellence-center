import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
import Card from '../components/ui/Card';

const AboutUsPage: React.FC = () => {
  const missionVisionValues = [
    {
      icon: FaBullseye,
      title: 'Our Mission',
      text: 'To empower the youth of Bihar with essential skills, fostering employability and entrepreneurship through quality training and holistic development.',
      color: 'text-kyp-pink-accent' // Changed to new accent
    },
    {
      icon: FaEye,
      title: 'Our Vision',
      text: 'To be a leading skill development center recognized for excellence in training, innovation, and creating a positive impact on society.',
      color: 'text-kyp-blue-accent' // Changed to new accent
    },
    {
      icon: FaHeart,
      title: 'Our Values',
      text: 'Integrity, Excellence, Inclusivity, Student-Centricity, and Continuous Improvement guide all our endeavors.',
      color: 'text-kyp-green-accent' // Changed to new accent
    }
  ];

  return (
    <>
      <PageHeader 
        title="About KYP Kateya"
        subtitle="Learn more about our commitment to skill development and youth empowerment in Bihar."
      />
      <section className="py-16 bg-kyp-section-background text-kyp-text-on-light"> {/* Light background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="/about.jpg" 
                alt="KYP Center Students" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-poppins font-bold text-kyp-magenta mb-6">Welcome to Our Center</h2>
              <p className="text-lg text-kyp-text-on-light/90 mb-4">
                KYP Kateya is a premier institution under the Kushal Yuva Program, dedicated to providing high-quality skill development training. We believe in transforming lives by equipping individuals with the knowledge and confidence to succeed in today's competitive world.
              </p>
              <p className="text-lg text-kyp-text-on-light/90">
                Our state-of-the-art facilities, experienced faculty, and industry-aligned curriculum ensure that our students receive the best possible learning experience. We focus on practical skills, soft skills, and overall personality development to make our students job-ready.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-poppins font-bold text-kyp-magenta text-center mb-12">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionVisionValues.map((item, index) => (
                <div key={item.title} className="animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                  <Card className="p-8 text-center h-full bg-kyp-card-background shadow-xl hover:shadow-2xl">
                    <item.icon className={`text-5xl ${item.color} mx-auto mb-6`} />
                    <h3 className="text-2xl font-poppins font-semibold text-kyp-magenta mb-3">{item.title}</h3>
                    <p className="text-kyp-text-on-light/80">{item.text}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
