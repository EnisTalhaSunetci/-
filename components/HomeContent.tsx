"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutTerminal from "@/components/AboutTerminal";
import MissionLog from "@/components/MissionLog";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import SkillsHUD from "@/components/SkillsHUD";
import EventsGallery from "@/components/EventsGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";

// Particle/Fluid backgrounds loaded client-side only
const ModernBackground = dynamic(() => import("@/components/ModernDynamicBackground"), {
  ssr: false,
});

export default function HomeContent() {
  return (
    <main className="relative min-h-screen">
      {/* Mouse follower */}
      <MouseFollower />

      {/* Modern Fluid Background */}
      <ModernBackground />

      {/* Grid texture */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-50" />

      {/* Ambient top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#7C3AED]/8 blur-[120px] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        <div className="max-w-6xl mx-auto px-6"><div className="divider" /></div>
        <AboutTerminal />

        <div className="max-w-6xl mx-auto px-6"><div className="divider" /></div>
        <MissionLog />

        <div className="max-w-6xl mx-auto px-6"><div className="divider" /></div>
        <ProjectsShowcase />

        <div className="max-w-6xl mx-auto px-6"><div className="divider" /></div>
        <SkillsHUD />

        <div className="max-w-6xl mx-auto px-6"><div className="divider" /></div>
        <EventsGallery />

        <div className="max-w-6xl mx-auto px-6"><div className="divider" /></div>
        <ContactSection />

        <Footer />
      </div>
    </main>
  );
}
