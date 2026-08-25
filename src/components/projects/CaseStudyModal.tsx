import React, { useEffect } from 'react';
import type { Project } from '../../types/portfolio';
import { 
  X, 
  CheckCircle2, 
  Target, 
  Sparkles
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Keyboard escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Sticky Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-950/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/40 rounded-full text-xs font-mono font-bold uppercase">
              {project.category}
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              Case Study • {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-dark-800 text-zinc-300 hover:text-white hover:bg-accent transition-all duration-200"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12 divide-y divide-white/10">
          
          {/* Header Banner */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h2>

            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
              {caseStudy.overview}
            </p>

            {/* Meta Attributes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-dark-950 border border-white/5">
              <div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Role</div>
                <div className="text-sm font-semibold text-white mt-0.5">{caseStudy.role}</div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Client / Context</div>
                <div className="text-sm font-semibold text-white mt-0.5">{caseStudy.clientOrContext}</div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Timeline</div>
                <div className="text-sm font-semibold text-white mt-0.5">{caseStudy.timeline}</div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Tools Used</div>
                <div className="text-sm font-semibold text-accent mt-0.5">{project.tools.join(', ')}</div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] shadow-xl bg-dark-950">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Problem & Goal */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-dark-950/70 border border-red-500/20 space-y-3">
              <div className="flex items-center gap-2 text-red-400 text-xs uppercase tracking-widest font-bold font-mono">
                <Target className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-dark-950/70 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest font-bold font-mono">
                <Sparkles className="w-4 h-4" />
                The Goal & Objective
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {caseStudy.goal}
              </p>
            </div>
          </div>

          {/* User Research & UX Insights */}
          <div className="pt-10 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">Discovery</div>
              <h3 className="text-2xl font-display font-bold text-white">User Research & Core Insights</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.researchInsights.map((insight, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-dark-950 border border-white/5 space-y-2">
                  <div className="font-mono text-xs text-accent font-bold">Insight 0{idx + 1}</div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* UX Process & Steps */}
          <div className="pt-10 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">Methodology</div>
              <h3 className="text-2xl font-display font-bold text-white">UX Architecture & Process</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {caseStudy.uxProcessSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-dark-950 border border-white/5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent font-mono text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">{step}</span>
                </div>
              ))}
            </div>

            {caseStudy.wireframeNotes && (
              <div className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-2">
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Wireframing Strategy</div>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{caseStudy.wireframeNotes}</p>
              </div>
            )}
          </div>

          {/* High Fidelity Screen Gallery */}
          <div className="pt-10 space-y-8">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">Deliverables</div>
              <h3 className="text-2xl font-display font-bold text-white">High-Fidelity Interface Screens</h3>
            </div>

            <div className="space-y-8">
              {caseStudy.screens.map((screen) => (
                <div key={screen.id} className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-950 shadow-2xl">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-auto object-cover max-h-[600px]"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-2">
                    <span className="text-sm font-bold text-white">{screen.title}</span>
                    <span className="text-xs text-zinc-400 font-light">{screen.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Design Decisions */}
          <div className="pt-10 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">Rationale</div>
              <h3 className="text-2xl font-display font-bold text-white">Critical Design Decisions</h3>
            </div>

            <div className="space-y-3">
              {caseStudy.designDecisions.map((decision, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-dark-950 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{decision}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Outcome & Impact */}
          <div className="pt-10 space-y-6 pb-4">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-accent/15 via-dark-950 to-dark-950 border border-accent/40 space-y-3">
              <div className="text-xs uppercase tracking-widest text-accent font-bold font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Outcome & Measurable Impact
              </div>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
