import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import type { DesignCategory } from '../../types/portfolio';
import { LightboxModal } from './LightboxModal';
import { VideoShowcase } from './VideoShowcase';
import { 
  Palette, 
  Maximize2, 
  ImageIcon, 
  Plus
} from 'lucide-react';

export const DesignsGallery: React.FC = () => {
  const { designs, activeCategory, setActiveCategory, setCurrentView } = usePortfolio();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: DesignCategory[] = [
    'All',
    'UI/UX Designs',
    'Social Media Posts',
    'Thumbnails',
    'Graphic Designs',
    'Branding',
    'Other'
  ];

  const filteredDesigns = designs.filter((d) => {
    if (!d.published) return false;
    if (activeCategory === 'All') return true;
    return d.category === activeCategory;
  });

  const getAspectClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4]';
      case '16:9':
        return 'aspect-video';
      case 'landscape':
        return 'aspect-[4/3]';
      case 'square':
      default:
        return 'aspect-square';
    }
  };

  return (
    <section id="designs" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Radial lighting effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20">
            <Palette className="w-3.5 h-3.5" />
            Visual Archive & Creative Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            MY <span className="text-accent">DESIGNS</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            A collection of my UI/UX, graphic, and digital design work spanning high-CTR thumbnails, social creatives, mobile interfaces, and brand systems.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === 'All' 
              ? designs.filter(d => d.published).length 
              : designs.filter(d => d.published && d.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105 border border-accent'
                    : 'bg-dark-950/80 text-zinc-400 hover:text-white hover:bg-dark-800 border border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-dark-900 text-zinc-500 group-hover:text-zinc-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Designs Grid (Responsive 1-col mobile, 2-col tablet, 3-col desktop) */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-dark-950/80 hover:bg-dark-850 hover:border-accent/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(255,84,54,0.2)] flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden bg-dark-950 ${getAspectClass(design.aspectRatio)}`}>
                  <img
                    src={design.imageUrl}
                    alt={design.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-accent text-white shadow-xl shadow-accent/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-white text-[11px] font-mono border border-white/15">
                      {design.category}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-accent transition-colors leading-snug">
                    {design.title}
                  </h3>

                  {design.description && (
                    <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {design.description}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {design.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 text-zinc-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 rounded-3xl bg-dark-950/50 border border-white/10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-dark-900 flex items-center justify-center text-zinc-500">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">No Designs in this Category Yet</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Upload your own designs for this category directly through the Admin CMS portal.
            </p>
            <button
              onClick={() => setCurrentView('admin')}
              className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Upload Designs in Admin
            </button>
          </div>
        )}

        {/* Video Showcase Section */}
        <VideoShowcase />

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <LightboxModal
            items={filteredDesigns}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(newIdx) => setLightboxIndex(newIdx)}
          />
        )}

      </div>
    </section>
  );
};
