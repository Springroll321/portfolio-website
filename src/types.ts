import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
  color: string;
}

export interface Journey {
  year: string;
  title: string;
  company: string;
  description: string;
}
