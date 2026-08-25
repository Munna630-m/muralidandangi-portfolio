import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import type { DesignItem, DesignCategory } from '../../types/portfolio';
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
  Palette
} from 'lucide-react';

export const DesignManager: React.FC = () => {
  const { designs, saveDesign, deleteDesign, reorderDesigns, uploadFile } = usePortfolio();
  
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [editingDesign, setEditingDesign] = useState<DesignItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const categories: DesignCategory[] = [
    'UI/UX Designs',
    'Social Media Posts',
    'Thumbnails',
    'Graphic Designs',
    'Branding',
    'Other'
  ];

  const filteredDesigns = designs.filter((d) => {
    if (selectedFilter === 'All') return true;
    return d.category === selectedFilter;
  });

  const handleCreateNew = () => {
    const newDesign: DesignItem = {
      id: `des-${Date.now()}`,
      title: 'New Design Creation',
      category: 'UI/UX Designs',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      aspectRatio: 'square',
      description: 'Creative design exploration with crisp visual hierarchy.',
      tags: ['Design', 'Creative'],
      published: true,
      order: designs.length + 1,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setEditingDesign(newDesign);
    setIsNew(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingDesign) return;
    setUploadingImage(true);
    try {
      const url = await uploadFile(file);
      setEditingDesign({ ...editingDesign, imageUrl: url });
    } catch (err) {
      console.error(err);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDesign) return;
    await saveDesign(editingDesign);
    setEditingDesign(null);
    setIsNew(false);
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newDesigns = [...designs];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newDesigns.length) return;

    const temp = newDesigns[index];
    newDesigns[index] = newDesigns[targetIndex];
    newDesigns[targetIndex] = temp;
    reorderDesigns(newDesigns);
  };

  return (
    <div className="space-y-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Palette className="w-5 h-5 text-accent" />
            Designs & Media Items ({designs.length})
          </h3>
          <p className="text-xs text-zinc-400">Upload and categorize your visual designs, thumbnails, and posts.</p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-wider font-bold rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New Design
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === cat
                ? 'bg-accent text-white shadow-md'
                : 'bg-dark-900 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Designs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredDesigns.map((design, index) => (
          <div
            key={design.id}
            className="group relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between"
          >
            {/* Image Preview */}
            <div className="relative aspect-video w-full bg-dark-950 overflow-hidden">
              <img
                src={design.imageUrl}
                alt={design.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="px-2 py-0.5 rounded-md bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-white">
                  {design.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5 space-y-2">
              <div className="text-xs font-bold text-white truncate" title={design.title}>
                {design.title}
              </div>

              {/* Actions Bar */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button
                    disabled={index === 0}
                    onClick={() => handleMove(index, 'up')}
                    className="p-1 rounded bg-dark-950 text-zinc-400 hover:text-white disabled:opacity-20"
                    title="Move Up"
                  >
                    <MoveUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    disabled={index === filteredDesigns.length - 1}
                    onClick={() => handleMove(index, 'down')}
                    className="p-1 rounded bg-dark-950 text-zinc-400 hover:text-white disabled:opacity-20"
                    title="Move Down"
                  >
                    <MoveDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => saveDesign({ ...design, published: !design.published })}
                    className={`p-1 rounded transition-colors ${
                      design.published ? 'text-emerald-400' : 'text-zinc-600'
                    }`}
                    title={design.published ? 'Published' : 'Hidden'}
                  >
                    {design.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setEditingDesign(design);
                      setIsNew(false);
                    }}
                    className="p-1.5 rounded-lg bg-dark-950 text-zinc-300 hover:text-white hover:bg-dark-800"
                    title="Edit"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Delete design "${design.title}"?`)) {
                        deleteDesign(design.id);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Edit / Create Modal Form */}
      {editingDesign && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setEditingDesign(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-dark-950 border-b border-white/10">
              <h3 className="text-base font-bold text-white">
                {isNew ? 'Add New Design' : `Edit Design: ${editingDesign.title}`}
              </h3>
              <button
                onClick={() => setEditingDesign(null)}
                className="p-2 rounded-full bg-dark-800 text-zinc-300 hover:text-white hover:bg-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-400">Design Title</label>
                <input
                  type="text"
                  required
                  value={editingDesign.title}
                  onChange={(e) => setEditingDesign({ ...editingDesign, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-400">Category</label>
                  <select
                    value={editingDesign.category}
                    onChange={(e) => setEditingDesign({ ...editingDesign, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-400">Aspect Ratio</label>
                  <select
                    value={editingDesign.aspectRatio}
                    onChange={(e) => setEditingDesign({ ...editingDesign, aspectRatio: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                  >
                    <option value="square">Square (1:1)</option>
                    <option value="portrait">Portrait (3:4)</option>
                    <option value="16:9">16:9 Thumbnail / Wide</option>
                    <option value="landscape">Landscape (4:3)</option>
                  </select>
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-2 pt-2">
                <label className="text-xs uppercase font-semibold text-zinc-400">Upload Image File</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-dark-950 border border-white/10 shrink-0">
                    <img
                      src={editingDesign.imageUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <button
                      type="button"
                      className="w-full py-3 px-4 rounded-xl bg-dark-950 hover:bg-dark-800 text-white text-xs uppercase font-bold border border-white/10 hover:border-accent flex items-center justify-center gap-2"
                    >
                      <Upload className="w-4 h-4 text-accent" />
                      <span>{uploadingImage ? 'Uploading Image...' : 'Choose Device Image'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-400">Description</label>
                <textarea
                  rows={2}
                  value={editingDesign.description || ''}
                  onChange={(e) => setEditingDesign({ ...editingDesign, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-400">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={editingDesign.tags.join(', ')}
                  onChange={(e) => setEditingDesign({
                    ...editingDesign,
                    tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingDesign(null)}
                  className="px-5 py-2.5 rounded-xl bg-dark-950 text-zinc-400 hover:text-white text-xs uppercase font-semibold border border-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold shadow-lg shadow-accent/20 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Design
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
