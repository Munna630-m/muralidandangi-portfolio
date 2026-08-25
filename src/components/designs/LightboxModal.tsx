import React, { useEffect, useState } from 'react';
import type { DesignItem } from '../../types/portfolio';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut
} from 'lucide-react';

interface LightboxModalProps {
  items: DesignItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const currentItem = items[currentIndex];

  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1);
        } else {
          onNavigate(items.length - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < items.length - 1) {
          onNavigate(currentIndex + 1);
        } else {
          onNavigate(0);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200 select-none">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-dark-950/80 z-20">
        
        {/* Item Counter & Category */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-mono font-semibold">
            {currentItem.category}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-xl bg-dark-900 text-zinc-300 hover:text-white hover:bg-dark-800 border border-white/10"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleResetZoom}
            className="px-2.5 py-2 rounded-xl bg-dark-900 text-zinc-300 hover:text-white hover:bg-dark-800 border border-white/10 text-xs font-mono"
            title="Reset Zoom"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            className="p-2 rounded-xl bg-dark-900 text-zinc-300 hover:text-white hover:bg-dark-800 border border-white/10"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 ml-2 rounded-xl bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25 transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Main Image Viewer Area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4 sm:p-8">
        
        {/* Navigation Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-dark-900/80 hover:bg-accent text-white border border-white/10 transition-all duration-200 shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[75vh] max-w-[85vw] object-contain rounded-xl shadow-2xl pointer-events-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </div>

        {/* Navigation Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-dark-900/80 hover:bg-accent text-white border border-white/10 transition-all duration-200 shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>

      {/* Bottom Metadata Bar */}
      <div className="px-6 sm:px-12 py-4 bg-dark-950/90 border-t border-white/10 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="text-xs text-zinc-400 font-light max-w-2xl">
              {currentItem.description}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {currentItem.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-dark-900 text-zinc-300 border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
