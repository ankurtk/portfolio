import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ArrowDown} from 'lucide-react';
import StackIcon from 'tech-stack-icons';

export const Hero: React.FC = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="hero"
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 dark:from-indigo-950 dark:via-purple-950 dark:to-cyan-950"></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-300 dark:to-purple-300 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6"
        >
          <StackIcon name="nodejs" className='w-10 h-10'  />
        </motion.div>
         <motion.div
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6 ml-6"
        >
          <StackIcon name="reactjs" className='w-10 h-10' />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6 ml-6"
        >
          <StackIcon name="typescript" className='w-10 h-10'  />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6 ml-6"
        >
          <StackIcon name="tailwindcss" className='w-10 h-10'  />
        </motion.div>
         <motion.div
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6 ml-6"
        >
          <StackIcon name="postgresql" className='w-10 h-10'  />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300"
        >
          Hello, I'm{' '}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ankur
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300"
        >
          A passionate full-stack developer crafting beautiful digital experiences with modern technologies
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-3 px-8 rounded-md transition-all duration-300"
            whileHover={{
              scale: 1.05,
              borderColor: "#4f46e5"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </motion.section>
  );
};