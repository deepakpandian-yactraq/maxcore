import { ArrowRight } from 'lucide-react';
import cloudImg from "../images/cloud-computing.webp";


export default function MaxTransparency() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-dark-100 text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-dark-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Content - 8 columns on lg+ */}
          <div className="lg:col-span-8 space-y-8 lg:space-y-10">
            <h2
  className="
    text-3xl sm:text-4xl md:text-5xl 
    font-bold tracking-tight 
    !leading-[60px]               
  "
>
              Tired of the Hyperscaler{" "}
              <span className="text-transparent bg-clip-text text-gradient bg-clip-text">
                "Black Box"?
              </span>
            </h2>

            <div className="text-lg md:text-lg font-semibold text-light-200 max-w-3xl mx-auto leading-relaxed fade-in-2 glow-md">
              <p className='mb-3'>
                Legacy cloud giants have made{" "}
                <span className="font-semibold text-gradient bg-clip-text">"absurd pricing"</span> and{" "}
                <span className="font-semibold text-gradient bg-clip-text">opaque billing</span> the industry standard.
              </p>

              <p className='mb-3'>
                Developers are forced to choose between the convenience of a big provider and the{" "}
                <span>survival of their margins</span>.
              </p>

              <p className='mb-3'>
                You’re paying for overhead you don’t use and transparency you never get. It’s time for Max Transparency.
              </p>
            </div>


            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 ">
              <a
                href="/deploy"
                className="
                  inline-flex items-center justify-center gap-3
                  px-8 py-4 text-lg font-semibold
                  bg-gradient-to-r from-indigo-600 to-blue-600
                  hover:from-indigo-700 hover:to-blue-700
                  text-white rounded-xl shadow-lg shadow-indigo-500/25
                  hover:shadow-indigo-600/40 transition-all duration-300
                  hover:scale-[1.02] active:scale-95
                  border border-indigo-400/30
                "
              >
                Deploy to MaxCore
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/pricing"
                className="
                  inline-flex items-center justify-center gap-3
                  px-8 py-4 text-lg font-medium
                  text-indigo-300 hover:text-white
                  bg-white/5 hover:bg-white/10 backdrop-blur-sm
                  border border-white/10 hover:border-indigo-400/40
                  rounded-xl transition-all duration-300
                "
              >
                See Real-Time Rates
              </a>
            </div>
          </div>

          {/* Right: Image - 4 columns on lg+ */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-full">
             <img
  src={cloudImg}
  alt="Cloud Computing"
  className="w-full h-auto rounded-2xl shadow-2xl shadow-indigo-500/20 object-cover"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}