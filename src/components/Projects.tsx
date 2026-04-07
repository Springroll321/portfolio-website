import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website to showcase my projects, skills and background.",
    image: "/images/projects/website.webp",
    tags: ["TypeScript", "Docker", "React", "Amazon EC2", "TailwindCSS", "Vite", "Gemini"],
    demo: "https://patricktech.site/"
  },
  {
    title: "Magic Budget",
    description: "The project aims to create a comprehensive and user-friendly family budgeting and expense management application.",
    image: "/images/projects/magic.webp",
    tags: ["TypeScript", "Docker", "React", "Node.js", "TailwindCSS"],
    github: "https://github.com/Magic-Budget"
  },
  {
    title: "Tidy Trader",
    description: "Web application prototype for scheduling chores for households. Users can earn coins by completing chores and assigning them to other household members.",
    image: "/images/projects/tidytrader.webp",
    tags: ["CSS", "HTML", "JavaScript", "Figma", "TailwindCSS"],
    demo: "https://canva.link/aaicp65ign6x4aq"
  },
  {
    title: "Collision Database",
    description: "Created a relational database from Montgomery County collision datasets, with a Java command-line interface for querying and analyzing data, improving accessibility and insights.",
    image: "/images/projects/collision.webp",
    tags: ["Java", "Microsoft SQL", "Figma"]
  },
  {
    title: "Vloggo Bot",
    description: "A personal vlog coordinator that keeps track of everyone in the rotation and pings the next member when it’s their time to vlog.",
    image: "/images/projects/vloggo.webp",
    tags: ["Python", "Docker", "Amazon EC2"],
    github: "https://github.com/Springroll321/vloggo-bot"
  },
  {
    title: "Simpli Cook",
    description: "This project involved building a recipe application in Android Studio using Java and HSQLDB.",
    image: "/images/projects/simply.webp",
    tags: ["Java", "Android Studio", "HSQLDB"],
    demo: "https://www.youtube.com/watch?v=7EQtmTFx1Fo"
  },
  {
    title: "Retro Music Library",
    description: "A prototype of a digital music library designed to apply Human–Computer Interaction (HCI) principles and evaluate usability through user testing.",
    image: "/images/projects/retro.webp",
    tags: ["JavaScript", "TailwindCSS", "CSS", "HTML"],
    github: "https://github.com/JordonH03/COMP3020-Group12"
  },
  {
    title: "Impossiball",
    description: "A two-player soccer game with various power-ups to make the game more chaotic.",
    image: "/images/projects/imposiball.webp",
    tags: ["Greenfoot", "Java"],
    github: "https://github.com/Springroll321/soccer_game"
  }
];

const ProjectCard = React.memo(({ project }: { project: Project }) => {
  const projectLink = project.demo || project.github;

  return (
    <motion.div
      whileHover={projectLink ? { y: -10 } : {}}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-forest-dark/5 border border-forest-light/10 will-change-transform h-full flex flex-col ${projectLink ? 'cursor-pointer' : ''}`}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${projectLink ? 'group-hover:scale-110' : ''}`}
          loading="lazy"
          decoding="async"
        />
        {projectLink && <div className="absolute inset-0 bg-totoro-grey/20 group-hover:bg-totoro-grey/0 transition-colors duration-500" />}
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className={`text-2xl font-sans font-semibold text-forest-dark mb-3 transition-colors ${projectLink ? 'hover:text-forest-light' : ''}`}>
          {projectLink ? (
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-forest-dark/60 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => {
            const getColor = (t: string) => {
              const lower = t.toLowerCase();
              if (lower.includes('react') || lower.includes('typescript') || lower.includes('javascript')) return 'bg-sky-blue text-forest-mid';
              if (lower.includes('java') || lower.includes('sql') || lower.includes('database')) return 'bg-umbrella-yellow/30 text-totoro-tan';
              if (lower.includes('docker') || lower.includes('cloud') || lower.includes('gcp')) return 'bg-spirit-purple/20 text-spirit-purple';
              if (lower.includes('tailwind') || lower.includes('css') || lower.includes('figma')) return 'bg-meadow-green/30 text-forest-light';
              return 'bg-totoro-white text-forest-mid';
            };
            return (
              <span key={tag} className={`text-[10px] font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${getColor(tag)}`}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
});

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const maxIndex = projects.length - itemsToShow;
  
  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <Section id="projects" title="Projects" className="bg-totoro-white/50 overflow-hidden">
      <div className="relative group max-w-7xl mx-auto px-4">
        <div className="overflow-visible py-10">
          <motion.div
            className="flex gap-8"
            animate={{ x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (32 / itemsToShow)}px)` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] flex-shrink-0"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls: Navigation Arrows + Pagination Indicators */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white shadow-md text-forest-dark hover:text-forest-light transition-all hover:scale-110 active:scale-95 border border-forest-light/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.max(1, projects.length - itemsToShow + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-forest-light w-8' : 'bg-forest-light/20 w-2 hover:bg-forest-light/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-white shadow-md text-forest-dark hover:text-forest-light transition-all hover:scale-110 active:scale-95 border border-forest-light/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
};


