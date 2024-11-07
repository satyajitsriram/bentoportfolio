import React from 'react';
import { motion } from 'framer-motion';
import BentoBox from './BentoBox';

interface StatBoxProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  href: string;
  gradient: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const StatBox: React.FC<StatBoxProps> = ({ icon, title, value, subtitle, href, gradient, metrics }) => {
  return (
    <BentoBox>
      <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className="block p-6 h-full"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`bg-gradient-to-r ${gradient} p-2 rounded-xl text-white`}>
            {icon}
          </div>
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
          {metrics && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.a>
    </BentoBox>
  );
};

export default StatBox;