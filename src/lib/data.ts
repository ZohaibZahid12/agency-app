import {
  Smartphone,
  PenTool,
  BrainCircuit,
  Rocket,
  Server,
  TrendingUp,
  Landmark,
  Stethoscope,
  ShoppingCart,
  Truck,
  Building2,
  ClipboardList,
  Compass,
  BarChart3,
  Layers,
  Users,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "CodingCurves",
  shortName: "CodingCurves",
  url: "https://www.codingcurves.com",
  description:
    "CodingCurves designs and builds web, mobile, and AI-powered products for startups and growing teams — product design, engineering, DevOps, and scaling under one roof.",
  tagline: "From Idea to Impact",
  phone: "+1-365-499-2228",
  email: "teamcodingcurves@gmail.com",
  address: "238 Condado Cres, Stittsville, ON K2V 0P2",
  postalAddress: {
    streetAddress: "238 Condado Cres",
    addressLocality: "Stittsville",
    addressRegion: "ON",
    postalCode: "K2V 0P2",
    addressCountry: "CA",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Web & Mobile Development", href: "#services", description: "Native, cross-platform, and web" },
      { label: "Product Design & Branding", href: "#services", description: "Identity, UX, and interface design" },
      { label: "AI & Data Pipelines", href: "#services", description: "Automation wired into real systems" },
      { label: "Product Building", href: "#services", description: "Zero to shipped v1" },
      { label: "DevOps & Infrastructure", href: "#services", description: "CI/CD, cloud, and observability" },
      { label: "Product Scaling", href: "#services", description: "Architecture for 10x growth" },
    ],
  },
  { label: "About", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Web & Mobile Development",
    description: "Native iOS and Android apps, plus fast, modern web platforms — built to launch and built to last.",
    icon: Smartphone,
  },
  {
    title: "Product Design & Branding",
    description: "Brand identity, UX research, and interface design that make your product obvious to use.",
    icon: PenTool,
  },
  {
    title: "AI & Data Pipelines",
    description: "Automation and AI wired into your existing systems — real data pipelines, not a bolted-on chatbot.",
    icon: BrainCircuit,
  },
  {
    title: "Product Building",
    description: "From a blank canvas to a working v1 — we take a product from idea to shipped, end to end.",
    icon: Rocket,
  },
  {
    title: "DevOps & Infrastructure",
    description: "CI/CD, cloud infrastructure, and observability so your team ships faster without breaking prod.",
    icon: Server,
  },
  {
    title: "Product Scaling",
    description: "Performance and architecture work that lets your product handle 10x the load — and the team.",
    icon: TrendingUp,
  },
];

export const stats: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 60, suffix: "+", label: "Products shipped to production" },
  { value: 3, suffix: "x", label: "Faster average time-to-market" },
  { value: 40, suffix: "%", label: "Average infrastructure cost cut" },
  { value: 95, suffix: "%", label: "Client retention rate" },
];

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    title: "Startups & Scaleups",
    description: "From first commit to Series B — we move at the speed a raise demands.",
    icon: Rocket,
  },
  {
    title: "Enterprise SaaS",
    description: "Multi-tenant architecture and platform teams built to support real scale.",
    icon: Building2,
  },
  { title: "Fintech", description: "Compliance-aware engineering for products handling real money.", icon: Landmark },
  { title: "Healthcare", description: "HIPAA-minded builds for patient-facing and clinical tools.", icon: Stethoscope },
  { title: "E-commerce & Retail", description: "High-traffic storefronts and the systems behind them.", icon: ShoppingCart },
  { title: "Logistics & Supply Chain", description: "Real-time visibility across fleets, routes, and warehouses.", icon: Truck },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Python",
  "Framer Motion",
];

export const comparisonRows = [
  {
    typical: "Ships a demo, then disappears",
    us: "Stays on to monitor, harden, and scale after launch",
  },
  {
    typical: "One generalist thrown at every problem",
    us: "Specialists in design, AI, and infrastructure on your project",
  },
  {
    typical: "Opaque hours, surprise invoices",
    us: "Fixed-scope roadmaps agreed before work starts",
  },
  {
    typical: "You chase status updates",
    us: "Weekly demos of working software, not slide decks",
  },
  {
    typical: "Code you can't hand off to your own team",
    us: "Clean, documented systems your engineers can own",
  },
];

export type EngagementModel = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-Based",
    description: "A fixed scope, timeline, and price — ideal for an MVP, a redesign, or a well-defined build.",
    bullets: ["Fixed price and milestones", "Best for a defined scope", "4–16 week engagements"],
    icon: Layers,
  },
  {
    title: "Dedicated Team",
    description: "An embedded pod of engineers and designers that works as an extension of your own team.",
    bullets: ["Your backlog, our execution", "Direct daily collaboration", "Scale the pod up or down"],
    icon: Users,
  },
  {
    title: "Staff Augmentation",
    description: "Drop-in specialists — AI, DevOps, mobile — to fill a specific skills gap on your existing team.",
    bullets: ["Fills a specific skill gap", "Reports into your team lead", "Start within one to two weeks"],
    icon: UserPlus,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dig into your product, codebase, and goals to find exactly where the biggest wins are.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "We map the technical architecture and product design before a single line of production code.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Build & Ship",
    description: "We build in focused sprints and ship early, so you're looking at working software, not slides.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Support & Scale",
    description: "We stay on post-launch to monitor, harden, and scale the system as real usage grows.",
    icon: BarChart3,
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  summary: string;
  result: string;
  resultLabel: string;
  quote: string;
  author: string;
  role: string;
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Fintech",
    title: "Shipping a Fintech App That Passed App Store Review on the First Try",
    summary: "A full redesign and React Native rebuild replaced a fragile legacy app, cutting crash rates and unlocking faster release cycles.",
    result: "-92%",
    resultLabel: "Crash rate",
    quote: "CodingCurves rebuilt our app from the ground up and got us through App Store review on the first submission — something we'd failed at twice before.",
    author: "Maria Chen",
    role: "Co-founder, PayLoop",
  },
  {
    tag: "Logistics",
    title: "Building a Real-Time Data Pipeline for a Logistics Platform",
    summary: "An event-driven pipeline gave dispatchers live visibility into every shipment, replacing overnight batch reports.",
    result: "10x",
    resultLabel: "Faster data refresh",
    quote: "We went from next-day reports to real-time dashboards. Our team makes better calls because they're not flying blind anymore.",
    author: "James Okafor",
    role: "Head of Ops, Fleetwise",
  },
  {
    tag: "SaaS",
    title: "Cutting Infrastructure Costs 45% While Doubling Uptime",
    summary: "A DevOps overhaul — containerized services, autoscaling, and real observability — turned a fragile platform into one that scales without 2am pages.",
    result: "-45%",
    resultLabel: "Infrastructure spend",
    quote: "We stopped firefighting and started shipping. Our platform hasn't gone down once since the migration.",
    author: "Priya Nair",
    role: "CTO, Ledgerly",
  },
];

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    category: "AI",
    title: "Where AI Actually Belongs in Your Product (and Where It Doesn't)",
    excerpt: "A practical framework for deciding which parts of your workflow are worth automating with AI — and which aren't.",
    date: "Aug 12, 2026",
    readTime: "6 min read",
  },
  {
    category: "DevOps",
    title: "The Real Cost of Skipping CI/CD Until It's Too Late",
    excerpt: "What we've seen break in production, and the infrastructure investments that would have prevented it.",
    date: "Jul 28, 2026",
    readTime: "5 min read",
  },
  {
    category: "Product",
    title: "Shipping v1 Without Building the Wrong Thing",
    excerpt: "How we scope a first version that's fast to build and still worth using.",
    date: "Jul 09, 2026",
    readTime: "7 min read",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maria Chen",
    role: "Co-founder, PayLoop",
    quote: "CodingCurves felt like an extension of our own team. They shipped in weeks what we'd been quoted months for elsewhere.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Head of Ops, Fleetwise",
    quote: "The data pipeline they built just works. No babysitting, no 3am alerts — just data we can actually trust.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "CTO, Ledgerly",
    quote: "Best infrastructure decision we made this year. Our on-call rotation got a whole lot quieter.",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "Founder, Northstar Health",
    quote: "They took us from a Figma file to a live product in ten weeks. Every handoff along the way was clean.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    role: "VP Product, Wavecart",
    quote: "Sharp design instincts and even sharper engineering. Rare to find both under one roof.",
    rating: 5,
  },
];

export const serviceIndustryOptions = [
  "Web App Development",
  "Mobile App Development",
  "Product Design & Branding",
  "AI & Data Pipelines",
  "DevOps & Infrastructure",
  "Product Scaling",
  "Not sure yet",
];

export const footerLinks = {
  company: [
    { label: "About us", href: "#process" },
    { label: "Careers", href: "#" },
    { label: "Contact us", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ],
  services: [
    { label: "Web & Mobile Development", href: "#services" },
    { label: "Product Design & Branding", href: "#services" },
    { label: "AI & Data Pipelines", href: "#services" },
    { label: "DevOps & Infrastructure", href: "#services" },
    { label: "Product Scaling", href: "#services" },
  ],
  additional: [
    { label: "Startups & Scaleups", href: "#industries" },
    { label: "Fintech", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
    { label: "E-commerce & Retail", href: "#industries" },
    { label: "Enterprise SaaS", href: "#industries" },
  ],
};
