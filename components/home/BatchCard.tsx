import React from 'react';
import { Course } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FiClock, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface BatchCardProps {
  batch: Course; 
}

const BatchCard: React.FC<BatchCardProps> = ({ batch }) => {
  const statusColors = {
    Upcoming: 'bg-kyp-pink-accent text-kyp-white',
    Ongoing: 'bg-kyp-green-accent text-kyp-white',
    Completed: 'bg-gray-400 text-gray-800',
  };

  const contactUrl = batch.batchName 
    ? `/contact?batch=${encodeURIComponent(batch.batchName)}&course=${encodeURIComponent(batch.title)}`
    : `/contact?course=${encodeURIComponent(batch.title)}`;

  return (
    // Using Card component with a custom class for gradient
    <Card className="flex flex-col h-full p-6 bg-gradient-to-br from-kyp-card-background to-kyp-light-magenta/20 shadow-xl">
      <div className="flex-grow">
        {batch.batchName && (
          <h3 className="text-2xl font-poppins font-semibold text-kyp-pink-accent mb-1">
            {batch.batchName}
          </h3>
        )}
        <p className={`text-lg font-poppins font-medium ${batch.batchName ? 'text-kyp-magenta' : 'text-kyp-pink-accent'} mb-2`}>
          {batch.title}
        </p>

        {batch.status && (
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${statusColors[batch.status] || 'bg-gray-200 text-gray-700'}`}
          >
            {batch.status}
          </span>
        )}

        <div className="flex items-center text-kyp-text-on-light/80 text-sm mb-3">
          <FiClock className="mr-2 text-kyp-magenta" />
          <span>Duration: {batch.duration}</span>
        </div>

        {batch.highlights && batch.highlights.length > 0 && (
          <div className="mb-4 space-y-1.5">
            <p className="text-sm font-semibold text-kyp-text-on-light/90 mb-1">Key Highlights:</p>
            <ul className="list-none pl-0">
              {batch.highlights.slice(0, 3).map((highlight, index) => ( 
                <li key={index} className="flex items-center text-sm text-kyp-text-on-light/80">
                  <FiCheckCircle className="text-kyp-green-accent mr-2 flex-shrink-0 text-base" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4">
        <Link to={contactUrl}>
          <Button variant="primary" className="w-full" rightIcon={<FiArrowRight />}>
            Enroll Now
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BatchCard;
