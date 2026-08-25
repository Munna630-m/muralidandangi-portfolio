import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Rocket, 
  Brain, 
  FolderKanban, 
  Cpu, 
  Network, 
  Target, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';

export const VentureLabSpotlight: React.FC = () => {
  const { startup } = usePortfolio();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'FolderKanban': return <FolderKanban className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      default: return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <section id="venturelab" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden border-y border-white/10">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Startup Hero Header Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-accent/30 bg-gradient-to-b from-dark-850 to-dark-950 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(255,84,54,0.15)] mb-16">
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Headline & Vision */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-accent text-white text-xs font-mono font-bold tracking-widest uppercase shadow-md shadow-accent/30 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5" />
                  Startup Spotlight
                </span>
                <span className="px-3 py-1 rounded-full bg-dark-900 text-zinc-300 border border-white/10 text-xs font-mono">
                  {startup.status}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
                  {startup.name}
                </h2>
                <p className="text-lg sm:text-2xl font-light text-accent tracking-wide">
                  {startup.subtitle}
                </p>
              </div>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                {startup.description}
              </p>

              {/* Vision Box */}
              <div className="p-5 rounded-2xl bg-dark-950/80 border border-accent/30 space-y-1.5 max-w-2xl">
                <div className="text-xs uppercase tracking-widest text-accent font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Vision
                </div>
                <p className="text-sm sm:text-base text-zinc-200 font-medium italic">
                  "{startup.vision}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={startup.projectUrl || '#contact'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,84,54,0.4)] flex items-center gap-2 group"
                >
                  <span>Explore VentureLab OS</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-dark-900 hover:bg-dark-800 text-zinc-200 text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-full border border-white/15 hover:border-white/30 transition-all"
                >
                  Connect With Founder
                </a>
              </div>

            </div>

            {/* Right: Founder Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-3xl bg-dark-950/90 border border-white/15 backdrop-blur-xl shadow-2xl space-y-5 text-center">
                
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-accent p-1 shadow-lg shadow-accent/20">
                  <img
                    src="/assets/portrait-hero.jpg"
                    alt={startup.founderName}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/portrait-about.jpg';
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {startup.founderName}
                  </h3>
                  <div className="text-xs text-accent font-semibold">
                    {startup.role}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light pt-1">
                    Driving product vision, UI/UX architecture and zero-to-one venture execution.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-dark-900 border border-white/5">
                    <div className="text-xs font-bold text-white">AI Driven</div>
                    <div className="text-[10px] text-zinc-500">Skill Graph</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-dark-900 border border-white/5">
                    <div className="text-xs font-bold text-accent">Real Proof</div>
                    <div className="text-[10px] text-zinc-500">Zero Resumes</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 6 Platform Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Platform Pillars & Ecosystem Architecture
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
              How VentureLab OS replaces outdated hiring funnels with verified real-world execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startup.pillars.map((pillar, index) => (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-dark-950/70 border border-white/10 hover:border-accent/40 transition-all duration-300 space-y-4 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,84,54,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-dark-900 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 group-hover:text-accent border border-white/10 transition-colors">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-display font-bold text-white group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
