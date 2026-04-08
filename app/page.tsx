import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { DEFAULT_SITE_DATA } from "@/lib/defaultData";

export const metadata: Metadata = {
  title: DEFAULT_SITE_DATA.seo.homepage.title,
  description: DEFAULT_SITE_DATA.seo.homepage.description,
  keywords: DEFAULT_SITE_DATA.seo.homepage.keywords,
  openGraph: {
    title: DEFAULT_SITE_DATA.seo.homepage.title,
    description: DEFAULT_SITE_DATA.seo.homepage.description,
    images: ["/logo.png"],
  },
};

export default function Home() {
  return <HomeContent />;
}
