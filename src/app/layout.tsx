import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muenot.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muenot | AI Data Services & E-Learning Solutions",
    template: "%s | Muenot",
  },
  description:
    "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services. Transform your business with our expert solutions.",
  keywords: [
    "AI Data Services",
    "E-Learning",
    "Data Annotation",
    "Localization",
    "Content Development",
    "Technology Solutions",
    "Machine Learning",
    "Training Data",
    "Language Services",
  ],
  authors: [{ name: "Muenot" }],
  creator: "Muenot",
  publisher: "Muenot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muenot",
    title: "Muenot | AI Data Services & E-Learning Solutions",
    description:
      "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services. Transform your business with our expert solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muenot - AI Data Services & E-Learning Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muenot | AI Data Services & E-Learning Solutions",
    description:
      "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services.",
    images: ["/og-image.png"],
    creator: "@muenot",
  },
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
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body
        className={cn(
          "font-sans min-h-screen bg-background"
        )}
      >
        {children}
      </body>
    </html>
  );
}
