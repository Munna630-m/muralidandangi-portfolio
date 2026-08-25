import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { AboutMe } from './components/about/AboutMe';
import { Expertise } from './components/expertise/Expertise';
import { SelectedWork } from './components/projects/SelectedWork';
import { VentureLabSpotlight } from './components/startup/VentureLabSpotlight';
import { DesignsGallery } from './components/designs/DesignsGallery';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { AdminPortal } from './components/admin/AdminPortal';
import { Shield } from 'lucide-react';

const PortfolioApp: React.FC = () => {
  const { currentView, setCurrentView } = usePortfolio();

  if (currentView === 'admin') {
    return <AdminPortal />;
  }

  return (
    <div className="min-h-screen bg-dark-950 text-zinc-100 selection:bg-accent selection:text-white flex flex-col justify-between">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AboutMe />
        <Expertise />
        <SelectedWork />
        <VentureLabSpotlight />
        <DesignsGallery />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Admin & Quick CMS Badge */}
      <button
        onClick={() => {
          setCurrentView('admin');
          window.location.hash = 'admin';
        }}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-dark-900/90 hover:bg-accent text-zinc-300 hover:text-white border border-white/10 hover:border-accent shadow-2xl backdrop-blur-xl transition-all duration-300 group flex items-center gap-2"
        title="Admin Content Management Portal"
      >
        <Shield className="w-5 h-5 text-accent group-hover:text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap pr-1">
          CMS Admin
        </span>
      </button>
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
