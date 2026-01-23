import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientRootLayout from "@/components/ClientRootLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteConfig = {
  name: "OnlineAds360",
  url: "https://onlineads360.com",
  description: "Get everything you need to manage and grow your business. Transform your business operations with our all-in-one marketing platform.",
  ogImage: "/images/og-image.png",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1E293B" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OnlineAds360 - #1 Business Platform for Entrepreneurs",
    template: "%s | OnlineAds360",
  },
  description: siteConfig.description,
  keywords: [
    "digital marketing",
    "business platform",
    "marketing automation",
    "SEO services",
    "online advertising",
    "business growth",
    "marketing solutions",
    "OnlineAds360",
  ],
  authors: [{ name: "OnlineAds360 Team" }],
  creator: "OnlineAds360",
  publisher: "OnlineAds360",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OnlineAds360 - #1 Business Platform for Entrepreneurs",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "OnlineAds360 - All-in-One Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlineAds360 - #1 Business Platform for Entrepreneurs",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@onlineads360",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ClientRootLayout>
          {children}
        </ClientRootLayout>
      </body>
    </html>
  );
}
