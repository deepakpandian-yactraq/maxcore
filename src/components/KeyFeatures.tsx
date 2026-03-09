import React from 'react';
import { BarChart3, RefreshCw, LayoutDashboard } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { landingPageContent } from '../lib/content';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  listArray: string[];
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, listArray, delay }) => {
  return (
    <div className={`bg-dark-200 rounded-xl p-8 border border-transparent hover:border-primary/50 transition-all duration-300 hover:glow group ${delay}`}>
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 glow-md">{title}</h3>
      <div className='flex flex-col gap-2'>
      {listArray.map((item, index) => (
        <p className="text-light-200/70 font-semibold glow-sm" key={index}>{item}</p>
      ))}
      </div>
    </div>
  );
};

const KeyFeatures: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section id="features" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 glow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Key Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BarChart3 className="w-8 h-8 text-primary" />}
            title={landingPageContent.features[0].title}
            listArray={landingPageContent.features[0].listArray}
            delay={isVisible ? "fade-in-1" : "opacity-0"}
          />
          
          <FeatureCard 
            icon={<RefreshCw className="w-8 h-8 text-primary" />}
            title={landingPageContent.features[1].title}
            listArray={landingPageContent.features[1].listArray}
            delay={isVisible ? "fade-in-2" : "opacity-0"}
          />
          
          <FeatureCard 
            icon={<LayoutDashboard className="w-8 h-8 text-primary" />}
            title={landingPageContent.features[2].title}
            listArray={landingPageContent.features[2].listArray}
            delay={isVisible ? "fade-in-3" : "opacity-0"}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;