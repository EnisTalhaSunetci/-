import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "google89e93659cfa9dec3"
  },
  title: "Enis Talha Sünetci / Portfolyo",
  description:
    "Enis Talha Sünetci / Portfolyo",
  keywords: ["Enis Talha Sünetci", "AI", "Havacılık", "Savunma", "TEKNOFEST", "Portfolyo"],
  authors: [{ name: "Enis Talha Sünetci" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Enis Talha Sünetci / Portfolyo",
    description: "Enis Talha Sünetci / Portfolyo",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="google89e93659cfa9dec3" />
      </head>
      <body className="bg-[#0A0A0F]">{children}</body>
    </html>
  );
}
