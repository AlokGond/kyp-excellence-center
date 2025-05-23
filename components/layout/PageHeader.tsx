import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-br from-kyp-magenta to-kyp-light-magenta pt-28 pb-16 sm:pt-32 sm:pb-20 text-center animate-fade-in"> {/* Increased pt for fixed navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-kyp-yellow">{title}</h1>
        {subtitle && <p className="mt-4 text-lg sm:text-xl text-kyp-white/90 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
