import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Floating Action Circle Button */}
      <a
        href="#contact"
        className="relative w-14 h-14 bg-brand-brown hover:bg-stone-900 text-amber-400 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-400/40 transition-all duration-300 group-hover:scale-110 focus:outline-none"
        aria-label="Contact RB Construction"
      >
        {/* Animated Ping Wave */}
        <span className="absolute inset-0 rounded-full bg-brand-amber opacity-40 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-6 h-6 stroke-[2.2] relative z-10" />
      </a>

      {/* Hover Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-stone-900 text-white text-xs font-bold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-stone-700">
        Quick Enquiry
      </div>
    </div>
  );
};

export default FloatingContact;
