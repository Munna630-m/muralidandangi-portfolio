import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Sparkles, 
  CheckCircle2, 
  Lightbulb, 
  Rocket, 
  Compass, 
  ArrowUpRight, 
  Award 
} from 'lucide-react';

export const AboutMe: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Get To Know Me
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              ABOUT <span className="text-accent">ME</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-light">
            Merging user empathy, visual precision, and entrepreneurial strategy to build timeless digital products.
          </p>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-dark-950/70 p-3 shadow-2xl">
              
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-850">
                <img
                  src={profile.aboutImage || '/assets/portrait-about.jpg'}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/portrait-hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Floating Stat Card Over Portrait */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dark-950/90 border border-white/15 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent/20 text-accent border border-accent/30">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">{profile.name}</div>
                      <div className="text-[11px] text-zinc-400">Founder & Principal Designer</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-mono">
                    Active
                  </span>
                </div>
              </div>

            </div>

            {/* Background decorative corner frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-accent/40 rounded-br-3xl pointer-events-none"></div>
          </div>

          {/* Right Column: Bio Narrative, Philosophy & Focus */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {profile.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-zinc-300">
                  {paragraph.includes('VentureLab OS') ? (
                    <>
                      {paragraph.split('VentureLab OS')[0]}
                      <span className="text-accent font-semibold">VentureLab OS</span>
                      {paragraph.split('VentureLab OS')[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Design Philosophy & Career Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Design Philosophy */}
              <div className="p-5 rounded-2xl bg-dark-950/60 border border-white/10 hover:border-accent/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  Design Philosophy
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {profile.designPhilosophy}
                </p>
              </div>

              {/* Career Focus */}
              <div className="p-5 rounded-2xl bg-dark-950/60 border border-white/10 hover:border-accent/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  Career Focus
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {profile.careerFocus}
                </p>
              </div>

            </div>

            {/* Core Values Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Core Foundations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Deep User Empathy & Problem Definition',
                  'Pixel-Perfect Design Systems & Scalability',
                  'Rapid Prototyping & Usability Iterations',
                  'AI Integration & Startup Product Thinking'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-dark-950 hover:bg-zinc-200 text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#venturelab"
                className="px-6 py-3 bg-dark-950 hover:bg-dark-800 text-accent hover:text-accent-hover text-xs uppercase tracking-widest font-bold rounded-full border border-accent/40 hover:border-accent transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>About VentureLab OS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
