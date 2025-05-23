import React from 'react';
import { FacultyMember } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FaBriefcase } from 'react-icons/fa';

interface FacultyCardProps {
  facultyMember: FacultyMember;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ facultyMember }) => {
  return (
    <Card className="text-center p-6 flex flex-col items-center h-full bg-kyp-card-background"> {/* Explicitly light background */}
      <img
        src={facultyMember.imageUrl}
        alt={facultyMember.name}
        className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg border-4 border-kyp-light-magenta"
      />
      <h3 className="text-xl font-poppins font-semibold text-kyp-magenta">{facultyMember.name}</h3>
      <p className="text-kyp-pink-accent font-medium mb-2">{facultyMember.subject}</p>
      {facultyMember.experience && (
         <div className="flex items-center text-sm text-kyp-text-on-light/70 mb-3">
            <FaBriefcase className="mr-2 text-kyp-magenta" />
            <span>{facultyMember.experience} Experience</span>
        </div>
      )}
      <p className="text-kyp-text-on-light/80 text-sm flex-grow mb-4">{facultyMember.profile}</p>
       <Button variant="outline" size="sm" className="mt-auto border-kyp-magenta text-kyp-magenta hover:bg-kyp-magenta hover:text-kyp-yellow">
        View Profile
      </Button>
    </Card>
  );
};

export default FacultyCard;
