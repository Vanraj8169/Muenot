import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Muenot | AI Data Services & E-Learning Solutions",
  description:
    "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services. Transform your business with our expert solutions.",
  keywords: [
    "AI Data Services",
    "E-Learning",
    "Data Annotation",
    "Localization",
    "Content Development",
    "Technology Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
