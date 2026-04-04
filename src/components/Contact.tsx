import React from 'react';
import { motion } from 'motion/react';
import { Mail, Map, Github, Linkedin } from 'lucide-react';
import { Section } from './Section';

export const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-4xl mx-auto text-center">        
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/Springroll321' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/patrick-m-b6a360331' },
            { icon: Mail, label: 'Email', href: 'mailto:pmartinez2972@gmail.com' }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-8 py-4 rounded-2xl bg-white shadow-lg shadow-forest-dark/5 text-forest-dark border border-forest-light/5 hover:text-forest-light transition-all flex items-center gap-3"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
};
