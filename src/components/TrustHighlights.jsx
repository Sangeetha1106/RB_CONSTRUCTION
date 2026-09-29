import React from 'react';
import { Award, Compass, HardHat, ShieldCheck } from 'lucide-react';

const TrustHighlights = () => {
  const highlights = [
    {
      label: 'QUALITY',
      sublabel: 'Attention to detail',
      icon: Award,
    },
    {
      label: 'PLANNING',
      sublabel: 'Structured execution',
      icon: Compass,
    },
    {
      label: 'CRAFTSMANSHIP',
      sublabel: 'Professional work',
      icon: HardHat,
    },
    {
      label: 'DELIVERY',
      sublabel: 'Reliable approach',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-200">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 px-2 md:px-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-offwhite border border-stone-200 text-brand-brown flex items-center justify-center flex-shrink-0 group-hover:bg-brand-brown group-hover:text-amber-400 group-hover:border-brand-brown transition-colors duration-300">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold tracking-wider text-brand-charcoal uppercase group-hover:text-brand-brown transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
