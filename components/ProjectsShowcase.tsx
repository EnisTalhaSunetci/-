"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSiteData } from "@/lib/siteData";

// Custom component for Dynamic Category Badge
function CategoryBadge({ category, colors }: { category: string; colors: Record<string, string> }) {
  const color = colors?.[category] || "#7C3AED";
  return (
    <span 
      className="absolute top-5 right-5 text-[10px] font-black px-3.5 py-1.5 rounded-xl border-2 uppercase tracking-widest backdrop-blur-md"
      style={{ 
        backgroundColor: `${color}15`, 
        color: color, 
        borderColor: `${color}30` 
      }}
    >
      {category}
    </span>
  );
}

export default function ProjectsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { data } = useSiteData();
  const FEATURED_PROJECTS = data?.projects?.slice(0, 6) || [];

  return (
    <section id="projects" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-medium text-[#7C3AED] mb-3"
        >
          Projeler
        </motion.p>
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Yürüttüğüm projeler
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects/"
              className="text-sm text-[#A78BFA] hover:text-white transition-colors flex items-center gap-1"
            >
              Tümünü gör
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, i) => {
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={`/projects/detay?slug=${project.slug}`}
                  className="block group rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-700 hover:-translate-y-3 h-full shadow-2xl hover:shadow-[#7C3AED]/10"
                >
                  {/* Photo */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.coverPhoto}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.2,0,0,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category badge */}
                    <CategoryBadge category={project.category} colors={data.categoryColors} />

                    {/* Period */}
                    <span className="absolute top-5 left-5 text-[10px] text-white font-black bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-xl uppercase tracking-widest border border-white/10">
                      {project.period}
                    </span>

                    {/* Arrow hover indicator */}
                    <div className="absolute bottom-5 right-5 w-12 h-12 bg-[#7C3AED] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-[0_10px_30px_rgba(124,58,237,0.5)]">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-[10px] font-black text-[#7C3AED] mb-2 uppercase tracking-[0.3em]">{project.org}</div>
                    <h3 className="font-bold text-white text-xl mb-3 leading-tight group-hover:text-[#A78BFA] transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#9090A8] leading-relaxed line-clamp-2 font-medium mb-6">
                      {project.description[0]}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] font-black px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 text-[#9090A8] uppercase tracking-widest group-hover:bg-[#7C3AED]/10 group-hover:text-white transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
