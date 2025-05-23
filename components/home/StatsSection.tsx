import React from 'react';
import { MOCK_STATS } from '../../constants';
import { StatItem } from '../../types';
import Card from '../ui/Card';

const StatCard: React.FC<{ item: StatItem }> = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <Card className="text-center p-6 relative overflow-hidden bg-kyp-card-background" hoverEffect={true}>
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-kyp-yellow to-kyp-pink-accent"></div>
      {IconComponent && (
        <IconComponent className="text-5xl text-kyp-magenta mx-auto mb-4" />
      )}
      <div className="text-4xl font-poppins font-bold text-kyp-magenta">{item.value}</div>
      <div className="text-kyp-text-on-light/80 mt-1">{item.label}</div>
    </Card>
  );
};


const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-kyp-section-background"> {/* Contrasting light background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-kyp-magenta sm:text-4xl">
            Our Impact by the Numbers
          </h2>
          <p className="mt-4 text-lg text-kyp-text-on-light/80 max-w-2xl mx-auto">
            We are proud of our achievements in empowering students and contributing to skill development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_STATS.map((stat, index) => (
            <div key={stat.label} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <StatCard item={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
