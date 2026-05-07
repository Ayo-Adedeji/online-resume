import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-navy/50 dark:bg-white/5 rounded-3xl overflow-hidden border border-white/5 group hover:border-primary/40 transition-all duration-300 shadow-xl"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {/* GitHub — inactive */}
          <span className="p-4 bg-navy text-primary/40 rounded-full cursor-not-allowed">
            <FaGithub size={24} />
          </span>
          {/* Live link */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-navy text-primary rounded-full hover:bg-primary hover:text-navy transition-all transform hover:-translate-y-2"
          >
            <FaExternalLinkAlt size={22} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-3 text-primary mb-4">
          <FaFolderOpen size={20} />
          <span className="text-sm font-mono tracking-widest uppercase">Featured Project</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-accent mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-2">
          {project.tech.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
