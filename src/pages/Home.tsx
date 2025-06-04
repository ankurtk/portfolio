import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};