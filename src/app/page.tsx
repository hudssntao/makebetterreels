"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

// --- Content Data ---
const dynamicWords = ["Reels", "TikToks", "Shorts"];

export default function Home() {
   // --- Hero State ---
   const [currentWordIndex, setCurrentWordIndex] = useState(0);

   // --- Scroll Logic for Narrative Section ---
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
   });

   // Background Color Transition
   // As you scroll down the narrative section:
   // Top (Black Box) -> Middle (Workflow) -> Bottom (Vision)
   const backgroundColor = useTransform(
      scrollYProgress,
      [0, 0.6, 0.99], // Adjust these breakpoints to control when the color shifts
      ["#09090b", "#1f2937", "#f5f5f5"],
   );

   // Word cycle effect for Hero
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2500);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="flex flex-col min-h-screen">
         {/* --- HERO SECTION (Sticky Layer 0) --- */}
         <section className="sticky top-0 z-0 min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-600">
            <div className="relative mx-auto max-w-4xl text-center">
               <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                  Start Creating{" "}
                  <span className="relative inline-block h-[1.2em] w-[280px] align-bottom text-left">
                     <AnimatePresence mode="wait">
                        <motion.span
                           key={currentWordIndex}
                           initial={{ y: 20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           exit={{ y: -20, opacity: 0 }}
                           transition={{ duration: 0.5, ease: "easeInOut" }}
                           className="absolute left-0 right-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                        >
                           {dynamicWords[currentWordIndex]}
                        </motion.span>
                     </AnimatePresence>
                  </span>
                  That{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                     Perform.
                  </span>
               </h1>

               <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-300 sm:text-xl">
                  Stop guessing what to post. Get data-driven scripts in seconds.
               </p>

               <div className="mt-10 flex flex-col items-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                     <Button
                        size="lg"
                        className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg font-semibold rounded-full transition-all"
                     >
                        Join the Waitlist
                     </Button>
                  </motion.div>
                  <p className="text-sm text-zinc-500">Be the first to access the beta.</p>
               </div>
            </div>
         </section>

         {/* --- SCROLLYTELLING SECTION (Relative Layer 10) --- */}
         {/* This section slides OVER the hero. It flows vertically with flex-col. */}
         <motion.div
            ref={containerRef}
            style={{ backgroundColor }}
            className="relative z-10 flex flex-col items-center py-24 md:py-32 gap-32 md:gap-48 overflow-hidden"
         >
            {/* --- SECTION 2: THE PROBLEM ("Current Workflow") --- */}
            <div className="px-4 max-w-4xl w-full flex flex-col items-center justify-center text-center">
               <h3 className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-2">
                Tired of this?
               </h3>
               <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
                  The Content <br /> Treadmill
               </h2>
               <p className="text-zinc-400 text-lg mb-8">
                  High effort. Low visibility. Zero predictability.
               </p>
               <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
                  <div className="flex-1 bg-zinc-900/60 rounded-xl p-6 md:p-8 text-zinc-300 min-w-[220px] max-w-xs shadow-md border border-zinc-800">
                     <h4 className="text-white font-semibold text-xl mb-2">Post &amp; Pray</h4>
                     <p className="text-white leading-relaxed">
                        Spending hours editing, only to guess which hooks actually work.
                     </p>
                  </div>
                  <div className="flex-1 bg-zinc-900/60 rounded-xl p-6 md:p-8 text-zinc-300 min-w-[220px] max-w-xs shadow-md border border-zinc-800">
                     <h4 className="text-white font-semibold text-xl mb-2">Burnout Loop</h4>
                     <p className="text-white leading-relaxed">
                        Trading time for attention. If you stop posting, you disappear.
                     </p>
                  </div>
                  <div className="flex-1 bg-zinc-900/60 rounded-xl p-6 md:p-8 text-zinc-300 min-w-[220px] max-w-xs shadow-md border border-zinc-800">
                     <h4 className="text-white font-semibold text-xl mb-2">Disconnected Data</h4>
                     <p className="text-white leading-relaxed">
                        Insights trapped in the app. No way to see the big picture.
                     </p>
                  </div>
               </div>
            </div>

            {/* --- SECTION 3: THE VISION ("Media Engine") --- */}
            {/* Note: Text colors switched to Black here because background will be white/light by this point */}
            <div className="px-4 max-w-4xl w-full flex flex-col items-center justify-center text-center">
               <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
                Our Vision
               </h3>
               <h2 className="text-6xl md:text-8xl font-bold text-black mb-6">
                  The Media <br /> Engine
               </h2>
               <p className="text-zinc-600 text-lg mb-8">
                  We&apos;re building the system to turn chaos into clarity. A unified workspace for high-volume creators.
               </p>
               <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
                  <div className="flex-1 bg-white rounded-xl p-6 md:p-8 text-zinc-900 min-w-[220px] max-w-xs shadow-md border border-zinc-200">
                     <h4 className="text-black font-semibold text-xl mb-2">Engineered Virality</h4>
                     <p className="text-zinc-700 leading-relaxed">
                        Move from &quot;guessing hooks&quot; to using frameworks backed by aggregate performance data.
                     </p>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 md:p-8 text-zinc-900 min-w-[220px] max-w-xs shadow-md border border-zinc-200">
                     <h4 className="text-black font-semibold text-xl mb-2">Asset Library</h4>
                     <p className="text-zinc-700 leading-relaxed">
                        Treat every video as a data point. Build a compounding asset, not just a feed.
                     </p>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 md:p-8 text-zinc-900 min-w-[220px] max-w-xs shadow-md border border-zinc-200">
                     <h4 className="text-black font-semibold text-xl mb-2">Decoupled Growth</h4>
                     <p className="text-zinc-700 leading-relaxed">
                        Build a system where your reach isn&apos;t strictly tied to how many hours you grind today.
                     </p>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* --- CTA SECTION --- */}
         <div className="relative flex flex-col items-center justify-center z-20 bg-white text-center py-72">
            <div className="max-w-2xl mx-auto px-4">
               <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                  Ready to stop guessing?
               </h2>
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-black hover:bg-zinc-800 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all">
                     Join the Waitlist
                  </Button>
               </motion.div>

            <p className="text-sm text-zinc-500 mt-4">Be the first to access the beta.</p>
            </div>
         </div>

         {/* --- FOOTER SECTION --- */}
         <div className="relative z-20 bg-zinc-50 py-10 text-center">
            <p className="text-zinc-400 text-sm">© 2025. All rights reserved.</p>

            <p className="text-zinc-400 text-sm">Made with ❤️ by <a href="https://www.hudsontao.com" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-800">Hudson Tao</a></p>
         </div>
      </div>
   );
}
