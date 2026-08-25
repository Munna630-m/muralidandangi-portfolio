import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ConstellationCanvas } from './ConstellationCanvas';
import { ArrowDown, ArrowRight, Layout, Palette, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, startup, setActiveCategory } = usePortfolio();
  
  // Rotating role text effect
  const roles = [
    'UI/UX Designer',
    'Graphic Designer',
    'Founder @ VentureLab OS',
    'Product Thinker'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(80);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-dark-950 flex flex-col justify-between pt-24 lg:pt-28 overflow-hidden">
      {/* Background Interactive Constellation Plexus */}
      <ConstellationCanvas />

      {/* Subtle radial glow under hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-white/10 backdrop-blur-md shadow-lg">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs uppercase tracking-widest font-medium text-zinc-300">
                {profile.availability}
              </span>
            </div>

            {/* Main Greeting & Identity */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-2xl font-light text-zinc-400 tracking-wide">
                Hi! I’m <span className="text-white font-bold tracking-tight">Murali Dandangi</span>!
              </h2>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
                I am a{' '}
                <span className="text-accent relative inline-block text-glow">
                  {displayText}
                  <span className="inline-block w-1 h-8 sm:h-12 bg-accent ml-1 animate-pulse align-middle"></span>
                </span>
              </h1>
            </div>

            {/* Supporting Positioning Statement */}
            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('designs')}
                className="group relative px-7 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,84,54,0.5)] hover:shadow-[0_0_40px_rgba(255,84,54,0.7)] hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View My Designs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 bg-dark-900/80 hover:bg-dark-800 text-zinc-200 hover:text-white text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-full border border-white/15 hover:border-accent/50 transition-all duration-300 backdrop-blur-md"
              >
                Let's Work Together
              </button>

              <button
                onClick={() => scrollToSection('venturelab')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-accent transition-colors px-2 py-2"
              >
                <Rocket className="w-3.5 h-3.5 text-accent" />
                <span>Explore VentureLab OS</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {profile.stats.experienceYears}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {profile.stats.projectsCompleted}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Projects Crafted</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-accent">
                  {startup.name.split(' ')[0]}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Startup Founder</div>
              </div>
            </div>

          </div>

          {/* Right Column: Murali's Portrait (Integrated from uploaded image) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Cinematic Outer Glow & Geometric Rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/10 animate-spin-slow pointer-events-none"></div>
            <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-accent/20 border-dashed pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10 pointer-events-none"></div>

            {/* Portrait Card Container */}
            <div className="relative group w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden border border-white/10 bg-dark-900/60 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.015]">
              
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-dark-950">
                <img
                  src={profile.heroImage || '/assets/portrait-hero.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] brightness-[0.96] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/portrait-about.jpg';
                  }}
                />
                
                {/* Dark bottom vignette */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent z-10"></div>
              </div>

              {/* Floating Badge 1: UI/UX & Product */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-2 rounded-2xl bg-dark-950/85 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-2.5 animate-float-slow">
                <div className="p-1.5 rounded-lg bg-accent/20 text-accent">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">UI/UX & Product</div>
                  <div className="text-[9px] text-zinc-400 uppercase tracking-wider">Human-Centered</div>
                </div>
              </div>

              {/* Floating Badge 2: Founder @ VentureLab OS */}
              <div className="absolute bottom-6 right-4 z-20 px-3.5 py-2 rounded-2xl bg-dark-950/90 border border-accent/40 backdrop-blur-xl shadow-xl flex items-center gap-2.5 animate-float-reverse">
                <div className="p-1.5 rounded-lg bg-accent text-white shadow-md shadow-accent/40">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Founder @ VentureLab OS</div>
                  <div className="text-[9px] text-accent uppercase tracking-wider font-mono">AI Ecosystem</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Feature Highlights Row directly under Hero (Matching Reference Design structure) */}
      <div className="relative z-10 border-t border-white/10 bg-dark-900/90 backdrop-blur-xl py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Item 1 */}
            <div 
              onClick={() => {
                setActiveCategory('UI/UX Designs');
                scrollToSection('designs');
              }}
              className="cursor-pointer group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <div className="p-3 rounded-xl bg-accent/15 text-accent border border-accent/30 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                <Layout className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-display font-bold text-white group-hover:text-accent transition-colors flex items-center gap-1.5">
                  UI/UX Design
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  User research, high-fidelity prototypes, interactive product flows, and scalable design systems.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div 
              onClick={() => {
                setActiveCategory('Graphic Designs');
                scrollToSection('designs');
              }}
              className="cursor-pointer group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <div className="p-3 rounded-xl bg-accent/15 text-accent border border-accent/30 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                <Palette className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-display font-bold text-white group-hover:text-accent transition-colors flex items-center gap-1.5">
                  Graphic & Brand Design
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Visual communication, high-converting social creatives, YouTube thumbnails, and brand guidelines.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div 
              onClick={() => scrollToSection('venturelab')}
              className="cursor-pointer group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <div className="p-3 rounded-xl bg-accent/15 text-accent border border-accent/30 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-display font-bold text-white group-hover:text-accent transition-colors flex items-center gap-1.5">
                  VentureLab OS & AI Product
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Startup ideation, AI-driven opportunity matchmaking, and zero-to-one product execution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hidden lg:flex justify-center pb-2 pt-1">
        <button
          onClick={() => scrollToSection('about')}
          className="text-zinc-500 hover:text-accent transition-colors flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
          aria-label="Scroll to About Me"
        >
          <span>Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
