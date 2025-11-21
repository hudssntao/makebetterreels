import { ArrowRight, CalendarCheck, Check, LineChart, Sparkles, Zap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const features = [
   {
      icon: <Sparkles className="size-5 text-primary" />,
      title: "Drag & drop journey building",
      description:
         "Launch omnichannel campaigns in minutes with an intuitive canvas built for ops teams.",
   },
   {
      icon: <CalendarCheck className="size-5 text-primary" />,
      title: "Adaptive automation",
      description:
         "Trigger the next best action with AI-driven routing that learns from every interaction.",
   },
   {
      icon: <LineChart className="size-5 text-primary" />,
      title: "Realtime health dashboards",
      description:
         "Monitor conversion velocity, pipeline status, and revenue KPIs from a single source of truth.",
   },
];

const testimonials = [
   {
      name: "Lena Hsu",
      role: "VP Customer Success, Stratus",
      quote: "We replaced three tools with Kuantra and cut our handoffs in half. The realtime dashboards changed the way our exec team meets.",
      fallback: "LH",
   },
   {
      name: "Marcus Allen",
      role: "Head of RevOps, Fuel CRM",
      quote: "Our reps finally have proactive playbooks. Every journey is personalized without writing code, which unlocked near-instant scaling.",
      fallback: "MA",
   },
];

const plans = [
   {
      name: "Growth",
      price: "$79",
      cadence: "per seat / month",
      features: [
         "Up to 2 workspaces",
         "Email, in-app, and webhook steps",
         "Realtime dashboards",
         "Unlimited integrations",
      ],
      cta: "Start free trial",
   },
   {
      name: "Enterprise",
      price: "Custom",
      cadence: "tailored plan",
      features: [
         "Dedicated success engineer",
         "Private data residency",
         "Predictive revenue modeling",
         "Hands-on migration",
      ],
      cta: "Talk to sales",
      highlight: true,
   },
];

const faqs = [
   {
      question: "How long does implementation take?",
      answer:
         "Most teams connect their tools and launch their first automated journey within the first week with help from our onboarding specialists.",
   },
   {
      question: "Can we model custom journeys?",
      answer:
         "Yes. Kuantra’s canvas supports conditional logic, custom data sources, and dynamic content blocks so you can tailor every path.",
   },
   {
      question: "Is there a free trial available?",
      answer:
         "Every new workspace includes a 14-day full access trial. Invite unlimited collaborators and test every feature before upgrading.",
   },
   {
      question: "Do you integrate with our CRM?",
      answer:
         "We connect with Salesforce, HubSpot, Pipedrive, and dozens of customer data platforms. An open API covers the rest.",
   },
];

export default function Home() {
   return (
      <div className="space-y-24 pb-24">
         <section
            id="product"
            className="relative isolate overflow-hidden border-b bg-gradient-to-b from-background via-background to-background/60"
         >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-24 md:flex-row md:items-center md:gap-20">
               <div className="flex-1 space-y-8">
                  <div className="space-y-6">
                     <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                        Battle tested web development expertise
                     </h1>
                     <p className="max-w-xl text-pretty text-lg text-muted-foreground">
                        {" "}
                        Kuantra is a web development agency that specializes in building custom web
                        applications and websites.
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                     <Button asChild size="lg">
                        <a id="signup" href="#pricing" className="flex items-center gap-2">
                           Start a 14-day trial
                           <ArrowRight className="size-4" />
                        </a>
                     </Button>
                     <Button variant="ghost" size="lg" asChild>
                        <a href="#demo" className="flex items-center gap-2">
                           Book a live demo
                        </a>
                     </Button>
                  </div>
                  <dl className="grid gap-6 sm:grid-cols-3">
                     <div>
                        <dt className="text-sm text-muted-foreground">Faster handoffs</dt>
                        <dd className="text-3xl font-semibold text-foreground">42%</dd>
                     </div>
                     <div>
                        <dt className="text-sm text-muted-foreground">Active journeys</dt>
                        <dd className="text-3xl font-semibold text-foreground">7.4k</dd>
                     </div>
                     <div>
                        <dt className="text-sm text-muted-foreground">Customer NPS</dt>
                        <dd className="text-3xl font-semibold text-foreground">68</dd>
                     </div>
                  </dl>
               </div>
               <div className="flex-1">
                  <div className="rounded-2xl border bg-card p-6 shadow-xl shadow-primary/10">
                     <div className="mb-6 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10" />
                        <div>
                           <p className="text-sm text-muted-foreground">Journey preview</p>
                           <p className="text-sm font-medium">AE Handoff Automation</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="rounded-xl border border-dashed p-4">
                           <p className="text-sm font-medium">Trigger</p>
                           <p className="text-sm text-muted-foreground">Meeting booked with SDR</p>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                           <Card className="bg-muted/30">
                              <CardHeader className="gap-2">
                                 <CardTitle className="text-base font-semibold">
                                    Notify AE
                                 </CardTitle>
                                 <CardDescription>
                                    Slack channel ping with account context.
                                 </CardDescription>
                              </CardHeader>
                           </Card>
                           <Card className="bg-muted/30">
                              <CardHeader className="gap-2">
                                 <CardTitle className="text-base font-semibold">
                                    Automate follow-up
                                 </CardTitle>
                                 <CardDescription>
                                    Personalized email drafted with AI snippets.
                                 </CardDescription>
                              </CardHeader>
                           </Card>
                        </div>
                        <div className="rounded-xl border border-dashed p-4">
                           <p className="text-sm font-medium">Wait 1 day, check response</p>
                           <p className="text-sm text-muted-foreground">
                              Adaptive logic routes to success play
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="features" className="mx-auto w-full max-w-6xl px-4">
            <div className="flex flex-col gap-4 text-center">
               <Badge variant="outline" className="mx-auto w-fit uppercase tracking-wide">
                  Why teams use Kuantra
               </Badge>
               <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Everything you need to operate modern revenue motions
               </h2>
               <p className="mx-auto max-w-3xl text-pretty text-muted-foreground">
                  From first touch to renewal, Kuantra equips GTM teams with automation, insights,
                  and shared context so every customer journey feels tailored.
               </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
               {features.map((feature) => (
                  <Card key={feature.title}>
                     <CardHeader className="gap-4">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                           {feature.icon}
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                     </CardHeader>
                  </Card>
               ))}
            </div>
         </section>

         <section id="testimonials" className="mx-auto w-full max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-[2fr_3fr] md:items-center">
               <div className="space-y-4">
                  <Badge variant="outline" className="w-fit uppercase tracking-wide">
                     Loved by revenue teams
                  </Badge>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                     Trusted by hyper-growth startups shipping journeys weekly
                  </h2>
                  <p className="text-muted-foreground">
                     Kuantra balances flexibility with governance, giving every team a shared view
                     of the customer without sacrificing data quality.
                  </p>
               </div>
               <div className="grid gap-6 md:grid-cols-2">
                  {testimonials.map((testimonial) => (
                     <Card key={testimonial.name} className="h-full">
                        <CardHeader className="gap-3">
                           <div className="flex items-center gap-3">
                              <Avatar>
                                 <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                              </Avatar>
                              <div>
                                 <CardTitle className="text-base font-semibold">
                                    {testimonial.name}
                                 </CardTitle>
                                 <CardDescription>{testimonial.role}</CardDescription>
                              </div>
                           </div>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm leading-relaxed text-muted-foreground">
                              “{testimonial.quote}”
                           </p>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         <section id="pricing" className="mx-auto w-full max-w-6xl px-4">
            <div className="text-center">
               <Badge variant="outline" className="mx-auto w-fit uppercase tracking-wide">
                  Pricing
               </Badge>
               <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Start fast, scale intentionally
               </h2>
               <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  Transparent plans crafted for GTM teams of every size. Upgrade or downgrade at any
                  time—no hidden fees, ever.
               </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
               {plans.map((plan) => (
                  <Card
                     key={plan.name}
                     className={plan.highlight ? "border-primary shadow-lg shadow-primary/10" : ""}
                  >
                     <CardHeader className="gap-3">
                        <Badge variant={plan.highlight ? "default" : "secondary"} className="w-fit">
                           {plan.name}
                        </Badge>
                        <div className="flex items-baseline gap-2">
                           <CardTitle className="text-4xl font-semibold">{plan.price}</CardTitle>
                           <CardDescription className="text-base">{plan.cadence}</CardDescription>
                        </div>
                     </CardHeader>
                     <CardContent className="space-y-6">
                        <ul className="space-y-3 text-sm">
                           {plan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                 <Check className="mt-0.5 size-4 text-primary" />
                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>
                        <Button
                           variant={plan.highlight ? "default" : "outline"}
                           asChild
                           className="w-full"
                        >
                           <a href="#contact">{plan.cta}</a>
                        </Button>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </section>

         <section id="faq" className="mx-auto w-full max-w-5xl px-4">
            <div className="space-y-4 text-center">
               <Badge variant="outline" className="mx-auto w-fit uppercase tracking-wide">
                  FAQ
               </Badge>
               <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Answers to common questions
               </h2>
               <p className="mx-auto max-w-2xl text-muted-foreground">
                  Need more detail? Book time with our solution engineers, or message us anytime
                  from the app.
               </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
               {faqs.map((faq) => (
                  <Card key={faq.question} className="text-left">
                     <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                     </CardHeader>
                     <CardContent className="text-sm text-muted-foreground">
                        {faq.answer}
                     </CardContent>
                  </Card>
               ))}
            </div>
         </section>

         <section
            id="demo"
            className="mx-auto w-full max-w-5xl rounded-3xl border bg-background/80 px-8 py-16 text-center shadow-xl shadow-primary/10 md:px-16"
         >
            <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
               Ready to orchestrate journeys your customers love?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
               Bring your existing tools and data. Kuantra connects in minutes so your team can
               deliver seamless experiences without adding headcount.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
               <Button size="lg" asChild>
                  <a href="#contact" className="flex items-center gap-2">
                     Speak with sales
                     <ArrowRight className="size-4" />
                  </a>
               </Button>
               <Button size="lg" variant="ghost" asChild>
                  <a href="mailto:hello@kuantra.com" className="flex items-center gap-2">
                     Email us
                     <Zap className="size-4" />
                  </a>
               </Button>
            </div>
         </section>

         <section id="contact" className="mx-auto w-full max-w-3xl px-4">
            <div className="rounded-3xl border bg-card/80 px-8 py-12 shadow-lg backdrop-blur">
               <div className="space-y-4 text-center">
                  <Badge variant="outline" className="mx-auto w-fit uppercase tracking-wide">
                     Contact
                  </Badge>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                     Talk with our team
                  </h2>
                  <p className="text-muted-foreground">
                     Share how you operate today and we will prepare a tailored walkthrough with
                     data mapping recommendations.
                  </p>
               </div>
               <form className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                     <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" name="name" placeholder="Alex Morgan" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Work email</Label>
                        <Input id="email" name="email" type="email" placeholder="you@company.com" />
                     </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                     <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" name="company" placeholder="Kuantra Labs" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="team-size">Team size</Label>
                        <Input id="team-size" name="team-size" placeholder="25" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="message">What can we help with?</Label>
                     <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your current revenue workflows."
                        rows={4}
                     />
                  </div>
                  <div className="flex justify-end">
                     <Button type="submit" className="gap-2">
                        Send message
                        <ArrowRight className="size-4" />
                     </Button>
                  </div>
               </form>
            </div>
         </section>
      </div>
   );
}
