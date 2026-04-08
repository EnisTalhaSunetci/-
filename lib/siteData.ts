"use client";
import { useState, useEffect, useCallback } from "react";
import { DEFAULT_SITE_DATA, SiteData, ProjectDetail, ExperienceItem, EventItem } from "./defaultData";

// Re-export for convenience so we don't break existing imports
export { DEFAULT_SITE_DATA };
export type { SiteData, ProjectDetail, ExperienceItem, EventItem };

// Helper to normalize slugs (remove spaces, special chars, lowercase)
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const STORAGE_KEY = "portfolio_admin_data";

export function useSiteData() {
  const [data, setData] = useState<SiteData>(DEFAULT_SITE_DATA);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        let raw = stored;
        // Migration: Replace old role title and GPA
        raw = raw.replace(/İHA Takım Lideri/g, "İHA Mekanik Ekip Üyesi");
        raw = raw.replace(/3\.34/g, "3.37");

        // Path prefixing for GitHub Pages subpath
        const prefix = "/EnisTalhaSunetci";
        let rawWithPrefix = raw;
        if (!raw.includes(prefix + "/photos/")) {
          rawWithPrefix = rawWithPrefix.replace(/"\/photos\//g, `"${prefix}/photos/`);
        }
        if (!raw.includes(prefix + "/cv.pdf")) {
          rawWithPrefix = rawWithPrefix.replace(/"\/cv\.pdf"/g, `"${prefix}/cv.pdf"`);
        }
        if (!raw.includes(prefix + "/logo.png")) {
          rawWithPrefix = rawWithPrefix.replace(/"\/logo\.png"/g, `"${prefix}/logo.png"`);
        }
        const parsed = JSON.parse(rawWithPrefix);
        
        // Repair broken slugs from accidental manual edits
        if (parsed.events) {
          parsed.events = parsed.events.map((ev: EventItem) => ({ ...ev, slug: slugify(ev.slug || "") }));
        }
        if (parsed.projects) {
          parsed.projects = parsed.projects.map((proj: ProjectDetail) => ({ ...proj, slug: slugify(proj.slug || "") }));
        }
        
        // Backward compatibility: If old events in localStorage miss 'slug', auto-fill them
        if (parsed.events && Array.isArray(parsed.events)) {
          parsed.events = parsed.events.map((ev: EventItem, i: number) => {
            if (!ev.slug) ev.slug = `etkinlik-${i}-${Date.now()}`;
            return ev;
          });
        }
        
        setData(deepMerge(DEFAULT_SITE_DATA as unknown as Record<string, unknown>, parsed) as unknown as SiteData);
      }
    } catch {
      // fallback to defaults
    }
    setLoaded(true);
  }, []);

  const updateData = useCallback((partial: Partial<SiteData>) => {
    setData((prev) => {
      const next = deepMerge(prev as unknown as Record<string, unknown>, partial as Record<string, unknown>) as unknown as SiteData;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetData = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setData(DEFAULT_SITE_DATA);
  }, []);

  const exportData = useCallback(() => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "siteData.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [data]);

  return { data, updateData, resetData, exportData, loaded };
}

// Deep merge utility
function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const output = { ...target };
  for (const key of Object.keys(source) as (keyof T)[]) {
    const s = source[key];
    const t = target[key];
    if (s && typeof s === "object" && !Array.isArray(s) && t && typeof t === "object" && !Array.isArray(t)) {
      (output as Record<string, unknown>)[key as string] = deepMerge(
        t as Record<string, unknown>,
        s as Record<string, unknown>
      );
    } else if (s !== undefined) {
      (output as Record<string, unknown>)[key as string] = s;
    }
  }
  return output;
}
