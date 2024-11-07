import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import BentoBox from './BentoBox';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  duration,
  description,
  skills,
}) => {
  return (
    <BentoBox>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 h-full"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-xl text-white">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">📍{location}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{duration}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </BentoBox>
  );
};

export default ExperienceCard;