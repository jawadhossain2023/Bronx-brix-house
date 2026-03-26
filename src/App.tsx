/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Hammer, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  Droplets, 
  Construction, 
  Home, 
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const services = [
    { 
      title: "Brick Pointing", 
      icon: <Hammer className="w-8 h-8" />, 
      desc: "Restore structural integrity and beauty with expert repointing." 
    },
    { 
      title: "Brick Repair", 
      icon: <Construction className="w-8 h-8" />, 
      desc: "Fixing cracked, loose, or damaged bricks with precision matching." 
    },
    { 
      title: "Stucco Work", 
      icon: <Home className="w-8 h-8" />, 
      desc: "High-quality stucco application and repair for a seamless finish." 
    },
    { 
      title: "Chimney Repair", 
      icon: <Construction className="w-8 h-8" />, 
      desc: "Ensuring your chimney is safe, functional, and weather-proof." 
    },
    { 
      title: "Waterproofing", 
      icon: <Droplets className="w-8 h-8" />, 
      desc: "Protect your masonry from moisture damage and leaks." 
    },
    { 
      title: "General Masonry", 
      icon: <Hammer className="w-8 h-8" />, 
      desc: "Custom stone work, steps, and walls built to last generations." 
    },
  ];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Satisfaction Guaranteed", value: "100%" },
  ];

  const gallery = [
    { type: "Brick Pointing", img: "https://picsum.photos/seed/brick1/600/400" },
    { type: "Chimney Restoration", img: "https://picsum.photos/seed/chimney/600/400" },
    { type: "Stucco Finish", img: "https://picsum.photos/seed/stucco/600/400" },
    { type: "Steps & Walkways", img: "https://picsum.photos/seed/steps/600/400" },
    { type: "Waterproofing", img: "https://picsum.photos/seed/water/600/400" },
    { type: "Commercial Masonry", img: "https://picsum.photos/seed/comm/600/400" },
  ];

  const testimonials = [
    { name: "Maria T.", location: "The Bronx", text: "Kevin and his team did an amazing job repointing our front wall. Professional, clean, and the results are stunning." },
    { name: "James R.", location: "The Bronx", text: "Best masonry contractor in the area. They fixed our chimney in two days and it looks brand new. Highly recommend." },
    { name: "Sandra L.", location: "The Bronx", text: "Fair pricing and incredible craftsmanship. They really know their bricks. The Bronx Brick House is the real deal." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-secondary/80 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
              <Hammer className="text-white w-6 h-6" />
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">
              BRONX BRICK HOUSE
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <a href="#services" className="text-white/70 hover:text-white transition-all font-medium text-sm uppercase tracking-widest">Services</a>
              <a href="#gallery" className="text-white/70 hover:text-white transition-all font-medium text-sm uppercase tracking-widest">Gallery</a>
              <a href="tel:+19295550808" className="text-white flex items-center gap-2 font-bold group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> +1-929-555-0808
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-primary/20 btn"
            >
              Get a Free Quote
            </a>
          </nav>

          <button className="lg:hidden text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center bg-white/5 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-white/10 p-6 lg:hidden overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-white py-4 px-6 hover:bg-white/5 rounded-2xl transition-all min-h-[48px] flex items-center text-lg font-medium">Services</a>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-white py-4 px-6 hover:bg-white/5 rounded-2xl transition-all min-h-[48px] flex items-center text-lg font-medium">Gallery</a>
                <a href="tel:+19295550808" className="text-primary font-bold py-4 px-6 hover:bg-white/5 rounded-2xl transition-all min-h-[48px] flex items-center text-xl">+1-929-555-0808</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white text-center py-5 rounded-2xl font-bold min-h-[48px] flex items-center justify-center text-lg shadow-xl shadow-primary/20">Get a Free Quote</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-105"
            alt="Masonry Work"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10"
            >
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-white text-sm font-semibold tracking-wide uppercase">The Bronx's #1 Masonry Team</span>
            </motion.div>
            
            <h1 className="text-white mb-8 tracking-tight">
              Mastering the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Brick & Stone</span>
            </h1>
            
            <p className="text-white/70 mb-12 max-w-2xl font-body text-lg md:text-2xl leading-relaxed">
              Precision brick pointing, structural repairs, and custom masonry built with New York grit and local pride.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="bg-primary hover:opacity-90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-2xl shadow-primary/20 group transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+19295550808" 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-6 h-6" /> Call Kevin
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-secondary leading-none">Professional Masonry <br />Solutions</h2>
            </div>
            <div className="w-24 h-1 bg-primary/20 hidden md:block mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-10 border border-gray-100 shadow-2xl shadow-gray-200/50 transition-all rounded-[2.5rem] group bg-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                <div className="text-primary mb-8 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-3 text-secondary">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-32" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Our Legacy</span>
              <h2 className="text-5xl md:text-6xl mb-10 leading-tight">Built on Integrity <br />& Master Skill</h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed font-light">
                Owned and operated by Kevin Smith, The Bronx Brick House has been the go-to choice for homeowners and property managers across the borough. We don't just fix bricks; we preserve the history and safety of your home. Our team combines old-school techniques with modern waterproofing technology.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-left border-l border-white/10 pl-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-xs md:text-sm uppercase tracking-widest text-white/40 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Mason at work"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden sm:flex items-center gap-5 border border-gray-100"
              >
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="text-secondary font-bold text-xl">Licensed & Insured</div>
                  <div className="text-gray-500 text-sm">Full Liability Coverage</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-apple-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Portfolio</span>
              <h2 className="text-secondary leading-none">Craftsmanship <br />In Every Detail</h2>
            </div>
            <a href="#contact" className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all">
              VIEW ALL PROJECTS <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {gallery.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] shadow-xl transition-all duration-500 hover:shadow-2xl ${
                  idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                }`}
              >
                <img 
                  src={item.img} 
                  alt={item.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Project Type</p>
                    <h4 className="text-white text-3xl font-bold tracking-tight">{item.type}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-secondary leading-none">What Our Neighbors Say</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-apple-gray rounded-[2.5rem] relative h-full border border-gray-100 shadow-xl shadow-gray-200/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex text-primary mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-10 text-xl leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-lg">{t.name}</div>
                    <div className="text-sm text-primary font-semibold tracking-wide uppercase">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-apple-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,59,48,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100"
            >
              <h2 className="text-4xl mb-10 text-secondary">Request a Quote</h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl mb-4 text-secondary">Message Sent!</h3>
                  <p className="text-gray-500 text-lg">Kevin will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-10 text-primary font-bold hover:underline transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input required type="text" className="w-full px-6 py-4 bg-apple-gray border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all min-h-[48px] text-secondary" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input required type="tel" className="w-full px-6 py-4 bg-apple-gray border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all min-h-[48px] text-secondary" placeholder="(929) 555-0000" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input required type="email" className="w-full px-6 py-4 bg-apple-gray border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all min-h-[48px] text-secondary" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Needed</label>
                    <select required className="w-full px-6 py-4 bg-apple-gray border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all min-h-[48px] text-secondary appearance-none">
                      <option value="">Select a service</option>
                      <option value="pointing">Brick Pointing</option>
                      <option value="repair">Brick Repair</option>
                      <option value="stucco">Stucco Work</option>
                      <option value="chimney">Chimney Repair</option>
                      <option value="waterproofing">Waterproofing</option>
                      <option value="other">Other Masonry</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea required rows={4} className="w-full px-6 py-4 bg-apple-gray border-none rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all min-h-[48px] text-secondary" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full bg-primary hover:opacity-90 text-white py-5 rounded-2xl font-bold text-xl transition-all disabled:opacity-50 min-h-[56px] shadow-xl shadow-primary/10 transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Contact Us</span>
              <h2 className="text-5xl mb-10 text-secondary leading-tight">Let's Build Something <br />Great Together</h2>
              <p className="text-gray-500 text-xl mb-16 leading-relaxed">
                Need immediate assistance? Give us a call. Kevin is often on-site but will return your call as soon as possible.
              </p>

              <div className="space-y-12">
                <a href="tel:+19295550808" className="flex items-start gap-8 group">
                  <div className="bg-primary/10 p-6 rounded-[1.5rem] text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-500 shadow-lg shadow-primary/5">
                    <Phone className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Call or Text</div>
                    <div className="text-4xl font-bold text-secondary tracking-tight">+1-929-555-0808</div>
                  </div>
                </a>

                <div className="flex items-start gap-8">
                  <div className="bg-primary/10 p-6 rounded-[1.5rem] text-primary shadow-lg shadow-primary/5">
                    <MapPin className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</div>
                    <div className="text-2xl font-bold text-secondary">The Bronx, New York</div>
                    <div className="text-gray-500 text-lg">Serving all 5 boroughs</div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="bg-primary/10 p-6 rounded-[1.5rem] text-primary shadow-lg shadow-primary/5">
                    <Calendar className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Business Hours</div>
                    <div className="text-2xl font-bold text-secondary">Mon - Sat: 8:00 AM - 6:00 PM</div>
                    <div className="text-gray-500 text-lg">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary pt-32 pb-12 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
                  <Hammer className="text-white w-6 h-6" />
                </div>
                <span className="text-white text-3xl font-bold tracking-tight">
                  BRONX BRICK HOUSE
                </span>
              </div>
              <p className="text-white/40 max-w-md text-xl leading-relaxed font-light">
                "Built on The Bronx. Built to Last." We are dedicated to providing the highest quality masonry services with a focus on durability and customer satisfaction.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-8">Quick Links</h4>
              <ul className="space-y-5 text-white/60 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-8">Contact Info</h4>
              <ul className="space-y-6 text-white/60 text-lg">
                <li className="flex items-center gap-4 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <a href="tel:+19295550808" className="hover:text-white transition-colors">+1-929-555-0808</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>The Bronx, NY</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span>Mon-Sat: 8am-6pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-sm tracking-widest uppercase font-semibold">
            <p>© {new Date().getFullYear()} THE BRONX BRICK HOUSE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
