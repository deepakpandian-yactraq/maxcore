import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

interface HeaderProps {
  onScheduleDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onScheduleDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/80 backdrop-blur-xl border-b border-primary/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
  <div className="relative">
    <img 
      src="/maxcore-logo.png" 
      alt="DePINtelligence Logo"
      className=" object-contain relative z-10"
    />
  </div>

  <div>
   
  </div>
</div>
        <nav className="hidden md:flex items-center space-x-8">
           <a href="#" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">Home</a>
        <a href="#features" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">Features</a>
        <a href="#pricingComparison" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">Pricing</a>
          <button
            onClick={onScheduleDemo}
            className="group relative px-6 py-2.5 rounded-lg transition-all duration-300 text-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>
            <span className="relative z-10 text-white font-bold glow-lg">Contact Us</span>
          </button>
        </nav>

        <button className="md:hidden text-light-200 hover:text-primary transition-colors glow-sm hover:glow-md font-semibold">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
