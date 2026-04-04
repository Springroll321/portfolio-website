import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 px-6 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-semibold text-forest-dark"
            >
              {title}
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              className="h-1 bg-meadow-green mx-auto mt-6 rounded-full"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
