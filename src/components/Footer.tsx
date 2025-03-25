
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-6 md:px-12 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-foreground/60">
            © {currentYear} QuoteSpring. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50 mt-1">
            Created by <a href="https://github.com/Tremy-t" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-200">Tremy-t</a>
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
