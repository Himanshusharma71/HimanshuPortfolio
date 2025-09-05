import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://linkedin.com/in/himanshu-sharma', 
    color: 'hover:text-blue-600' 
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/himanshu-sharma', 
    color: 'hover:text-gray-900 dark:hover:text-gray-100' 
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    url: 'https://twitter.com/himanshu_dev', 
    color: 'hover:text-blue-400' 
  },
  { 
    name: 'Email', 
    icon: Mail, 
    url: 'mailto:himanshu@example.com', 
    color: 'hover:text-red-500' 
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'himanshu@example.com',
    link: 'mailto:himanshu@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
    link: null
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    
    // Show success message (you could use a toast notification here)
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-6 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-semibold text-lg mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-white/10 backdrop-blur-md border-primary/20 hover:bg-primary/10 justify-start"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <social.icon className={`h-4 w-4 ${social.color} transition-colors`} />
                      <span>{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-8">
              <h3 className="font-semibold text-xl mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-white/10 backdrop-blur-md border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/10 backdrop-blur-md border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-white/10 backdrop-blur-md border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    rows={6}
                    className="bg-white/10 backdrop-blur-md border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white border-0 hover:scale-105 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-top-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}