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
   title: "MakeBetterReels — AI Content Director for Creators",
   description:
      "The AI Content Director that analyzes your brand's data and writes high-performing scripts for you.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 font-sans text-white`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem={false}
               forcedTheme="dark"
            >
               <div className="flex min-h-screen flex-col">
                  {/* <SiteHeader /> */}
                  <main className="flex-1">{children}</main>
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
