import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  ArrowUp, 
  Mail, 
  Shield 
} from 'lucide-react';
import { LinkedInIcon, InstagramIcon, BehanceIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { currentView, setCurrentView } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'VentureLab OS', href: '#venturelab' },
    { name: 'Designs', href: '#designs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-white font-display text-2xl font-black uppercase tracking-tight"
            >
              MURALI <span className="text-accent">DANDANGI</span>
            </a>
            
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-mono">
              UI/UX Designer • Graphic Designer • Founder
            </p>

            <p className="text-xs sm:text-sm text-zinc-500 font-light max-w-sm leading-relaxed">
              Designing digital experiences, visual identities, and scalable products that turn ideas into meaningful human experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-zinc-400 hover:text-accent transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Top Button */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Connect & Follow
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/muralidandangi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 text-zinc-400 hover:text-white hover:bg-accent border border-white/10 transition-all"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.behance.net/muralidandangi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 text-zinc-400 hover:text-white hover:bg-accent border border-white/10 transition-all"
                title="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/elite_creation630?igsi=MXZpdTdrcm1saHAxOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 text-zinc-400 hover:text-white hover:bg-accent border border-white/10 transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:muralidandangi8@gmail.com"
                className="p-2.5 rounded-xl bg-dark-900 text-zinc-400 hover:text-white hover:bg-accent border border-white/10 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-accent transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to top
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Admin Trigger */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div>
            © 2026 Murali Dandangi. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript & Tailwind</span>
            <button
              onClick={() => {
                if (currentView === 'admin') {
                  setCurrentView('portfolio');
                } else {
                  setCurrentView('admin');
                }
              }}
              className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-accent font-mono transition-colors"
            >
              <Shield className="w-3 h-3" />
              Admin Access
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
