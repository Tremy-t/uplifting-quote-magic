
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 md:px-12">
      <div className="flex items-center">
        <h1 className="text-xl font-display font-medium tracking-tight">QuoteSpring</h1>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">Home</a>
        <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">About</a>
        <a href="#" className="text-foreground/80 hover:text-foreground transition-colors duration-200">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar;
