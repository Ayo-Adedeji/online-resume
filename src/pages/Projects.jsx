import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { moreProjects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <div className="min-h-screen dark bg-navy transition-colors duration-300">
      <Navbar />
      <main className="py-24 bg-navy-dark transition-colors duration-300">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline"
            >
              <FaArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <SectionTitle title="More Projects" subtitle="Additional work and projects I've built." />

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {moreProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
