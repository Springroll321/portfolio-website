import React from 'react';
import { motion } from 'motion/react';
import { Code, Wrench, Database, Terminal, Layout, Cpu, GitBranch, Layers, Box, Globe, Palette, FileText } from 'lucide-react';
import { Section } from './Section';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, index }) => {
  const bgColors = [
    "bg-sky-blue/30 border-sky-blue/20",
    "bg-umbrella-yellow/10 border-umbrella-yellow/20",
    "bg-spirit-purple/10 border-spirit-purple/20"
  ];
  const iconColors = [
    "text-forest-mid bg-sky-blue/50",
    "text-totoro-tan bg-umbrella-yellow/30",
    "text-spirit-purple bg-spirit-purple/20"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-8 rounded-3xl shadow-xl shadow-forest-dark/5 ${bgColors[index % bgColors.length]}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${iconColors[index % iconColors.length]}`}>
          {title === "Languages" && <Code className="w-5 h-5" />}
          {title === "Technologies/Tools" && <Wrench className="w-5 h-5" />}
          {title === "Databases" && <Database className="w-5 h-5" />}
        </div>
        <h3 className="text-xl font-sans font-bold text-forest-dark">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-2 rounded-full bg-white/60 text-forest-dark text-sm font-medium border border-forest-light/5 hover:border-meadow-green/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C#", "C++"]
    },
    {
      title: "Technologies/Tools",
      skills: ["Figma", "MS Office Apps", "Git", "Tailwind CSS", "React.js", "ShadCN", "GitHub Actions", "Docker", "GCP"]
    },
    {
      title: "Databases",
      skills: ["MSSQL", "PostgreSQL", "Neo4j"]
    }
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <SkillCategory 
            key={category.title} 
            title={category.title} 
            skills={category.skills} 
            index={i} 
          />
        ))}
      </div>
    </Section>
  );
};
