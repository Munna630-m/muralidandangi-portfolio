import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { LinkedInIcon, InstagramIcon, BehanceIcon } from '../common/SocialIcons';

export const ContactSection: React.FC = () => {
  const { profile, sendMessage } = usePortfolio();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    try {
      await sendMessage({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'UI/UX Design',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'UI/UX Design & Product Strategy',
    'Graphic Design & Branding',
    'YouTube Thumbnails & Social Media',
    'VentureLab OS Collaboration',
    'Other / Freelance Inquiry'
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden border-t border-white/10">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            LET’S CREATE <span className="text-accent">SOMETHING GREAT.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
            Have a project, startup idea, design challenge or high-impact opportunity? Let’s talk.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email Card */}
            <div className="p-7 rounded-3xl bg-dark-900/80 border border-white/10 space-y-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-accent/20 text-accent border border-accent/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">Direct Email</div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">{profile.email}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-3 px-4 rounded-2xl bg-dark-950 hover:bg-dark-850 text-xs uppercase tracking-wider font-semibold text-zinc-200 border border-white/10 hover:border-accent/40 transition-all flex items-center justify-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Social Links (From user prompt) */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold px-1">
                Official Profiles & Channels
              </div>

              <div className="space-y-2.5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muralidandangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-dark-900/60 border border-white/10 hover:border-accent/50 hover:bg-dark-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-accent transition-colors">LinkedIn</div>
                      <div className="text-xs text-zinc-400 font-light">linkedin.com/in/muralidandangi</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                {/* Behance */}
                <a
                  href="https://www.behance.net/muralidandangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-dark-900/60 border border-white/10 hover:border-accent/50 hover:bg-dark-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                      <BehanceIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-accent transition-colors">Behance Portfolio</div>
                      <div className="text-xs text-zinc-400 font-light">behance.net/muralidandangi</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/elite_creation630?igsi=MXZpdTdrcm1saHAxOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-dark-900/60 border border-white/10 hover:border-accent/50 hover:bg-dark-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-accent transition-colors">Instagram Design Hub</div>
                      <div className="text-xs text-zinc-400 font-light">@elite_creation630</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="p-5 rounded-2xl bg-dark-900/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Location & Availability</div>
              <div className="text-xs text-zinc-400 font-light">{profile.location}</div>
              <div className="text-xs text-emerald-400 font-mono pt-1">● Actively taking on high-caliber design & startup work</div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-900/90 border border-white/10 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">
                  Fill out the details below and I will respond within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light">
                    Thank you for reaching out, Murali will get back to you shortly at <span className="text-white font-medium">{profile.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-accent focus:bg-dark-900 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-accent focus:bg-dark-900 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Project or Inquiry Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent focus:bg-dark-900 transition-all outline-none"
                    >
                      {services.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-dark-950 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Body */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, goals, timeline, or venture concept..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-zinc-600 text-sm focus:border-accent focus:bg-dark-900 transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-2xl bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_0_25px_rgba(255,84,54,0.4)] hover:shadow-[0_0_35px_rgba(255,84,54,0.6)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
