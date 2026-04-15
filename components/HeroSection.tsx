"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { DEFAULT_SITE_DATA, useSiteData } from "@/lib/siteData";

import type { SiteData } from "@/lib/defaultData";

const getSocialLinks = (d: SiteData) => [
  {
    label: "LinkedIn",
    href: d.contact.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: d.contact.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "E-posta",
    href: `mailto:${d.contact.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const { data: d } = useSiteData();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  // Parallax values fixed to state/spring
  const rotateX = useTransform(springY, [-400, 400], [12, -12]);
  const rotateY = useTransform(springX, [-600, 600], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Section-Specific Aurora Background (Drift + Mouse Reaction) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0, -40, 0], y: [0, -30, 0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ 
            x: useTransform(springX, (v) => v * 0.12),
            y: useTransform(springY, (v) => v * 0.12),
            filter: "blur(140px)"
          }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0, 50, 0], y: [0, 40, 0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ 
            x: useTransform(springX, (v) => -v * 0.1),
            y: useTransform(springY, (v) => -v * 0.1),
            filter: "blur(120px)"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/15 rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, 30, 0, -30, 0], y: [0, 50, 0, -50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ 
            x: useTransform(springX, (v) => v * 0.18),
            y: useTransform(springY, (v) => -v * 0.18),
            filter: "blur(130px)"
          }}
          className="absolute top-[20%] right-[15%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center pt-16 pb-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] w-fit"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A78BFA]" />
            </span>
            Müsait
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
          >
            {d.hero.name}
            <br />
            <span className="gradient-text">{d.hero.surname}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-sm text-[#A78BFA] font-medium mb-4 tracking-wide"
          >
            {d.hero.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#9090A8] leading-relaxed mb-8 max-w-md"
          >
            {d.hero.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {d.hero.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:-translate-y-0.5"
            >
              Projelerimi Keşfet
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV İndir
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              İletişime Geç
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-row gap-3 mb-8"
          >
            {getSocialLinks(d).map((item: any) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#111118] border border-[#1E1E2A] text-[#9090A8] hover:text-[#A78BFA] hover:border-[#7C3AED]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right - 3D Coverflow Slider */}
        <motion.div
          className="relative flex justify-center items-center h-full w-full perspective-[1200px] mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
        >
          <HeroSlider rotateX={rotateX} rotateY={rotateY} />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#9090A8] font-semibold">Keşfet</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#7C3AED] to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── 3D Fold Carousel Slider ───

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function HeroSlider({ rotateX, rotateY }: { rotateX: any; rotateY: any }) {
  const { data } = useSiteData();
  const SLIDER_DATA = data?.hero?.slider || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDER_DATA.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDER_DATA.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [SLIDER_DATA.length]);

  if (SLIDER_DATA.length === 0) return null;

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-[2000px] select-none">
      {SLIDER_DATA.map((slide, i) => {
        let offset = i - index;
        const len = SLIDER_DATA.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;

        const isCenter = i === index;
        const isFar = Math.abs(offset) > 1;

        return (
          <motion.div
            key={i}
            initial={false}
            animate={{
              x: `calc(-50% + ${offset * 260}px)`, // Half-behind spacing
              y: "-50%",
              scale: isCenter ? 1.05 : 0.6, // Significant scale difference
              z: isCenter ? 0 : -400, // Pull side cards deep behind
              rotateY: offset * 68, // Sharp 3D Fold angle
              opacity: isFar ? 0 : isCenter ? 1 : 0.35, // Transparency
              filter: isCenter ? "blur(0px) brightness(1.1)" : "blur(6px) brightness(0.5)",
            }}
            transition={{
              type: "spring",
              stiffness: 100, // Weightier, more luxurious transition
              damping: 20,
            }}
            style={{
              rotateX: isCenter ? rotateX : 0, // Apply mouse tilt via Style
              rotateY: isCenter ? rotateY : undefined, // Center gets mouse tilt
              zIndex: isCenter ? 50 : 10 - Math.abs(offset), 
              transformStyle: "preserve-3d",
            }}
            onClick={() => setIndex(i)}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 lg:w-[450px] aspect-square rounded-[3rem] overflow-hidden cursor-pointer bg-black/40 border border-white/20 group shadow-[0_0_60px_rgba(0,0,0,0.6)]`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-all duration-700 brightness-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={isCenter}
              />
              
              {/* Overlay logic - Stronger contrast for clarity */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent transition-opacity duration-700 ${isCenter ? 'opacity-100' : 'opacity-0'}`} />
              
              {isCenter && (
                <motion.div
                  className="absolute bottom-10 left-10 right-10 z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full border border-white/30 bg-white/20 text-[10px] font-black text-white uppercase tracking-[0.2em] backdrop-blur-md">
                      {slide.tag1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#7C3AED] text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-white/20">
                      {slide.tag2}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                    {slide.title}
                  </h3>
                  <p className="text-sm text-white font-black leading-relaxed max-w-[90%] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                    {slide.desc}
                  </p>
                </motion.div>
              )}

              {/* Glossy reflection shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-30 pointer-events-none" />
            </div>
          </motion.div>
        );
      })}

      {/* Modern Slim Indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDER_DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-700 ease-out h-1 rounded-full ${i === index ? 'w-10 bg-[#7C3AED]' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
