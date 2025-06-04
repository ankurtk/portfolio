import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInElements = () => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100', 'translate-y-0');
      }
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 200);
      
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 400);
    };

    // Apply parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxOffset = scrollPosition * 0.4;
        heroRef.current.style.backgroundPositionY = `${parallaxOffset}px`;
      }
    };

    // Trigger initial animations after a short delay
    setTimeout(fadeInElements, 100);
    
    // Set up scroll event listener for parallax
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 bg-fixed relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          Hello, I'm <span className="text-indigo-300">John Doe</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
        >
          A passionate full-stack developer crafting beautiful digital experiences with modern technologies
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
        >
          <a 
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};