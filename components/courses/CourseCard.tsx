import React from 'react';
import { Course } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FiClock, FiCheckCircle, FiBookOpen } from 'react-icons/fi'; // Added FiBookOpen
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
  onViewOutcomesClick: (course: Course) => void; // New prop
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onViewOutcomesClick }) => {
  const statusColors = {
    Upcoming: 'bg-kyp-pink-accent/80 text-kyp-white',
    Ongoing: 'bg-kyp-green-accent/80 text-kyp-white',
    Completed: 'bg-gray-400 text-gray-800', // Keep gray for completed
  };

  return (
    <Card className="flex flex-col h-full bg-kyp-card-background"> {/* Explicitly light background */}
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        {course.status && (
          <span 
            className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full ${statusColors[course.status] || 'bg-gray-200 text-gray-700'}`}
          >
            {course.status}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-poppins font-semibold text-kyp-magenta mb-2">{course.title}</h3>
        <p className="text-kyp-text-on-light/80 text-sm mb-4 flex-grow">{course.description}</p>
        
        {course.highlights && course.highlights.length > 0 && (
          <div className="mb-4 space-y-1">
            {course.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center text-sm text-kyp-text-on-light/70">
                <FiCheckCircle className="text-kyp-green-accent mr-2 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center text-kyp-magenta text-sm mb-4">
          <FiClock className="mr-2" />
          <span>Duration: {course.duration}</span>
        </div>
        <div className="mt-auto space-y-3">
          {course.detailedLearningOutcomes && course.detailedLearningOutcomes.length > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-kyp-magenta text-kyp-magenta hover:bg-kyp-magenta hover:text-kyp-white"
              onClick={() => onViewOutcomesClick(course)}
              leftIcon={<FiBookOpen />}
            >
              View Learning Outcomes
            </Button>
          )}
          <Link to={`/contact?course=${encodeURIComponent(course.title)}`} className="block">
            <Button variant="primary" className="w-full">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;