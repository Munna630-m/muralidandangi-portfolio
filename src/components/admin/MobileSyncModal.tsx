import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Copy, 
  Check, 
  Smartphone, 
  Sparkles,
  Download,
  UploadCloud
} from 'lucide-react';

export const MobileSyncModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { exportBackup, importBackup, showToast } = usePortfolio();
  const [backupJson, setBackupJson] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [importInput, setImportInput] = useState('');
  const [syncStep, setSyncStep] = useState<'export' | 'import' | 'codebase'>('export');

  const handleGenerateSync = async () => {
    const data = await exportBackup();
    setBackupJson(data);
  };

  React.useEffect(() => {
    handleGenerateSync();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(backupJson);
    setCopied(true);
    showToast('Data copied to clipboard! You can send it to your phone.', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleImportText = async () => {
    if (!importInput.trim()) return;
    const ok = await importBackup(importInput.trim());
    if (ok) {
      showToast('Data imported! Your mobile is now synced with your laptop.', 'success');
      onClose();
    } else {
      showToast('Invalid sync data. Please try again.', 'error');
    }
  };

  const handleDownloadDefaultData = () => {
    const blob = new Blob([backupJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded portfolio-data.json! Commit this to make it permanent for all mobile users.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-accent/20 text-accent">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Mobile & Multi-Device Sync</h3>
              <p className="text-xs text-zinc-400">Why edits on your laptop need to be synced to your mobile phone</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-dark-950 text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-3 gap-2 bg-dark-950 p-1.5 rounded-2xl border border-white/5">
          <button
            onClick={() => setSyncStep('codebase')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              syncStep === 'codebase' ? 'bg-accent text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            1. Global Netlify Deploy
          </button>

          <button
            onClick={() => setSyncStep('export')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              syncStep === 'export' ? 'bg-accent text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            2. Send to Phone
          </button>

          <button
            onClick={() => setSyncStep('import')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              syncStep === 'import' ? 'bg-accent text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            3. Import on Phone
          </button>
        </div>

        {/* Content Tabs */}
        {syncStep === 'codebase' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-dark-950/80 border border-accent/30 space-y-3">
              <div className="flex items-center gap-2 text-accent text-xs uppercase font-bold font-mono">
                <Sparkles className="w-4 h-4" />
                Permanent Global Solution (Recommended)
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                When you make edits in this Admin portal on your computer, they save to your computer's browser. To make them visible to <strong>every visitor and on your phone automatically without logging in</strong>:
              </p>

              <ol className="text-xs text-zinc-400 space-y-1.5 list-decimal list-inside font-light">
                <li>Download your updated portfolio data file below.</li>
                <li>Push your repository to GitHub / Netlify.</li>
                <li>Netlify will automatically deploy your updated projects to every device in the world!</li>
              </ol>
            </div>

            <button
              onClick={handleDownloadDefaultData}
              className="w-full py-3.5 px-6 rounded-2xl bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold tracking-wider shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Updated Data Snapshot</span>
            </button>
          </div>
        )}

        {syncStep === 'export' && (
          <div className="space-y-4">
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Copy your laptop's customized portfolio data below. You can send it to your phone via WhatsApp, Telegram, or Email, then paste it in the <strong>"Import on Phone"</strong> tab on your mobile browser.
            </p>

            <div className="relative">
              <textarea
                readOnly
                rows={6}
                value={backupJson}
                className="w-full p-3 rounded-2xl bg-dark-950 border border-white/10 text-[11px] font-mono text-zinc-300 outline-none resize-none"
              />
            </div>

            <button
              onClick={handleCopy}
              className="w-full py-3.5 px-6 rounded-2xl bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold tracking-wider shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Data to Clipboard!' : 'Copy Sync Code'}</span>
            </button>
          </div>
        )}

        {syncStep === 'import' && (
          <div className="space-y-4">
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Open your portfolio on your mobile phone, go to <code>#admin</code> (passcode: <code>murali2026</code>), click <strong>Sync to Mobile</strong>, and paste your sync code here:
            </p>

            <textarea
              rows={6}
              placeholder="Paste your sync code here on your mobile..."
              value={importInput}
              onChange={(e) => setImportInput(e.target.value)}
              className="w-full p-3 rounded-2xl bg-dark-950 border border-white/10 text-[11px] font-mono text-white placeholder-zinc-600 outline-none focus:border-accent resize-none"
            />

            <button
              onClick={handleImportText}
              disabled={!importInput.trim()}
              className="w-full py-3.5 px-6 rounded-2xl bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold tracking-wider shadow-lg shadow-accent/25 flex items-center justify-center gap-2 disabled:opacity-40"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Apply Sync to this Device</span>
            </button>
          </div>
        )}

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="text-xs text-zinc-400 hover:text-white font-mono"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
