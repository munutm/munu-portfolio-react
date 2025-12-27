import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { Cursor } from "@/components/ui/cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedBackground } from "@/components/ui/animated-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://munucodes.in"),
  title: "Munawar T | Senior Flutter Developer - ERP, POS & Offline-First Apps",
  description: "Portfolio of Munawar T, a Senior Flutter Developer with 4+ years of experience building ERP-integrated mobile applications, POS systems, and offline-first solutions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://munucodes.in",
    title: "Munawar T | Senior Flutter Developer",
    description: "Portfolio of Munawar T, a Senior Flutter Developer specializing in ERP, POS & offline-first applications.",
    siteName: "Munawar T Portfolio",
    images: [
      {
        url: "/images/photos/photo.png",
        width: 1200,
        height: 630,
        alt: "Munawar T Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munawar T | Senior Flutter Developer",
    description: "Portfolio of Munawar T, a Senior Flutter Developer specializing in ERP, POS & offline-first applications.",
    images: ["/images/photos/photo.png"],
    creator: "@munawr23",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          <ScrollProgress />
          <AnimatedBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
