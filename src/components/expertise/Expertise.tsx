import React, { useState } from 'react';
import { initialSkillCategories } from '../../data/defaultData';
import { 
  Layers, 
  Palette, 
  Sparkles, 
  Flame, 
  ArrowRight, 
  Zap
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FigmaIcon } from '../common/SocialIcons';

export const Expertise: React.FC = () => {
  const { setActiveCategory } = usePortfolio();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const handleExploreCategory = (categoryTitle: string) => {
    if (categoryTitle.includes('UI/UX')) {
      setActiveCategory('UI/UX Designs');
    } else if (categoryTitle.includes('GRAPHIC')) {
      setActiveCategory('Graphic Designs');
    } else if (categoryTitle.includes('DIGITAL')) {
      setActiveCategory('Thumbnails');
    } else {
      setActiveCategory('All');
    }
    const el = document.getElementById('designs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Zap className="w-3.5 h-3.5" />
            Capabilities & Mastery
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            MY <span className="text-accent">EXPERTISE</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            A versatile spectrum spanning multi-platform interface architecture, high-converting visual communications, and zero-to-one startup engineering.
          </p>
        </div>

        {/* 4 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialSkillCategories.map((category, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-7 transition-all duration-500 flex flex-col justify-between border ${
                  isHovered
                    ? 'bg-dark-850/90 border-accent/50 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(255,84,54,0.25)] -translate-y-2'
                    : 'bg-dark-900/70 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500 ${
                  isHovered ? 'bg-gradient-to-r from-accent to-accent-hover' : 'bg-transparent'
                }`} />

                {/* Top Content */}
                <div className="space-y-6">
                  
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl transition-all duration-300 ${
                      isHovered
                        ? 'bg-accent text-white shadow-lg shadow-accent/40 scale-110'
                        : 'bg-dark-950 text-accent border border-white/10'
                    }`}>
                      {getIcon(category.icon)}
                    </div>
                    <span className="font-mono text-xs text-zinc-600 font-semibold tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Skill Badges / Tags */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-[11px] px-2.5 py-1 rounded-lg transition-colors font-medium ${
                            isHovered
                              ? 'bg-dark-950/90 text-zinc-200 border border-white/10'
                              : 'bg-dark-950/60 text-zinc-400 border border-white/5'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => handleExploreCategory(category.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-zinc-300 group-hover:text-white group-hover:bg-accent/20 border border-transparent group-hover:border-accent/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Related Works</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Tools & Tech Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-accent/20 text-accent">
              <FigmaIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Design & Prototyping Stack</h4>
              <p className="text-xs text-zinc-400">Mastered tools used daily to bring concepts into production</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Figma',
              'Adobe Illustrator',
              'Adobe Photoshop',
              'Principle / ProtoPie',
              'React & Tailwind',
              'Midjourney & Generative AI',
              'Design Systems'
            ].map((tool, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-dark-950 text-xs font-mono text-zinc-300 border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
