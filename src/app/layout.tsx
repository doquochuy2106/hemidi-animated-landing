import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00E599",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hemidi-animated-landing.vercel.app"),
  title: "Sark - Leading SEO Agency | Growth & High Rankings",
  description: "Boost your organic visibility and search rankings with Sark, an intelligent SEO agency powered by cutting-edge animated creative technology.",
  keywords: ["SEO Agency", "Search Engine Optimization", "Rankings", "Digital Marketing", "HeMeDi", "Interactive 3D"],
  authors: [{ name: "HeMeDi Creative Experience" }],
  openGraph: {
    title: "Sark - The Right SEO to Boost Your Rankings",
    description: "Smart digital solutions that boost search engine ranking and drive real organic growth.",
    url: "https://hemidi-animated-landing.vercel.app",
    siteName: "Sark SEO Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sark SEO Agency Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sark - The Right SEO to Boost Your Rankings",
    description: "Smart digital solutions that boost search engine ranking and drive real organic growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen antialiased bg-white text-brand-dark selection:bg-brand-green selection:text-black">
        {children}
      </body>
    </html>
  );
}
