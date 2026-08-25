import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import type { Project } from '../../types/portfolio';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  MoveUp, 
  MoveDown, 
  Upload, 
  Save, 
  X, 
  FolderKanban
} from 'lucide-react';

export const ProjectManager: React.FC = () => {
  const { projects, saveProject, deleteProject, reorderProjects, uploadFile } = usePortfolio();
  
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingScreen, setUploadingScreen] = useState(false);

  const handleCreateNew = () => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: 'New Creative Project',
      category: 'UI/UX Design',
      shortDescription: 'Modern digital experience designed for intuitive user engagement.',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      tools: ['Figma', 'Design Systems'],
      tags: ['UI/UX', 'Digital Product'],
      year: '2026',
      featured: true,
      published: true,
      order: projects.length + 1,
      caseStudy: {
        overview: 'Comprehensive product experience designed to solve key user pain points.',
        clientOrContext: 'Client Project / Venture',
        timeline: '4 Weeks',
        role: 'Lead UI/UX Designer',
        problem: 'Users faced high friction and drop-off during the primary conversion workflow.',
        goal: 'Design a seamless, high-converting product journey with accessible visual hierarchy.',
        researchInsights: [
          '80% of surveyed users preferred simplified multi-step onboarding.'
        ],
        uxProcessSteps: [
          'User Interviews & Persona Synthesis',
          'Wireframing & Information Architecture',
          'Interactive Figma Prototyping & Usability Testing'
        ],
        wireframeNotes: 'Low-fidelity structural prototypes validated core layout rhythm.',
        uiDesignHighlights: [
          'High-contrast typography paired with smooth micro-interactions'
        ],
        screens: [
          {
            id: 'scr-new-1',
            title: 'Primary Workspace & Dashboard',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
            caption: 'Clean telemetry and intuitive card layout.'
          }
        ],
        designDecisions: [
          'Adopted an 8px grid system for layout consistency.'
        ],
        outcome: 'Achieved a 45% increase in user retention in prototype usability testing.'
      }
    };
    setEditingProject(newProj);
    setIsNew(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    await saveProject(editingProject);
    setEditingProject(null);
    setIsNew(false);
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingProject) return;
    setUploadingCover(true);
    try {
      const url = await uploadFile(file);
      setEditingProject({ ...editingProject, coverImage: url });
    } catch (err) {
      console.error(err);
      alert('Failed to upload cover image');
    } finally {
      setUploadingCover(false);
    }
  };

  const handleAddScreen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingProject) return;
    setUploadingScreen(true);
    try {
      const url = await uploadFile(file);
      const newScreen = {
        id: `scr-${Date.now()}`,
        title: 'Project Screen',
        image: url,
        caption: 'High-fidelity interface screenshot.'
      };
      setEditingProject({
        ...editingProject,
        caseStudy: {
          ...editingProject.caseStudy,
          screens: [...editingProject.caseStudy.screens, newScreen]
        }
      });
    } catch (err) {
      console.error(err);
      alert('Failed to upload screen');
    } finally {
      setUploadingScreen(false);
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newProjects = [...projects];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newProjects.length) return;

    const temp = newProjects[index];
    newProjects[index] = newProjects[targetIndex];
    newProjects[targetIndex] = temp;
    reorderProjects(newProjects);
  };

  return (
    <div className="space-y-8">
      
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-accent" />
            Project Case Studies ({projects.length})
          </h3>
          <p className="text-xs text-zinc-400">Manage your featured case studies and portfolio deliverables.</p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-wider font-bold rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New Project
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl bg-dark-900 border border-white/10 hover:border-accent/40 transition-all gap-4"
          >
            {/* Left: Thumbnail & Details */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-20 h-14 rounded-xl overflow-hidden bg-dark-950 border border-white/10 shrink-0">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{project.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-accent/20 text-accent">
                    {project.category}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-light">
                  {project.year} • {project.tools.join(', ')}
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {/* Move Buttons */}
              <button
                disabled={index === 0}
                onClick={() => handleMove(index, 'up')}
                className="p-2 rounded-xl bg-dark-950 text-zinc-400 hover:text-white border border-white/5 disabled:opacity-30"
                title="Move Up"
              >
                <MoveUp className="w-4 h-4" />
              </button>

              <button
                disabled={index === projects.length - 1}
                onClick={() => handleMove(index, 'down')}
                className="p-2 rounded-xl bg-dark-950 text-zinc-400 hover:text-white border border-white/5 disabled:opacity-30"
                title="Move Down"
              >
                <MoveDown className="w-4 h-4" />
              </button>

              {/* Publish Toggle */}
              <button
                onClick={() => saveProject({ ...project, published: !project.published })}
                className={`p-2 rounded-xl border transition-colors ${
                  project.published
                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                    : 'bg-zinc-800 text-zinc-500 border-white/5'
                }`}
                title={project.published ? 'Published' : 'Hidden'}
              >
                {project.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>

              {/* Edit */}
              <button
                onClick={() => {
                  setEditingProject(project);
                  setIsNew(false);
                }}
                className="p-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-white border border-white/10"
                title="Edit Case Study"
              >
                <Edit3 className="w-4 h-4" />
              </button>

              {/* Delete */}
              <button
                onClick={() => {
                  if (confirm(`Delete project "${project.title}"?`)) {
                    deleteProject(project.id);
                  }
                }}
                className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20"
                title="Delete Project"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Create Modal Form */}
      {editingProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setEditingProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-dark-950 border-b border-white/10">
              <h3 className="text-base font-bold text-white">
                {isNew ? 'Create New Project Case Study' : `Edit: ${editingProject.title}`}
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="p-2 rounded-full bg-dark-800 text-zinc-300 hover:text-white hover:bg-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSave} className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-white/10">
              
              {/* Basic Details */}
              <div className="space-y-5">
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider font-mono">1. Basic Information</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Project Title</label>
                    <input
                      type="text"
                      required
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Category</label>
                    <select
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    >
                      <option value="Product Design">Product Design</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Branding">Branding</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Short Summary</label>
                    <input
                      type="text"
                      value={editingProject.shortDescription}
                      onChange={(e) => setEditingProject({ ...editingProject, shortDescription: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Tools (comma-separated)</label>
                    <input
                      type="text"
                      value={editingProject.tools.join(', ')}
                      onChange={(e) => setEditingProject({ 
                        ...editingProject, 
                        tools: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Year</label>
                    <input
                      type="text"
                      value={editingProject.year}
                      onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    />
                  </div>
                </div>

                {/* Cover Image Upload */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs uppercase font-semibold text-zinc-400">Cover Image</label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-16 rounded-xl overflow-hidden bg-dark-950 border border-white/10 shrink-0">
                      <img
                        src={editingProject.coverImage}
                        alt="Cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        disabled={uploadingCover}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <button
                        type="button"
                        className="w-full py-2.5 px-4 rounded-xl bg-dark-950 hover:bg-dark-800 text-white text-xs uppercase font-bold border border-white/10 hover:border-accent flex items-center justify-center gap-2"
                      >
                        <Upload className="w-4 h-4 text-accent" />
                        <span>{uploadingCover ? 'Uploading...' : 'Upload Cover Image'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="space-y-5 pt-8">
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider font-mono">2. Case Study Architecture</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Role</label>
                    <input
                      type="text"
                      value={editingProject.caseStudy.role}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, role: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Client / Context</label>
                    <input
                      type="text"
                      value={editingProject.caseStudy.clientOrContext}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, clientOrContext: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Case Study Overview</label>
                    <textarea
                      rows={2}
                      value={editingProject.caseStudy.overview}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, overview: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Problem Statement</label>
                    <textarea
                      rows={3}
                      value={editingProject.caseStudy.problem}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, problem: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Goal & Objective</label>
                    <textarea
                      rows={3}
                      value={editingProject.caseStudy.goal}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, goal: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs uppercase font-semibold text-zinc-400">Outcome & Results</label>
                    <textarea
                      rows={2}
                      value={editingProject.caseStudy.outcome}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        caseStudy: { ...editingProject.caseStudy, outcome: e.target.value }
                      })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Case Study Screen Uploads */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase font-semibold text-zinc-400">High-Fidelity Screens</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAddScreen}
                        disabled={uploadingScreen}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-lg bg-dark-950 text-accent text-xs font-mono border border-accent/30 hover:bg-accent hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{uploadingScreen ? 'Uploading...' : 'Upload Screen'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {editingProject.caseStudy.screens.map((scr, sIdx) => (
                      <div key={scr.id} className="relative rounded-xl overflow-hidden bg-dark-950 border border-white/10 p-2 space-y-1">
                        <img src={scr.image} alt={scr.title} className="w-full h-20 object-cover rounded-lg" />
                        <input
                          type="text"
                          value={scr.title}
                          onChange={(e) => {
                            const newScreens = [...editingProject.caseStudy.screens];
                            newScreens[sIdx].title = e.target.value;
                            setEditingProject({
                              ...editingProject,
                              caseStudy: { ...editingProject.caseStudy, screens: newScreens }
                            });
                          }}
                          className="w-full px-2 py-1 rounded bg-dark-900 text-xs text-white border border-white/5"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newScreens = editingProject.caseStudy.screens.filter((_, i) => i !== sIdx);
                            setEditingProject({
                              ...editingProject,
                              caseStudy: { ...editingProject.caseStudy, screens: newScreens }
                            });
                          }}
                          className="absolute top-3 right-3 p-1 rounded-full bg-red-500 text-white text-[10px]"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-6 py-3 rounded-2xl bg-dark-950 text-zinc-400 hover:text-white text-xs uppercase font-semibold border border-white/10"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-2xl bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold shadow-lg shadow-accent/30 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Project
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
