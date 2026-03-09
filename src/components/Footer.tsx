import React from 'react';
import { Cpu, Mail, Linkedin, MessageSquare } from 'lucide-react';
import {XIcon, TelegramIcon} from '../icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-6 md:mb-0">
            <Cpu className="w-8 h-8 text-primary mr-3" />
            <div>
              <h3 className="font-bold text-xl glow-md">DePINtelligence</h3>
              <p className="text-sm text-light-200/90 font-semibold glow-sm">by Quantum Alchemy</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">Home</a>
            <a href="#features" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">Features</a>
            <a href="#howItWorks" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">How it Works</a>
            <a href="#contact" className="text-light-200/90 font-semibold hover:text-primary transition-colors glow-sm hover:glow-md">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="mailto:bizdev@quantumalchemy.ca" className="text-light-200/90 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 glow-sm hover:glow-md">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://x.com/intelDePIN?t=txjeUVyNaxBinXewAnXbuw&s=09" className="text-light-200/90 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 glow-sm hover:glow-md">
              <XIcon className="w-5 h-5" />
            </a>
            <a href="https://t.me/DePINtelligence" className="text-light-200/90 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 glow-sm hover:glow-md">
              <TelegramIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/depintelligence/about/" className="text-light-200/90 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 glow-sm hover:glow-md">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-light-200/90 font-semibold glow-sm">
            © {new Date().getFullYear()} Quantum Alchemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;