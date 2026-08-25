import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import type { VideoItem } from '../../types/portfolio';
import { 
  Plus, 
  Trash2, 
  Upload, 
  Save, 
  X, 
  Film, 
  Play, 
  Eye, 
  EyeOff 
} from 'lucide-react';

export const VideoManager: React.FC = () => {
  const { videos, saveVideo, deleteVideo, uploadFile } = usePortfolio();
  
  const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [uploadingVideoFile, setUploadingVideoFile] = useState(false);

  const handleCreateNew = () => {
    const newVid: VideoItem = {
      id: `vid-${Date.now()}`,
      title: 'UI Interaction & Prototype Walkthrough',
      category: 'UI/UX & Motion',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      duration: '0:45',
      description: 'Interactive prototype demonstration showcasing fluid transitions.',
      published: true,
      order: videos.length + 1
    };
    setEditingVideo(newVid);
    setIsNew(true);
  };

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingVideo) return;
    setUploadingThumbnail(true);
    try {
      const url = await uploadFile(file);
      setEditingVideo({ ...editingVideo, thumbnailUrl: url });
    } catch (err) {
      console.error(err);
      alert('Thumbnail upload failed');
    } finally {
      setUploadingThumbnail(false);
    }
  };

  const handleVideoFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingVideo) return;
    setUploadingVideoFile(true);
    try {
      const url = await uploadFile(file);
      setEditingVideo({ ...editingVideo, videoUrl: url });
    } catch (err) {
      console.error(err);
      alert('Video file upload failed');
    } finally {
      setUploadingVideoFile(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVideo) return;
    await saveVideo(editingVideo);
    setEditingVideo(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Film className="w-5 h-5 text-accent" />
            Video Showcase Items ({videos.length})
          </h3>
          <p className="text-xs text-zinc-400">Manage motion design videos, UI demos and prototype reels.</p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-wider font-bold rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Video
        </button>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((vid) => (
          <div
            key={vid.id}
            className="group relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-dark-950 overflow-hidden">
              <img
                src={vid.thumbnailUrl}
                alt={vid.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-10 h-10 rounded-full bg-accent/90 text-white flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <div className="text-sm font-bold text-white truncate" title={vid.title}>
                {vid.title}
              </div>
              <div className="text-xs text-zinc-400 font-light flex items-center justify-between">
                <span>{vid.category}</span>
                <span>{vid.duration}</span>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => saveVideo({ ...vid, published: !vid.published })}
                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 ${
                    vid.published
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-dark-950 text-zinc-500 border-white/5'
                  }`}
                >
                  {vid.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  <span>{vid.published ? 'Published' : 'Hidden'}</span>
                </button>

                <button
                  onClick={() => {
                    if (confirm(`Delete video "${vid.title}"?`)) {
                      deleteVideo(vid.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Video Modal */}
      {editingVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setEditingVideo(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-dark-950 border-b border-white/10">
              <h3 className="text-base font-bold text-white">
                {isNew ? 'Add Video Item' : `Edit: ${editingVideo.title}`}
              </h3>
              <button
                onClick={() => setEditingVideo(null)}
                className="p-2 rounded-full bg-dark-800 text-zinc-300 hover:text-white hover:bg-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-400">Video Title</label>
                <input
                  type="text"
                  required
                  value={editingVideo.title}
                  onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-400">Category</label>
                  <input
                    type="text"
                    value={editingVideo.category}
                    onChange={(e) => setEditingVideo({ ...editingVideo, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-400">Duration (e.g. 0:45)</label>
                  <input
                    type="text"
                    value={editingVideo.duration || ''}
                    onChange={(e) => setEditingVideo({ ...editingVideo, duration: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                  />
                </div>
              </div>

              {/* Video URL or Direct Upload */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-400">Video File / URL</label>
                <input
                  type="text"
                  value={editingVideo.videoUrl}
                  onChange={(e) => setEditingVideo({ ...editingVideo, videoUrl: e.target.value })}
                  placeholder="https://... or upload below"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                />
                <div className="relative pt-1">
                  <input
                    type="file"
                    accept="video/mp4, video/webm"
                    onChange={handleVideoFileUpload}
                    disabled={uploadingVideoFile}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <button
                    type="button"
                    className="w-full py-2 px-3 rounded-lg bg-dark-950 hover:bg-dark-800 text-accent text-xs font-bold border border-accent/20 flex items-center justify-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingVideoFile ? 'Storing Video...' : 'Upload Video File from Device'}</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Image Upload */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs uppercase font-semibold text-zinc-400">Poster / Thumbnail</label>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-12 rounded-lg overflow-hidden bg-dark-950 border border-white/10 shrink-0">
                    <img src={editingVideo.thumbnailUrl} alt="Poster" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                      disabled={uploadingThumbnail}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <button
                      type="button"
                      className="w-full py-2.5 px-3 rounded-lg bg-dark-950 text-white text-xs font-bold border border-white/10 hover:border-accent flex items-center justify-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5 text-accent" />
                      <span>{uploadingThumbnail ? 'Uploading...' : 'Upload Thumbnail Image'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-400">Description</label>
                <textarea
                  rows={2}
                  value={editingVideo.description}
                  onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingVideo(null)}
                  className="px-5 py-2.5 rounded-xl bg-dark-950 text-zinc-400 hover:text-white text-xs uppercase font-semibold border border-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold shadow-lg shadow-accent/20 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
