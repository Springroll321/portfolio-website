import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-forest-light/10 text-center bg-totoro-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <Leaf className="text-meadow-green w-5 h-5" />
          <span className="text-xl font-sans font-bold tracking-tighter">patrick m<span className="text-forest-light">.</span></span>
        </div>
      </div>
    </footer>
  );
};
