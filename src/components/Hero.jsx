import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-offwhite">
      {/* Subtle Architectural Blueprint Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Decorative Gold Glow Orb */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Hero Content Left Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/90 border border-stone-300/80 text-stone-800 text-xs font-extrabold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              <span>BUILDING SPACES. CREATING TRUST.</span>
            </div>

            {/* Main Heading with Gold Accent Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.12]">
              Building Your Vision, <br className="hidden sm:inline" />
              <span className="relative inline-block text-stone-900">
                Creating Your Future.
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-amber-400/40 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Short Professional Description */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed font-normal">
              Reliable construction solutions with a focus on quality, craftsmanship and professional execution.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-brown hover:bg-stone-900 text-white text-xs font-extrabold uppercase tracking-widest rounded-md transition-all shadow-md hover:shadow-lg duration-200"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-amber-400 stroke-[2.5]" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-stone-100 text-brand-charcoal border border-stone-300 text-xs font-extrabold uppercase tracking-widest rounded-md transition-all duration-200 shadow-sm"
              >
                <span>EXPLORE OUR PROJECTS</span>
                <ChevronRight className="w-4 h-4 text-stone-500 stroke-[2.5]" />
              </a>
            </div>

            {/* Small Trust/Highlight Row Below Buttons */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold text-stone-700">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Quality Crafted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Structured Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Transparent Delivery</span>
              </div>
            </div>

          </div>

          {/* Hero Image Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Subtle Frame Accent */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-stone-300 via-amber-200/40 to-stone-200 rounded-2xl opacity-70 blur-sm -z-10"></div>
              
              {/* Main Image Box */}
              <div className="relative rounded-xl overflow-hidden shadow-card-hover border border-stone-300/80 bg-white">
                <img
                  src="images/hero.jpg"
                  alt="Modern architectural construction building"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Small Floating Information Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-lg border border-stone-200/90 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold text-stone-500 uppercase tracking-widest">
                      ENGINEERING FOCUS
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-brand-charcoal">
                      Architectural &amp; Structural Excellence
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-md bg-brand-brown flex items-center justify-center text-white font-heading font-extrabold text-xs shadow-sm flex-shrink-0 ml-2">
                    RB
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
