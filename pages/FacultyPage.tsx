import React from 'react';
import { MOCK_FACULTY } from '../constants';
import FacultyCard from '../components/faculty/FacultyCard';
import PageHeader from '../components/layout/PageHeader';

const FacultyPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Expert Faculty" 
        subtitle="Meet our dedicated team of experienced educators and industry professionals."
      />
      <section className="py-16 bg-kyp-section-background"> {/* Light background for content area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {MOCK_FACULTY.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {MOCK_FACULTY.map((facultyMember, index) => (
                 <div key={facultyMember.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <FacultyCard facultyMember={facultyMember} />
                </div>
              ))}
            </div>
          ) : (
             <p className="text-center text-xl text-kyp-text-on-light">Faculty information coming soon. Please check back!</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FacultyPage;
