export type DesignCategory =
  | 'All'
  | 'UI/UX Designs'
  | 'Social Media Posts'
  | 'Thumbnails'
  | 'Graphic Designs'
  | 'Branding'
  | 'Other';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'linkedin' | 'behance' | 'instagram' | 'email' | 'github' | 'twitter' | 'dribbble' | 'link';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
  icon: string;
}

export interface Profile {
  name: string;
  titles: string[];
  tagline: string;
  bioParagraphs: string[];
  heroImage: string;
  aboutImage: string;
  email: string;
  location: string;
  availability: string;
  socialLinks: SocialLink[];
  stats: {
    experienceYears: string;
    projectsCompleted: string;
    startupsFounded: string;
    clientSatisfaction: string;
  };
  designPhilosophy: string;
  careerFocus: string;
}

export interface VentureLabStartup {
  name: string;
  subtitle: string;
  role: string;
  founderName: string;
  vision: string;
  description: string;
  pillars: {
    title: string;
    description: string;
    badge: string;
    icon: string;
  }[];
  projectUrl: string;
  status: string;
}

export interface CaseStudyScreen {
  id: string;
  title: string;
  image: string;
  caption: string;
}

export interface CaseStudy {
  overview: string;
  clientOrContext: string;
  timeline: string;
  role: string;
  problem: string;
  goal: string;
  researchInsights: string[];
  uxProcessSteps: string[];
  wireframeNotes: string;
  wireframeImage?: string;
  uiDesignHighlights: string[];
  screens: CaseStudyScreen[];
  designDecisions: string[];
  outcome: string;
  liveUrl?: string;
  figmaUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'UI/UX Design' | 'Mobile App' | 'Web Platform' | 'Branding' | 'Product Design';
  shortDescription: string;
  coverImage: string;
  tools: string[];
  tags: string[];
  year: string;
  featured: boolean;
  published: boolean;
  order: number;
  caseStudy: CaseStudy;
}

export interface DesignItem {
  id: string;
  title: string;
  category: 'UI/UX Designs' | 'Social Media Posts' | 'Thumbnails' | 'Graphic Designs' | 'Branding' | 'Other';
  imageUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | '16:9';
  description?: string;
  tags: string[];
  published: boolean;
  order: number;
  createdAt: string;
  carouselImages?: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration?: string;
  description: string;
  published: boolean;
  order: number;
}

export interface MediaItem {
  id: string;
  name: string;
  type: 'image' | 'video';
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  sentAt: string;
  read: boolean;
}
