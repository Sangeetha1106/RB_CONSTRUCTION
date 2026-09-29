import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 text-sm border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 bg-brand-brown rounded flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-sm">
                RB
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  RB Construction
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-stone-500 uppercase -mt-1">
                  Engineering &amp; Build
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              Building Spaces. Creating Trust. Dedicated to quality craftsmanship, structural integrity, and transparent project execution.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#contact" className="w-8 h-8 rounded bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-amber-500 transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 rounded bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-amber-500 transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 rounded bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-amber-500 transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-8 h-8 rounded bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-amber-500 transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Residential Construction</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial Construction</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Renovation &amp; Remodeling</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Construction Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-xs">
              <p><strong className="text-stone-300">Phone:</strong> Contact number will be updated</p>
              <p><strong className="text-stone-300">Email:</strong> Email will be updated</p>
              <p><strong className="text-stone-300">Location:</strong> Contact details will be updated</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-stone-500">
            &copy; 2026 RB Construction. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6 text-stone-400">
            <a href="#contact" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-stone-900 hover:bg-stone-800 rounded border border-stone-700 text-stone-300 hover:text-white transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
