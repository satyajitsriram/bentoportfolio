import React from 'react';
import { motion } from 'framer-motion';
import BentoBox from './BentoBox';

const technologies = [
  'React', 'Node.js', 'TypeScript', 'Python',
  'Express', 'MongoDB', 'AWS', 'Docker'
];

const TechStack: React.FC = () => {
  return (
    <BentoBox>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 h-full"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-sm font-medium text-gray-700 border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </BentoBox>
  );
};

export default TechStack;