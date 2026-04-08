import { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";
import { DEFAULT_SITE_DATA } from "@/lib/defaultData";

export const metadata: Metadata = {
  title: DEFAULT_SITE_DATA.seo.projects.title,
  description: DEFAULT_SITE_DATA.seo.projects.description,
  keywords: DEFAULT_SITE_DATA.seo.projects.keywords,
  openGraph: {
    title: DEFAULT_SITE_DATA.seo.projects.title,
    description: DEFAULT_SITE_DATA.seo.projects.description,
    images: ["/logo.png"],
  },
};

export default function Projects() {
  return <ProjectsContent />;
}
