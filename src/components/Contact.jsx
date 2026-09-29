import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend UI only - simulation
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: 'Residential Construction',
        location: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Reach out to discuss your construction project or send an enquiry.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: RB Construction Info */}
          <div className="lg:col-span-5 bg-brand-offwhite p-8 sm:p-10 rounded-xl border border-stone-200 shadow-subtle space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-brand-brown rounded flex items-center justify-center text-white font-heading font-extrabold text-sm">
                  RB
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal">
                  RB Construction
                </h3>
              </div>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Professional Engineering &amp; Build
              </p>
            </div>

            <div className="space-y-6 text-sm">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-200/80 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-brand-charcoal mb-0.5">Location</p>
                  <p className="text-stone-600 font-normal">Contact details will be updated</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-200/80 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-brand-charcoal mb-0.5">Phone</p>
                  <p className="text-stone-600 font-normal">Contact number will be updated</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-200/80 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-brand-charcoal mb-0.5">Email</p>
                  <p className="text-stone-600 font-normal">Email will be updated</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-200/80 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-brand-charcoal mb-0.5">Business Hours</p>
                  <p className="text-stone-600 font-normal">Business hours will be updated</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-6 border-t border-stone-200">
              <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                <a href="#contact" className="w-9 h-9 rounded-full bg-white border border-stone-300 text-stone-600 hover:bg-brand-brown hover:text-white hover:border-brand-brown transition-colors flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#contact" className="w-9 h-9 rounded-full bg-white border border-stone-300 text-stone-600 hover:bg-brand-brown hover:text-white hover:border-brand-brown transition-colors flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#contact" className="w-9 h-9 rounded-full bg-white border border-stone-300 text-stone-600 hover:bg-brand-brown hover:text-white hover:border-brand-brown transition-colors flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#contact" className="w-9 h-9 rounded-full bg-white border border-stone-300 text-stone-600 hover:bg-brand-brown hover:text-white hover:border-brand-brown transition-colors flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-stone-200 shadow-card-hover">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-stone-600 mb-8 font-normal">
              Fill out the form below and our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-in fade-in duration-300">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base text-emerald-900 mb-1">Enquiry Submitted Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Thank you for reaching out to RB Construction. Your message has been recorded.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-brand-amber focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-brand-amber focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-brand-amber focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-brand-amber focus:bg-white transition-colors"
                    >
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Renovation & Remodeling">Renovation &amp; Remodeling</option>
                      <option value="Construction Solutions">Construction Solutions</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Project Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City / Region"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-brand-amber focus:bg-white transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Message / Details
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Provide a brief overview of your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-brand-amber focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-brown hover:bg-stone-900 text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow duration-200 cursor-pointer"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4 text-amber-400" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
