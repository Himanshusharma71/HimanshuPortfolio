import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Himanshu Sharma</span>
          </div>

          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center space-x-1">
              <Coffee className="h-4 w-4" />
              <span>Fueled by coffee</span>
            </div>
            <span>•</span>
            <span>© {currentYear} All rights reserved</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 text-xs text-muted-foreground">
            <p>
              Built with React, TypeScript, Tailwind CSS, and lots of passion ✨
            </p>
            <p>
              Open to new opportunities and exciting challenges
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}