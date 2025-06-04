import React, { useEffect, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      contentRef.current?.classList.add('opacity-100', 'translate-y-0');
      imageRef.current?.classList.add('opacity-100', 'translate-x-0');
    }
  }, [isInView]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="relative opacity-0 translate-x-12 transition-all duration-700 ease-out"
          >
            <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional headshot" 
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="text-gray-800 italic">"Creating innovative digital solutions with passion and precision."</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">John Doe</h3>
            <h4 className="text-xl text-indigo-600 mb-6">Full-Stack Developer</h4>
            
            <p className="text-gray-700 mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating innovative web and mobile applications. 
              My journey in tech began with a curiosity for how digital products are built, leading me to master a wide range of technologies 
              and frameworks.
            </p>
            
            <p className="text-gray-700 mb-8">
              I specialize in building robust, scalable applications with clean, maintainable code. My approach combines technical expertise 
              with creative problem-solving to deliver exceptional user experiences. When not coding, I enjoy hiking, photography, and contributing 
              to open-source projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Location</h5>
                <p className="text-gray-700">San Francisco, CA</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Email</h5>
                <p className="text-gray-700">john@example.com</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Availability</h5>
                <p className="text-gray-700">Freelance & Full-time</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Experience</h5>
                <p className="text-gray-700">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};