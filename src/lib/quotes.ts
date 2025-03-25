
interface Quote {
  text: string;
  author: string;
  category: string;
}

export const categories = [
  { id: "all", name: "All Quotes" },
  { id: "motivation", name: "Motivation" },
  { id: "success", name: "Success" },
  { id: "leadership", name: "Leadership" },
  { id: "creativity", name: "Creativity" },
  { id: "mindfulness", name: "Mindfulness" },
];

export const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    category: "creativity",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "creativity",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "leadership",
  },
  {
    text: "Less, but better.",
    author: "Dieter Rams",
    category: "creativity",
  },
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams",
    category: "creativity",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "success",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "motivation",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "motivation",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "motivation",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "mindfulness",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "mindfulness",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    category: "mindfulness",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "motivation",
  },
  {
    text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
    author: "Simon Sinek",
    category: "leadership",
  },
  {
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    category: "leadership",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "success",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "motivation",
  },
];

export function getRandomQuote(category: string = "all"): Quote {
  const filteredQuotes = category === "all" 
    ? quotes 
    : quotes.filter(quote => quote.category === category);
  
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}

export function getUniqueQuote(previousQuote: Quote | null, category: string = "all"): Quote {
  if (!previousQuote) return getRandomQuote(category);
  
  const filteredQuotes = category === "all" 
    ? quotes.filter(q => q.text !== previousQuote.text)
    : quotes.filter(q => q.text !== previousQuote.text && q.category === category);
  
  // If there's only one quote in the category and it's the previous one, return it
  if (filteredQuotes.length === 0) return previousQuote;
  
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}
