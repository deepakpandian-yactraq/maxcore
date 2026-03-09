import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white glow-lg">
          Build at Max Velocity.
        </h2>

        <p className="text-lg md:text-xl text-light-200/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Stop subsidizing the hyperscalers and start scaling your product.
          Get the convenience you're used to at the price you deserve.
        </p>

        <button className="px-8 py-4 text-lg font-semibold rounded-xl 
                           bg-gradient-to-r from-primary to-secondary 
                           text-white shadow-lg 
                           hover:scale-105 hover:shadow-2xl 
                           transition-all duration-300">
          Get Started with MaxCore Cloud
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;