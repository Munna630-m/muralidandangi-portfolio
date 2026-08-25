import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  User, 
  Upload, 
  Save, 
  Check, 
  Rocket, 
  Image as ImageIcon
} from 'lucide-react';

export const ProfileManager: React.FC = () => {
  const { profile, updateProfile, startup, updateStartup, uploadFile } = usePortfolio();
  
  const [profileForm, setProfileForm] = useState(profile);
  const [startupForm, setStartupForm] = useState(startup);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingAbout, setUploadingAbout] = useState(false);

  const handleHeroPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingHero(true);
    try {
      const url = await uploadFile(file);
      setProfileForm((prev) => ({ ...prev, heroImage: url }));
      await updateProfile({ heroImage: url });
    } catch (err) {
      console.error(err);
      alert('Photo upload failed');
    } finally {
      setUploadingHero(false);
    }
  };

  const handleAboutPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingAbout(true);
    try {
      const url = await uploadFile(file);
      setProfileForm((prev) => ({ ...prev, aboutImage: url }));
      await updateProfile({ aboutImage: url });
    } catch (err) {
      console.error(err);
      alert('Photo upload failed');
    } finally {
      setUploadingAbout(false);
    }
  };

  const handleSaveAll = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(profileForm);
    await updateStartup(startupForm);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSaveAll} className="space-y-10">
      
      {/* Top Banner Save Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-dark-900 border border-white/10">
        <div>
          <h3 className="text-lg font-bold text-white">Profile & Startup Configuration</h3>
          <p className="text-xs text-zinc-400">Update personal identity, photo portraits, and VentureLab OS details.</p>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-bold rounded-2xl transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
        >
          {savedSuccess ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Saved Successfully!</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

      {/* 1. Portrait Photos Section */}
      <div className="p-8 rounded-3xl bg-dark-900 border border-white/10 space-y-6">
        <div className="space-y-1 border-b border-white/10 pb-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-accent" />
            Personal Portraits (Hero & About Me)
          </h4>
          <p className="text-xs text-zinc-400">Upload your own real studio portraits to replace default assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Hero Portrait */}
          <div className="space-y-4 p-5 rounded-2xl bg-dark-950 border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Hero Section Portrait</span>
              <span className="text-[10px] font-mono text-accent">Studio Portrait</span>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-900 border border-white/10">
              <img
                src={profileForm.heroImage}
                alt="Hero Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleHeroPhotoUpload}
                disabled={uploadingHero}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <button
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-dark-900 hover:bg-dark-850 text-white text-xs uppercase tracking-wider font-bold border border-white/10 hover:border-accent/50 transition-all flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4 text-accent" />
                <span>{uploadingHero ? 'Uploading Photo...' : 'Upload My Hero Photo'}</span>
              </button>
            </div>
          </div>

          {/* About Portrait */}
          <div className="space-y-4 p-5 rounded-2xl bg-dark-950 border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">About Me Section Portrait</span>
              <span className="text-[10px] font-mono text-accent">Full / Seated Portrait</span>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-900 border border-white/10">
              <img
                src={profileForm.aboutImage}
                alt="About Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleAboutPhotoUpload}
                disabled={uploadingAbout}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <button
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-dark-900 hover:bg-dark-850 text-white text-xs uppercase tracking-wider font-bold border border-white/10 hover:border-accent/50 transition-all flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4 text-accent" />
                <span>{uploadingAbout ? 'Uploading Photo...' : 'Upload My About Photo'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Personal Information */}
      <div className="p-8 rounded-3xl bg-dark-900 border border-white/10 space-y-6">
        <div className="space-y-1 border-b border-white/10 pb-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-accent" />
            Identity & Bio Information
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Full Name</label>
            <input
              type="text"
              value={profileForm.name}
              onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Contact Email</label>
            <input
              type="email"
              value={profileForm.email}
              onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Main Tagline / Supporting Statement</label>
            <input
              type="text"
              value={profileForm.tagline}
              onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Location & Availability Text</label>
            <input
              type="text"
              value={profileForm.availability}
              onChange={(e) => setProfileForm({ ...profileForm, availability: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Design Philosophy</label>
            <textarea
              rows={3}
              value={profileForm.designPhilosophy}
              onChange={(e) => setProfileForm({ ...profileForm, designPhilosophy: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Career Focus</label>
            <input
              type="text"
              value={profileForm.careerFocus}
              onChange={(e) => setProfileForm({ ...profileForm, careerFocus: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>
        </div>
      </div>

      {/* 3. Startup Configuration (VentureLab OS) */}
      <div className="p-8 rounded-3xl bg-dark-900 border border-white/10 space-y-6">
        <div className="space-y-1 border-b border-white/10 pb-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Rocket className="w-4 h-4 text-accent" />
            VentureLab OS Startup Details
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Startup Name</label>
            <input
              type="text"
              value={startupForm.name}
              onChange={(e) => setStartupForm({ ...startupForm, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Subtitle</label>
            <input
              type="text"
              value={startupForm.subtitle}
              onChange={(e) => setStartupForm({ ...startupForm, subtitle: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Vision Statement</label>
            <input
              type="text"
              value={startupForm.vision}
              onChange={(e) => setStartupForm({ ...startupForm, vision: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Startup Description</label>
            <textarea
              rows={3}
              value={startupForm.description}
              onChange={(e) => setStartupForm({ ...startupForm, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Project / Web Link</label>
            <input
              type="text"
              value={startupForm.projectUrl}
              onChange={(e) => setStartupForm({ ...startupForm, projectUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Status Badge</label>
            <input
              type="text"
              value={startupForm.status}
              onChange={(e) => setStartupForm({ ...startupForm, status: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:border-accent outline-none"
            />
          </div>
        </div>
      </div>

    </form>
  );
};
