import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-16 bg-brand-offwhite border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            LOCATION
          </span>
          <h2 className="text-3xl font-extrabold text-brand-charcoal tracking-tight">
            Find RB Construction
          </h2>
          <p className="text-sm text-stone-600 font-normal">
            Our central consultation office &amp; project operations hub.
          </p>
        </div>

        {/* Map Placeholder Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden border border-stone-200 shadow-subtle">
          
          {/* Visual Map Graphic / Mock Canvas */}
          <div className="relative h-72 sm:h-80 bg-stone-900 overflow-hidden flex items-center justify-center text-stone-300">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            {/* Glowing Radar Waves */}
            <div className="absolute w-64 h-64 border border-amber-500/20 rounded-full animate-ping pointer-events-none" />
            <div className="absolute w-32 h-32 border border-amber-500/30 rounded-full pointer-events-none" />

            {/* Location Marker Center Box */}
            <div className="relative z-10 text-center space-y-3 p-6 bg-stone-950/80 backdrop-blur-md rounded-xl border border-stone-700 max-w-sm mx-4">
              <div className="w-12 h-12 rounded-full bg-brand-brown text-amber-400 flex items-center justify-center mx-auto shadow-lg border border-amber-500/40">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">RB Construction Headquarters</h3>
                <p className="text-xs text-stone-400 mt-1 font-medium">
                  Address details will be updated with actual Google Business pin.
                </p>
              </div>
            </div>
          </div>

          {/* Card Footer Action Bar */}
          <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
            <div className="flex items-center gap-3 text-xs text-stone-600 font-semibold">
              <Compass className="w-4 h-4 text-brand-brown" />
              <span>Google Business / Maps integration ready</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-brown hover:bg-stone-900 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;
