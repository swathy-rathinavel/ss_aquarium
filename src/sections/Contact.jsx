import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = () => {
    const { name, phone, subject, message } = formData;
    if (!name || !message) {
      alert("Please fill in at least your name and message.");
      return;
    }
    
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    const url = `https://wa.me/917418131756?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-[#020812] min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center gap-3">
            Find Us <MapPin className="text-ss-coral animate-bounce" size={36} />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Visit us or reach out — we're always happy to help with your aquatic needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="space-y-4">
            <GlassCard className="p-6 hover:border-ss-cyan/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ss-teal/20 rounded-full text-ss-cyan shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
                  <div className="space-y-1">
                    <a href="tel:+917418131756" className="block text-gray-300 hover:text-ss-cyan transition-colors interactive">Sathish: 7418131756</a>
                    <a href="tel:+919994109124" className="block text-gray-300 hover:text-ss-cyan transition-colors interactive">Jai: 9994109124</a>
                    <a href="tel:+917449131756" className="block text-gray-300 hover:text-ss-cyan transition-colors interactive">Pavithran: 7449131756</a>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 hover:border-ss-cyan/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-ss-teal/20 rounded-full text-ss-cyan shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Email</h4>
                  <a href="mailto:ssaquarium10@gmail.com" className="text-gray-300 hover:text-ss-cyan transition-colors interactive">ssaquarium10@gmail.com</a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 hover:border-ss-cyan/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full text-white shrink-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Instagram</h4>
                  <a href="https://instagram.com/ssaqua_10" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ss-cyan transition-colors interactive">@ssaaqua_10</a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 hover:border-ss-cyan/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-full text-green-400 shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
                  <a href="https://wa.me/917418131756" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-400 font-bold hover:text-green-300 transition-colors interactive">
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 hover:border-ss-cyan/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ss-coral/20 rounded-full text-ss-coral shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-bold text-white mb-2">Address</h4>
                  <p className="text-gray-300 mb-4">
                    Kandhaswamy Nagar, Ganapathy,<br/>
                    Sathy Main Road,<br/>
                    Coimbatore - 641006
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/aezKi4fAkLxQJp5A6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-ss-cyan text-ss-cyan text-sm font-bold rounded-lg hover:bg-ss-cyan hover:text-ss-navy transition-all duration-300 interactive shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                  >
                    <MapPin size={16} className="mr-2" /> Get Directions
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <GlassCard className="p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6 font-cinzel text-glow">Send an Enquiry</h3>
            
            <div className="space-y-6 flex-grow">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/20 border-b-2 border-white/20 focus:border-ss-cyan outline-none px-4 py-3 text-white placeholder-ss-aqua/50 transition-colors interactive"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/20 border-b-2 border-white/20 focus:border-ss-cyan outline-none px-4 py-3 text-white placeholder-ss-aqua/50 transition-colors interactive"
                />
              </div>
              <div>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/20 border-b-2 border-white/20 focus:border-ss-cyan outline-none px-4 py-3 text-white transition-colors appearance-none interactive cursor-pointer"
                >
                  <option value="General Enquiry" className="bg-ss-navy text-white">General Enquiry</option>
                  <option value="Fish Purchase" className="bg-ss-navy text-white">Fish Purchase</option>
                  <option value="Tank Setup" className="bg-ss-navy text-white">Tank Setup</option>
                  <option value="Maintenance" className="bg-ss-navy text-white">Maintenance</option>
                  <option value="Accessories" className="bg-ss-navy text-white">Accessories</option>
                </select>
              </div>
              <div className="flex-grow">
                <textarea 
                  name="message"
                  placeholder="How can we help you?" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-full bg-black/20 border-b-2 border-white/20 focus:border-ss-cyan outline-none px-4 py-3 text-white placeholder-ss-aqua/50 transition-colors resize-none interactive"
                ></textarea>
              </div>
            </div>

            <button 
              onClick={handleSendWhatsApp}
              className="mt-6 w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center justify-center transition-all duration-300 interactive group"
            >
              <Send size={20} className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send via WhatsApp
            </button>
          </GlassCard>

        </div>

        {/* MAP EMBED */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-ss-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] group mb-10">
          <div className="absolute inset-0 bg-ss-navy/50 pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10"></div>
          {/* Floating jellyfish SVG decoration */}
          <motion.svg 
            viewBox="0 0 100 100" 
            className="absolute top-10 right-10 w-24 h-24 z-20 pointer-events-none opacity-40 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]"
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M50 20 C20 20 10 50 10 60 C10 65 90 65 90 60 C90 50 80 20 50 20 Z" fill="#00e5ff" opacity="0.6"/>
            <path d="M20 60 Q20 80 15 100" stroke="#00e5ff" strokeWidth="2" fill="none" />
            <path d="M35 60 Q35 90 30 100" stroke="#00e5ff" strokeWidth="2" fill="none" />
            <path d="M50 60 Q50 85 50 100" stroke="#00e5ff" strokeWidth="2" fill="none" />
            <path d="M65 60 Q65 90 70 100" stroke="#00e5ff" strokeWidth="2" fill="none" />
            <path d="M80 60 Q80 80 85 100" stroke="#00e5ff" strokeWidth="2" fill="none" />
          </motion.svg>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.033621415394!2d76.9781308!3d11.0419914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85868d2dd62d9%3A0xbd288ff6bfd968c0!2s2XRH%2BR65%2C%20202%2FB3%2C%20Sri%20Lakshmi%20Nagar%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 group-hover:filter-none transition-all duration-700" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SS Aquarium Location Map"
          ></iframe>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#01040a] border-t border-white/10 py-8 relative z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-4">
            <span className="font-cinzel text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              SS
            </span>
            <span className="ml-2 font-cinzel text-lg font-bold tracking-widest text-ss-teal">
              AQUARIUM
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            © 2025 SS Aquarium. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Crafted with <span className="text-blue-400">💙</span> for aquatic lovers of Coimbatore.
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-ss-teal uppercase tracking-widest font-bold">
            <span>Exotic Fish</span>
            <span className="w-1 h-1 rounded-full bg-ss-cyan"></span>
            <span>Aquascaping</span>
            <span className="w-1 h-1 rounded-full bg-ss-cyan"></span>
            <span>Accessories</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
