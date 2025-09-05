import React, { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Platform',
    description: 'Full-stack e-commerce platform with AI-driven product recommendations and inventory management.',
    longDescription: 'A comprehensive e-commerce solution built with MERN stack and integrated AI capabilities. Features include intelligent product recommendations, automated inventory management, real-time analytics, and advanced search functionality.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'TensorFlow'],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: ['AI Recommendations', 'Real-time Analytics', 'Payment Integration', 'Admin Dashboard'],
    challenges: 'Implementing real-time recommendation system with high performance',
    results: '40% increase in user engagement and 25% boost in sales conversion'
  },
  {
    id: 2,
    title: 'Smart Task Management App',
    description: 'Intelligent task manager with AI-powered priority suggestions and team collaboration features.',
    longDescription: 'A modern task management application that leverages machine learning to optimize workflow and productivity. Built with React and Node.js with real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AI/ML'],
    category: 'AI/ML',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: ['Smart Prioritization', 'Team Collaboration', 'Progress Tracking', 'Analytics Dashboard'],
    challenges: 'Building real-time collaboration with optimal performance',
    results: '60% improvement in team productivity and task completion rates'
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'Modern chat app with group messaging, file sharing, and video calls using WebRTC.',
    longDescription: 'Feature-rich chat application supporting real-time messaging, file sharing, group chats, and video calling. Built with modern web technologies and WebRTC for peer-to-peer communication.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB'],
    category: 'Frontend',
    featured: false,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: ['Real-time Messaging', 'Video Calls', 'File Sharing', 'Group Chats'],
    challenges: 'Implementing WebRTC for stable video calling across different browsers',
    results: 'Successfully handles 1000+ concurrent users with low latency'
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence with AI-powered insights and predictions.',
    longDescription: 'Comprehensive business intelligence dashboard with advanced data visualization, predictive analytics, and automated reporting features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'Python', 'MongoDB', 'D3.js', 'TensorFlow'],
    category: 'AI/ML',
    featured: false,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: ['Interactive Charts', 'Predictive Analytics', 'Automated Reports', 'Real-time Updates'],
    challenges: 'Processing large datasets in real-time with smooth user experience',
    results: 'Reduced reporting time by 80% and improved decision-making speed'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'Headless CMS with drag-and-drop editor and multi-site management capabilities.',
    longDescription: 'Modern headless CMS solution with intuitive content management, multi-site support, and developer-friendly API architecture.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'TypeScript'],
    category: 'Backend',
    featured: false,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: ['Drag & Drop Editor', 'Multi-site Support', 'GraphQL API', 'Role-based Access'],
    challenges: 'Creating flexible content structure while maintaining performance',
    results: 'Reduced content publishing time by 70% for client teams'
  },
  {
    id: 6,
    title: 'Social Media Analytics Tool',
    description: 'AI-powered social media monitoring and analytics platform with sentiment analysis.',
    longDescription: 'Advanced social media analytics platform that monitors brand mentions, analyzes sentiment, and provides actionable insights using natural language processing.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    technologies: ['React', 'Python', 'MongoDB', 'NLP', 'AWS'],
    category: 'AI/ML',
    featured: false,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    features: ['Sentiment Analysis', 'Brand Monitoring', 'Trend Prediction', 'Automated Reports'],
    challenges: 'Processing millions of social media posts with accurate sentiment analysis',
    results: 'Achieved 94% accuracy in sentiment analysis across multiple languages'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and artificial intelligence
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'gradient-primary text-white border-0 scale-105'
                  : 'bg-white/10 backdrop-blur-md border-primary/20 hover:bg-primary/10'
              }`}
            >
              <Filter className="mr-2 h-3 w-3" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/90 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full bg-white/10 backdrop-blur-md border-primary/20 hover:bg-primary/10"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl glass-card border-0">
                    {selectedProject && (
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                            <Badge variant="secondary">{selectedProject.category}</Badge>
                          </div>
                        </div>

                        <ImageWithFallback
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />

                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">Overview</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {selectedProject.longDescription}
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Key Features</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {selectedProject.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm">
                                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Challenge</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {selectedProject.challenges}
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Results</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {selectedProject.results}
                            </p>
                          </div>

                          <div className="flex space-x-2 pt-4">
                            <Button asChild className="gradient-primary text-white border-0">
                              <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild className="bg-white/10 backdrop-blur-md border-primary/20">
                              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}