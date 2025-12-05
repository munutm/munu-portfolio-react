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
  title: "Munawar T | Flutter Developer (AI & ML Integration)",
  description: "Portfolio of Munawar T, a Flutter Developer specializing in AI & ML integration. Building intelligent, high-performance, cross-platform applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://munucodes.in",
    title: "Munawar T | Flutter Developer",
    description: "Portfolio of Munawar T, a Flutter Developer specializing in AI & ML integration.",
    siteName: "Munawar T Portfolio",
    images: [
      {
        url: "/images/photos/colored.png",
        width: 1200,
        height: 630,
        alt: "Munawar T Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munawar T | Flutter Developer",
    description: "Portfolio of Munawar T, a Flutter Developer specializing in AI & ML integration.",
    images: ["/images/photos/colored.png"],
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
