import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-950/90 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-brand-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-100/70 max-w-2xl mx-auto"
          >
            Have questions about our products or partnership opportunities? We're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Contact Info</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-950 mb-6 leading-tight">We'd Love to <span className="text-brand-600">Hear From You</span></h3>
              <p className="text-base text-brand-900/60 mb-8 leading-relaxed">
                Whether you are a healthcare professional, a potential partner, or a patient seeking information, our team is ready to assist you with precision and care.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <MapPin className="w-5 h-5" />, 
                    title: "Corporate Address", 
                    detail: (
                      <div>
                        <div>A-321, Mastermind 4, Royal Palms, Goregaon (E),</div>
                        <div>Greater Mumbai - 400065.</div>
                      </div>
                    ) 
                  },
                  { 
                    icon: <Phone className="w-5 h-5" />, 
                    title: "Phone", 
                    detail: (
                      <div className="space-y-1">
                        <div>+91 7337224447</div>
                        <div>+91 7386791602</div>
                        <div>+91 7386798282</div>
                      </div>
                    ) 
                  },
                  { 
                    icon: <Mail className="w-5 h-5" />, 
                    title: "Email", 
                    detail: (
                      <div className="space-y-1">
                        <div>kalyani.mscbio@gmail.com</div>
                        <div>hrbiowin@gmail.com</div>
                        <div>manikyasriram@gmail.com</div>
                      </div>
                    ) 
                  },
                  { icon: <Clock className="w-5 h-5" />, title: "Working Hours", detail: "Mon - Sat: 9:00 AM - 6:00 PM" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-950 mb-1">{item.title}</h4>
                      <div className="text-xs text-brand-900/60 font-medium">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Map Placeholder */}
              <div className="mt-10 rounded-[32px] overflow-hidden shadow-xl border border-brand-100 h-48 relative group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Location Map" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-600/20 group-hover:bg-transparent transition-all duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-white">
                    <span className="text-brand-950 font-bold text-sm flex items-center">
                      <MapPin className="mr-2 w-4 h-4 text-brand-600" /> View on Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-50 p-8 lg:p-10 rounded-[40px] border border-brand-100 shadow-xl relative z-10"
            >
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle2 className="text-green-600 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-950 mb-3">Message Sent!</h3>
                  <p className="text-base text-brand-900/60 mb-8">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="bg-brand-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-2 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-2 uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-950 mb-2 uppercase tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
                      placeholder="+91 7337224447"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-950 mb-2 uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/30 flex items-center justify-center disabled:opacity-70 group"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-100 rounded-full -z-0 blur-3xl opacity-30 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Contact;
