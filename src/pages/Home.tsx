import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import { 
  Activity, 
  Brain, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Users, 
  Stethoscope,
  CheckCircle2,
  Zap,
  Globe,
  Target
} from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
            alt="Pharmaceutical Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-brand-500/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-400/20 mb-6"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse"></span>
              <span className="text-brand-100 text-[10px] font-bold uppercase tracking-widest">Innovating Healthcare</span>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Precision in <span className="text-brand-400">Medicine</span>, Passion for <span className="text-secondary-400 italic">Life</span>
            </h1>
            <p className="text-lg text-brand-100/70 mb-10 max-w-lg leading-relaxed font-medium">
              BIOWIN LIFE SCIENCES is a pioneer in delivering high-quality medicines with unique approved combinations, specializing in Ortho and Neuro segments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-brand-500 text-white px-8 py-3.5 rounded-xl font-bold text-center hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center group text-base">
                Our Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-3.5 rounded-xl font-bold text-center hover:bg-white/10 transition-all text-base">
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/5 bg-brand-900/30">
              <ImageWithFallback 
                src="/Precision in Medicine, Passion for Life.png" 
                alt="Advanced Research" 
                className="w-full h-[450px] object-cover bg-brand-900/30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-brand-50"
            >
              <div className="text-3xl font-black text-brand-500">99.9%</div>
              <div className="text-brand-900 font-bold text-[10px] uppercase tracking-widest">Purity Standard</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-10 bg-white border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-2">
              <Award className="w-8 h-8 text-brand-600" />
              <span className="text-xl font-bold text-brand-950">WHO-GMP</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-brand-600" />
              <span className="text-xl font-bold text-brand-950">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-8 h-8 text-brand-600" />
              <span className="text-xl font-bold text-brand-950">FDA APPROVED</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-brand-600" />
              <span className="text-xl font-bold text-brand-950">GLOBAL STANDARDS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <ImageWithFallback 
                  src="/A Passion for Improving Lives Through Science.png" 
                  alt="Modern Lab" 
                  className="rounded-[40px] shadow-xl w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-50 rounded-full -z-10 blur-3xl"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Company Overview</h2>
              <h3 className="text-3xl font-extrabold text-brand-950 mb-5 leading-tight">A Passion for <span className="text-brand-500">Improving Lives</span> Through Science</h3>
              <p className="text-base text-brand-900/70 leading-relaxed mb-6">
                Biowin Life Science is a dynamic and innovative pharmaceutical company driven by a passion for improving lives. Our vision is to provide high-quality medicines with unique approved combinations that set new benchmarks in healthcare.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {[
                  { title: "Quality Focused", desc: "Uncompromising standards in every dose." },
                  { title: "Innovation Driven", desc: "Leading with unique approved combinations." },
                  { title: "Patient Centric", desc: "Your health is our ultimate priority." },
                  { title: "Expert Leadership", desc: "Guided by industry veterans." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-brand-50 p-1.5 rounded-lg mt-0.5">
                      <CheckCircle2 className="text-brand-500 w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-950 text-sm">{item.title}</h4>
                      <p className="text-xs text-brand-900/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-brand-500">2+</div>
                  <div className="text-brand-900 font-bold uppercase tracking-widest text-[9px] mt-1">Years of Excellence</div>
                </div>
                <div className="h-8 w-px bg-brand-100"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-brand-500">10+</div>
                  <div className="text-brand-900 font-bold uppercase tracking-widest text-[9px] mt-1">Leading Brands</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-brand-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Specialties</h2>
            <h3 className="text-3xl font-extrabold text-brand-950">Focused Medical Excellence</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-brand-100 group"
            >
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                <Activity className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-brand-950 mb-4">Ortho Specialty</h4>
              <p className="text-base text-brand-900/70 leading-relaxed mb-6">
                We provide advanced combinations for bone health, joint mobility, and orthopedic wellness. Our products are designed to enhance mobility and improve quality of life.
              </p>
              <Link to="/products" className="inline-flex items-center text-brand-500 font-bold text-sm group-hover:translate-x-1 transition-transform">
                View Ortho Range <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-brand-100 group"
            >
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                <Brain className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-brand-950 mb-4">Neuro Specialty</h4>
              <p className="text-base text-brand-900/70 leading-relaxed mb-6">
                Our neurological focus includes innovative formulations for cognitive health and nerve recovery. We are committed to providing effective solutions for neurological disorders.
              </p>
              <Link to="/products" className="inline-flex items-center text-brand-500 font-bold text-sm group-hover:translate-x-1 transition-transform">
                View Neuro Range <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M0 80 C 30 20 60 20 100 80" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-brand-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Featured Products</h2>
              <h3 className="text-3xl font-extrabold text-brand-950 max-w-2xl leading-tight">Innovative Solutions for <span className="text-brand-500">Better Health</span></h3>
            </div>
            <Link to="/products" className="bg-brand-50 text-brand-500 px-6 py-3 rounded-xl font-bold hover:bg-brand-100 transition-all flex items-center text-sm">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Ortho-Flex Plus", 
                cat: "Ortho Care", 
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
                desc: "Advanced joint support formula for maximum mobility."
              },
              { 
                name: "Neuro-Boost 500", 
                cat: "Neuro Care", 
                img: "/Neuro-Boost 500.png",
                desc: "Cognitive function support with neuro-protective properties."
              },
              { 
                name: "Multi-Win Gold", 
                cat: "General Pharma", 
                img: "/Multi-Win Gold.png",
                desc: "Comprehensive multivitamin support for daily vitality."
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-[32px] overflow-hidden mb-6 shadow-md">
                  <ImageWithFallback 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-brand-500 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">
                      {product.cat}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-extrabold text-brand-950 mb-2 group-hover:text-brand-500 transition-colors">{product.name}</h4>
                <p className="text-sm text-brand-900/60 leading-relaxed font-medium">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brand-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Why Choose Us</h2>
            <h3 className="text-3xl font-extrabold text-brand-950">The Biowin Advantage</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "High Quality Medicines", 
                desc: "We are committed to delivering high-quality pharmaceutical products that meet industry standards." 
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Certified Partners", 
                desc: "We collaborate with WHO and ISO certified manufacturing companies for safety and quality." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Unique Formula", 
                desc: "Our medicines include innovative and approved combinations designed for effective treatment." 
              },
              { 
                icon: <Target className="w-8 h-8" />, 
                title: "Specialized Focus", 
                desc: "We specialize in pharmaceutical solutions for Orthopedic and Neurological healthcare needs." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-brand-50 p-8 rounded-[24px] border border-brand-100 text-center flex flex-col items-center hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-lg font-extrabold text-brand-950 mb-3">{item.title}</h4>
                <p className="text-xs text-brand-900/60 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-brand-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Testimonials</h2>
            <h3 className="text-3xl font-extrabold text-brand-950">What Healthcare Professionals Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Biowin's Ortho range has significantly improved the recovery time for my patients. Their unique combinations are truly innovative.",
                author: "Dr. Rajesh Kumar",
                role: "Senior Orthopedic Surgeon"
              },
              {
                quote: "The quality standards maintained by Biowin Life Science are exceptional. I trust their Neuro formulations for my most critical cases.",
                author: "Dr. Sneha Reddy",
                role: "Neurologist"
              },
              {
                quote: "Consistency and efficacy are what define Biowin. Their commitment to pharmaceutical excellence is evident in every product.",
                author: "Dr. Amit Sharma",
                role: "General Physician"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[32px] shadow-lg shadow-brand-900/5 border border-brand-100 relative"
              >
                <div className="text-brand-200 absolute top-8 right-10 text-6xl font-serif opacity-20">"</div>
                <p className="text-base text-brand-900/70 italic mb-6 relative z-10 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <h4 className="text-lg font-extrabold text-brand-950">{testimonial.author}</h4>
                  <p className="text-brand-500 font-bold text-[10px] uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -z-0"></div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-brand-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-brand-400 font-bold uppercase tracking-widest text-[10px] mb-3">Quality Assurance</h2>
              <h3 className="text-3xl font-extrabold mb-6">Uncompromising Standards in Every Dose</h3>
              <p className="text-brand-200/70 leading-relaxed mb-8 text-sm">
                At Biowin Life Science, quality is not just a department; it's our core philosophy. We adhere to stringent international standards to ensure that every medicine we produce is safe, effective, and reliable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="text-brand-500 w-5 h-5" />
                  <span>WHO-GMP Compliant Manufacturing</span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="text-brand-500 w-5 h-5" />
                  <span>Rigorous Raw Material Testing</span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <CheckCircle2 className="text-brand-500 w-5 h-5" />
                  <span>Advanced Analytical Laboratories</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" 
                alt="Quality Control" 
                className="rounded-[32px] shadow-2xl h-[350px] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brand-500 font-bold uppercase tracking-widest text-[10px] mb-3">Our Growth</h2>
            <h3 className="text-3xl font-extrabold text-brand-950">A Journey of Strategic Expansion</h3>
          </div>
          <div className="bg-brand-50 p-10 rounded-[32px] border border-brand-100">
            <p className="text-base text-brand-900/70 text-center max-w-3xl mx-auto leading-relaxed">
              With 2 years of experience, Biowin Life Science Private Limited has taken a significant step forward by acquiring a few established brands. This strategic move reflects our commitment to expanding our portfolio and strengthening our presence in the pharmaceutical market.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/about" className="text-brand-500 font-bold flex items-center hover:underline text-sm">
                Read our full story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Partner with Biowin?</h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Join us in our mission to make a difference in healthcare. Contact us today to learn more about our products and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-500 px-8 py-3 rounded-xl font-bold text-base hover:bg-brand-50 transition-all shadow-lg">
              Contact Us Now
            </Link>
            <Link to="/products" className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-brand-700 transition-all shadow-lg">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
