import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';

const slides = [
  {
    id: 1,
    title: "Who I Am",
    description: "I'm Patrick, a recently graduated student with a passion for creating new things, whether it's a project that is tangible or written in code. I enjoy solving complex problems and the process of bringing ideas to life. I graduated in 2025 with a major in Computer Science from the University of Manitoba. I was born and raised in the tropical weather of the Philippines and later moved to Winnipeg, Manitoba in 2009 with my family. Altough we have been in Canada for quite some time now, we're still learning how to survive the cold winters.",
    images: [
      "/images/about me/who/manila.webp",
      "/images/about me/who/uofm.webp",
      "/images/about me/who/winter.webp"
    ]
  },
  {
    id: 2,
    title: "Maker 🔨",
    description: "I am passionate about making things either through traditional crafts like woodworking and crocheting, or through digital creations such as 3D modeling and coding. I enjoy the mix of creativity, problem-solving, and experimentation that comes with any project.",
    images: [
      "/images/about me/maker/crochet.webp",
      "/images/about me/maker/flower.webp",
      "/images/about me/maker/sword.webp"
    ]
  },
  {
    id: 3,
    title: "Gaming 🎮",
    description: "Ever since I built my first computer, gaming has been one of my favorite ways to unwind during my free time. I mostly enjoy playing games with friends in competitive settings like NBA 2K, Valorant, and CSGO. The single player games that I have enjoyed are Soulsborne games like Dark Souls, Elden Ring and Sekiro.",
    images: [
      "/images/about me/gaming/omen.webp",
      "/images/about me/gaming/pc.webp",
      "/images/about me/gaming/rellana.webp"
    ]
  },
  {
    id: 4,
    title: "Sports 🏀",
    description: "I’m adamant about staying active, whether it's playing basketball, hiking, or swimming. I've been playing basketball ever since I was a kid and it remains one of my favorite ways to stay active and have fun with friends. My favorite NBA teams to watch are currently the Los Angeles Lakers and previously the Chicago Bulls during the Derrick Rose era. More recently I have enjoyed solving boulder problems as it picks my brain while giving me a good workout",
    images: [
      "/images/about me/sports/cllimb.webp",
      "/images/about me/sports/drose.webp",
      "/images/about me/sports/swimming.webp"
    ]
  },
  {
    id: 5,
    title: "Exploring 🏞️",
    description: "I love exploring new places, whether it's hiking through nature trails, visiting historical sites, or discovering hidden gems in cities. Exploring allows me to experience different cultures, appreciate the beauty of the world, and create lasting memories. I had the privelage to travel to various places including Canada, the Philippines, the United States, Mexico, and the Carribean.",
    images: [
      "/images/about me/exploring/banff.webp",
      "/images/about me/exploring/bridge.webp",
      "/images/about me/exploring/church.webp",
      "/images/about me/exploring/msc.webp",
      "/images/about me/exploring/para.webp",
      "/images/about me/exploring/pyramid.webp"
    ]
  },
];

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle images within the current slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides[currentSlide].images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentImage(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentImage(0);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Section id="about" title="About Me">
      <div className="relative group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-16 items-center min-h-[500px]"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-totoro-grey relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`${currentSlide}-${currentImage}`}
                    src={slides[currentSlide].images[currentImage]} 
                    alt={slides[currentSlide].title} 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl font-sans font-bold text-forest-dark relative">
                {slides[currentSlide].title}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-meadow-green rounded-full" />
              </h3>
              <p className="text-forest-dark/70 leading-relaxed text-lg">
                {slides[currentSlide].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls: Navigation Arrows + Pagination Indicators */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md text-forest-dark hover:text-forest-light transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImage(0);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-forest-light w-8' : 'bg-forest-light/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md text-forest-dark hover:text-forest-light transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
};
