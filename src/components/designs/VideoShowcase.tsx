import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Play, Film, X } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const { videos, selectedVideo, setSelectedVideo } = usePortfolio();

  const publishedVideos = videos.filter((v) => v.published);

  if (publishedVideos.length === 0) return null;

  return (
    <div className="mt-20 pt-16 border-t border-white/10 space-y-8">
      {/* Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold mb-1">
            <Film className="w-3.5 h-3.5" />
            Motion & Product Demos
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            VIDEO <span className="text-accent">SHOWCASE</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md">
          Interactive prototypes, motion graphics, and UI micro-interaction recordings.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {publishedVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-dark-900/70 hover:bg-dark-850 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden bg-dark-950">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/40 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-white text-[11px] font-mono">
                  {video.category}
                </span>
                {video.duration && (
                  <span className="px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-mono">
                    {video.duration}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h4 className="text-base font-bold text-white group-hover:text-accent transition-colors leading-snug">
                {video.title}
              </h4>
              <p className="text-xs text-zinc-400 font-light line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {selectedVideo.title}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-full bg-dark-800 text-zinc-300 hover:text-white hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
                poster={selectedVideo.thumbnailUrl}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              {selectedVideo.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
