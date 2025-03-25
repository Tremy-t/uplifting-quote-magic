
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ShareQuoteProps {
  text: string;
  author: string;
}

const ShareQuote: React.FC<ShareQuoteProps> = ({ text, author }) => {
  const { toast } = useToast();
  
  const quote = `"${text}" — ${author}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    toast({
      title: "Copied to clipboard",
      description: "The quote has been copied to your clipboard.",
      duration: 3000,
    });
  };
  
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`,
      '_blank'
    );
  };
  
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(quote)}`,
      '_blank'
    );
  };
  
  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=Inspirational%20Quote&summary=${encodeURIComponent(quote)}`,
      '_blank'
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      <Button 
        onClick={copyToClipboard} 
        variant="outline"
        size="sm"
        className="rounded-full px-4 gap-2 border border-border/50 bg-background/80 hover:bg-background backdrop-blur-sm transition-all duration-200"
      >
        <Copy className="h-4 w-4" />
        <span>Copy</span>
      </Button>
      
      <Button 
        onClick={shareOnTwitter} 
        variant="outline"
        size="sm"
        className="rounded-full px-4 gap-2 border border-border/50 bg-background/80 hover:bg-background backdrop-blur-sm transition-all duration-200"
      >
        <Twitter className="h-4 w-4 text-[#1DA1F2]" />
        <span>Twitter</span>
      </Button>
      
      <Button 
        onClick={shareOnFacebook} 
        variant="outline"
        size="sm"
        className="rounded-full px-4 gap-2 border border-border/50 bg-background/80 hover:bg-background backdrop-blur-sm transition-all duration-200"
      >
        <Facebook className="h-4 w-4 text-[#4267B2]" />
        <span>Facebook</span>
      </Button>
      
      <Button 
        onClick={shareOnLinkedIn} 
        variant="outline"
        size="sm"
        className="rounded-full px-4 gap-2 border border-border/50 bg-background/80 hover:bg-background backdrop-blur-sm transition-all duration-200"
      >
        <Linkedin className="h-4 w-4 text-[#0077B5]" />
        <span>LinkedIn</span>
      </Button>
    </div>
  );
};

export default ShareQuote;
