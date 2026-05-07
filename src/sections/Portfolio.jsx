import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-navy-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionTitle title="Portfolio" subtitle="A selection of my recent work and personal projects." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/projects"
            className="inline-block px-12 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
