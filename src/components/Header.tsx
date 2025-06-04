import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#hero"
            className="text-2xl font-bold tracking-tight text-indigo-600 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-800 hover:text-indigo-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center">
              Resume <ChevronRight size={16} className="ml-1" />
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center mt-4">
            Resume <ChevronRight size={16} className="ml-1" />
          </button>
        </nav>
      </div>
    </header>
  );
};