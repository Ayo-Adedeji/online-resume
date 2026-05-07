import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { HiOutlineCode, HiOutlineServer, HiOutlineCloudUpload, HiOutlineCheckCircle } from 'react-icons/hi';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Frontend Development',
      icon: <HiOutlineCode />,
      items: [
        { label: 'Captivating UI Design', desc: 'Create engaging interfaces' },
        { label: 'Flawless Frontend Development', desc: 'Implement designs seamlessly' },
        { label: 'Lightning-Fast Performance', desc: 'Optimize for speed and responsiveness' },
        { label: 'Inclusive Accessibility', desc: 'Ensure accessibility for all users' },
        { label: 'Collaborative Excellence', desc: 'Drive success through teamwork and communication' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <HiOutlineServer />,
      items: [
        { label: 'Database Management', desc: 'Efficiently handle data storage and retrieval' },
        { label: 'API Development', desc: 'Build scalable and secure APIs' },
        { label: 'Performance Optimization', desc: 'Fine-tune for speed and reliability' },
        { label: 'Security Implementation', desc: 'Protect sensitive data' },
        { label: 'Automated Testing', desc: 'Ensure reliable software delivery' },
        { label: 'Cloud Integration', desc: 'Seamlessly integrate with cloud services for scalability and flexibility' },
      ],
    },
    {
      title: 'Hosting & Deployment',
      icon: <HiOutlineCloudUpload />,
      items: [
        { label: 'Reliable Hosting', desc: 'Secure and dependable website hosting' },
        { label: 'Scalable Infrastructure', desc: 'Flexible resources for changing demands' },
        { label: 'Performance Monitoring', desc: 'Constantly optimize for speed and uptime' },
        { label: 'Security Measures', desc: 'Strong protection against cyber threats' },
        { label: 'Automated Testing', desc: 'Ensure reliable software delivery' },
        { label: '24/7 Support', desc: 'Always available for assistance' },
      ],
    },
  ];

  const sectionVariants = {
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

  return (
    <section id="services" className="py-24 bg-navy transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Services" />

        <div className="flex flex-col gap-24 lg:gap-32 max-w-6xl mx-auto mt-20">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionVariants}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                {/* Header Section */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-6 mb-8 group-hover:translate-x-2 transition-transform duration-500">
                    <div className="text-5xl text-primary drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <div className="w-20 h-1 bg-primary/30 rounded-full group-hover:w-32 transition-all duration-500" />
                </div>

                {/* Content Grid */}
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 lg:gap-10">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <div className="mt-1 text-primary text-2xl shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <HiOutlineCheckCircle />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover/item:text-primary transition-colors duration-300">
                          {item.label}
                        </h4>
                        <p className="text-accent text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
