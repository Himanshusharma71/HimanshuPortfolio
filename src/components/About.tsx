import React from 'react';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const experiences = [
  {
    type: 'work',
    title: 'MERN Developer Intern',
    organization: 'CodTech IT Solutions',
    location: 'Remote',
    period: '2023',
    description: 'Worked as a MERN Developer Intern, contributing to full-stack projects, debugging issues, and developing reusable components using React, Node.js, Express, and MongoDB.',
    achievements: [
      'Built and optimized full-stack web applications',
      'Improved application performance and scalability',
      'Collaborated with team on live client projects'
    ]
  },
  {
    type: 'work',
    title: 'Training Assistant (Intern)',
    organization: 'Jainemo Pvt. Ltd.',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Worked on MERN stack projects, solved code errors, and supported team members in debugging. Assisted in Java and MERN stack related doubts while contributing to company projects.',
    achievements: [
      'Contributed to live MERN stack projects',
      'Solved 1400+ code errors and debugging issues',
      'Guided juniors in understanding MERN concepts'
    ]
  },
  {
    type: 'education',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'Greater Noida Institute of Technology',
    location: 'Greater Noida, India',
    period: '2020 - 2024',
    description: 'Specialized in Artificial Intelligence and Machine Learning with strong focus on Full Stack Web Development. Completed B.Tech in 2024 with projects spanning MERN stack, AI, and Python.',
    achievements: [
      'Developed final year project: Real-Time Object Detection with Audio Feedback using YOLOv8',
      'Created SmartBhartiya hotel management site',
      'Developed Personal Portfolio Website',
      'Overall CGPA: 7.6'
    ]
  },
  {
    type: 'education',
    title: 'Higher Secondary (PCM + Computer Science)',
    organization: 'Kendriya Vidyalaya',
    location: 'New Delhi, India',
    period: '2018 - 2020',
    description: 'Focused on Mathematics, Computer Science, and logical problem-solving. Actively participated in coding competitions and hackathons.',
    achievements: [
      '75% aggregate in CBSE Board',
      'Winner in inter-school coding competitions',
      'Represented school in tech fests'
    ]
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through technology, education, and professional growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="glass-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-primary/10' : 'bg-secondary/50'}`}>
                        {exp.type === 'work' ? (
                          <Building className="h-4 w-4 text-primary" />
                        ) : (
                          <GraduationCap className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.organization}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
