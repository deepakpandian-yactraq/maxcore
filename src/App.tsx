import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Quote from './components/Quote';
import AdvancedFeatures from './components/AdvancedFeatures';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import MaxTransparency from './components/ProblemSection';
import TheSolution from './components/TheSolution';
import MaxCoreFeatures from './components/MaxCoreFeatures';
import PricingComparison from './components/PricingComparison';
import FinalCTA from './components/FinalCTA';



function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <CursorEffect />
      <Header onScheduleDemo={scrollToContact} />
      <Hero onScheduleDemo={scrollToContact} />
      <MaxTransparency />
      <TheSolution />
      <MaxCoreFeatures />
      <PricingComparison />
      <FinalCTA />
      {/* <AdvancedFeatures /> */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;