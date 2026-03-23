import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import productB24 from '../assets/B24.png';
import productSmox from '../assets/smox-CV 625.png';
import productWinMove from '../assets/WinMove.png';
import productWinMovePlus from '../assets/WinMove-Plus.png';
import productWinTryo from '../assets/WinTryo.png';
import productGlowin from '../assets/Glowin.png';

const Products = () => {
  const products = [
    {
      name: 'B24 Nutraceuticals',
      category: 'Softgel Capsules',
      desc: 'Softgel capsules with Omega-3, grape seed extract, biotin, zinc, selenium and vitamin D3.',
      img: productB24,
    },
    {
      name: 'Smox-CV 625',
      category: 'Tablets (Rx)',
      desc: 'Amoxycillin, potassium clavulanate and lactic acid bacillus tablets.',
      img: productSmox,
    },
    {
      name: 'WinMove-Plus',
      category: 'Tablets',
      desc: 'Levocarnitine L-tartrate, magnesium bisglycinate, cyanocobalamin and vitamin E tablets.',
      img: productWinMovePlus,
    },
    {
      name: 'WinMove',
      category: 'Nutraceutical',
      desc: 'Levocarnitine, magnesium bisglycinate, tocotrienols, Co-enzyme Q10 and astaxanthin tablets.',
      img: productWinMove,
    },
    {
      name: 'WinTryo',
      category: 'Nutraceutical',
      desc: 'Collagen type II, glucosamine, sodium hyaluronic acid, MSM, chondroitin, vitamins and minerals.',
      img: productWinTryo,
    },
    {
      name: 'Glowin',
      category: 'Nutraceutical',
      desc: 'L-glutathione, pine bark extract, grape seed extract, rosehip extract, N-acetylcysteine and vitamin C tablets.',
      img: productGlowin,
    },
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=2000" 
            alt="Products Background" 
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
            Our <span className="text-brand-400">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-100/70 max-w-2xl mx-auto"
          >
            High-quality medicines with unique approved combinations designed for superior patient outcomes.
          </motion.p>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Product Catalog</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-950">Our Product Portfolio</h3>
                <p className="text-base text-brand-900/60 max-w-2xl mt-3">
                  A curated selection of client products with authentic pack images.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-brand-50 p-4 rounded-xl border border-brand-100 shadow-sm">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <ShieldCheck className="text-brand-600 w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-brand-950">Quality Tested</span>
                </div>
                <div className="flex items-center space-x-3 bg-brand-50 p-4 rounded-xl border border-brand-100 shadow-sm">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Zap className="text-brand-600 w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-brand-950">Unique Formula</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {products.map((product) => (
                <motion.div
                  key={product.name}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-[22px] border border-brand-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col w-full max-w-sm"
                >
                  <div className="relative aspect-[4/3] bg-brand-50 border-b border-brand-100 flex items-center justify-center p-4">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
                      {product.category}
                    </div>
                    <h4 className="text-xl font-bold text-brand-950 mb-3 leading-snug">
                      {product.name}
                    </h4>
                    <p className="text-sm text-brand-900/70 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Promise</h2>
            <h3 className="text-3xl font-bold text-brand-950 mb-6">Committed to Pharmaceutical Excellence</h3>
            <p className="text-lg text-brand-900/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              Every product in our portfolio undergoes rigorous quality checks and is manufactured in WHO-GMP compliant facilities to ensure the highest standards of safety and efficacy.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Purity', desc: '100% pure active ingredients' },
              { title: 'Safety', desc: 'Rigorous clinical testing' },
              { title: 'Efficacy', desc: 'Proven therapeutic results' },
              { title: 'Innovation', desc: 'Unique approved formulas' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] shadow-lg shadow-brand-900/5 border border-brand-100 group"
              >
                <div className="text-brand-600 font-bold text-xl mb-2 group-hover:scale-105 transition-transform">{item.title}</div>
                <p className="text-xs text-brand-900/60 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Inquiry CTA */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
            alt="Lab Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Looking for a Specific Formulation?</h2>
          <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto">
            Our team develops innovative pharmaceutical combinations tailored for modern healthcare.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-brand-700 px-8 py-3 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg">
              Contact Us
            </a>
            <a href="/contact" className="bg-brand-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-900 transition-all shadow-lg">
              Request Product List
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
