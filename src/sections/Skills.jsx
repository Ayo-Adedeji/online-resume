import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiExpress, SiMongodb, SiMongoose, SiTailwindcss 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'React Native', icon: <TbBrandReactNative className="text-[#61DAFB]" /> },
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Mongoose', icon: <SiMongoose className="text-[#880000]" /> },
        { name: 'REST APIs', icon: <FaDatabase className="text-primary" /> },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section id="skills" className="py-24 bg-navy-dark transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Skills" />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              className="bg-navy/50 dark:bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-2xl relative group overflow-hidden"
            >
              {/* Subtle Gradient Background Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <h3 className="text-2xl font-bold text-primary mb-12 text-center tracking-tight">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-y-10 gap-x-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="flex flex-col items-center group/item cursor-default"
                  >
                    <div className="text-4xl md:text-5xl mb-4 transition-all duration-300 filter drop-shadow-sm group-hover/item:drop-shadow-[0_0_12px_rgba(100,255,218,0.4)] group-hover/item:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-[13px] text-accent font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
