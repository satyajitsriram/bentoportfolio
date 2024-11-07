import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import BentoBox from './BentoBox';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link, icon }) => {
  return (
    <BentoBox>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 h-full"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span 
                key={item}
                className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </BentoBox>
  );
};

export default ProjectCard;