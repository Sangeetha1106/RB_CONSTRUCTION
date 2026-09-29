import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: 'Residential Construction',
      description: 'Quality homes built with attention to design, materials and structural standards.',
      image: 'images/villa.jpg',
      link: '#contact',
    },
    {
      title: 'Commercial Construction',
      description: 'Commercial spaces built to support your business requirements and operational flow.',
      image: 'images/commercial.jpg',
      link: '#contact',
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transforming existing structures with thoughtful updates and structural integrity.',
      image: 'images/renovation.jpg',
      link: '#contact',
    },
    {
      title: 'Construction Solutions',
      description: 'End-to-end management, planning coordination and quality oversight for your project.',
      image: 'images/apartments.jpg',
      link: '#contact',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200/80 px-3.5 py-1 rounded-full">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Construction solutions designed around your project requirements.
          </p>
        </div>

        {/* Premium Image Background Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesList.map((svc, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden h-[380px] sm:h-[420px] shadow-subtle hover:shadow-2xl border border-stone-200 transition-all duration-500 cursor-pointer flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Card Content at Bottom */}
              <div className="relative z-10 p-6 sm:p-7 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 backdrop-blur-md px-2.5 py-1 rounded border border-amber-400/30">
                    Service 0{index + 1}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-brand-amber group-hover:text-stone-950 group-hover:border-brand-amber transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed opacity-90 line-clamp-3">
                  {svc.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
