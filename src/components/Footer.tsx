import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-1.5 rounded-lg">
                <img
                  src="/logo/WhatsApp Image 2026-03-13 at 1.00.06 PM.jpeg"
                  alt="Biowin Life Science logo"
                  className="h-9 w-auto object-contain rounded bg-white/95 px-2 py-1"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                BIOWIN <span className="text-brand-500">LIFE SCIENCE</span>
              </span>
            </div>
            <p className="text-brand-200/60 max-w-md leading-relaxed mb-8">
              A dynamic and innovative pharmaceutical company focused on improving lives by providing high-quality medicines with unique approved combinations. Specializing in Ortho and Neuro care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-brand-600 transition-all border border-white/10" aria-label="Linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-brand-600 transition-all border border-white/10" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-brand-600 transition-all border border-white/10" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-400">Quick Links</h4>
            <ul className="space-y-4 text-brand-200/60">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Our Products</Link></li>
              <li><Link to="/leadership" className="hover:text-brand-400 transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-brand-200/60">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>+91 7337224447</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>manikyasriram@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-200/40 text-center md:text-left">
          <p>© 2026 Biowin Life Science Private Limited. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
