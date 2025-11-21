"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
   return (
      <header
         className={cn(
            "fixed top-0 z-50 w-full border-b transition-colors duration-300 border-zinc-800 bg-zinc-950/30 backdrop-blur",
         )}
      >
         <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link
               href="/"
               className="text-xl font-bold tracking-tight transition-colors duration-300 text-white"
            >
               MakeBetterReels
            </Link>
            <Button
               size="sm"
               className="transition-colors duration-300 bg-white text-black hover:bg-white/90"
               asChild
            >
               <Link
                  href="https://typeform.com/to/your-form"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Apply Now
               </Link>
            </Button>
         </div>
      </header>
   );
}
