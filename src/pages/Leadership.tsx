import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Award, BookOpen, Target, Activity } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import leaderSaketh from '../assets/saketh.png';

const Leadership = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2000" 
            alt="Leadership Background" 
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
            Our <span className="text-brand-400">Leadership</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-100/70 max-w-2xl mx-auto"
          >
            Guided by scientific expertise and a vision for a healthier future.
          </motion.p>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-brand-100 relative z-10"
            >
              <div className="grid lg:grid-cols-5 items-stretch">
                <div className="lg:col-span-2 relative min-h-[350px] lg:min-h-full">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    alt="Ch. Kalyani" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent"></div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="inline-block bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-[0.1em] shadow-lg shadow-brand-600/20">Director</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-950 mb-3 leading-tight">Ch. Kalyani</h2>
                    <p className="text-lg text-brand-600 font-bold mb-6 italic">Post Graduate in Biochemistry from SK University</p>
                    
                    <div className="space-y-4 text-brand-900/70 leading-relaxed text-base">
                      <p>
                        Our Director, Ch. Kalyani, brings expertise and dedication to our mission. With a Post Graduation in Biochemistry from SK University, she is committed to leading our team towards excellence.
                      </p>
                      <p>
                        Her scientific background allows Biowin Life Science to bridge the gap between complex biochemistry and effective pharmaceutical solutions. Under her guidance, we focus on developing unique approved combinations that offer real benefits to patients.
                      </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mt-10">
                      <div className="flex items-center space-x-4 group">
                        <div className="bg-brand-50 p-3 rounded-xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-base font-bold text-brand-950">Academic Excellence</p>
                          <p className="text-xs text-brand-900/60 font-medium">Biochemistry Specialist</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group">
                        <div className="bg-brand-50 p-3 rounded-xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                          <Target className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-base font-bold text-brand-950">Visionary Leadership</p>
                          <p className="text-xs text-brand-900/60 font-medium">Strategic Growth Focus</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-brand-100 relative z-10"
            >
              <div className="grid lg:grid-cols-5 items-stretch">
                <div className="lg:col-span-2 relative min-h-[350px] lg:min-h-full">
                  <ImageWithFallback 
                    src={leaderSaketh} 
                    alt="Dr. A.S.P.V.S. Saketh" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent"></div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="inline-block bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-[0.1em] shadow-lg shadow-brand-600/20">Orthopaedic & Sports Surgeon</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-950 mb-2 leading-tight">Dr. A.S.P.V.S. Saketh</h2>
                    <p className="text-sm text-brand-900/70 mb-4 font-semibold">M.S. Orthopaedics, FIAS, PDCR, FISRM</p>
                    <p className="text-sm text-brand-900/70 mb-6">
                      Fellow in Arthroscopy &amp; Sports Medicine · Joint Replacement Surgeon · Regenerative Medicine Specialist
                    </p>

                    <div className="space-y-4 text-brand-900/70 leading-relaxed text-sm">
                      <p>
                        In contemporary orthopaedics and sports medicine, the paradigm is shifting from a bone-centric model to a muscle–metabolism–mitochondria axis. Optimizing cellular energetics, redox balance, and neuromuscular integrity is essential to musculoskeletal health and recovery.
                      </p>
                      <p>
                        Targeted nutraceuticals such as Levocarnitine, Magnesium Bisglycinate, Coenzyme Q10, Tocotrienols, and Astaxanthin support mitochondrial efficiency, reduce oxidative stress, and enhance neuromuscular stability—helping improve endurance, recovery, and functional outcomes.
                      </p>
                      <p>
                        This integrative approach complements modern orthopaedic care, aligning precision nutrition with performance-driven rehabilitation.
                      </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mt-10">
                      <div className="flex items-center space-x-4 group">
                        <div className="bg-brand-50 p-3 rounded-xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-base font-bold text-brand-950">Clinical Expertise</p>
                          <p className="text-xs text-brand-900/60 font-medium">Orthopaedics &amp; Sports Medicine</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group">
                        <div className="bg-brand-50 p-3 rounded-xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                          <Target className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-base font-bold text-brand-950">Regenerative Focus</p>
                          <p className="text-xs text-brand-900/60 font-medium">Orthobiologics &amp; Recovery</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Values</h2>
            <h3 className="text-3xl font-bold text-brand-950">The Principles That Drive Us</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Excellence", desc: "Striving for the highest standards in everything we do, from research to distribution." },
              { icon: <Stethoscope className="w-8 h-8" />, title: "Care", desc: "Putting patient well-being at the heart of our decisions and product development." },
              { icon: <Activity className="w-8 h-8" />, title: "Innovation", desc: "Constantly seeking better ways to provide healthcare through unique combinations." }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[32px] border border-brand-100 text-center shadow-lg shadow-brand-900/5 group"
              >
                <div className="text-brand-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h4 className="text-xl font-bold text-brand-950 mb-3">{value.title}</h4>
                <p className="text-sm text-brand-900/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
