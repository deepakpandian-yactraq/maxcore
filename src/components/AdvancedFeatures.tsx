import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeatureListProps {
  features: string[];
  delay: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ features, delay }) => {
  return (
    <div className={`space-y-4 ${delay}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-light-200/80 font-semibold glow-md">{feature}</span>
        </div>
      ))}
    </div>
  );
};

const AdvancedFeatures: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.1 });
  
  const columnOneFeatures = [
    'AI/ML-compatible task detection',
    'Convert earnings to USDC, ETH, or USD'
  ];
  
  const columnTwoFeatures = [
    'Built-in wallet management',
    'Export reports for accounting & compliance'
  ];
  
  const columnThreeFeatures = [
    'Updated tokenomics, demand, and availability',
    'SLA uptime, workload tracking, performance metrics'
  ];
  
  return (
    <section ref={ref} className="py-24 px-4 bg-gradient relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-dark/40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 glow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Advanced Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <FeatureList 
            features={columnOneFeatures} 
            delay={isVisible ? "fade-in-1" : "opacity-0"}
          />
          
          <FeatureList 
            features={columnTwoFeatures} 
            delay={isVisible ? "fade-in-2" : "opacity-0"}
          />
          
          <FeatureList 
            features={columnThreeFeatures} 
            delay={isVisible ? "fade-in-3" : "opacity-0"}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;