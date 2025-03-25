
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface QuoteButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ onClick, isLoading = false }) => {
  return (
    <Button 
      onClick={onClick}
      disabled={isLoading}
      className="mt-8 px-6 py-6 h-auto rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-medium hover:scale-105 active:scale-100 active:shadow-inner-soft flex items-center gap-2 relative overflow-hidden group"
    >
      <span className="relative z-10">
        {isLoading ? 'Generating...' : 'Generate Quote'}
      </span>
      <RefreshCw 
        className={`h-4 w-4 relative z-10 transition-transform duration-500 ease-out ${isLoading ? 'animate-spin' : 'group-hover:rotate-180'}`} 
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary to-primary/90 transition-opacity duration-300 -z-0"></div>
    </Button>
  );
};

export default QuoteButton;
