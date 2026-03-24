import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import winMoveImage from '../assets/WinMove.png';
import sakethPhoto from '../assets/saketh.png';
const brandLogo = '/logo/WhatsApp Image 2026-03-13 at 1.00.06 PM.jpeg';

const WinMove = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={brandLogo}
                alt="Biowin Life Science logo"
                className="h-10 w-auto rounded-md bg-white/95 px-2 py-1"
              />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-200">Product Page</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">WinMove</h1>
            <p className="text-brand-200/70 leading-relaxed max-w-xl">
              Nutraceutical tablets with Levocarnitine, Magnesium Bisglycinate, Tocotrienols,
              Co-enzyme Q10 and Astaxanthin.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-brand-700 px-8 py-3 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg">
                Contact Us
              </Link>
              <Link to="/products" className="bg-brand-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-800 transition-all shadow-lg">
                View All Products
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-white">
              <ImageWithFallback
                src={winMoveImage}
                alt="WinMove product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Key Details</h2>
            <h3 className="text-3xl font-bold text-brand-950 mb-6">Product Overview</h3>
            <p className="text-base text-brand-900/70 leading-relaxed mb-8">
              WinMove is a nutraceutical formulation designed to support everyday wellness
              with a focus on cellular energy and recovery.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-brand-900/70">
              <li className="bg-brand-50 border border-brand-100 rounded-xl p-4">Levocarnitine</li>
              <li className="bg-brand-50 border border-brand-100 rounded-xl p-4">Magnesium Bisglycinate</li>
              <li className="bg-brand-50 border border-brand-100 rounded-xl p-4">Tocotrienols</li>
              <li className="bg-brand-50 border border-brand-100 rounded-xl p-4">Co-enzyme Q10</li>
              <li className="bg-brand-50 border border-brand-100 rounded-xl p-4">Astaxanthin</li>
            </ul>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded-[32px] p-8">
            <h4 className="text-lg font-bold text-brand-950 mb-4">Packaging</h4>
            <p className="text-sm text-brand-900/60 leading-relaxed">
              10x1x10 Tablets (as per product pack).
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Feedback */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-brand-100">
              <ImageWithFallback
                src={sakethPhoto}
                alt="Dr. A.S.P.V.S. Saketh"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Doctor Feedback</h2>
            <h3 className="text-3xl font-bold text-brand-950 mb-4">Dr. A.S.P.V.S. Saketh</h3>
            <p className="text-sm text-brand-900/70 mb-4 font-semibold">
              M.S. Ortho, FIAS, PDCR, FISRM · Orthopaedic &amp; Sports Surgeon
            </p>
            <p className="text-base text-brand-900/70 leading-relaxed">
              “In contemporary orthopaedics and sports medicine, optimizing cellular energetics and
              neuromuscular integrity is essential. Targeted nutraceuticals such as Levocarnitine,
              Magnesium Bisglycinate, Coenzyme Q10, Tocotrienols, and Astaxanthin support this axis
              and complement precision, performance-driven care.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WinMove;
