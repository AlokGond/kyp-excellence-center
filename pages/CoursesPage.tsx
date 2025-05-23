import React, { useState } from 'react';
import { MOCK_COURSES } from '../constants';
import CourseCard from '../components/courses/CourseCard';
import PageHeader from '../components/layout/PageHeader';
import CourseDetailModal from '../components/courses/CourseDetailModal'; // Import the new modal
import { Course } from '../types'; // Import Course type

const CoursesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  const handleViewOutcomesClick = (course: Course) => {
    setSelectedCourseForModal(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourseForModal(null);
  };

  return (
    <>
      <PageHeader 
        title="Our Courses" 
        subtitle="Explore a wide range of courses designed to equip you with in-demand skills and knowledge."
      />
      <section className="py-16 bg-kyp-section-background"> {/* Light background for content area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {MOCK_COURSES.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_COURSES.map((course, index) => (
                <div key={course.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CourseCard course={course} onViewOutcomesClick={handleViewOutcomesClick} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl text-kyp-text-on-light">No courses available at the moment. Please check back soon!</p>
          )}
        </div>
      </section>
      <CourseDetailModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        course={selectedCourseForModal}
      />
    </>
  );
};

export default CoursesPage;