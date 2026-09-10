import React, { useEffect } from 'react';
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

const PortfolioApp: React.FC = () => {
  const { currentView, setCurrentView } = usePortfolio();

  // Owner shortcut: Press Ctrl + Shift + A (or Cmd + Shift + A) to open CMS Portal directly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setCurrentView('admin');
        window.location.hash = 'admin';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setCurrentView]);

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
