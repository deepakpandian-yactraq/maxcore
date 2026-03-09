import React from 'react';
import { Server, Wallet, Cpu, RefreshCw } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { landingPageContent } from '../lib/content';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`flex items-start gap-6 ${delay}`}>
      <div className="relative">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute top-[calc(100%+1rem)] bottom-[-100%] left-1/2 w-px bg-primary/20 transform -translate-x-1/2"></div>
      </div>
      <div className="flex-1 pb-16">
        <h3 className="text-xl font-bold mb-2 glow-md">{title}</h3>
        <p className="text-light-200/70 font-semibold glow-sm">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="howItWorks" ref={ref} className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 glow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          How It Works
        </h2>

        <div className="relative">
          <Step
            icon={<Server className="w-6 h-6 text-primary" />}
            title={landingPageContent.howItWorks.step1.title}
            description={landingPageContent.howItWorks.step1.subtitle}
            delay={isVisible ? "fade-in-1" : "opacity-0"}
          />

          <Step
            icon={<Wallet className="w-6 h-6 text-primary" />}
            title={landingPageContent.howItWorks.step2.title}
            description={landingPageContent.howItWorks.step2.subtitle}
            delay={isVisible ? "fade-in-2" : "opacity-0"}
          />

          <Step
            icon={<Cpu className="w-6 h-6 text-primary" />}
            title={landingPageContent.howItWorks.step3.title}
            description={landingPageContent.howItWorks.step3.subtitle}
            delay={isVisible ? "fade-in-3" : "opacity-0"}
          />

          <Step
            icon={<RefreshCw className="w-6 h-6 text-primary" />}
            title={landingPageContent.howItWorks.step4.title}
            description={landingPageContent.howItWorks.step4.subtitle}
            delay={isVisible ? "fade-in-4" : "opacity-0"}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;