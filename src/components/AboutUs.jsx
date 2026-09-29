import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-offwhite relative overflow-hidden">
      {/* Background Accent Block */}
      <div className="absolute top-1/2 left-0 w-1/3 h-2/3 bg-stone-200/40 rounded-r-3xl -translate-y-1/2 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none pr-6 pb-6">
              
              {/* Main Large Image */}
              <div className="relative rounded-xl overflow-hidden shadow-card-hover border border-stone-300 bg-white">
                <img
                  src="images/villa.jpg"
                  alt="RB Construction modern architectural build"
                  className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Smaller Overlapping Detail Image / Card */}
              <div className="absolute bottom-0 right-0 w-48 sm:w-56 p-2 bg-white rounded-xl shadow-xl border border-stone-200 z-10 transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4">
                <div className="rounded-lg overflow-hidden border border-stone-200">
                  <img
                    src="images/renovation.jpg"
                    alt="Interior craftsmanship detail"
                    className="w-full h-28 sm:h-32 object-cover"
                  />
                  <div className="p-2.5 bg-stone-900 text-white text-center">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Craftsmanship</p>
                    <p className="text-[11px] font-medium text-stone-200">Refined Precision</p>
                  </div>
                </div>
              </div>

              {/* Corner Border Outline Decorative Element */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-brand-amber rounded-tl-lg pointer-events-none hidden sm:block" />

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Label */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-stone-200/90 border border-stone-300/80 text-stone-800 text-xs font-extrabold tracking-widest uppercase">
              ABOUT RB CONSTRUCTION
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Building With Purpose. <br />
              Delivering With Confidence.
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              RB Construction is focused on delivering reliable construction solutions with attention to quality, professionalism and customer requirements.
            </p>

            <p className="text-base text-stone-600 leading-relaxed font-normal">
              From planning to execution, our approach focuses on thoughtful work, clear communication and attention to detail.
            </p>

            {/* Small Feature List */}
            <div className="pt-2 space-y-3 border-t border-stone-200/80">
              <div className="flex items-center gap-3 text-sm text-stone-800 font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Quality-focused execution</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-800 font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Professional approach</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-800 font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Client-focused planning</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-brown hover:bg-stone-900 text-white text-xs font-extrabold uppercase tracking-widest rounded-md transition-all shadow-sm hover:shadow duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-amber-400 stroke-[2.5]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
