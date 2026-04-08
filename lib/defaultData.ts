
// ====================================================================
// CENTRAL DATA STORE — Edit this file to update content permanently.
// Admin panel overrides are stored in localStorage for live preview.
// To make changes permanent: edit this file → push to GitHub → redeploy.
// ====================================================================

export interface SiteData {
  hero: {
    name: string;
    surname: string;
    tagline: string;
    description: string;
    tags: string[];
    available: boolean;
    availableText: string;
    location: string;
    slider: { image: string; title: string; desc: string; tag1: string; tag2: string; }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    highlights: { value: string; label: string }[];
    education: { school: string; department: string; period: string; gpa?: string; note?: string }[];
    certificates: string[];
    photo1: string;
    photo2: string;
  };
  experiences: ExperienceItem[];
  skills: {
    groups: { group: string; skills: { name: string; level: number }[] }[];
    languages: { name: string; label: string; level: number }[];
    tools: string[];
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    instagram: string;
    github: string;
    location: string;
    address: string;
  };
  seo: {
    homepage: { title: string; description: string; keywords: string };
    projects: { title: string; description: string; keywords: string };
    events: { title: string; description: string; keywords: string };
  };
  categoryColors: { [key: string]: string };
  events: EventItem[];
  projects: ProjectDetail[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  coverPhoto: string;
  gallery: string[];
  description: string[];
  role: string;
  org: string;
  achievements: string[];
  technologies: string[];
  pdfUrl?: string; // Optional PDF link
  relatedSlugs?: string[];
}

export interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  type: string;
  description: string;
  tags: string[];
  active: boolean;
}

export interface EventItem {
  title: string;
  org: string;
  date: string;
  description: string;
  photo: string;
  category: string;
  slug: string;
  details: string[];
  achievements: string[];
  gallery: string[];
}

export const DEFAULT_SITE_DATA: SiteData = {
  "hero": {
    "name": "Enis Talha",
    "surname": "Sünetci",
    "tagline": "İşletme 4. Sınıf Öğrencisi - Maltepe / İstanbul",
    "description": "Havacılık, savunma sanayii ve yapay zeka kesişiminde çalışıyorum. Projeleri koordine ediyor, takımları yönetiyor ve stratejik çözümler üretiyorum. Farklı disiplinlere olan ilgim ve yeni bilgiler edinme tutkum, beni her alanda gelişmeye itiyor.",
    "tags": [
      "AI Proje Koordinatörü",
      "İHA Mekanik Ekip Üyesi",
      "TEKNOFEST",
      "Stratejik Düşünür",
      "Havacılık & Uzay",
      "Savunma Sanayii"
    ],
    "available": true,
    "availableText": "Müsait",
    "location": "Kocaeli / İstanbul, Türkiye",
    "slider": [
      {
        "image": "/photos/media_1775556659498.jpg",
        "title": "Yönetim Kurulu Bşk.",
        "desc": "Havacılık ve Uzay Zirvesi 2025",
        "tag1": "GTÜ HUK",
        "tag2": "Kocaeli / Gebze"
      },
      {
        "image": "/photos/media_1775557207457.jpg",
        "title": "Mekanik Ekip Üyesi",
        "desc": "Uluslararası İHA Yarışması 2024",
        "tag1": "TEKNOFEST Finali ",
        "tag2": "Kahramanmaraş / Türkoğlu"
      },
      {
        "image": "/photos/media_1775556881581.jpeg",
        "title": "Üniversite Başkanı",
        "desc": "Türk Dünyası Gençlik Konseyi 2026",
        "tag1": "Resmi TDT Ziyareti",
        "tag2": "Fatih / İstanbul"
      }
    ]
  },
  "about": {
    "heading": "Hayallerimi projeye, projeleri gerçeğe dönüştürüyorum.",
    "paragraphs": [
      "Gebze Teknik Üniversitesi İşletme bölümü 4. sınıf öğrencisiyim (GPA: 3.37, %30 İngilizce). Farklı disiplinlere duyduğum ilgi ve yeni bilgiler edinme tutkum, işletme bölümünü tercih etmemi sağladı.",
      "Yönetim alanındaki güçlü yönlerim ve teknik konulara olan merakım sayesinde, hem stratejik hem operasyonel becerilerimi geliştirmeyi hedefliyorum. Havacılık, uzay, teknoloji ve savunma sanayi alanlarına olan ilgim doğrultusunda; bu sektörlerde liderlik pozisyonlarında görev almak ve uzun vadede sektöre değer katan projeler üretmek önemli kariyer hedeflerim arasında yer alıyor.",
      "Sadece teorik bilgiyle yetinmeyip, sahada uygulama yapmayı ve üretim süreçlerinde aktif rol almayı da önemseyen bir yaklaşım benimsiyorum. Üniversite hayatım boyunca görev aldığım kulüplerde özellikle havacılık ve uzay alanında birçok etkinlik, fuar ve yarışmada aktif görev aldım.",
      "50+ salon etkinliği, gezi, fuar ve yarışma ile organizasyon yönetimi, takım koordinasyonu ve kriz çözme konularında deneyim kazandım. Yenilikçi, takım ruhuna önem veren bir kişiliğe sahibim. Çözüm odaklı fikirler üretmek ve kurum kültürüne uyum sağlamak en güçlü yanlarım."
    ],
    "highlights": [
      {
        "value": "4+",
        "label": "Yıl deneyim"
      },
      {
        "value": "50+",
        "label": "Etkinlik & organizasyon"
      },
      {
        "value": "685",
        "label": "Takım arası final (TEKNOFEST)"
      },
      {
        "value": "3.37",
        "label": "GPA"
      }
    ],
    "education": [
      {
        "school": "Gebze Teknik Üniversitesi",
        "department": "İşletme (Lisans %30 İngilizce)",
        "period": "2021 – Devam ediyor",
        "gpa": "3.37",
        "note": "4. Sınıf · Hazırlık sınıfı (İngilizce) 2021-2022"
      },
      {
        "school": "Şehit Mustafa Kaymakçı AİHL",
        "department": "Fen ve Sosyal Bilimler Proje Lisesi",
        "period": "2016 – 2020",
        "gpa": "85"
      }
    ],
    "certificates": [
      "Oryantasyon Belgesi – Milli Eğitim Bakanlığı",
      "Uluslararası İnsansız Hava Araçları Yarışması Finalist Sertifikası – TEKNOFEST",
      "Uçuş Sertifikası – Sivrihisar Havacılık Merkezi",
      "B Sınıfı Sürücü Belgesi – T.C. İçişleri Bakanlığı"
    ],
    "photo1": "/photos/media_1775557304655.JPG",
    "photo2": "/photos/media__1775395402232.jpg"
  },
  "experiences": [
    {
      "org": "İLGE Yapay Zeka",
      "role": "Proje Koordinatörü",
      "period": "2026",
      "type": "İş Deneyimi",
      "description": "İlge AI bünyesinde Yapay Zeka Proje Koordinatörü olarak uzun dönem stajımı gerçekleştirmekteyim. TÜBİTAK proje sunumları ve teknik dokümantasyon hazırlığı, Gözle serisi (Gözle Aİ, MIL, P, AIR, TD, T) görüntü işleme çözümlerinin koordinasyonu ve iş geliştirme süreçleri, kurumsal Linkedin içerik yönetimi ve dijital pazarlama stratejileri, şirket web sitesi geliştirme, yapay zeka tabanlı kalite kontrol sistemleri proje yönetimi, teknik ekipler ve paydaşlar arası operasyonel köprü kurma, kurumsal etkinlik organizasyonu ve marka temsilciliği.",
      "tags": [],
      "active": true
    },
    {
      "period": "2025 – Devam ediyor",
      "org": "İŞKUR",
      "role": "Gebze Teknik Üniversitesi Proje Takımları Koordinatörlüğü",
      "type": "İş Deneyimi",
      "description": "Gebze Teknik Üniversitesi bünyesindeki proje takımlarının kurumsal temsil, sponsorluk yönetimi ve stratejik iletişim süreçlerini koordine ettim. İŞKUR kapsamında yürüttüğüm bu görevde, 20'den fazla teknik takımın (İHA, Robotik, Otonom Araç vb.) özel sektörle olan sponsorluk ilişkilerini yönettim ve kurumsal kimlik standartlarına uygun tanıtım faaliyetlerini yürüttüm. TEKNOFEST ve benzeri ulusal/uluslararası organizasyonlarda üniversite takımlarının operasyonel süreçlerini ve temsil faaliyetlerini planlayarak paydaşlar arası iletişim köprüsü kurdum.",
      "tags": [
        "Koordinasyon",
        "Sponsorluk",
        "Temsil"
      ],
      "active": false
    },
    {
      "period": "2024 – 2025",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "role": "Yönetim Kurulu Başkanı",
      "type": "Kulüp Liderliği",
      "description": "GTÜ Havacılık ve Uzay Kulübü'nün Yönetim Kurulu Başkanı olarak çeşitli salon etkinliklerinde organizasyon görevleri üstlendim. Kulübün sosyal medya stratejisi ve içerik yönetimini yürüttüm. Tanıtım günleri ve fuarlarda temsil görevleri yürüttüm. Kulüp internet sitesinin moderasyonunu sağladım. Sponsorluk faaliyetlerinde rol alarak bütçeleme, finansal planlama ve firma iletişimi konularında deneyim kazandım.",
      "tags": [
        "Liderlik",
        "Organizasyon",
        "Havacılık",
        "Sponsorluk",
        "Medya Yönetimi"
      ],
      "active": false
    },
    {
      "period": "2023 – 2024",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "role": "Yönetim Kurulu Başkan Yardımcısı",
      "type": "Kulüp Yönetimi",
      "description": "Başkan yardımcısı olarak etkinliklerin planlanması, koordinasyon ve iletişim süreçlerinde aktif rol aldım.",
      "tags": [
        "Koordinasyon",
        "Planlama"
      ],
      "active": false
    },
    {
      "period": "2025 – Devam ediyor",
      "org": "Türk Dünyası Gençlik Vakfı",
      "role": "Gebze Teknik Üniversitesi Başkanı & Türk Dünyası Gençlik Topluluğu Kurucu YK Başkanı",
      "type": "Diplomasi",
      "description": "Türk Devletler Teşkilatı'nın resmi gençlik platformu olan Türk Dünyası Gençlik Vakfı'nda Üniversite Temsilcisi ve GTÜ Türk Dünyası Gençlik Topluluğu kurucu başkanıyım. Topluluğun kuruluş sürecini baştan sona yürüttüm; vizyon, organizasyon yapısı ve faaliyet planlarını oluşturdum. Türk dünyasına yönelik sosyal, kültürel ve akademik etkinliklerin hayata geçirilmesi için liderlik ve koordinasyon görevlerini üstlenmekteyim.",
      "tags": [
        "Diplomasi",
        "Uluslararası İlişkiler",
        "Liderlik",
        "Kuruculuk"
      ],
      "active": true
    },
    {
      "period": "2023 – 2024",
      "org": "Türk Kızılayı – Maltepe",
      "role": "Stajyer",
      "type": "Gönüllülük",
      "description": "Sosyal sorumluluk projelerinin planlanması ve yürütülmesine destek sağladım, yardım faaliyetleri ve saha organizasyonlarında aktif rol üstlendim. Etkinlik koordinasyonu, ekip çalışması ve kurumsal iletişim alanlarında pratik deneyim kazandım.",
      "tags": [
        "Sosyal Sorumluluk",
        "Koordinasyon",
        "Saha Çalışması"
      ],
      "active": false
    },
    {
      "period": "2023 – 2024",
      "org": "GTU-AQUA İHA Takımı",
      "role": "Mekanik Ekibi Üyesi & Takım Kaptanı",
      "type": "Yarışma",
      "description": "SolidWorks ile parça tasarımı ve üretim süreçlerinde aktif görev aldım. Raporlama, sponsorluk ve tanıtım faaliyetlerinde bulundum. Teknofest 2024 İHA Yarışması'nda 685 takım arasından finale kalan ilk 44 takım içinde yer aldık.",
      "tags": [
        "İHA",
        "SolidWorks",
        "TEKNOFEST",
        "Mekanik Tasarım"
      ],
      "active": false
    },
    {
      "period": "2021 – 2022",
      "org": "GTU-AVES İHA Takımı",
      "role": "Sosyal Medya ve Sponsorluk Görevlisi",
      "type": "Yarışma",
      "description": "Amerika Birleşik Devletleri'nde düzenlenen SUAS yarışması sürecinde takımın sponsorluk ve sosyal medya sorumlusu olarak rol aldım. Uluslararası alanda rapor aşamasını geçen 77 takımdan biri olarak yarışmaya kabul aldım. Yarışma ile 10 yıllık ABD vizesi elde ettim.",
      "tags": [
        "SUAS",
        "Uluslararası",
        "Sponsorluk",
        "ABD"
      ],
      "active": false
    },
    {
      "period": "2022",
      "org": "SÜTŞEF",
      "role": "Satış ve Finans",
      "type": "İş Deneyimi",
      "description": "Kasa işlemleri, satış sunumu ve ürün düzenlemesinde görev aldım. Temel finansal süreçler ve müşteri iletişimi konusunda deneyim kazandım.",
      "tags": [
        "Satış",
        "Finans",
        "Müşteri İlişkileri"
      ],
      "active": false
    },
    {
      "period": "2021",
      "org": "TÜGVA",
      "role": "Yaz Kampı Eğitmeni",
      "type": "Gönüllülük",
      "description": "TÜGVA Yaz Kampı kapsamında ortaokul düzeyindeki öğrencilere yönelik meslek tanıtımı ve kariyer planlama eğitimleri verdim. Birden fazla sınıfta yürüttüğüm eğitmenlik süreciyle topluluk önünde konuşma, etkili sunum teknikleri ve pedagojik iletişim yetkinliklerimi güçlendirdim. Eğitim materyallerinin hazırlanması, sınıf yönetimi ve genç yeteneklerin keşfedilmesi süreçlerinde aktif liderlik üstlenerek profesyonel gelişimime katkı sağladım.",
      "tags": [
        "Eğitim",
        "Sunum",
        "Liderlik"
      ],
      "active": false
    }
  ],
  "skills": {
    "groups": [
      {
        "group": "Teknik Beceriler",
        "skills": [
          {
            "name": "SolidWorks",
            "level": 82
          },
          {
            "name": "MS Office",
            "level": 85
          },
          {
            "name": "Python",
            "level": 75
          },
          {
            "name": "Arduino",
            "level": 78
          },
          {
            "name": "SPSS",
            "level": 65
          }
        ]
      },
      {
        "group": "Tasarım & Medya",
        "skills": [
          {
            "name": "Adobe Photoshop & Premiere",
            "level": 80
          },
          {
            "name": "Canva",
            "level": 92
          },
          {
            "name": "Sosyal Medya İçerik Üretimi",
            "level": 90
          }
        ]
      },
      {
        "group": "Yönetim & Liderlik",
        "skills": [
          {
            "name": "Proje Yönetimi",
            "level": 95
          },
          {
            "name": "Takım Liderliği",
            "level": 92
          },
          {
            "name": "Organizasyon & Planlama",
            "level": 95
          },
          {
            "name": "Etkili İletişim",
            "level": 93
          },
          {
            "name": "MS Office",
            "level": 95
          }
        ]
      }
    ],
    "languages": [
      {
        "name": "Türkçe",
        "label": "Anadil",
        "level": 100
      },
      {
        "name": "İngilizce",
        "label": "B1 – Orta",
        "level": 60
      },
      {
        "name": "Rusça",
        "label": "A1 – Başlangıç",
        "level": 20
      },
      {
        "name": "Arapça",
        "label": "A1 – Başlangıç",
        "level": 20
      }
    ],
    "tools": [
      "Yapay Zeka",
      "İHA Sistemleri",
      "Drone Yarışması",
      "AR-GE",
      "Stratejik Planlama",
      "Etkinlik Yönetimi",
      "Diplomasi",
      "Araştırma",
      "Sosyal Medya Yönetimi",
      "Sponsorluk",
      "Kurumsal İletişim",
      "Problem Çözme",
      "Kriz Yönetimi",
      "Bütçeleme"
    ]
  },
  "contact": {
    "email": "sunetcienistalha@gmail.com",
    "phone": "+90 535 596 34 31",
    "linkedin": "https://www.linkedin.com/in/enis-talha-s%C3%BCnetci-5854a5221/",
    "instagram": "https://www.instagram.com/enis_talha/",
    "github": "",
    "location": "Kocaeli / İstanbul, Türkiye",
    "address": "Altayeşme Mah. Birsen Sok. no:17/19 daire:12 Maltepe/İstanbul"
  },
  "seo": {
    "homepage": {
      "title": "Enis Talha Sünetci | AI Proje Koordinatörü & İHA Uzmanı",
      "description": "Enis Talha Sünetci'nin kişisel portfolyosu. Havacılık, savunma sanayii ve yapay zeka alanındaki projeler, deneyimler ve etkinlikler.",
      "keywords": "Enis Talha Sünetci, Havacılık, İHA, Yapay Zeka, GTÜ, Proje Koordinatörü"
    },
    "projects": {
      "title": "Projelerimiz | Enis Talha Sünetci",
      "description": "Savunma sanayinden teknolojiye, en önemli projelerimiz ve başarılarımız.",
      "keywords": "Projeler, TEKNOFEST, İHA, Ar-Ge"
    },
    "events": {
      "title": "Etkinlikler & Paylaşımlar | Enis Talha Sünetci",
      "description": "Katıldığımız zirveler, fuarlar ve sektörel etkileşimler.",
      "keywords": "Etkinlikler, Fuar, Zirve, Diplomasi"
    }
  },
  "categoryColors": {
    "Diplomasi": "#3b82f6",
    "Ziyaret": "#ef4444",
    "Zirve": "#10b981",
    "Etkinlik": "#a855f7",
    "Yarışma": "#f59e0b",
    "Fuar": "#06b6d4",
    "Gönüllülük": "#ec4899",
    "İş Deneyimi": "#6366f1",
    "Proje": "#8b5cf6",
    "Eğitim": "#22c55e",
    "Zirve Genel Koordinatörü": "#3b82f6",
    "Diplomasi & Teknoloji": "#f43f5e"
  },
  "events": [
    {
      "title": "Kıbrıs Sorunundaki Gelişmeler Programı",
      "org": "Türk Dünyası Gençlik Vakfı",
      "date": "2025",
      "category": "Diplomasi",
      "description": "Kıbrıs sorununa ilişkin güncel gelişmelerin ele alındığı program, Türk Dünyası Gençlik Vakfı tarafından gerçekleştirilmiştir. Programa, Kuzey Kıbrıs Türk Cumhuriyeti Meclis Başkanı ve Türkiye Cumhuriyeti Büyükelçisi katılım sağlamış; diplomasi, uluslararası ilişkiler ve bölgesel gelişmeler çok boyutlu şekilde değerlendirilmiştir.\n\nBen de Gebze Teknik Üniversitesi adına kulüp başkanı olarak programa katılım sağlayarak, Türk dünyası perspektifinde yürütülen bu önemli diplomatik ve entelektüel etkileşim sürecinin bir parçası oldum.",
      "photo": "/photos/media_1775574986052.jpeg",
      "slug": "yeni-etkinlik-1775574854095",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775574989734.jpeg",
        "/photos/media_1775574994151.jpeg",
        "/photos/media_1775574994151.jpeg",
        "/photos/media_1775575003769.jpeg",
        "/photos/media_1775575006272.jpeg"
      ]
    },
    {
      "title": "TÜBİTAK Uzay Ziyareti",
      "org": "Kurum",
      "date": "2024",
      "category": "Ziyaret",
      "description": "TÜBİTAK UZAY’a gerçekleştirilen teknik ziyarette, Türkiye’nin uydu ve uzay teknolojileri alanındaki çalışmaları yerinde incelenmiştir. Ziyaret kapsamında yürütülen projeler, Ar-Ge süreçleri ve milli uzay vizyonu hakkında detaylı bilgiler edinilmiştir.\n\nBu süreçte, ileri teknoloji üretimi ve uzay ekosistemine dair stratejik bakış açımı geliştirme fırsatı buldum.",
      "photo": "/photos/media_1775574193178.jpeg",
      "slug": "yeni-etkinlik-1775572990466",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775574204026.jpeg",
        "/photos/media_1775574207880.jpeg",
        "/photos/media_1775574210908.jpeg",
        "/photos/media_1775574215214.jpeg",
        "/photos/media_1775574218589.jpeg"
      ]
    },
    {
      "title": "2. Ana Jet Üs Ziyareti",
      "org": "Kurum",
      "date": "2025",
      "category": "Ziyaret",
      "description": "2. Ana Jet Üs Komutanlığı’na gerçekleştirilen ziyarette, Türk Hava Kuvvetleri’nin operasyonel kabiliyetleri, hava savunma sistemleri ve üs yapısı hakkında yerinde bilgi edinilmiştir. Ziyaret kapsamında askeri havacılık faaliyetleri, görev süreçleri ve kullanılan platformlara dair teknik ve stratejik değerlendirmeler yapılmıştır.\n\nBu deneyim, savunma sanayii ve askeri havacılık alanına yönelik perspektifimi güçlendirmiştir.",
      "photo": "/photos/media_1775574778055.jpeg",
      "slug": "izmir-ana-jet",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775574763443.jpeg",
        "/photos/media_1775574766622.jpeg",
        "/photos/media_1775574770413.jpeg",
        "/photos/media_1775574774608.jpeg"
      ]
    },
    {
      "title": "GTÜ 3. Havacılık ve Uzay Zirvesi",
      "org": "Gebze Teknik Üniversitesi",
      "date": "2025",
      "description": "YK Başkanı ve zirve genel koordinatörü olarak Türkiye'nin önde gelen havacılık ve uzay kurumlarının yöneticilerini, farklı üniversitelerden öğrenci kulüplerini bir araya getirdik. Astronot Tuva Cihangir Atasever, Aselsan Genel Müdür Yardımcısı, TÜBİTAK Uzay, TUSAŞ, Havelsan, Kale Jet, T.C. Savunma Sanayii Başkanlığı gibi kurum temsilcileri katıldı.",
      "photo": "/photos/media_1775573060947.jpg",
      "category": "Zirve",
      "slug": "gtu-3-havacilik-ve-uzay-zirvesi",
      "details": [
        "Türkiye'nin önde gelen havacılık ve uzay kurumlarının yöneticilerini, farklı üniversitelerden öğrenci kulüplerini zirvede bir araya getirdik.",
        "Zirvenin genel koordinasyonunu yönettim."
      ],
      "achievements": [
        "Astronot Tuva Cihangir Atasever katılımı",
        "Sektörün dev firmalarından üst düzey temsilciler"
      ],
      "gallery": [
        "/photos/media__1775397425209.jpg",
        "/photos/media_1775574250887.JPG",
        "/photos/media_1775574262946.JPG",
        "/photos/media_1775574265707.JPG",
        "/photos/media_1775574268835.JPG",
        "/photos/media_1775574275243.jpg",
        "/photos/media_1775574293042.JPG",
        "/photos/media_1775574300067.JPG"
      ]
    },
    {
      "title": "10. Yıl Lansmanı ve Plaket Töreni",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "date": "2025",
      "description": "YK Başkanı olarak sponsorlarımızın katılımıyla 10. yılımız için düzenlediğimiz etkinlikte, Gebze Belediye Başkanı ve değerli sponsorlarımızı ağırladık. Plaket takdiminin yanı sıra 10. yıl lansmanı ve tanıtım filmi gösterimi düzenlendi.",
      "photo": "/photos/media_1775588082489.jpg",
      "category": "Etkinlik",
      "slug": "10-yil-lansmani-ve-plaket-toreni",
      "details": [
        "Kulübün 10. yıl şerefine lansman ve tören düzenlendi.",
        "Plaket takdimi ve tanıtım filmi gösterimi yapıldı."
      ],
      "achievements": [
        "Gebze Belediye Başkanı katılımı",
        "Sponsorlarla güçlü iletişim ve yeni destek fırsatları"
      ],
      "gallery": [
        "/photos/media_1775573092373.JPG",
        "/photos/media_1775573095876.JPG",
        "/photos/media_1775573098768.JPG",
        "/photos/media_1775573109451.JPG",
        "/photos/media_1775573112226.JPG"
      ]
    },
    {
      "title": "Sivil Havacılık Günü",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "date": "2024",
      "description": "GTÜ Havacılık ve Uzay Kulübü olarak 7.'sini düzenlediğimiz Sivil Havacılık Günü etkinliğinde, Türkiye'nin ilk kadın kaptan pilotu Dilek Karabağlı ve SOLOTÜRK'ün kurucu pilotu Sedat Yalın Ahbab gibi değerli isimleri ağırladık.",
      "photo": "/photos/media_1775573292192.JPG",
      "category": "Etkinlik",
      "slug": "sivil-havacilik-gunu-2024",
      "details": [
        "Etkinliğin operasyonel ve protokol süreçlerini yürüttüm."
      ],
      "achievements": [
        "Türkiye'nin ilk kadın kaptan pilotunun katılımı"
      ],
      "gallery": [
        "/photos/media_1775573128884.JPG",
        "/photos/media_1775573133500.JPG",
        "/photos/media_1775573137918.JPG",
        "/photos/media_1775573155595.JPG",
        "/photos/media_1775573167624.JPG",
        "/photos/media_1775573271638.JPG",
        "/photos/media_1775573281717.jpg"
      ]
    },
    {
      "title": "Uzay Günleri: Artemis",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "date": "2022",
      "description": "TUA, TÜBİTAK Uzay, TÜBİTAK SAGE, DeltaV, Roketsan gibi firmaların ve üniversite roket/uydu takımlarının katıldığı Türkiye'nin en büyük roketçilik buluşması. İnsan Kaynakları Başkan Yardımcısı olarak organizasyonda aktif görev aldım.",
      "photo": "/photos/media_1775573320662.jpg",
      "category": "Etkinlik",
      "slug": "uzay-gunleri-artemis",
      "details": [
        "İnsan Kaynakları Başkan Yardımcısı olarak görev aldım.",
        "Ekip koordinasyonu ve operasyonel süreçlerde yer aldım."
      ],
      "achievements": [
        "Türkiye'nin en büyük roketçilik buluşması olarak tarihe geçti"
      ],
      "gallery": [
        "/photos/media_1775573316095.jpg"
      ]
    },
    {
      "title": "TEKNOFEST 2025",
      "org": "TEKNOFEST ",
      "date": "2025",
      "description": "TEKNOFEST Havacılık, Uzay ve Teknoloji Festivali'ne katılarak yerli teknoloji ekosistemini ve savunma sanayii projelerini yerinde inceledim. Bitirme tezim kapsamında teknolojik atılımların Türkiye'nin yumuşak gücü ve marka imajı üzerindeki etkilerini gözlemledim. İlge AI bünyesindeki yapay zeka çözümlerimizin sektörel karşılığını analiz ederken, Türk Dünyası İHA Yarışması hazırlıkları kapsamında teknik ve stratejik ağ kurma süreçlerini yürüttüm.",
      "photo": "/photos/media_1775574500346.jpeg",
      "category": "Fuar",
      "slug": "teknofest-festival",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775574318755.jpeg",
        "/photos/media_1775574324039.jpeg",
        "/photos/media_1775574327858.jpeg",
        "/photos/media_1775574333450.jpeg",
        "/photos/media_1775574338266.jpeg",
        "/photos/media_1775574341050.jpeg",
        "/photos/media_1775574348494.jpeg"
      ]
    },
    {
      "title": "İDEF",
      "org": "Türk Silahlı Kuvvetlerini Güçlendirme Vakfı ",
      "date": "2025",
      "description": "IDEF Uluslararası Savunma Sanayii Fuarı'na katılarak sektördeki en son teknolojik gelişmeleri ve yerli savunma sanayii ekosistemini yerinde inceledim. Bitirme tezim olan savunma sanayisinin yumuşak güç ve marka imajı üzerindeki etkileri kapsamında saha gözlemleri yaptım. İlge AI bünyesindeki yapay zeka ve görüntü işleme çözümlerimizin sektördeki yerini analiz ederek, savunma sanayisinde teknolojik diplomasi ve ağ kurma süreçlerine katkı sağladım.",
      "photo": "/photos/media_1775574381586.jpeg",
      "category": "Fuar",
      "slug": "idef-fuar",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775574388479.jpeg",
        "/photos/media_1775574390596.jpeg",
        "/photos/media_1775574395070.jpeg"
      ]
    },
    {
      "title": "TDT – Ulusal Teşkilatlanma Kampı",
      "org": "Türk Dünyası Gençlik Vakfı",
      "date": "2025",
      "description": "Türk Dünyası Gençlik Vakfı tarafından düzenlenen Ulusal Teşkilatlanma Kampı’na, Türkiye genelindeki üniversite başkanlarıyla birlikte katılım sağladım. Bir hafta süren kamp boyunca sosyal ve akademik faaliyetlerin yanı sıra, kurumlar arası etkileşimi güçlendiren çeşitli organizasyonlar gerçekleştirdik ve diplomatik temaslarda bulunduk.\n\nBu süreç, teşkilatlanma, liderlik ve çok yönlü koordinasyon becerilerimin gelişmesine önemli katkı sağladı.",
      "photo": "/photos/media_1775574399983.jpeg",
      "category": "Diplomasi",
      "slug": "tdt-ulusal-teskilatlanma-kampi",
      "details": [
        "Stratejik geliştirme, Türk dünyası bağlarının güçlendirilmesi üzerine seminer ve çalıştaylara katılım sağlandı."
      ],
      "achievements": [
        "Kurucu başkan sıfatıyla temsilcilik"
      ],
      "gallery": [
        "/photos/media_1775574404022.jpeg",
        "/photos/media_1775574405696.jpeg",
        "/photos/media_1775574407386.jpeg",
        "/photos/media_1775574409770.jpeg",
        "/photos/media_1775574412092.jpeg",
        "/photos/media_1775574414133.jpeg",
        "/photos/media_1775574415886.jpeg",
        "/photos/media_1775574417650.jpeg",
        "/photos/media_1775574421121.jpeg"
      ]
    },
    {
      "title": "Kızılay Sosyal Sorumluluk Etkinlikleri",
      "org": "Maltepe İlçe Kızılay Başkanlığı",
      "date": "2023-2024",
      "description": "Maltepe İlçe Kızılay Başkanlığı gönüllü staj sürem içerisinde sosyal sorumluluk projelerinde ve yardım organizasyonlarında destek ve saha çalışmalarıgerçekleştirdim Takım çalışması ve kriz anlarında koordinasyon deneyimi kazandım.",
      "photo": "/photos/media_1775588112026.jpeg",
      "category": "Gönüllülük",
      "slug": "turk-kizilayi-gonulluluk",
      "details": [
        "Pek çok sosyal destek projesi ve kampanya yönetiminde görev alındı."
      ],
      "achievements": [
        "Aktif gönüllü saati ve kriz yönetimi tecrübesi"
      ],
      "gallery": [
        "/photos/media_1775588117254.jpeg",
        "/photos/media_1775588121200.jpeg",
        "/photos/media_1775588125842.jpeg"
      ]
    },
    {
      "title": "SahaExpo Savunma Fuarı",
      "org": "Savunma & Teknoloji",
      "date": "2022, 2024",
      "description": "SAHA EXPO Savunma, Havacılık ve Uzay Sanayi Fuarı’na katılım sağlayarak, savunma sanayii alanındaki yerli ve milli teknolojileri yakından inceleme fırsatı buldum. Fuar kapsamında sektörün önde gelen firmalarıyla temas kurarak, güncel projeler, yenilikçi çözümler ve iş birliği imkanları hakkında bilgi edindim.\n\nBu deneyim, savunma ve havacılık ekosistemine dair vizyonumu genişletirken, sektörle doğrudan etkileşim kurma fırsatı sundu.",
      "photo": "/photos/media_1775588134464.jpeg",
      "category": "Fuar",
      "slug": "sahaexpo-savunma-fuari",
      "details": [
        "B2B görüşmeleri ve sponsor bulma ağını yönetme operasyonları."
      ],
      "achievements": [
        "Kurum için yeni tedarikçiler ve destekçiler kazanılması"
      ],
      "gallery": [
        "/photos/media_1775588139728.jpeg",
        "/photos/media_1775588145652.jpeg",
        "/photos/media_1775588152411.jpeg"
      ]
    },
    {
      "title": "9. Ana Jet Üs Gezisi",
      "org": "GTÜ – HUK",
      "date": "2024",
      "description": "9. Ana Jet Üs Komutanlığı’na gerçekleştirilen ziyarette, Türk Hava Kuvvetleri’nin operasyonel yapısı, görev süreçleri ve hava savunma kabiliyetleri hakkında yerinde bilgi edinilmiştir. Üs bünyesinde yürütülen faaliyetler ve kullanılan platformlar üzerine teknik ve stratejik değerlendirmeler yapılmıştır.\n\nBu ziyaret, askeri havacılık ve savunma alanına yönelik bilgi birikimimi ve bakış açımı önemli ölçüde geliştirmiştir.",
      "photo": "/photos/media_1775574739524.jpeg",
      "category": "Proje",
      "slug": "balkesir-ana-jet",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775574744227.jpeg"
      ]
    },
    {
      "title": "İHA Eğitimleri",
      "org": "Akademik Program",
      "date": "2024",
      "description": "GTÜHUK İHA Eğitimleri kapsamında, Gebze Teknik Üniversitesi Uçak Mühendisliği hocaları tarafından verilen derslere katıldım. Eğitimler, insansız hava araçlarının tasarımı, kontrolü ve operasyonel kullanımı üzerine yoğun teknik bilgiler sunarken, uygulamalı çalışmalarla teorik bilgilerin pekiştirilmesini sağladı.\n\nBu program, İHA teknolojileri konusundaki yetkinliğimi artırmam ve alanın teknik detaylarını derinlemesine öğrenmem için önemli bir fırsat oldu.",
      "photo": "/photos/media_1775588180955.jpeg",
      "category": "Eğitim",
      "slug": "egitim-seminer",
      "details": [],
      "achievements": [],
      "gallery": [
        "/photos/media_1775588174162.jpeg"
      ]
    },
    {
      "title": "Tusaş Ziyareti",
      "org": "TÜBİTAK – Adana",
      "date": "2023",
      "description": "TUSAŞ – Türk Havacılık ve Uzay Sanayii ziyareti, benim koordinasyonumla organize edildi; süreç boyunca Ulaştırma ve Altyapı Bakan Yardımcısı bizlere eşlik ederek fabrikanın farklı bölümlerini detaylı şekilde tanıttı ve bilgilendirmelerde bulundu.\n\nZiyaret kapsamında TUSAŞ’ın insansız hava araçları, uçak platformları ve Ar-Ge projeleri yerinde incelendi; üretim hatları, test laboratuvarları ve geliştirme süreçleri yakından gözlemlendi. Bu organizasyon, hem sektörel bilgi edinmemi sağladı hem de bakanlık düzeyinde diplomatik temaslar kurmamı ve stratejik koordinasyon becerilerimi pekiştirmemi mümkün kıldı.",
      "photo": "/photos/media_1775574446898.jpeg",
      "category": "Ziyaret",
      "slug": "tusas-gezisi",
      "details": [],
      "achievements": [
        "Koordinasyon",
        "Diplomasi"
      ],
      "gallery": [
        "/photos/media_1775574453518.jpeg",
        "/photos/media_1775574457860.jpeg",
        "/photos/media_1775574463427.jpeg",
        "/photos/media_1775588188583.jpeg",
        "/photos/media_1775588192532.jpeg"
      ]
    }
  ],
  "projects": [
    {
      "slug": "havacilik-uzay-zirvesi",
      "title": "GTÜ 3. Havacılık ve Uzay Zirvesi",
      "subtitle": "Zirve Genel Koordinatörü · 8-9 Mayıs 2025",
      "category": "Zirve",
      "period": "2023 – 2025",
      "coverPhoto": "/photos/media__1775397425209.jpg",
      "gallery": [
        "/photos/media__1775397425209.jpg",
        "/photos/media__1775396695582.jpg",
        "/photos/media_1775571751245.jpg",
        "/photos/media_1775571762714.JPG",
        "/photos/media_1775571769418.JPG",
        "/photos/media_1775571778998.JPG",
        "/photos/media_1775571786660.JPG",
        "/photos/media_1775571800023.JPG",
        "/photos/media_1775571824926.JPG",
        "/photos/media_1775571837536.JPG",
        "/photos/media_1775572006546.JPG",
        "/photos/media_1775572042964.JPG"
      ],
      "description": [
        "GTÜ Havacılık ve Uzay Kulübü YK Başkanı ve zirve genel koordinatörü olarak Gebze Teknik Üniversitesi ev sahipliğinde; ülkemizin önde gelen havacılık ve uzay kurumlarının yöneticilerini aynı platformda bir araya getirdik."
      ],
      "role": "Zirve Genel Koordinatörü & YK Başkanı",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "achievements": [
        "Türkiye'nin önde gelen güzide firmalarının genel müdürlerini kampüsümüzde ağırladık."
      ],
      "technologies": [
        "Proje Yönetimi",
        "Etkinlik Koordinasyonu",
        "ÜNİDES"
      ],
      "relatedSlugs": [
        "sivil-havacilik-gunu",
        "10-yil-lansmani"
      ]
    },
    {
      "slug": "10-yil-lansmani",
      "title": "10. Yıl Lansmanı ve Plaket Töreni",
      "subtitle": "GTÜ Havacılık ve Uzay Kulübü · 2025",
      "category": "Etkinlik",
      "period": "2025",
      "coverPhoto": "/photos/media_1775571593720.jpg",
      "gallery": [
        "/photos/media_1775571600695.JPG",
        "/photos/media_1775571602528.JPG",
        "/photos/media_1775571606471.JPG",
        "/photos/media_1775571613831.JPG",
        "/photos/media_1775571616779.JPG",
        "/photos/media_1775571623538.JPG",
        "/photos/media_1775571638603.jpg",
        "/photos/media_1775571643900.JPG",
        "/photos/media_1775571651787.JPG",
        "/photos/media_1775571668171.JPG",
        "/photos/media_1775571675956.JPG",
        "/photos/media_1775571684579.JPG",
        "/photos/media_1775571715424.JPG",
        "/photos/media_1775571723374.JPG"
      ],
      "description": [
        "GTÜ Havacılık ve Uzay Kulübü YK Başkanı olarak sponsorlarımızın katılımıyla 10. yılımız için lansman düzenledik."
      ],
      "role": "Yönetim Kurulu Başkanı",
      "org": "GTÜ Havacılık ve Uzay Kulübü",
      "achievements": [],
      "technologies": [
        "Etkinlik Yönetimi",
        "Sponsorluk"
      ],
      "relatedSlugs": [
        "havacilik-uzay-zirvesi",
        "sivil-havacilik-gunu"
      ]
    },
    {
      "slug": "bitirme-calsmas-projesi",
      "title": "Bitirme Çalışması",
      "subtitle": "GTÜ İşletme Bölümü - 2025",
      "category": "Bilimsel",
      "period": "2026",
      "coverPhoto": "/photos/media_1775571368848.jpg",
      "gallery": [
        "/photos/media_1775571547611.jpg"
      ],
      "description": [
        "Lisans bitirme çalışmamda, Türkiye özelinde savunma sanayisinin yumuşak güç ve ülke marka imajı üzerindeki stratejik etkilerini inceledim. Yerli savunma projelerinin teknolojik başarıları ve ihracat potansiyeli aracılığıyla Türkiye'nin uluslararası arenadaki algısını ve diplomatik nüfuzunu nasıl dönüştürdüğünü analiz ettim. Özellikle İHA/SİHA teknolojileri ve deniz platformları gibi somut başarıların, \"Türk Malı\" algısını küresel bir teknoloji markasına dönüştürme sürecini ve bunun kamu diplomasisindeki rolünü ele aldım."
      ],
      "role": "Proje Yürütücüsü",
      "org": "Gebze Teknik Üniversitesi",
      "achievements": [
        "Bitirme Çalışması"
      ],
      "technologies": [
        "Havacılık",
        "Markaimajı",
        "Savunma Sanayi",
        "Yumuşak Güç"
      ],
      "relatedSlugs": [
        "havacilik-uzay-zirvesi",
        "10-yil-lansmani"
      ],
      "pdfUrl": "/photos/media_1775585908672.pdf"
    },
    {
      "slug": "teknofest-iha",
      "title": "TEKNOFEST İHA Yarışması",
      "subtitle": "GTU-AQUA Takımı · 685 Takım Arası Final · 2024",
      "category": "Yarışma",
      "period": "2023 – 2024",
      "coverPhoto": "/photos/media__1775396600557.jpg",
      "gallery": [
        "/photos/media__1775396600557.jpg",
        "/photos/media_1775570916491.jpg",
        "/photos/media_1775570920725.JPG",
        "/photos/media_1775570966841.jpg",
        "/photos/media_1775570982649.jpg",
        "/photos/media_1775570989982.JPG",
        "/photos/media_1775571019583.JPG",
        "/photos/media_1775571026010.JPG",
        "/photos/media_1775571028917.JPG",
        "/photos/media_1775571036259.JPG"
      ],
      "description": [
        "TEKNOFEST Serbest Görev İHA Yarışması'nda GTU-AQUA İHA Takımı'nin mekanik ekip üyesi ve takım kaptanı olarak görev aldım.",
        "SolidWorks ile parça tasarımı and üretim süreçlerinde aktif görev aldım. Raporlama, sponsorluk and tanıtım faaliyetlerinde bulundum.",
        "Teknofest 2024 İHA Yarışması'nda 685 takım arasından finale kalan ilk 44 takım içinde yer aldık. Adana'da gerçekleşen saha testleri and finale katıldık."
      ],
      "role": "Mekanik Ekip Üyesi & Takım Kaptanı",
      "org": "GTU-AQUA İHA Takımı",
      "achievements": [
        "685 takım arasından ilk 44'e girme başarısı",
        "SolidWorks ile İHA parça tasarımı",
        "Saha testleri and final uçuşları",
        "Sponsorluk and tanıtım faaliyetleri"
      ],
      "technologies": [
        "SolidWorks",
        "İHA Tasarımı",
        "Mekanik Mühendislik",
        "3D Modelleme",
        "Üretim"
      ],
      "relatedSlugs": [
        "suas-iha",
        "uzay-gunleri-artemis"
      ]
    },
    {
      "slug": "suas-iha",
      "title": "SUAS İHA Yarışması (ABD)",
      "subtitle": "GTU-AVES Takımı · Uluslararası · 2022",
      "category": "Yarışma",
      "period": "2021 – 2022",
      "coverPhoto": "/photos/media_1775570875513.webp",
      "gallery": [
        "/photos/media_1775570879455.webp"
      ],
      "description": [
        "Amerika Birleşik Devletleri'nde düzenlenen SUAS (Student Unmanned Aerial Systems) yarışması sürecinde GTU-AVES İHA takımının sponsorluk and sosyal medya sorumlusu olarak rol aldım.",
        "Uluslararası alanda rapor aşamasını geçen 77 takımdan biri olarak yarışmaya kabul aldık. Konsolosluk nedenli yarışmaya fiziksel katılım sağlanamasa da, yarışma ile 10 yıllık ABD vizesi elde ettim."
      ],
      "role": "Sosyal Medya ve Sponsorluk Görevlisi",
      "org": "GTU-AVES İHA Takımı",
      "achievements": [
        "Uluslararası rapor aşamasını geçen 77 takımdan biri",
        "10 yıllık ABD vizesi elde edildi",
        "Sosyal medya and sponsorluk yönetimi"
      ],
      "technologies": [
        "Sponsorluk",
        "Sosyal Medya",
        "Uluslararası Proje Yönetimi"
      ],
      "relatedSlugs": [
        "teknofest-iha"
      ]
    },
    {
      "slug": "turk-dunyasi-genclik",
      "title": "Türk Dünyası İHA Yarışması",
      "subtitle": "Kurucu YK Başkanı & Koordinatör · 2025",
      "category": "Diplomasi & Teknoloji",
      "period": "2025 – Devam ediyor",
      "coverPhoto": "/photos/media_1775570806123.jpeg",
      "gallery": [
        "/photos/media_1775570812695.jpeg",
        "/photos/media_1775570816275.jpeg",
        "/photos/media_1775570818489.jpeg"
      ],
      "description": [
        "Türk Dünyası İHA Yarışması’nın koordinatörü olarak, Türk Devletleri Teşkilatı üyesi 8 ülkeden üniversite takımlarını bir araya getirmeyi hedefleyen uluslararası bir organizasyonu yönetiyorum. Bu girişim, yalnızca teknik bir yarışma olmanın ötesinde; Türk dünyası gençleri arasında kalıcı bağlar kurmayı, ortak üretim kültürünü güçlendirmeyi ve teknoloji odaklı iş birliğini derinleştirmeyi amaçlayan stratejik bir platform niteliği taşımaktadır.",
        "Bilim ve mühendislik ekseninde şekillenen bu organizasyon, ülkeler arası etkileşimi artırarak gençlik temelli bir ‘yumuşak güç’ inşasına katkı sağlamakta; ortak değerler etrafında birleşen yeni nesil liderlerin yetişmesine zemin hazırlamaktadır. Bu doğrultuda süreç; uluslararası koordinasyon, paydaş yönetimi ve çok boyutlu organizasyon planlaması ile aktif olarak tarafımca yürütülmektedir"
      ],
      "role": "Kurucu YK Başkanı & Koordinatör",
      "org": "GTÜ Türk Dünyası Gençlik Topluluğu",
      "achievements": [],
      "technologies": [
        "Liderlik",
        "Diplomasi",
        "Uluslararası İlişkiler",
        "Proje Yönetimi"
      ],
      "relatedSlugs": [
        "kizilay-gonulluluk"
      ]
    }
  ]
};
