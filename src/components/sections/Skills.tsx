import React, { useRef, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { ProgressBar } from '../ui/ProgressBar';
import { skillsData } from '../../data/skills';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const headingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isInView) {
      headingRef.current?.classList.add('opacity-100', 'translate-y-0');
      
      setTimeout(() => {
        skillsRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
    }
  }, [isInView]);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div 
          ref={headingRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the full stack, continuously expanding my skill set to stay at the forefront of web development.
          </p>
        </div>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
            
            <div className="space-y-6">
              {skillsData.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} delay={index * 200} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Professional Skills</h3>
            
            <div className="space-y-6">
              {skillsData.professional.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <ProgressBar value={skill.level} delay={index * 200} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {skillsData.tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-indigo-200 border border-transparent"
            >
              <div className="h-12 flex items-center justify-center mb-2">
                <span className="text-3xl text-indigo-600">{tool.icon}</span>
              </div>
              <h4 className="text-sm font-medium text-gray-800">{tool.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};