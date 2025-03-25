
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import QuoteCard from '@/components/QuoteCard';
import QuoteDisplay from '@/components/QuoteDisplay';
import QuoteButton from '@/components/QuoteButton';
import ShareQuote from '@/components/ShareQuote';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getUniqueQuote, categories } from '@/lib/quotes';

const Index = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [isChanging, setIsChanging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  // Initial quote fetch
  useEffect(() => {
    const initialQuote = getUniqueQuote(null);
    setQuote(initialQuote);
  }, []);

  const generateQuote = () => {
    setIsLoading(true);
    setIsChanging(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      const newQuote = getUniqueQuote(quote, currentCategory);
      setQuote(newQuote);
      setIsLoading(false);
      
      // Reset the changing state after the transition
      setTimeout(() => {
        setIsChanging(false);
      }, 600);
    }, 600);
  };

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === currentCategory) return;
    
    setCurrentCategory(categoryId);
    setIsChanging(true);
    
    setTimeout(() => {
      const newQuote = getUniqueQuote(null, categoryId);
      setQuote(newQuote);
      
      // Reset the changing state after the transition
      setTimeout(() => {
        setIsChanging(false);
      }, 600);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>
      
      <NavBar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium tracking-wide">INSPIRATION DAILY</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground">Discover Your Daily Dose of Wisdom</h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-lg mx-auto">Elevate your mindset with carefully curated quotes from the world's greatest thinkers and innovators.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`rounded-full text-sm transition-all duration-300 ${
                  currentCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background/50 hover:bg-background"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <QuoteCard>
              <QuoteDisplay 
                text={quote.text} 
                author={quote.author}
                isChanging={isChanging}
              />
              
              <ShareQuote text={quote.text} author={quote.author} />
            </QuoteCard>
          </div>
          
          <div className="flex justify-center mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <QuoteButton onClick={generateQuote} isLoading={isLoading} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
