import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  Profile,
  VentureLabStartup,
  Project,
  DesignItem,
  VideoItem,
  MediaItem,
  ContactMessage,
  DesignCategory
} from '../types/portfolio';
import {
  initialProfile,
  initialStartup,
  initialProjects,
  initialDesigns,
  initialVideos
} from '../data/defaultData';
import {
  saveItem,
  loadItem,
  storeUploadedFile,
  exportFullDatabase,
  importFullDatabase
} from '../utils/storage';

interface PortfolioContextType {
  // Data
  profile: Profile;
  startup: VentureLabStartup;
  projects: Project[];
  designs: DesignItem[];
  videos: VideoItem[];
  media: MediaItem[];
  messages: ContactMessage[];
  
  // UI & Active Navigation State
  activeNavSection: string;
  setActiveNavSection: (section: string) => void;
  activeCategory: DesignCategory;
  setActiveCategory: (category: DesignCategory) => void;
  currentView: 'portfolio' | 'admin';
  setCurrentView: (view: 'portfolio' | 'admin') => void;
  
  // Modals
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  selectedDesign: DesignItem | null;
  setSelectedDesign: (design: DesignItem | null) => void;
  selectedVideo: VideoItem | null;
  setSelectedVideo: (video: VideoItem | null) => void;

  // Admin & Auth
  isAdmin: boolean;
  adminLogin: (passcode: string) => boolean;
  adminLogout: () => void;
  adminPasscode: string;
  updateAdminPasscode: (newPasscode: string) => void;

  // Mutation Handlers
  updateProfile: (updated: Partial<Profile>) => Promise<void>;
  updateStartup: (updated: Partial<VentureLabStartup>) => Promise<void>;
  
  // Project Actions
  saveProject: (project: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  reorderProjects: (orderedProjects: Project[]) => Promise<void>;

  // Design Actions
  saveDesign: (design: DesignItem) => Promise<void>;
  deleteDesign: (id: string) => Promise<void>;
  reorderDesigns: (orderedDesigns: DesignItem[]) => Promise<void>;

  // Video Actions
  saveVideo: (video: VideoItem) => Promise<void>;
  deleteVideo: (id: string) => Promise<void>;

  // Media Management
  uploadFile: (file: File) => Promise<string>;
  deleteMedia: (id: string) => Promise<void>;

  // Contact Messages
  sendMessage: (msg: Omit<ContactMessage, 'id' | 'sentAt' | 'read'>) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
  markMessageRead: (id: string) => Promise<void>;

  // System
  exportBackup: () => Promise<string>;
  importBackup: (jsonStr: string) => Promise<boolean>;
  resetToDefaults: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [startup, setStartup] = useState<VentureLabStartup>(initialStartup);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [designs, setDesigns] = useState<DesignItem[]>(initialDesigns);
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  
  const [activeNavSection, setActiveNavSection] = useState<string>('home');
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('All');
  const [currentView, setCurrentView] = useState<'portfolio' | 'admin'>('portfolio');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminPasscode, setAdminPasscode] = useState<string>('murali2026');

  // Load persistent data on initial mount
  useEffect(() => {
    async function hydrate() {
      const storedProfile = await loadItem<Profile>('profile', initialProfile);
      const storedStartup = await loadItem<VentureLabStartup>('startup', initialStartup);
      const storedProjects = await loadItem<Project[]>('projects', initialProjects);
      const storedDesigns = await loadItem<DesignItem[]>('designs', initialDesigns);
      const storedVideos = await loadItem<VideoItem[]>('videos', initialVideos);
      const storedMedia = await loadItem<MediaItem[]>('media', []);
      const storedMessages = await loadItem<ContactMessage[]>('messages', []);
      const storedPasscode = await loadItem<string>('admin_passcode', 'murali2026');

      setProfile(storedProfile);
      setStartup(storedStartup);
      setProjects(storedProjects);
      setDesigns(storedDesigns);
      setVideos(storedVideos);
      setMedia(storedMedia);
      setMessages(storedMessages);
      setAdminPasscode(storedPasscode);

      // Check session auth
      const authSession = sessionStorage.getItem('murali_admin_auth');
      if (authSession === 'true') {
        setIsAdmin(true);
      }

      // Check URL hash for admin route
      if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
        setCurrentView('admin');
      }
    }

    hydrate();
  }, []);

  // Listen to browser URL changes
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('portfolio');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const adminLogin = (passcode: string): boolean => {
    if (passcode.trim() === adminPasscode.trim()) {
      setIsAdmin(true);
      sessionStorage.setItem('murali_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('murali_admin_auth');
    setCurrentView('portfolio');
  };

  const updateAdminPasscode = async (newPasscode: string) => {
    setAdminPasscode(newPasscode);
    await saveItem('admin_passcode', newPasscode);
  };

  const updateProfile = async (updated: Partial<Profile>) => {
    const newProfile = { ...profile, ...updated };
    setProfile(newProfile);
    await saveItem('profile', newProfile);
  };

  const updateStartup = async (updated: Partial<VentureLabStartup>) => {
    const newStartup = { ...startup, ...updated };
    setStartup(newStartup);
    await saveItem('startup', newStartup);
  };

  const saveProject = async (project: Project) => {
    let updated: Project[];
    const exists = projects.some(p => p.id === project.id);
    if (exists) {
      updated = projects.map(p => (p.id === project.id ? project : p));
    } else {
      updated = [project, ...projects];
    }
    setProjects(updated);
    await saveItem('projects', updated);
  };

  const deleteProject = async (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    await saveItem('projects', updated);
  };

  const reorderProjects = async (orderedProjects: Project[]) => {
    setProjects(orderedProjects);
    await saveItem('projects', orderedProjects);
  };

  const saveDesign = async (design: DesignItem) => {
    let updated: DesignItem[];
    const exists = designs.some(d => d.id === design.id);
    if (exists) {
      updated = designs.map(d => (d.id === design.id ? design : d));
    } else {
      updated = [design, ...designs];
    }
    setDesigns(updated);
    await saveItem('designs', updated);
  };

  const deleteDesign = async (id: string) => {
    const updated = designs.filter(d => d.id !== id);
    setDesigns(updated);
    await saveItem('designs', updated);
  };

  const reorderDesigns = async (orderedDesigns: DesignItem[]) => {
    setDesigns(orderedDesigns);
    await saveItem('designs', orderedDesigns);
  };

  const saveVideo = async (video: VideoItem) => {
    let updated: VideoItem[];
    const exists = videos.some(v => v.id === video.id);
    if (exists) {
      updated = videos.map(v => (v.id === video.id ? video : v));
    } else {
      updated = [video, ...videos];
    }
    setVideos(updated);
    await saveItem('videos', updated);
  };

  const deleteVideo = async (id: string) => {
    const updated = videos.filter(v => v.id !== id);
    setVideos(updated);
    await saveItem('videos', updated);
  };

  const uploadFile = async (file: File): Promise<string> => {
    const { url, size, mimeType, name } = await storeUploadedFile(file);
    const newMedia: MediaItem = {
      id: `media-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      name,
      type: file.type.startsWith('video/') ? 'video' : 'image',
      mimeType,
      size,
      url,
      uploadedAt: new Date().toISOString()
    };
    const updatedMedia = [newMedia, ...media];
    setMedia(updatedMedia);
    await saveItem('media', updatedMedia);
    return url;
  };

  const deleteMedia = async (id: string) => {
    const updatedMedia = media.filter(m => m.id !== id);
    setMedia(updatedMedia);
    await saveItem('media', updatedMedia);
  };

  const sendMessage = async (msg: Omit<ContactMessage, 'id' | 'sentAt' | 'read'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      sentAt: new Date().toISOString(),
      read: false
    };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    await saveItem('messages', updated);
  };

  const deleteMessage = async (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    await saveItem('messages', updated);
  };

  const markMessageRead = async (id: string) => {
    const updated = messages.map(m => (m.id === id ? { ...m, read: true } : m));
    setMessages(updated);
    await saveItem('messages', updated);
  };

  const exportBackup = async (): Promise<string> => {
    return await exportFullDatabase();
  };

  const importBackup = async (jsonStr: string): Promise<boolean> => {
    const success = await importFullDatabase(jsonStr);
    if (success) {
      window.location.reload();
    }
    return success;
  };

  const resetToDefaults = async () => {
    setProfile(initialProfile);
    setStartup(initialStartup);
    setProjects(initialProjects);
    setDesigns(initialDesigns);
    setVideos(initialVideos);
    await saveItem('profile', initialProfile);
    await saveItem('startup', initialStartup);
    await saveItem('projects', initialProjects);
    await saveItem('designs', initialDesigns);
    await saveItem('videos', initialVideos);
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        startup,
        projects,
        designs,
        videos,
        media,
        messages,
        activeNavSection,
        setActiveNavSection,
        activeCategory,
        setActiveCategory,
        currentView,
        setCurrentView,
        selectedProject,
        setSelectedProject,
        selectedDesign,
        setSelectedDesign,
        selectedVideo,
        setSelectedVideo,
        isAdmin,
        adminLogin,
        adminLogout,
        adminPasscode,
        updateAdminPasscode,
        updateProfile,
        updateStartup,
        saveProject,
        deleteProject,
        reorderProjects,
        saveDesign,
        deleteDesign,
        reorderDesigns,
        saveVideo,
        deleteVideo,
        uploadFile,
        deleteMedia,
        sendMessage,
        deleteMessage,
        markMessageRead,
        exportBackup,
        importBackup,
        resetToDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
