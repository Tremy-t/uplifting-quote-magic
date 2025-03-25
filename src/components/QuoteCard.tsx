
import React from 'react';
import { cn } from '@/lib/utils';

interface QuoteCardProps {
  children: React.ReactNode;
  className?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "glass p-8 md:p-10 rounded-2xl transition-all duration-500 w-full max-w-2xl mx-auto backdrop-blur-lg relative overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default QuoteCard;
