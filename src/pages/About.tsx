import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Target, Eye, Zap } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const About = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            alt="Healthcare Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-950/80 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-brand-400">Biowin</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-100/70 max-w-2xl mx-auto"
          >
            Driven by passion, guided by science, and committed to improving lives through high-quality healthcare.
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-950 mb-6 leading-tight">Biowin Life Science <span className="text-brand-600">Private Limited</span></h3>
              <div className="space-y-4 text-base text-brand-900/70 leading-relaxed">
                <p>
                  Biowin Life Science Private Limited is a dynamic and innovative pharmaceutical company driven by a passion for improving lives. Our vision is to provide high-quality medicines with unique approved combinations, focusing on Ortho and Neuro specialties.
                </p>
                <p>
                  With 2 years of experience, Biowin Life Science Private Limited has taken a significant step forward by acquiring a few established brands. This strategic move reflects our commitment to expanding our portfolio and strengthening our presence in the pharmaceutical market.
                </p>
                <p>
                  We’re excited about this new chapter and look forward to continued growth and success.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[40px] overflow-hidden shadow-xl"
              >
                <ImageWithFallback 
                  src="/A Passion for Improving Lives Through Science.png" 
                  alt="Laboratory" 
                  className="w-full h-[350px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 rounded-[24px] shadow-xl z-20"
              >
                <div className="text-3xl font-bold mb-1">2026</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-80">Incorporated</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-brand-100">
            <div className="flex items-start gap-5">
              <div className="bg-brand-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="text-brand-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-950 mb-3">Our Leadership</h4>
                <p className="text-sm text-brand-900/70 leading-relaxed">
                  Our Director, Ch. Kalyani, brings expertise and dedication to our mission. With a Post Graduation in Biochemistry from SK University, she is committed to leading our team towards excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-[10px] mb-2">Why Choose Us</h2>
            <h3 className="text-3xl font-bold text-brand-950">The Biowin Advantage</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <ShieldCheck className="w-5 h-5" />, 
                title: "High Quality Medicines", 
                desc: "We are committed to delivering high-quality pharmaceutical products that meet industry standards." 
              },
              { 
                icon: <Award className="w-5 h-5" />, 
                title: "Certified Partners", 
                desc: "We collaborate with WHO and ISO certified manufacturing companies to ensure safety standards." 
              },
              { 
                icon: <Zap className="w-5 h-5" />, 
                title: "Unique Combinations", 
                desc: "Our medicines include innovative and approved combinations for effective treatment." 
              },
              { 
                icon: <Target className="w-5 h-5" />, 
                title: "Specialized Focus", 
                desc: "We specialize in pharmaceutical solutions for Orthopedic and Neurological healthcare needs." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-50 p-6 rounded-2xl border border-brand-100 text-center flex flex-col items-center hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm text-brand-600">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-brand-950 mb-2">{item.title}</h4>
                <p className="text-brand-900/60 leading-relaxed text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-16 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brand-400 font-bold uppercase tracking-widest text-[10px] mb-2">Our Focus</h2>
            <h3 className="text-3xl font-bold">Strategic Objectives</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Develop and market high-quality medicines with unique approved combinations",
              "Establish a strong presence in Ortho and Neuro specialties",
              "Provide employee orientation and development opportunities",
              "Offer effective solutions for healthcare professionals and patients"
            ].map((focus, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-brand-500 font-bold text-xl mb-3">0{idx + 1}</div>
                <p className="text-sm text-brand-100 leading-relaxed">{focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey Towards Better Healthcare</h2>
          <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto">
            We are always looking for passionate partners and dedicated professionals to join our mission.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-white text-brand-600 px-8 py-3 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
