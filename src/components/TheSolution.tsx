// src/components/TheSolution.tsx
import { ArrowRight } from 'lucide-react';

export default function TheSolution() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">

        {/* Main headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 md:mb-8">
          The Ultimate
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            Cloud Aggregator
          </span>
        </h2>

        {/* Supporting headline */}
        <p className="text-xl sm:text-2xl md:text-2xl font-normal text-white mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
          MaxCore Cloud isn't just another provider — it's a productivity engine.
        </p>

        {/* Core content */}
        <div className="space-y-6 text-xl sm:text-2xl md:text-2xl font-normal text-white leading-relaxed max-w-4xl mx-auto">
          <p>
            We pull from a global network to deliver the most cost-effective compute by the hour,
          </p>

          <p>
            then we optimize it.
          </p>

          <p className="pt-4">
            By combining market-wide aggregation with our software acceleration tools, we don't just save you pennies —
          </p>

          {/* KEEP THIS GRADIENT */}
          <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mt-6">
            We reduce your total infrastructure spend by up to <span className="text-white">85%</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">

          <a
            href="https://console.maxcore.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold
              bg-gradient-to-r from-primary/80 to-secondary/80
              text-white rounded-xl shadow-xl shadow-cyan-500/30
              hover:shadow-cyan-600/50 hover:scale-[1.04] active:scale-95
              border border-cyan-400/30 transition-all duration-300
            "
          >
            Start Saving Now
            <ArrowRight className="w-6 h-6" />
          </a>

          <a
            href="#pricingComparison"
            className="
              inline-flex items-center gap-3 px-10 py-5 text-xl font-medium
              text-white
              bg-white/5 hover:bg-white/10 backdrop-blur-md
              border border-white/30 hover:border-white/60
              rounded-xl transition-all duration-300
            "
          >
            See Real-Time Rates →
          </a>

        </div>

      </div>
    </section>
  );
}
