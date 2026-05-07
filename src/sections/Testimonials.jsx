import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
const testimonials = [
  {
    quote:
      "This is really beautiful. I'm really grateful. This really projects a solution — not just a website. This is actually a solution for what I want to do. Not just for me as the owner, but even for the clients. This makes it easy and seamless.",
    name: 'Client',
    role: 'Project Manager, ServiceIS',
    photo: null,
  },
  {
    quote:
      "Wow. This is really nice. I love it. I love the feel, I love how it looks, I love how it makes me feel.",
    name: 'Chef Zoey',
    role: 'Owner, 1417bychefzoey.com',
    photo: null,
  },
  {
    quote: "I love this work. Very simple, no margins, and concise.",
    name: 'Client',
    role: 'Consulate Recruitment Agency, Project Manager',
    photo: null,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Testimonials" subtitle="What people say about my work." />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 bg-navy-light rounded-3xl border border-white/10 shadow-xl group hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Background quote icon */}
              <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <FaQuoteLeft size={80} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-accent leading-relaxed italic mb-10 flex-1 relative z-10">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-accent/70">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
