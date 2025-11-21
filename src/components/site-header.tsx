import Link from "next/link";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const resources = [
   {
      title: "Product",
      href: "#product",
      description: "See how Kuantra keeps your operations aligned.",
   },
   {
      title: "Features",
      href: "#features",
      description: "Workflow automation, reporting, and customer journeys.",
   },
   {
      title: "Testimonials",
      href: "#testimonials",
      description: "Hear from teams scaling with Kuantra.",
   },
];

export function SiteHeader() {
   return (
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
         <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
               <span className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">KT</span>
               <span>Kuantra</span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
               <NavigationMenu>
                  <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-64">
                           <ul className="grid gap-2 p-4">
                              {resources.map((item) => (
                                 <li key={item.title}>
                                    <NavigationMenuLink asChild>
                                       <Link
                                          href={item.href}
                                          className="block rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground"
                                       >
                                          <div className="text-sm font-medium">{item.title}</div>
                                          <p className="text-sm text-muted-foreground">
                                             {item.description}
                                          </p>
                                       </Link>
                                    </NavigationMenuLink>
                                 </li>
                              ))}
                           </ul>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="#pricing"
                              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                           >
                              Pricing
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link
                              href="#faq"
                              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                           >
                              FAQ
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                  </NavigationMenuList>
               </NavigationMenu>
               <div className="flex items-center gap-2">
                  <Button variant="ghost" asChild>
                     <Link href="#contact">Contact</Link>
                  </Button>
                  <Button asChild>
                     <Link href="#signup">Get started</Link>
                  </Button>
                  <ThemeToggle />
               </div>
            </div>
            <div className="flex items-center gap-2 md:hidden">
               <ThemeToggle />
               <Button variant="default" size="sm" asChild>
                  <Link href="#signup">Get started</Link>
               </Button>
            </div>
         </div>
      </header>
   );
}
