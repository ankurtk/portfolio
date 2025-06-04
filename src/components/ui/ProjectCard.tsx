import React, { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(-8px)';
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(0)';
    }
  };
  
  return (
    <div 
      ref={cardRef}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{ 
        animationDelay: `${delay}ms`,
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease-out'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`}></div>
        
        <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 ease-out">
          <div className="flex space-x-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-medium px-2 py-1 rounded-full bg-white/90 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.repo && (
              <a 
                href={project.repo} 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="View repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          <a 
            href={project.live || project.repo || '#'} 
            className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors duration-300 flex items-center"
          >
            Learn More
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};