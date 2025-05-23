import React from 'react';
import { Course } from '../../types';
import { FiX, FiChevronRight } from 'react-icons/fi';

interface CourseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course | null;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

  return (
    <div 
      className="fixed inset-0 bg-kyp-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[100] animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-kyp-card-background text-kyp-text-on-light rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-kyp-light-magenta/20">
          <h2 className="text-2xl font-poppins font-semibold text-kyp-magenta">
            Learning Outcomes: {course.title}
          </h2>
          <button 
            onClick={onClose} 
            className="text-kyp-magenta hover:text-kyp-pink-accent transition-colors p-1 rounded-full hover:bg-kyp-light-magenta/20"
            aria-label="Close modal"
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {course.detailedLearningOutcomes && course.detailedLearningOutcomes.length > 0 ? (
            course.detailedLearningOutcomes.map((module, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-poppins font-semibold text-kyp-pink-accent mb-2">
                  {module.moduleTitle}
                </h3>
                <ul className="space-y-1.5 pl-1">
                  {module.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-start text-sm">
                      <FiChevronRight className="w-5 h-5 text-kyp-green-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-kyp-text-on-light/80">Detailed learning outcomes for this course are not yet available. Please check back later or contact us for more information.</p>
          )}
        </div>

        {/* Modal Footer (Optional) */}
        <div className="p-6 border-t border-kyp-light-magenta/20 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-kyp-yellow text-kyp-magenta font-semibold rounded-lg hover:bg-kyp-dark-yellow transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;