import React, { useRef, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { ProjectCard } from '../ui/ProjectCard';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isInView) {
      headingRef.current?.classList.add('opacity-100', 'translate-y-0');
      
      setTimeout(() => {
        projectsRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
    }
  }, [isInView]);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div 
          ref={headingRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a selection of my recent work showcasing my skills and problem-solving approach across different domains.
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};