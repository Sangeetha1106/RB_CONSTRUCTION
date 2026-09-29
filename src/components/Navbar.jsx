import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link calculation
      const sections = ['home', 'about', 'services', 'process', 'projects', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200/90 py-3.5'
          : 'bg-brand-offwhite/90 backdrop-blur-sm py-5 border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 bg-brand-brown rounded-md flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-sm group-hover:bg-stone-900 transition-colors">
              RB
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-brand-charcoal group-hover:text-brand-amber transition-colors">
                RB Construction
              </span>
              <span className="text-[9px] font-bold tracking-widest text-stone-500 uppercase -mt-1">
                Engineering &amp; Build
              </span>
            </div>
          </a>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-tight transition-colors relative py-1 ${
                    isActive ? 'text-brand-amber' : 'text-stone-700 hover:text-brand-amber'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-brand-amber rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Get a Quote Button on Right */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-brand-brown hover:bg-stone-900 text-white text-xs font-extrabold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow duration-200"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 text-stone-800 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Full-Width Mobile Navigation Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-bold transition-colors ${
                  activeSection === link.id
                    ? 'text-brand-amber border-l-4 border-brand-amber pl-3 bg-amber-50/50 rounded-r'
                    : 'text-stone-800 hover:text-brand-amber'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-brown hover:bg-stone-900 text-white text-sm font-extrabold uppercase tracking-wider rounded-md transition-colors text-center"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-400 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
