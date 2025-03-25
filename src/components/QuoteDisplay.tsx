
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface QuoteDisplayProps {
  text: string;
  author: string;
  isChanging: boolean;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ text, author, isChanging }) => {
  const [visible, setVisible] = useState(true);
  const [currentText, setCurrentText] = useState(text);
  const [currentAuthor, setCurrentAuthor] = useState(author);

  useEffect(() => {
    if (isChanging) {
      setVisible(false);
      const timer = setTimeout(() => {
        setCurrentText(text);
        setCurrentAuthor(author);
        setVisible(true);
      }, 500); // Match this with the exit animation duration
      return () => clearTimeout(timer);
    } else {
      setCurrentText(text);
      setCurrentAuthor(author);
      setVisible(true);
    }
  }, [text, author, isChanging]);

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex">
        <Quote className="h-10 w-10 text-primary/30 mr-4 mt-1 flex-shrink-0" />
        <blockquote className="italic text-2xl md:text-3xl font-display leading-relaxed text-foreground">
          {currentText}
        </blockquote>
      </div>
      <footer className="mt-4 text-right font-medium text-foreground/80">
        — {currentAuthor}
      </footer>
    </div>
  );
};

export default QuoteDisplay;
