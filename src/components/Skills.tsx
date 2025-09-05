import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      {name:'javascript',level:90},
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Redux', level: 85 },
      {name:'angular (learning)',level:60}
    ]
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 87 },
      { name: 'mySQL', level: 82 },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'OpenAI API', level: 88 },
      { name: 'TensorFlow', level: 85 },
      { name: 'yolov8', level: 72 },
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 95 },
      { name: 'Docker (learning)', level: 85 },
      { name: 'AWS (learning)', level: 52 },
    ]
  }
];
const certifications = [
  'MongoDB Certified Developer',
  'React Advanced Certification',
  'Node.js Professional',
  'AI/ML Specialization',
  'Full Stack Development - Apna Collage',
  'SQL - Simplilearn',
  'CORE Python Essentials',
  'Data Structures & Problem Solving in C/C++ - Infosys',
  'PHP Workshop Completion'
];


export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
              >
                🏆 {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}