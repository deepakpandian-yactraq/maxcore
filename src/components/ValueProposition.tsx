import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { landingPageContent } from '../lib/content';
const ValueProposition: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section ref={ref} className="py-24 px-4 bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Left column with bold quote */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-8 border border-primary/30 rounded-lg bg-gradient relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 blur-sm rounded-lg"></div>
              <div className="relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight glow-lg">
                  "{landingPageContent.valueProposition.leftCol.part1}<span className="text-gradient">—{landingPageContent.valueProposition.leftCol.part2}</span>"
                </h2>
              </div>
            </div>
          </div>
          
          {/* Right column with paragraph */}
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl text-light-200/70 font-semibold leading-relaxed max-w-lg glow-md">
            {landingPageContent.valueProposition.rightCol.part1} <br />
            {landingPageContent.valueProposition.rightCol.part2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;