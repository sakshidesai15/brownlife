import React from 'react';
import { motion } from 'motion/react';
import { Activity, Brain, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Products = () => {
  const categories = [
    {
      id: 'ortho',
      title: "Ortho Care",
      icon: <Activity className="w-8 h-8" />,
      description: "Advanced combinations for bone health, joint mobility, and pain management.",
      medicines: [
        { name: "Ortho-Flex Plus", desc: "Advanced joint support formula" },
        { name: "Bone-Vital D3", desc: "High-potency calcium & D3 supplement" },
        { name: "Joint-Ease Max", desc: "Maximum strength mobility enhancer" },
        { name: "Calci-Win Forte", desc: "Bone density support combination" }
      ]
    },
    {
      id: 'neuro',
      title: "Neuro Care",
      icon: <Brain className="w-8 h-8" />,
      description: "Innovative formulations for cognitive health, nerve recovery, and neuro-protection.",
      medicines: [
        { name: "Neuro-Boost 500", desc: "Cognitive function support" },
        { name: "Cerebro-Win", desc: "Advanced brain health formula" },
        { name: "Nerve-Glow Forte", desc: "Nerve regeneration support" },
        { name: "Synapse-Active", desc: "Neuro-transmitter optimization" }
      ]
    },
    {
      id: 'pharma',
      title: "Pharmaceutical Products",
      icon: <ShieldCheck className="w-8 h-8" />,
      description: "A wide range of high-quality pharmaceutical products for various healthcare needs.",
      medicines: [
        { name: "Multi-Win Gold", desc: "Comprehensive multivitamin support" },
        { name: "Immuno-Win", desc: "Immune system strengthening formula" },
        { name: "Gastro-Ease", desc: "Digestive health and comfort" },
        { name: "Vital-Care", desc: "General wellness and vitality" }
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden">
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

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {categories.map((category, idx) => (
              <div key={category.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={idx % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="bg-brand-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-brand-600 shadow-inner">
                    {React.cloneElement(category.icon as React.ReactElement, { className: 'w-6 h-6' })}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-950 mb-6 leading-tight">{category.title}</h2>
                  <p className="text-base text-brand-900/60 leading-relaxed mb-8">
                    {category.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <ShieldCheck className="text-brand-600 w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-brand-950">Quality Tested</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <Zap className="text-brand-600 w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-brand-950">Unique Formula</span>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {category.medicines.map((med, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-4 rounded-xl shadow-sm border border-brand-100 hover:shadow-lg transition-all group cursor-pointer"
                      >
                        <h4 className="text-base font-bold text-brand-950 mb-1 group-hover:text-brand-600 transition-colors">{med.name}</h4>
                        <p className="text-xs text-brand-900/60">{med.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className="relative z-10 rounded-[40px] overflow-hidden shadow-xl">
                    <ImageWithFallback 
                      src={
                        category.id === 'ortho' ? "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1000" :
                        category.id === 'neuro' ? "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000" :
                        "/Pharmaceutical Products.png"
                      } 
                      alt={category.title} 
                      className="w-full h-[350px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-brand-50 relative overflow-hidden">
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
      <section className="py-20 bg-brand-600 relative overflow-hidden">
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
            Our team of experts is constantly working on new and innovative combinations. Contact us for detailed product lists or partnership inquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-brand-600 px-8 py-3 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg">
              Inquire Now
            </a>
            <a href="/about" className="bg-brand-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-800 transition-all shadow-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
