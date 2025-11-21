"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
   const { theme, resolvedTheme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- mark component as mounted after hydration
      setMounted(true);
   }, []);

   if (!mounted) {
      return (
         <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            aria-label="Toggle theme"
            disabled
         >
            <MoonStar className="size-4" />
            <span className="sr-only">Toggle theme</span>
         </Button>
      );
   }

   const effectiveTheme = theme === "system" ? resolvedTheme : theme;
   const isDark = effectiveTheme === "dark";
   const icon = isDark ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />;
   const label = isDark ? "Light mode" : "Dark mode";

   return (
      <Button
         variant="outline"
         size="icon"
         aria-label={label}
         onClick={() => setTheme(isDark ? "light" : "dark")}
         className="shrink-0"
      >
         {icon}
         <span className="sr-only">{label}</span>
      </Button>
   );
}
