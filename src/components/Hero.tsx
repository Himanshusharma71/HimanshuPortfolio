import React from 'react';
import { ArrowDown, Download, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'AI/ML', 'TypeScript', 'Next.js'];

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Himanshu Sharma</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              MERN Stack Developer & AI Enthusiast
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate full-stack developer specializing in modern web technologies and artificial intelligence. 
              I create scalable, user-centric applications that bridge the gap between innovative ideas and 
              practical solutions.
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 text-sm bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="gradient-primary text-white border-0 hover:scale-105 transition-all duration-200 px-8 py-3 rounded-2xl"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="bg-white/10 backdrop-blur-md border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-200 px-8 py-3 rounded-2xl"
          >
            <Download className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}