import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  UploadCloud, 
  Trash2, 
  Copy, 
  Check, 
  Film
} from 'lucide-react';

interface MediaLibraryProps {
  onSelectMedia?: (url: string) => void;
}

export const MediaLibrary: React.FC<MediaLibraryProps> = ({ onSelectMedia }) => {
  const { media, uploadFile, deleteMedia } = usePortfolio();
  const [isUploading, setIsUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        await uploadFile(files[i]);
      }
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed. Please check file size.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Upload Dropzone */}
      <div className="relative border-2 border-dashed border-white/15 hover:border-accent/50 rounded-3xl p-8 sm:p-12 text-center bg-dark-950/60 transition-colors group">
        <input
          type="file"
          multiple
          accept="image/png, image/jpeg, image/webp, image/svg+xml, video/mp4, video/webm"
          onChange={handleFileUpload}
          disabled={isUploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        
        <div className="space-y-3 pointer-events-none">
          <div className="w-16 h-16 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all shadow-lg shadow-accent/20">
            <UploadCloud className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              {isUploading ? 'Compressing & Storing Media...' : 'Click or Drag & Drop Images / Videos to Upload'}
            </h4>
            <p className="text-xs text-zinc-400 font-light max-w-md mx-auto">
              Supports JPG, PNG, WEBP, SVG, MP4, WEBM. Files are stored persistently in your browser's IndexedDB engine.
            </p>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm uppercase font-mono font-bold tracking-wider text-zinc-300">
            Stored Media Files ({media.length})
          </h4>
        </div>

        {media.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {media.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                {/* Preview */}
                <div className="relative aspect-square w-full bg-dark-950 overflow-hidden">
                  {item.type === 'video' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-dark-900 text-zinc-400">
                      <Film className="w-8 h-8 text-accent" />
                      <span className="text-[10px] mt-1 font-mono">Video</span>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Quick Select Overlay */}
                  {onSelectMedia && (
                    <button
                      onClick={() => onSelectMedia(item.url)}
                      className="absolute inset-0 bg-accent/80 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Select
                    </button>
                  )}
                </div>

                {/* Info & Actions */}
                <div className="p-2.5 space-y-1.5 bg-dark-950/90 border-t border-white/5">
                  <div className="text-[11px] font-mono text-zinc-300 truncate" title={item.name}>
                    {item.name}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => handleCopyUrl(item.url, item.id)}
                      className="p-1.5 rounded-lg bg-dark-900 text-zinc-400 hover:text-white hover:bg-dark-800 border border-white/5 text-[10px] flex items-center gap-1"
                      title="Copy Data URI"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>Copy</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Delete ${item.name}?`)) {
                          deleteMedia(item.id);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                      title="Delete Media"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-dark-950/40 border border-white/5 text-xs text-zinc-500">
            No uploaded media in library yet. Upload your high-res design files and photos above.
          </div>
        )}
      </div>

    </div>
  );
};
