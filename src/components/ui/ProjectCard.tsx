import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Tags Overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="px-2 py-1 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30 dark:border-gray-600/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + tagIndex * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center space-x-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {project.repo && (
                <motion.a
                  href={project.repo}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
              <motion.button
                className="bg-indigo-600 dark:bg-indigo-500 p-3 rounded-full text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300"
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <motion.div
        className="p-6"
        style={{ transform: "translateZ(20px)" }}
      >
        <motion.h3
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
          layoutId={`title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors duration-300"
          layoutId={`description-${project.id}`}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex justify-between items-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={project.live || project.repo || '#'}
            className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center group"
            whileHover={{ x: 5 }}
          >
            Learn More
            <motion.span
              className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
            >
              →
            </motion.span>
          </motion.a>

          {/* Additional Tags */}
          <div className="flex space-x-1">
            {project.tags.slice(2, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Border Animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
      />
    </motion.div>
  );
};