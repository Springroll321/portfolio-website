import React from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="leaf-particle"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{ 
            y: ['-10%', '110%'],
            x: [Math.random() * 100 + '%', (Math.random() * 100 - 10) + '%'],
            opacity: [0, 0.4, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 15 + Math.random() * 20, 
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        >
          <Leaf className="text-meadow-green/30 w-4 h-4" />
        </motion.div>
      ))}
    </div>
  );
};
