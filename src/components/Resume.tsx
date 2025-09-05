import React from 'react';
import { Download, FileText, Calendar, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const highlights = [
  '5+ Projects Delivered',
  'MERN Stack Enthusiast',
  'AI/ML Integration',
  'Team Leadership',
  'Client Success: 98%'
];

export function Resume() {
  
  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = './Himanshu-sharma-resume.pdf'; // File path
  link.download = 'Himanshu-sharma-resume.pdf'; // File ka naam jab download hoga
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section id="resume" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my comprehensive resume to learn more about my experience and skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Download Card */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Himanshu Sharma - Resume</h3>
                    <p className="text-muted-foreground">
                      MERN Stack Developer & AI Enthusiast with 5+ years of experience in building 
                      scalable web applications and AI-powered solutions.
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Last updated: January 2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FileText className="h-3 w-3" />
                      <span>PDF Format</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      onClick={handleDownload}
                      className="gradient-primary text-white border-0 hover:scale-105 transition-all duration-200"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open('/resume-preview', '_blank')}
                      className="bg-white/10 backdrop-blur-md border-primary/20 hover:bg-primary/10"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Preview Online
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Star className="mr-2 h-4 w-4 text-primary" />
                Key Highlights
              </h4>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h4 className="font-semibold mb-4">Quick Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">Remote/Mumbai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <Badge variant="secondary" className="text-xs">
                    Available
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages:</span>
                  <span className="font-medium">EN, HI</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}