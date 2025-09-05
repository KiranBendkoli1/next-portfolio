import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiran Bendkoli - Full Stack Developer Portfolio",
  description: "Software Engineer at Winjit Technologies with 2+ years of experience in React.js, Next.js, TypeScript, and full-stack development. View my projects and professional experience.",
  keywords: "Kiran Bendkoli, Full Stack Developer, React.js Developer, Next.js, TypeScript, Software Engineer, Web Development, Frontend Developer",
  authors: [{ name: "Kiran Bendkoli" }],
  creator: "Kiran Bendkoli",
  publisher: "Kiran Bendkoli",
  robots: "index, follow",
  openGraph: {
    title: "Kiran Bendkoli - Full Stack Developer Portfolio",
    description: "Software Engineer at Winjit Technologies with 2+ years of experience in React.js, Next.js, TypeScript, and full-stack development.",
    type: "website",
    locale: "en_US",
    siteName: "Kiran Bendkoli Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Bendkoli - Full Stack Developer Portfolio",
    description: "Software Engineer at Winjit Technologies with 2+ years of experience in React.js, Next.js, TypeScript, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kiran Bendkoli",
            "jobTitle": "Software Engineer",
            "description": "Frontend developer with expertise in React.js and Next.js",
            "url": "https://YOUR-DOMAIN.com",
            "sameAs": [
              "https://github.com/KiranBendkoli1",
              "https://linkedin.com/in/YOUR-LINKEDIN"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Winjit Technologies"
            }
          })
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-bgPrimary antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
