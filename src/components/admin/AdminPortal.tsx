import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProfileManager } from './ProfileManager';
import { ProjectManager } from './ProjectManager';
import { DesignManager } from './DesignManager';
import { VideoManager } from './VideoManager';
import { MediaLibrary } from './MediaLibrary';
import { MessagesManager } from './MessagesManager';
import { 
  Shield, 
  Lock, 
  Unlock, 
  ArrowLeft, 
  LayoutDashboard, 
  User, 
  FolderKanban, 
  Palette, 
  Film, 
  HardDrive, 
  MessageSquare, 
  Settings, 
  Download, 
  Upload, 
  RotateCcw,
  Key,
  Check,
  ExternalLink
} from 'lucide-react';

export const AdminPortal: React.FC = () => {
  const { 
    isAdmin, 
    adminLogin, 
    adminLogout, 
    updateAdminPasscode,
    setCurrentView,
    projects,
    designs,
    videos,
    media,
    messages,
    exportBackup,
    importBackup,
    resetToDefaults
  } = usePortfolio();

  const [enteredPasscode, setEnteredPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'profile' | 'projects' | 'designs' | 'videos' | 'media' | 'messages' | 'settings'>('dashboard');

  const [newPasscode, setNewPasscode] = useState('');
  const [passcodeChanged, setPasscodeChanged] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(enteredPasscode);
    if (!success) {
      setAuthError(true);
    } else {
      setAuthError(false);
      setEnteredPasscode('');
    }
  };

  const handleExport = async () => {
    const jsonStr = await exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `murali-portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const content = ev.target?.result as string;
      const ok = await importBackup(content);
      if (ok) {
        setImportStatus('Backup restored successfully!');
      } else {
        setImportStatus('Failed to restore backup. Invalid JSON.');
      }
    };
    reader.readAsText(file);
  };

  const handleChangePasscode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasscode.trim()) return;
    await updateAdminPasscode(newPasscode.trim());
    setPasscodeChanged(true);
    setNewPasscode('');
    setTimeout(() => setPasscodeChanged(false), 3000);
  };

  // 1. Authentication Screen if not logged in
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl bg-dark-900 border border-white/10 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mx-auto border border-accent/30 shadow-lg shadow-accent/20">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white tracking-tight">
              Admin & CMS Authentication
            </h2>
            <p className="text-xs text-zinc-400 font-light">
              Enter your admin security passcode to manage portfolio content.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                Security Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter passcode..."
                  value={enteredPasscode}
                  onChange={(e) => {
                    setEnteredPasscode(e.target.value);
                    setAuthError(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                />
                <Lock className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {authError && (
                <p className="text-xs text-red-400 font-medium">Incorrect passcode. Try again.</p>
              )}
            </div>

            <div className="p-3 rounded-xl bg-dark-950/80 border border-white/5 text-[11px] text-zinc-400 space-y-1">
              <div className="font-semibold text-zinc-300">Default Access Code:</div>
              <code className="text-accent font-mono">murali2026</code>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-bold transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                setCurrentView('portfolio');
                window.location.hash = '';
              }}
              className="text-xs text-zinc-400 hover:text-white font-mono flex items-center justify-center gap-1.5 mx-auto transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Public Portfolio
            </button>
          </div>

        </div>

      </div>
    );
  }

  // 2. Authenticated Admin Dashboard Portal
  const navTabs = [
    { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile & Bio', icon: <User className="w-4 h-4" /> },
    { id: 'projects', label: 'Case Studies', icon: <FolderKanban className="w-4 h-4" />, count: projects.length },
    { id: 'designs', label: 'Designs', icon: <Palette className="w-4 h-4" />, count: designs.length },
    { id: 'videos', label: 'Videos', icon: <Film className="w-4 h-4" />, count: videos.length },
    { id: 'media', label: 'Media Library', icon: <HardDrive className="w-4 h-4" />, count: media.length },
    { id: 'messages', label: 'Inquiries', icon: <MessageSquare className="w-4 h-4" />, count: messages.filter(m => !m.read).length },
    { id: 'settings', label: 'System & Backup', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-zinc-100 flex flex-col pt-4 pb-20">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-dark-950/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-accent text-white shadow-md shadow-accent/25">
              <Shield className="w-5 h-5" />
            </span>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white font-display uppercase tracking-wider">
                MURALI DANDANGI <span className="text-accent font-mono text-xs">CMS</span>
              </h1>
              <div className="text-[10px] text-zinc-400 font-mono">
                Persistent Storage Active • IndexedDB Sync
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentView('portfolio');
                window.location.hash = '';
              }}
              className="px-4 py-2 rounded-xl bg-dark-900 hover:bg-dark-800 text-zinc-200 text-xs font-semibold border border-white/10 transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Public Site</span>
            </button>

            <button
              onClick={adminLogout}
              className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white text-xs font-semibold border border-red-500/20 transition-all"
            >
              Logout
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8 flex-1">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/10 scrollbar-none">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-[1.02]'
                    : 'bg-dark-900/60 text-zinc-400 hover:text-white hover:bg-dark-900 border border-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-dark-950 text-zinc-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            
            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">Total Projects</div>
                <div className="text-3xl font-display font-extrabold text-white">{projects.length}</div>
                <div className="text-[11px] text-accent font-mono">{projects.filter(p => p.published).length} Published</div>
              </div>

              <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">Total Designs</div>
                <div className="text-3xl font-display font-extrabold text-white">{designs.length}</div>
                <div className="text-[11px] text-accent font-mono">6 Categories</div>
              </div>

              <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">Stored Media</div>
                <div className="text-3xl font-display font-extrabold text-white">{media.length}</div>
                <div className="text-[11px] text-zinc-500 font-mono">IndexedDB Engine</div>
              </div>

              <div className="p-6 rounded-3xl bg-dark-900 border border-white/10 space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">Inquiries</div>
                <div className="text-3xl font-display font-extrabold text-accent">{messages.length}</div>
                <div className="text-[11px] text-emerald-400 font-mono">{messages.filter(m => !m.read).length} Unread</div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div 
                onClick={() => setActiveTab('profile')}
                className="group cursor-pointer p-6 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-accent/50 transition-all space-y-3"
              >
                <div className="p-3 rounded-2xl bg-accent/15 text-accent w-fit group-hover:scale-110 transition-transform">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                  Update Portraits & Bio
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Upload your personal studio photos and customize your positioning and VentureLab OS details.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('projects')}
                className="group cursor-pointer p-6 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-accent/50 transition-all space-y-3"
              >
                <div className="p-3 rounded-2xl bg-accent/15 text-accent w-fit group-hover:scale-110 transition-transform">
                  <FolderKanban className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                  Manage Project Case Studies
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Create rich interactive case studies with problem definitions, UX processes and screen mockups.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('designs')}
                className="group cursor-pointer p-6 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-accent/50 transition-all space-y-3"
              >
                <div className="p-3 rounded-2xl bg-accent/15 text-accent w-fit group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                  Upload Creative Designs
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Add new thumbnails, social posts, UI concepts, and brand assets to your live gallery.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Profile */}
        {activeTab === 'profile' && <ProfileManager />}

        {/* Tab 3: Projects */}
        {activeTab === 'projects' && <ProjectManager />}

        {/* Tab 4: Designs */}
        {activeTab === 'designs' && <DesignManager />}

        {/* Tab 5: Videos */}
        {activeTab === 'videos' && <VideoManager />}

        {/* Tab 6: Media Library */}
        {activeTab === 'media' && <MediaLibrary />}

        {/* Tab 7: Messages */}
        {activeTab === 'messages' && <MessagesManager />}

        {/* Tab 8: Settings & Backup */}
        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-3xl">
            
            {/* Change Passcode */}
            <div className="p-8 rounded-3xl bg-dark-900 border border-white/10 space-y-5">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-accent" />
                Change Admin Security Passcode
              </h4>

              <form onSubmit={handleChangePasscode} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-400">New Passcode</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter new security passcode..."
                    value={newPasscode}
                    onChange={(e) => setNewPasscode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs uppercase font-bold rounded-xl shadow-lg shadow-accent/20 flex items-center gap-2"
                >
                  {passcodeChanged ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Passcode Updated!</span>
                    </>
                  ) : (
                    <span>Update Passcode</span>
                  )}
                </button>
              </form>
            </div>

            {/* Data Backup & Export */}
            <div className="p-8 rounded-3xl bg-dark-900 border border-white/10 space-y-5">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-accent" />
                Export & Restore Data Backup
              </h4>
              <p className="text-xs text-zinc-400">
                Download a complete JSON snapshot of all your projects, designs, and profile data, or restore from a previous file.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleExport}
                  className="px-6 py-3 bg-dark-950 hover:bg-dark-850 text-white text-xs uppercase font-bold rounded-xl border border-white/10 hover:border-accent/40 flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Download Backup JSON</span>
                </button>

                <div className="relative">
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <button
                    type="button"
                    className="px-6 py-3 bg-dark-950 hover:bg-dark-850 text-white text-xs uppercase font-bold rounded-xl border border-white/10 hover:border-accent/40 flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4 text-accent" />
                    <span>Restore From JSON</span>
                  </button>
                </div>
              </div>

              {importStatus && (
                <p className="text-xs font-mono text-accent">{importStatus}</p>
              )}
            </div>

            {/* Reset Defaults */}
            <div className="p-8 rounded-3xl bg-dark-900 border border-red-500/20 space-y-4">
              <h4 className="text-base font-bold text-red-400 flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                Reset To Default Portfolio Data
              </h4>
              <p className="text-xs text-zinc-400">
                Resets all projects, designs, and profile content to Murali Dandangi defaults.
              </p>

              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all portfolio data to defaults?')) {
                    resetToDefaults();
                    alert('Portfolio data has been reset to default state.');
                  }
                }}
                className="px-6 py-2.5 bg-red-500/15 hover:bg-red-500 text-red-400 hover:text-white text-xs uppercase font-bold rounded-xl border border-red-500/30 transition-colors"
              >
                Reset To Defaults
              </button>
            </div>

          </div>
        )}

      </main>

    </div>
  );
};
