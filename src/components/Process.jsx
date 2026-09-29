import React from 'react';
import { MessageSquareText, Compass, HardHat, ClipboardCheck, Key } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understand the project requirements.',
      icon: MessageSquareText,
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Plan the project scope and execution.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Carry out the construction work professionally.',
      icon: HardHat,
    },
    {
      number: '04',
      title: 'Inspection',
      description: 'Review quality and finishing.',
      icon: ClipboardCheck,
    },
    {
      number: '05',
      title: 'Handover',
      description: 'Complete and hand over the project.',
      icon: Key,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-brand-offwhite relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200/80 px-3.5 py-1 rounded-full">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            From Vision to Reality
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            A structured 5-step workflow ensuring quality, clarity and timely execution.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative my-10">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-stone-300 -translate-y-7 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Circle Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-stone-300 text-brand-brown shadow-subtle flex items-center justify-center group-hover:border-brand-amber group-hover:bg-brand-brown group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110">
                      <IconComp className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-stone-900 text-white text-xs font-extrabold flex items-center justify-center border-2 border-white shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-brand-charcoal mb-2 group-hover:text-brand-brown transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed font-normal max-w-[190px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 my-4">
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-stone-300 -translate-x-1/2" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                <div className="relative flex-shrink-0 -ml-6 sm:-ml-8 z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-stone-300 text-brand-brown flex items-center justify-center shadow-sm group-hover:border-brand-amber group-hover:bg-brand-brown group-hover:text-amber-400 transition-colors">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center border border-white">
                    {step.number}
                  </span>
                </div>

                <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-subtle flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-brand-amber">Step {step.number}</span>
                    <span className="text-stone-300">•</span>
                    <h3 className="text-base font-bold text-brand-charcoal">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
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

export default Process;
