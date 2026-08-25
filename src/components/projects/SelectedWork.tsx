import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, FolderKanban } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const { projects, selectedProject, setSelectedProject } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Product Design', 'UI/UX Design', 'Mobile App', 'Branding'];

  const filteredProjects = projects.filter((p) => {
    if (!p.published) return false;
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold mb-2">
              <FolderKanban className="w-3.5 h-3.5" />
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              SELECTED <span className="text-accent">WORK</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105'
                    : 'bg-dark-900 text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-dark-900/60 hover:bg-dark-900/90 transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(255,84,54,0.2)] flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-950">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95] group-hover:brightness-100"
                />
                
                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-white text-xs font-mono font-medium border border-white/15">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/90 text-white text-xs font-mono font-bold">
                    {project.year}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-dark-950 text-zinc-400 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    Explore Case Study
                  </span>
                  <div className="p-2.5 rounded-full bg-dark-950 text-zinc-400 group-hover:text-white group-hover:bg-accent transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Selected Project Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
