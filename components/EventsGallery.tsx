"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSiteData, EventItem } from "@/lib/siteData";

// Custom component for Dynamic Category Badge
function CategoryBadge({ category, colors }: { category: string; colors: Record<string, string> }) {
  const color = colors?.[category] || "#7C3AED";
  return (
    <span 
      className="absolute top-5 right-5 text-[9px] font-black px-3 py-1.5 rounded-xl border uppercase tracking-widest backdrop-blur-md"
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

export default function EventsGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { data: d } = useSiteData();
  if (!d) return null;

  const [filter, setFilter] = useState("Tümü");

  const ALL_CATEGORIES = ["Tümü", ...Array.from(new Set(d.events.map((e: EventItem) => e.category)))];
  const filteredEvents = filter === "Tümü" ? d.events : d.events.filter((e: EventItem) => e.category === filter);

  return (
    <section id="events" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-medium text-[#7C3AED] mb-3"
        >
          Etkinlikler & Fotoğraflar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-8"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Katıldığım etkinlikler
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-[10px] font-black border-2 transition-all duration-300 uppercase tracking-widest ${
                filter === cat
                  ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-[0_10px_25px_rgba(124,58,237,0.4)] scale-105"
                  : "bg-white/5 text-[#9090A8] border-white/5 hover:border-[#7C3AED]/40 hover:text-white backdrop-blur-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event: EventItem, i: number) => {
            return (
              <motion.div
                key={event.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  href={`/events/detay?slug=${event.slug}`}
                  className="block group rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-700 hover:-translate-y-3 h-full shadow-2xl"
                >
                  {/* Photo */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={event.photo}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.2,0,0,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                    {/* Category badge */}
                    <CategoryBadge category={event.category} colors={d.categoryColors} />

                    {/* Year */}
                    <span className="absolute top-5 left-5 text-[9px] text-white/80 font-black bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl uppercase tracking-widest border border-white/10">
                      {event.date}
                    </span>

                    {/* Arrow hold indicator */}
                    <div className="absolute bottom-5 right-5 w-10 h-10 bg-[#7C3AED] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 shadow-[0_5px_15px_rgba(124,58,237,0.4)]">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="text-[10px] font-black text-[#7C3AED] mb-2 uppercase tracking-[0.2em]">{event.org}</div>
                    <h3 className="font-bold text-white text-base mb-2 leading-tight group-hover:text-[#A78BFA] transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      {event.title}
                    </h3>
                    <p className="text-xs text-[#9090A8] leading-relaxed line-clamp-2 font-medium">{event.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
