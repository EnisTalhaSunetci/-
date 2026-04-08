"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSiteData, slugify } from "@/lib/siteData";
import { DEFAULT_SITE_DATA } from "@/lib/defaultData";
import type { SiteData, ExperienceItem, EventItem, ProjectDetail } from "@/lib/defaultData";

const ADMIN_PASSWORD = "enis2025";

export default function AdminPage() {
  const { data, updateData, resetData, exportData, loaded } = useSiteData();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("hero");
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = sessionStorage.getItem("admin_auth");
      if (auth === "true") setAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      alert("Yanlış şifre!");
    }
  };

  const handleSave = (section: string, value: Partial<SiteData>) => {
    updateData(value);
    setSaveMsg(`${section} kaydedildi!`);
    setTimeout(() => setSaveMsg(""), 2000);
  };

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0A0A0F" }}>
        <div className="text-[#9090A8]">Yükleniyor...</div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0A0A0F" }}>
        <div className="max-w-sm w-full mx-4 card p-8">
          <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Admin Paneli</h1>
          <p className="text-sm text-[#9090A8] mb-6">Devam etmek için şifrenizi girin.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Şifre"
            className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#1E1E2A] text-white text-sm focus:border-[#7C3AED] mb-4"
          />
          <button onClick={handleLogin} className="w-full px-4 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  const TABS = [
    { key: "hero", label: "Hero (Ana Sayfa)" },
    { key: "about", label: "Hakkımda & Eğitim" },
    { key: "experiences", label: "Deneyimler" },
    { key: "skills", label: "Yetenekler" },
    { key: "events", label: "Etkinlikler" },
    { key: "projects", label: "Projeler" },
    { key: "contact", label: "İletişim" },
    { key: "export", label: "Dışa Aktar" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <div className="border-b border-[#1E1E2A] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link href="/" className="text-sm font-semibold text-white">Enis Talha Sünetci<span className="text-[#A78BFA]">.</span></Link>
            <span className="text-xs text-[#4A4A60] hidden md:block">/ Admin</span>
          </div>
          <div className="flex items-center gap-3">
            {saveMsg && <span className="text-xs text-green-400 font-medium bg-green-400/10 px-3 py-1 rounded-full">{saveMsg}</span>}
            <Link href="/" className="text-xs text-[#9090A8] hover:text-white px-4 py-2 rounded-lg border border-[#1E1E2A] bg-[#111118]">Siteyi Gör →</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          <div className="space-y-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-all ${
                  activeTab === tab.key ? "bg-[#7C3AED]/15 text-[#A78BFA] border border-[#7C3AED]/30" : "text-[#9090A8] hover:text-white border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="divider my-4 border-[#1E1E2A]" />
            <button onClick={resetData} className="w-full text-left px-4 py-3 text-sm text-red-400/80 hover:bg-red-500/10 rounded-xl">Sıfırla</button>
          </div>

          <div className="card p-6 md:p-8">
            {activeTab === "hero" && <HeroEditor data={data} onSave={(v) => handleSave("Hero", { hero: v })} />}
            {activeTab === "about" && <AboutEditor data={data} onSave={(v) => handleSave("Hakkımda", { about: v })} />}
            {activeTab === "experiences" && <ExperiencesEditor data={data} onSave={(v) => handleSave("Deneyimler", { experiences: v })} />}
            {activeTab === "skills" && <SkillsEditor data={data} onSave={(v) => handleSave("Yetenekler", { skills: v })} />}
            {activeTab === "events" && <EventsEditor data={data} onSave={(v) => handleSave("Etkinlikler", { events: v })} />}
            {activeTab === "projects" && <ProjectsEditor data={data} onSave={(v) => handleSave("Projeler", { projects: v })} />}
            {activeTab === "contact" && <ContactEditor data={data} onSave={(v) => handleSave("İletişim", { contact: v })} />}
            {activeTab === "export" && <ExportPanel onExport={exportData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero Editor ───
function HeroEditor({ data, onSave }: { data: SiteData; onSave: (v: SiteData["hero"]) => void }) {
  const [hero, setHero] = useState(data.hero);

  const updateSlider = (index: number, key: string, value: string) => {
    const newSlider = [...hero.slider];
    newSlider[index] = { ...newSlider[index], [key]: value };
    setHero({ ...hero, slider: newSlider });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-6">Hero Bölümü</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Ad" value={hero.name} onChange={(v) => setHero({ ...hero, name: v })} />
        <Field label="Soyad" value={hero.surname} onChange={(v) => setHero({ ...hero, surname: v })} />
      </div>
      <Field label="Tagline" value={hero.tagline} onChange={(v) => setHero({ ...hero, tagline: v })} />
      <TextArea label="Açıklama" value={hero.description} onChange={(v) => setHero({ ...hero, description: v })} />
      <Field label="Konum" value={hero.location} onChange={(v) => setHero({ ...hero, location: v })} />
      
      <div className="mt-8 pt-6 border-t border-[#1E1E2A]">
        <h3 className="text-lg font-bold text-white mb-4">3D Kaydırmalı Fotoğraflar (Slider)</h3>
        <p className="text-sm text-[#9090A8] mb-4">Anasayfada sağ tarafta dönen büyük görseller ve yazılar. URL&apos;leri /photos/xxxx.jpg şeklinde girebilirsin.</p>
        
        <div className="space-y-6">
          {hero.slider.map((slide, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#111118] border border-[#1E1E2A] space-y-3">
              <h4 className="text-sm font-semibold text-[#A78BFA]">Fotoğraf {i + 1}</h4>
              <ImageUploadField label="Görsel Yolu" value={slide.image} onChange={(v) => updateSlider(i, "image", v)} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field label="Başlık" value={slide.title} onChange={(v) => updateSlider(i, "title", v)} />
                <Field label="Alt Açıklama" value={slide.desc} onChange={(v) => updateSlider(i, "desc", v)} />
                <Field label="Etiket 1" value={slide.tag1} onChange={(v) => updateSlider(i, "tag1", v)} />
                <Field label="Etiket 2" value={slide.tag2} onChange={(v) => updateSlider(i, "tag2", v)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => onSave(hero)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors w-full mt-4">Değişiklikleri Kaydet</button>
    </div>
  );
}

// ─── About Editor ───
function AboutEditor({ data, onSave }: { data: SiteData; onSave: (v: SiteData["about"]) => void }) {
  const [about, setAbout] = useState(data.about);
  
  const addHighlight = () => {
    setAbout({ ...about, highlights: [...about.highlights, { value: "0", label: "Yeni Bilgi" }] });
  };
  const removeHighlight = (idx: number) => {
    setAbout({ ...about, highlights: about.highlights.filter((_, i) => i !== idx) });
  };

  const updateHighlight = (index: number, key: "value" | "label", val: string) => {
    const newHighlights = [...about.highlights];
    newHighlights[index] = { ...newHighlights[index], [key]: val };
    setAbout({ ...about, highlights: newHighlights });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-2">Hakkımda Bölümü</h2>
      <p className="text-sm text-[#9090A8] mb-6">Yazıları ve istatistik kutucuklarını buradan düzenleyebilirsiniz.</p>
      
      <Field label="Başlık" value={about.heading} onChange={(v) => setAbout({ ...about, heading: v })} />
      <TextArea label="Hakkımda Metni" value={about.paragraphs.join("\n\n")} onChange={(v) => setAbout({ ...about, paragraphs: v.split("\n\n") })} />
      
      <div className="pt-4 border-t border-[#1E1E2A]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#A78BFA] uppercase tracking-widest text-[10px]">Öne Çıkan Bilgiler (Kutucuklar)</h3>
          <button onClick={addHighlight} className="px-2 py-1 text-[9px] bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg">+ Yeni Ekle</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {about.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#111118] border border-[#1E1E2A] space-y-3 relative">
              <button onClick={() => removeHighlight(i)} className="absolute top-2 right-2 text-red-500 hover:text-red-400 text-[10px]">&times;</button>
              <Field label={`${i+1}. Etiket`} value={h.label} onChange={(v) => updateHighlight(i, "label", v)} />
              <Field label={`${i+1}. Değer`} value={h.value} onChange={(v) => updateHighlight(i, "value", v)} />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#1E1E2A]">
        <h3 className="text-sm font-bold text-[#A78BFA] mb-4 uppercase tracking-widest text-[10px]">Fotoğraflar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageUploadField label="Ana Fotoğraf" value={about.photo1} onChange={(v) => setAbout({ ...about, photo1: v })} />
          <ImageUploadField label="Küçük Fotoğraf" value={about.photo2} onChange={(v) => setAbout({ ...about, photo2: v })} />
        </div>
      </div>

      <div className="p-4 bg-[#111118] border border-[#1E1E2A] rounded-xl text-xs text-[#9090A8]">Eğitim ve Sertifikalar şu an sadece JSON dosyasından düzenlenmektedir.</div>
      <button onClick={() => onSave(about)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors w-full">Değişiklikleri Kaydet</button>
    </div>
  );
}

// ─── Experiences Editor ───
function ExperiencesEditor({ data, onSave }: { data: SiteData; onSave: (v: ExperienceItem[]) => void }) {
  const [exps, setExps] = useState<ExperienceItem[]>(data.experiences || []);

  const addExp = () => {
    setExps([{ org: "Yeni Kurum", role: "Yeni Rol", period: "2025", type: "İş Deneyimi", description: "", tags: [], active: true }, ...exps]);
  };

  const removeExp = (index: number) => {
    setExps(exps.filter((_, i) => i !== index));
  };

  const updateExp = (index: number, key: keyof ExperienceItem, value: string | boolean | string[]) => {
    const newExps = [...exps];
    newExps[index] = { ...newExps[index], [key]: value };
    setExps(newExps);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Deneyimler</h2>
        <button onClick={addExp} className="px-3 py-1.5 text-xs bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg">+ Yeni Ekle</button>
      </div>

      <div className="space-y-8">
        {exps.map((exp, i) => (
          <div key={i} className="p-5 rounded-2xl bg-[#111118] border border-[#1E1E2A] relative">
            <button onClick={() => removeExp(i)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-xs">Sil</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Field label="Kurum" value={exp.org} onChange={(v) => updateExp(i, "org", v)} />
              <Field label="Rol" value={exp.role} onChange={(v) => updateExp(i, "role", v)} />
              <Field label="Dönem" value={exp.period} onChange={(v) => updateExp(i, "period", v)} />
              <Field label="Tür (Örn: İş Deneyimi)" value={exp.type} onChange={(v) => updateExp(i, "type", v)} />
            </div>
            <TextArea label="Açıklama" value={exp.description} onChange={(v) => updateExp(i, "description", v)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20 border border-white/5">
                <input 
                  type="checkbox" 
                  checked={exp.active} 
                  onChange={(e) => updateExp(i, "active", e.target.checked)}
                  className="w-5 h-5 rounded border-[#1E1E2A] text-[#7C3AED] focus:ring-[#7C3AED]"
                />
                <label className="text-sm text-[#9090A8] font-medium">Şu an Aktif (Timeline&apos;da parlar)</label>
              </div>
              <ArrayField label="Etiketler" items={exp.tags || []} onChange={(v) => updateExp(i, "tags", v)} placeholder="Örn: SolidWorks, Koordinasyon..." />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onSave(exps)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors mt-6">Tüm Deneyim Değişikliklerini Kaydet</button>
    </div>
  );
}

// ─── Events Editor ───
function EventsEditor({ data, onSave }: { data: SiteData; onSave: (v: EventItem[]) => void }) {
  const [events, setEvents] = useState<EventItem[]>(data.events || []);

  const addEvent = () => {
    setEvents([{
      title: "Yeni Etkinlik", org: "Kurum", date: "2025", category: "Etkinlik", 
      description: "", photo: "/photos/placeholder.jpg", slug: `yeni-etkinlik-${Date.now()}`, details: [], achievements: [], gallery: []
    }, ...events]);
  };

  const removeEvent = (index: number) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const updateEvent = (index: number, key: keyof EventItem, value: string | string[]) => {
    const newEvents = [...events];
    newEvents[index] = { ...newEvents[index], [key]: value };
    setEvents(newEvents);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Etkinlikler & Zirveler</h2>
        <button onClick={addEvent} className="px-3 py-1.5 text-xs bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg">+ Yeni Ekle</button>
      </div>

      <div className="space-y-8">
        {events.map((ev, i) => (
          <div key={i} className="p-5 rounded-2xl bg-[#111118] border border-[#1E1E2A] relative">
            <button onClick={() => removeEvent(i)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-xs">Sil</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Field label="Başlık" value={ev.title} onChange={(v) => updateEvent(i, "title", v)} />
              <Field label="URL (Slug) - otomatik düzelir" value={ev.slug} onChange={(v) => updateEvent(i, "slug", slugify(v))} />
              <Field label="Tarih" value={ev.date} onChange={(v) => updateEvent(i, "date", v)} />
              <Field label="Kategori" value={ev.category} onChange={(v) => updateEvent(i, "category", v)} />
              <Field label="Kurum" value={ev.org} onChange={(v) => updateEvent(i, "org", v)} />
              <ImageUploadField label="Ana Fotoğraf Yolu" value={ev.photo} onChange={(v) => updateEvent(i, "photo", v)} />
            </div>
            <TextArea label="Kısa Açıklama (Kart Üstünde Görünür)" value={ev.description} onChange={(v) => updateEvent(i, "description", v)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ArrayField label="Detaylı Kazanımlar" items={ev.achievements || []} onChange={(v) => updateEvent(i, "achievements", v)} placeholder="Örn: 685 takım arasında finalist..." />
              <ArrayField label="Sayfa Detayları (Liste)" items={ev.details || []} onChange={(v) => updateEvent(i, "details", v)} placeholder="Örn: Zirve koordinasyonu yönetildi..." />
            </div>

            <div className="mt-6">
              <ImageArrayField label="Etkinlik Galerisi" items={ev.gallery || []} onChange={(v) => updateEvent(i, "gallery", v)} />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onSave(events)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors mt-6">Tüm Etkinlik Değişikliklerini Kaydet</button>
    </div>
  );
}

// ─── Projects Editor ───

function ProjectsEditor({ data, onSave }: { data: SiteData; onSave: (v: ProjectDetail[]) => void }) {
  const [projects, setProjects] = useState<ProjectDetail[]>(data.projects || []);

  const addProject = () => {
    setProjects([{
      slug: `yeni-proje-${Date.now()}`, title: "Yeni Proje", subtitle: "Alt başlık", category: "Kategori", period: "2025",
      coverPhoto: "/photos/placeholder.jpg", gallery: [], description: [], role: "Rol", org: "Kurum", achievements: [], 
      technologies: [], relatedSlugs: []
    }, ...projects]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, key: keyof ProjectDetail, value: string | string[]) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [key]: value };
    setProjects(newProjects);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Projeler & Çalışmalar</h2>
        <button onClick={addProject} className="px-3 py-1.5 text-xs bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg">+ Yeni Ekle</button>
      </div>

      <div className="space-y-8">
        {projects.map((proj, i) => (
          <div key={i} className="p-5 rounded-2xl bg-[#111118] border border-[#1E1E2A] relative">
            <button onClick={() => removeProject(i)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-xs">Sil</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-6">
              <Field label="Başlık" value={proj.title} onChange={(v) => updateProject(i, "title", v)} />
              <Field label="Alt Başlık" value={proj.subtitle} onChange={(v) => updateProject(i, "subtitle", v)} />
              <Field label="Kategori" value={proj.category} onChange={(v) => updateProject(i, "category", v)} />
              <Field label="URL (Slug) - otomatik düzelir" value={proj.slug} onChange={(v) => updateProject(i, "slug", slugify(v))} />
              <Field label="Kurum" value={proj.org} onChange={(v) => updateProject(i, "org", v)} />
              <Field label="Rol" value={proj.role} onChange={(v) => updateProject(i, "role", v)} />
               <Field label="Dönem" value={proj.period} onChange={(v) => updateProject(i, "period", v)} />
              <ImageUploadField label="Kapak Fotoğrafı (Arka Plan)" value={proj.coverPhoto} onChange={(v) => updateProject(i, "coverPhoto", v)} />
              <ImageUploadField label="PDF Link (Örn: /tez.pdf - Opsiyonel)" value={proj.pdfUrl || ""} onChange={(v) => updateProject(i, "pdfUrl", v)} isPdf />
            </div>
            <div className="mt-4">
              <TextArea label="Detaylı Sayfa Açıklamaları (Paragraflar - Çift satır boşlukla ayır)" value={proj.description.join("\n\n")} onChange={(v) => updateProject(i, "description", v.split("\n\n"))} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ArrayField label="Teknolojiler & Beceriler" items={proj.technologies || []} onChange={(v) => updateProject(i, "technologies", v)} placeholder="Örn: SolidWorks, Python..." />
              <ArrayField label="Başarılar" items={proj.achievements || []} onChange={(v) => updateProject(i, "achievements", v)} placeholder="Örn: Finale kalma başarısı..." />
            </div>

            <div className="mt-6">
              <ImageArrayField label="Proje Galerisi (Ekran Görüntüleri)" items={proj.gallery || []} onChange={(v) => updateProject(i, "gallery", v)} />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onSave(projects)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors mt-6">Tüm Proje Değişikliklerini Kaydet</button>
    </div>
  );
}

// ─── Skills Editor ───
function SkillsEditor({ data, onSave }: { data: SiteData; onSave: (v: SiteData["skills"]) => void }) {
  const [skills, setSkills] = useState(data.skills);

  const updateGroup = (gi: number, key: string, val: string | { name: string; level: number }[]) => {
    const newGroups = [...skills.groups];
    newGroups[gi] = { ...newGroups[gi], [key]: val };
    setSkills({ ...skills, groups: newGroups });
  };

  const updateSkill = (gi: number, si: number, key: "name" | "level", val: string | number) => {
    const newSkills = [...skills.groups[gi].skills];
    newSkills[si] = { ...newSkills[si], [key]: val };
    updateGroup(gi, "skills", newSkills);
  };

  const addSkill = (gi: number) => {
    updateGroup(gi, "skills", [...skills.groups[gi].skills, { name: "Yeni Yetenek", level: 80 }]);
  };

  return (
    <div className="space-y-10">
      <h2 className="text-xl font-bold text-white mb-2">Yetenekler ve Beceriler</h2>
      
      {skills.groups.map((group, gi) => (
        <div key={gi} className="p-6 rounded-2xl bg-[#111118] border border-[#1E1E2A] space-y-6">
          <Field label="Grup Adı" value={group.group} onChange={(v) => updateGroup(gi, "group", v)} />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold text-[#4A4A60] uppercase tracking-widest">Yetenek Listesi</h4>
              <button onClick={() => addSkill(gi)} className="text-[10px] text-[#A78BFA] hover:text-white">+ Ekle</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.skills.map((s, si) => (
                <div key={si} className="p-3 rounded-xl bg-black/20 border border-white/5 flex flex-col gap-2 relative">
                  <button onClick={() => updateGroup(gi, "skills", group.skills.filter((_, i) => i !== si))} className="absolute top-1 right-1 text-red-500 text-xs px-1">×</button>
                  <input type="text" value={s.name} onChange={(e) => updateSkill(gi, si, "name", e.target.value)} className="bg-transparent text-sm text-white border-b border-white/10 focus:border-[#7C3AED] outline-none py-1" />
                  <div className="flex items-center gap-2">
                    <input type="range" min="0" max="100" value={s.level} onChange={(e) => updateSkill(gi, si, "level", parseInt(e.target.value))} className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#7C3AED]" />
                    <span className="text-[10px] font-bold text-[#7C3AED] w-8 text-right font-mono">{s.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="pt-6 border-t border-[#1E1E2A] space-y-6">
        <h3 className="text-lg font-bold text-white">Diller</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.languages.map((l, li) => (
            <div key={li} className="p-4 rounded-xl bg-[#111118] border border-[#1E1E2A] space-y-3 relative">
               <button onClick={() => setSkills({...skills, languages: skills.languages.filter((_, i) => i !== li)})} className="absolute top-2 right-2 text-red-500 text-xs">×</button>
               <Field label="Dil Adı" value={l.name} onChange={(v) => {
                 const newL = [...skills.languages];
                 newL[li] = { ...newL[li], name: v };
                 setSkills({ ...skills, languages: newL });
               }} />
               <Field label="Seviye (Örn: İleri Seviye)" value={l.label} onChange={(v) => {
                 const newL = [...skills.languages];
                 newL[li] = { ...newL[li], label: v };
                 setSkills({ ...skills, languages: newL });
               }} />
               <div className="flex items-center gap-2">
                 <label className="text-[10px] text-[#4A4A60] w-12 shrink-0">Yüzde:</label>
                 <input type="range" min="0" max="100" value={l.level} onChange={(e) => {
                   const newL = [...skills.languages];
                   newL[li] = { ...newL[li], level: parseInt(e.target.value) };
                   setSkills({ ...skills, languages: newL });
                 }} className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#7C3AED]" />
                 <span className="text-[10px] font-bold text-[#7C3AED] w-8 text-right font-mono">{l.level}%</span>
               </div>
            </div>
          ))}
          <button onClick={() => setSkills({...skills, languages: [...skills.languages, { name: "Yeni Dil", label: "Başlangıç", level: 50 }]})} className="p-4 rounded-xl border border-dashed border-[#1E1E2A] text-[#4A4A60] hover:text-white hover:border-[#7C3AED]/50 transition-all">+ Yeni Dil Ekle</button>
        </div>
      </div>

      <div className="pt-6 border-t border-[#1E1E2A]">
        <ArrayField label="Yazılımlar, Araçlar & İlgi Alanları (Tag/Etiket Bulutu)" items={skills.tools} onChange={(v) => setSkills({ ...skills, tools: v })} />
      </div>

      <button onClick={() => onSave(skills)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors">Tüm Yetenek Değişikliklerini Kaydet</button>
    </div>
  );
}

// ─── Contact Editor ───
function ContactEditor({ data, onSave }: { data: SiteData; onSave: (v: SiteData["contact"]) => void }) {
  const [contact, setContact] = useState(data.contact);
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-white mb-6">İletişim Bilgileri</h2>
      <Field label="E-posta" value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} />
      <Field label="Telefon" value={contact.phone} onChange={(v) => setContact({ ...contact, phone: v })} />
      <Field label="LinkedIn URL" value={contact.linkedin} onChange={(v) => setContact({ ...contact, linkedin: v })} />
      <Field label="Instagram URL" value={contact.instagram} onChange={(v) => setContact({ ...contact, instagram: v })} />
      <button onClick={() => onSave(contact)} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors">Değişiklikleri Kaydet</button>
    </div>
  );
}

// ─── Export Panel ───
function ExportPanel({ onExport }: { onExport: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-4">Dışa Aktar</h2>
      <p className="text-sm text-[#9090A8]">
        Tüm verilerinizi JSON olarak indirip kod içerisinde (lib/siteData.ts) değiştirirseniz, sunucuda kalıcı olur.
      </p>
      <button onClick={onExport} className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium transition-colors">Tüm Datayı JSON Olarak İndir</button>
    </div>
  );
}

// ─── Utilities ───
function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs text-[#4A4A60] font-semibold uppercase tracking-wider mb-2">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#1E1E2A] text-white text-sm focus:border-[#7C3AED]" />
    </div>
  );
}
function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs text-[#4A4A60] font-semibold uppercase tracking-wider mb-2">{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#1E1E2A] text-white text-sm focus:border-[#7C3AED] resize-y" />
    </div>
  );
}

export function ImageUploadField({ label, value, onChange, isPdf }: { label: string; value: string; onChange: (v: string) => void; isPdf?: boolean }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const json = await res.json();
      if (json.success) onChange(json.url);
      else alert(json.error || "Yükleme hatası");
    } catch {
      alert("Sunucuya bağlanılamadı.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-xs text-[#4A4A60] font-semibold uppercase tracking-wider mb-2">{label}</label>
      <div className="flex gap-2">
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="flex-1 min-w-[200px] px-4 py-3 rounded-xl bg-black/40 border border-[#1E1E2A] text-white text-sm focus:border-[#7C3AED]" />
        <label className={`flex flex-shrink-0 items-center justify-center px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer ${uploading ? 'bg-[#7C3AED]/50 text-white/50' : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'}`}>
          {uploading ? "..." : "Dosya Seç"}
          <input type="file" accept={isPdf ? ".pdf" : "image/*"} onChange={handleFileChange} className="hidden" disabled={uploading} />
        </label>
      </div>
    </div>
  );
}

function ArrayField({ label, items, onChange, placeholder = "Yeni ekle..." }: { label: string; items: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  const [val, setVal] = useState("");
  const addItem = () => { if (val.trim()) { onChange([...items, val.trim()]); setVal(""); } };
  const removeItem = (idx: number) => { onChange(items.filter((_, i) => i !== idx)); };
  return (
    <div className="space-y-3">
      <label className="block text-xs text-[#4A4A60] font-semibold uppercase tracking-wider">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2 p-3 rounded-xl bg-black/20 border border-white/5 min-h-[50px]">
        {items.length === 0 && <span className="text-[10px] text-[#4A4A60]">Henüz öğe eklenmemiş</span>}
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[11px] text-[#A78BFA]">
            <span>{item}</span>
            <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-300 font-bold ml-1">×</button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addItem())} placeholder={placeholder} className="flex-1 px-4 py-2 rounded-xl bg-black/40 border border-[#1E1E2A] text-white text-xs focus:border-[#7C3AED]" />
        <button onClick={addItem} type="button" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors">Ekle</button>
      </div>
    </div>
  );
}

function ImageArrayField({ label, items, onChange }: { label: string; items: string[]; onChange: (v: string[]) => void }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const json = await res.json();
      if (json.success) onChange([...items, json.url]);
      else alert(json.error);
    } catch {
      alert("Hata");
    } finally {
      setUploading(false);
    }
  };

  const removeItem = (idx: number) => { onChange(items.filter((_, i) => i !== idx)); };

  return (
    <div className="space-y-3">
      <label className="block text-xs text-[#4A4A60] font-semibold uppercase tracking-wider">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-3 rounded-xl bg-black/20 border border-white/5">
        {items.map((item, i) => (
          <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group">
            <img src={item} alt="" className="w-full h-full object-cover" />
            <button onClick={() => removeItem(i)} className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500/80 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">×</button>
          </div>
        ))}
        <label className={`aspect-square rounded-lg border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#7C3AED]/50 transition-colors ${uploading ? 'animate-pulse' : ''}`}>
           <span className="text-xl text-[#4A4A60]">{uploading ? "..." : "+"}</span>
           <span className="text-[10px] text-[#4A4A60] mt-1">{uploading ? "Yükleniyor" : "Yükle"}</span>
           <input type="file" onChange={handleUpload} className="hidden" accept="image/*" disabled={uploading} />
        </label>
      </div>
    </div>
  );
}
