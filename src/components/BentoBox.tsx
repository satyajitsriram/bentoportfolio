import React from 'react';

interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
}

const BentoBox: React.FC<BentoBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border border-white/20 dark:border-gray-700/20 ${className}`}>
      {children}
    </div>
  );
};

export default BentoBox;