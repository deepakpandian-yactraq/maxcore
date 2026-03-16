import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { landingPageContent } from '../lib/content';
interface HeroProps {
  onScheduleDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScheduleDemo }) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = orb.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
      
      orb.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-dark">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-dark to-dark"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIHN0cm9rZT0icmdiYSgxMjcsIDkwLCAyNDAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Glowing Orb */}
      <div ref={orbRef} className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none transition-transform duration-300 ease-out">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute inset-[25%] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[50px] animate-pulse-slow" style={{ animationDelay: '-2s' }}></div>
      </div>

      {/* Content */}
      <div className=" mx-auto text-center z-10 space-y-8 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight fade-in-1 glow-lg">
          <span className="relative inline-block">
            <span className="relative z-10">{landingPageContent.hero.heading.titlePart1}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10"></div>
          </span>
          <br />
          <span className="text-gradient bg-clip-text">{landingPageContent.hero.heading.titlePart2}</span>
        </h1>

        <p className="text-lg md:text-lg font-bold text-light-200 max-w-3xl mx-auto leading-relaxed fade-in-2 glow-md">
        {landingPageContent.hero.subheading}
        </p>

        {/* CTA area - flex on md+, stack on mobile */}
        <div className="
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-4 sm:gap-6 md:gap-8
        ">
          {/* Primary CTA Button */}
         <a
  href="https://console.maxcore.cloud"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold
    bg-gradient-to-r from-primary/80 to-secondary/80 opacity-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300
    text-white rounded-xl shadow-xl shadow-cyan-500/30
    hover:shadow-cyan-600/50 hover:scale-[1.04] active:scale-95
    border border-cyan-400/30
  "
>
  Deploy to MaxCore
</a>
          {/* Secondary Link */}
          <a
            href="/#pricingComparison"
            className="
              inline-flex items-center justify-center
              px-7 py-4 
              text-base md:text-lg font-medium
              text-slate-200 hover:text-white
              bg-white/5 hover:bg-white/10
              backdrop-blur-sm
              border border-white/10 hover:border-white/20
              rounded-xl
              transition-all duration-300
              min-w-[220px] md:min-w-[260px]
            "
          >
            View Real-Time Rates →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center fade-in-4">
        <span className="text-sm text-light-200/60 mb-2 font-display glow-sm">{landingPageContent.hero.cta}</span>
        <ChevronDown className="animate-bounce w-6 h-6 text-light-200/60" />
      </div>
    </section>
  );
};

export default Hero;