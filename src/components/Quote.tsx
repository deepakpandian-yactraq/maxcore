import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { landingPageContent } from '../lib/content';

const Quote: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative">
        <blockquote className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
           {landingPageContent.quote.part1}
            <span className="block mt-4 text-gradient">{landingPageContent.quote.part2}</span>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;