import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const ProjectCTA = () => {
  return (
    <section className="relative py-24 md:py-32 bg-stone-900 text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero.jpg"
          alt="Architectural construction site background"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/80" />
      </div>

      {/* Subtle Construction Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Label Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>START YOUR BUILD</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Planning Your Next Project?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Let's discuss your requirements and explore the possibilities.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-950 text-sm font-extrabold uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-amber-500/20 duration-200"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-stone-800/90 hover:bg-stone-800 text-white border border-stone-700 text-sm font-bold uppercase tracking-wider rounded transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Contact Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectCTA;
