import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Menu, X, ArrowUpRight, Shield, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentView, setCurrentView, activeNavSection, setActiveNavSection } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section
      const sections = ['home', 'about', 'expertise', 'projects', 'venturelab', 'designs', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNavSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveNavSection]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Expertise', href: '#expertise', id: 'expertise' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'VentureLab OS', href: '#venturelab', id: 'venturelab', badge: 'Startup' },
    { name: 'Designs', href: '#designs', id: 'designs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    if (currentView === 'admin') {
      setCurrentView('portfolio');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveNavSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-surface-border py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          className="group flex items-center gap-2.5 text-white tracking-widest font-display text-lg sm:text-xl font-bold uppercase transition-transform hover:scale-[1.01]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            MURALI <span className="text-accent font-extrabold">DANDANGI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeNavSection === link.id && currentView === 'portfolio';
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-accent/20 border border-accent/40 font-semibold shadow-sm shadow-accent/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 bg-accent/30 text-accent border border-accent/40 rounded-full font-mono">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action & CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Admin Switcher */}
          <button
            onClick={() => {
              if (currentView === 'admin') {
                setCurrentView('portfolio');
                window.location.hash = '';
              } else {
                setCurrentView('admin');
                window.location.hash = 'admin';
              }
            }}
            title={currentView === 'admin' ? 'View Public Site' : 'Admin CMS Portal'}
            className={`p-2.5 rounded-full border transition-all duration-200 ${
              currentView === 'admin'
                ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30'
                : 'bg-dark-800/80 text-zinc-400 border-white/10 hover:text-white hover:border-accent/40'
            }`}
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-dark-900 border border-accent/50 rounded-full overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(255,84,54,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-1.5 z-10">
              Let's Work Together
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              if (currentView === 'admin') {
                setCurrentView('portfolio');
              } else {
                setCurrentView('admin');
              }
            }}
            className="p-2 rounded-lg bg-dark-800 text-zinc-300 border border-white/10"
            title="Admin"
          >
            <Shield className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-dark-800 text-zinc-300 border border-white/10 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeNavSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-accent/15 text-accent border border-accent/30 font-semibold'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge ? (
                    <span className="text-[10px] px-2 py-0.5 bg-accent/20 text-accent rounded-full font-mono">
                      {link.badge}
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="w-full py-3 text-center text-xs uppercase tracking-widest font-bold text-white bg-accent rounded-xl shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
