"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSiteData } from "@/lib/siteData";

import type { SiteData } from "@/lib/defaultData";

const getSocialLinks = (d: SiteData) => [
  {
    label: "Email",
    value: d.contact.email,
    href: `mailto:${d.contact.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Enis Talha Sünetci",
    href: d.contact.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@enis_talha",
    href: d.contact.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const { data: d } = useSiteData();
  if (!d) return null;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Local Aurora Background for Contact Section */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 30, 0, -30, 0], y: [0, 40, 0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0, 40, 0], y: [0, -30, 0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-medium text-[#7C3AED] mb-3"
        >
          İletişim
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Birlikte bir şeyler yapalım
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#9090A8] text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Proje iş birliği, kariyer fırsatı veya sadece konuşmak için — ulaşabilirsiniz.
        </motion.p>

        {/* Main email button */}
        <motion.a
          href={`mailto:${d.contact.email}`}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-base font-semibold transition-all duration-200 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)] mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          E-posta gönder
        </motion.a>

        {/* Contact info cards - Modern Glassy Styled */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto text-left"
        >
          {[
            { label: "E-posta", value: d.contact.email },
            { label: "Telefon", value: d.contact.phone },
            { label: "Konum", value: d.contact.location },
            { label: "Adres", value: d.contact.address },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-500 group">
              <div className="text-[10px] text-[#7C3AED] font-black uppercase tracking-[0.3em] mb-3 group-hover:text-[#A78BFA] transition-colors">{item.label}</div>
              <div className="text-sm text-white font-bold tracking-tight">{item.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links + CV */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {getSocialLinks(d).map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#7C3AED]/40 text-[#9090A8] hover:text-white text-sm font-bold transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#7C3AED] group-hover:text-white transition-colors">{item.icon}</div>
              {item.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#7C3AED]/10 backdrop-blur-xl border border-[#7C3AED]/30 hover:border-[#7C3AED] text-white text-sm font-black uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 shadow-[0_10px_20px_rgba(124,58,237,0.2)]"
          >
            <svg className="w-5 h-5 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CV İndir (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
