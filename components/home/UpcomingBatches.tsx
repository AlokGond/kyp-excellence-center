import React from 'react';
import { MOCK_COURSES } from '../../constants';
import BatchCard from './BatchCard'; 
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const UpcomingBatches: React.FC = () => {
  const upcomingCourses = MOCK_COURSES.filter(course => course.status === 'Upcoming' || course.status === 'Ongoing').slice(0, 3);

  return (
    <section className="py-16 bg-kyp-card-background"> {/* Light background for this section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-kyp-magenta sm:text-4xl">
            New & Upcoming Batches
          </h2>
          <p className="mt-4 text-lg text-kyp-text-on-light/80 max-w-2xl mx-auto">
            Don't miss out on our latest course offerings designed to boost your career.
          </p>
        </div>
        {upcomingCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {upcomingCourses.map((course, index) => (
               <div key={course.id} className="animate-fade-in-up flex flex-col" style={{animationDelay: `${index * 0.15}s`}}>
                <BatchCard batch={course} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-kyp-text-on-light/80">No upcoming batches at the moment. Please check back soon!</p>
        )}
        <div className="mt-16 flex justify-center">
          <Link to="/courses">
            <Button variant="primary" size="lg" rightIcon={<FiArrowRight />}>
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
