import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
   display: "swap",
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Kuantra — Orchestrate Your Customer Journeys",
   description:
      "Kuantra gives revenue teams a unified place to design, launch, and optimize customer journeys with real-time insights.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background font-sans text-foreground`}
         >
            <ThemeProvider>
               <div className="flex min-h-screen flex-col">
                  <SiteHeader />
                  <main className="flex-1">{children}</main>
                  <footer className="border-t bg-background/80">
                     <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                        <p>
                           &copy; {new Date().getFullYear()} Kuantra Labs, Inc. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                           <a href="#privacy" className="hover:text-foreground">
                              Privacy
                           </a>
                           <a href="#terms" className="hover:text-foreground">
                              Terms
                           </a>
                           <a href="#sitemap" className="hover:text-foreground">
                              Sitemap
                           </a>
                        </div>
                     </div>
                  </footer>
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
