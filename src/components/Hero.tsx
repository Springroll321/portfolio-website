import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-meadow-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-blue/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 inline-block"
        >
          <div className="relative w-48 h-60 mx-auto">
            {/* Ears */}
            <div className="absolute top-0 left-[25%] w-[15%] h-[25%] bg-totoro-grey rounded-t-full -rotate-[15deg]" />
            <div className="absolute top-0 right-[25%] w-[15%] h-[25%] bg-totoro-grey rounded-t-full rotate-[15deg]" />
            
            {/* Body Frame */}
            <div className="absolute bottom-0 w-full h-[85%] rounded-[50%_50%_45%_45%_/_60%_60%_40%_40%] overflow-hidden shadow-2xl bg-totoro-grey z-10">
              <img 
                src="/images/hero/pe4-5.webp" 
                alt="Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-sans font-bold text-forest-dark mb-6 tracking-tight relative"
        >
          <span className="relative z-10">hello,👋</span> <br />
          <span className="text-totoro-grey italic font-serif relative z-10">
            i'm patrick
          </span>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-umbrella-yellow/20 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-blue/30 rounded-full blur-3xl -z-0" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-forest-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I make things
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-forest-dark text-cream rounded-full font-medium shadow-xl hover:bg-forest-mid transition-all flex items-center gap-2 group">
            Explore My Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

  
    </section>
  );
};
