import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Section } from './Section';

const EducationItem = ({ degree, school, period, location, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 pb-12 border-l-2 border-forest-light/20 last:pb-0"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-meadow-green border-4 border-totoro-white shadow-sm" />
    
    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-forest-dark/5 hover:border-meadow-green/30 transition-colors">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-sans font-bold text-forest-dark">{degree}</h3>
          <p className="text-forest-light font-medium">{school}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="flex items-center gap-1.5 text-xs font-bold text-forest-dark/40 uppercase tracking-widest">
            <Calendar className="w-3 h-3" /> {period}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-forest-dark/40 uppercase tracking-widest">
            <MapPin className="w-3 h-3" /> {location}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Education = () => {
  const education = [
    {
      degree: "B.S. in Computer Science",
      school: "University of Manitoba",
      period: "Graduated June 2025",
      location: "Winnipeg, MB",
    },
    {
      degree: "High School Diploma",
      school: "Fort Richmond Collegiate",
      period: "Graduated June 2020",
      location: "Winnipeg, MB",
    }
  ];

  return (
    <Section id="education" title="Education" className="bg-totoro-white/30">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-0">
          {education.map((item, i) => (
            <EducationItem key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};
