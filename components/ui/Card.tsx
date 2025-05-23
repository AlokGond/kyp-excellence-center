import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div
      className={`bg-kyp-card-background rounded-xl shadow-lg overflow-hidden text-kyp-text-on-light ${hoverEffect ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
