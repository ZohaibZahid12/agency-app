import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Rocket,
  Cloud,
  Server,
  PenTool,
  TrendingUp,
} from "lucide-react";

export type ServiceBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

export type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  navTitle: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keyword: string;
  icon: LucideIcon;
  gradient: string;
  content: ServiceBlock[];
  faqs: ServiceFaq[];
};

/** Phrases in body copy that should auto-link to another service page. */
export const servicePhraseLinks: { phrase: string; slug: string }[] = [
  { phrase: "web development services", slug: "web-development" },
  { phrase: "mobile app development services", slug: "mobile-app-development" },
  { phrase: "AI development services", slug: "ai-development" },
  { phrase: "MVP development services", slug: "mvp-development" },
  { phrase: "SaaS development services", slug: "saas-development" },
  { phrase: "DevOps and cloud infrastructure services", slug: "devops-cloud" },
  { phrase: "DevOps and infrastructure services", slug: "devops-cloud" },
  { phrase: "software scaling services", slug: "software-scaling" },
  { phrase: "product design services", slug: "product-design" },
];

const whyCodingCurves: ServiceBlock[] = [
  { type: "h2", text: "Why Work With CodingCurves?" },
  {
    type: "list",
    items: [
      "Product and engineering work can be connected instead of split across separate vendors.",
      "The current CodingCurves stack includes React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, Docker, and Python, with technologies selected around project requirements.",
      "The engagement can continue beyond the initial build into deployment, monitoring, optimization, and product iteration.",
      "The approach is designed for startups and growing engineering teams that need working software and a maintainable technical foundation.",
    ],
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-development",
    navTitle: "Web Development",
    title: "Custom Web Development for Scalable Digital Products",
    excerpt:
      "Fast, scalable web applications built with React, Next.js, and modern cloud infrastructure — from the first line of code to production.",
    metaDescription:
      "Build fast, scalable web applications with CodingCurves. Custom web development using React, Next.js, TypeScript, Node.js and modern cloud infrastructure.",
    keyword: "web development company",
    icon: Code2,
    gradient: "from-brand-500 to-brand-800",
    content: [
      {
        type: "p",
        text: "CodingCurves builds modern web applications for startups, growing companies, and product teams that need more than a basic website. We bring product thinking, interface design, full-stack engineering, data, and infrastructure together so the technology supports the way the business actually operates.",
      },
      { type: "h2", text: "Web Development Services We Provide" },
      {
        type: "p",
        text: "Our web development services cover the product stack from frontend experiences to backend systems and production infrastructure. Depending on your requirements, we can help with a new application, an existing platform that needs modernization, or a product team that needs additional engineering capacity.",
      },
      {
        type: "p",
        text: "We work with modern technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, Docker, and Python where they fit the project. The technology choice follows the product requirements rather than the other way around.",
      },
      { type: "h2", text: "Custom Web Application Development" },
      {
        type: "p",
        text: "A custom web application should make a real workflow easier, faster, or more scalable. We design applications around the people who use them, the data they need, and the systems they connect to.",
      },
      {
        type: "p",
        text: "That can include customer portals, dashboards, internal operations software, SaaS interfaces, marketplaces, booking workflows, analytics products, and API-driven web platforms. We structure the codebase so future features can be added without turning every release into a rewrite.",
      },
      { type: "h2", text: "React and Next.js Development" },
      {
        type: "p",
        text: "React is a strong fit for interactive product interfaces, while Next.js can provide a structured foundation for modern web applications. CodingCurves uses these tools when they suit the product's rendering, routing, performance, and deployment requirements.",
      },
      {
        type: "p",
        text: "We can work on a greenfield React or Next.js application, extend an existing codebase, improve frontend architecture, or prepare a product for more demanding traffic and functionality.",
      },
      { type: "h2", text: "Backend, APIs, and Databases" },
      {
        type: "p",
        text: "A polished interface is only part of a production product. We design the APIs, business logic, authentication flows, data models, and integrations behind the experience.",
      },
      {
        type: "p",
        text: "For projects that use PostgreSQL or another relational data store, we focus on maintainable schemas, clear service boundaries, and data flows that remain understandable as the product grows.",
      },
      { type: "h2", text: "Web Performance, Security, and Reliability" },
      {
        type: "p",
        text: "Performance is shaped by architecture, rendering strategy, queries, assets, caching, network behavior, and infrastructure. We look across those layers instead of treating performance as a last-minute frontend task.",
      },
      {
        type: "p",
        text: "We also build with practical security considerations such as access control, secret management, dependency hygiene, and safe handling of application data. Production reliability is strengthened through testing, deployment discipline, and observability.",
      },
      { type: "h2", text: "Our Web Development Process" },
      {
        type: "p",
        text: "We begin with discovery: understanding the product, codebase, users, workflows, and success criteria. From there we map the product design and technical architecture, define the first build scope, and ship in focused iterations.",
      },
      {
        type: "p",
        text: "After launch, we can continue with monitoring, hardening, optimization, and feature development. For teams that need adjacent capabilities, our product design services, DevOps and infrastructure services, and software scaling services can extend the engagement without splitting the work across disconnected vendors.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "What types of web applications does CodingCurves build?",
        a: "We build custom web platforms, SaaS products, dashboards, customer portals, internal tools, marketplaces, and API-driven applications, depending on the product requirements.",
      },
      {
        q: "Do you work with an existing web application?",
        a: "Yes. We can extend an existing application, modernize parts of the stack, improve performance, or add engineering capacity around a defined roadmap.",
      },
      {
        q: "Do you use React and Next.js?",
        a: "React and Next.js are part of the technology stack CodingCurves works with. We use them when they are a good fit for the product and delivery requirements.",
      },
      {
        q: "Can you build the backend as well as the frontend?",
        a: "Yes. CodingCurves positions itself as a full-stack product studio, covering frontend, backend, data, and production infrastructure.",
      },
      {
        q: "Can you support the application after launch?",
        a: "Yes. Post-launch support can include monitoring, reliability work, performance improvements, infrastructure changes, and continued product development.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    navTitle: "Mobile App Development",
    title: "Mobile App Development for iOS and Android",
    excerpt:
      "Native iOS and Android apps, or a shared React Native codebase — designed, built, and shipped to real users.",
    metaDescription:
      "CodingCurves develops scalable iOS and Android apps for startups and product teams, from product design and API integration to launch and post-launch support.",
    keyword: "mobile app development company",
    icon: Smartphone,
    gradient: "from-brand-500 to-[#773CDD]",
    content: [
      {
        type: "p",
        text: "Your mobile application needs to be fast, intuitive, reliable, and connected to the systems that power your business. CodingCurves provides end-to-end mobile app development for startups and product teams, combining product design, mobile engineering, backend integration, and production support.",
      },
      { type: "h2", text: "Mobile App Development Services" },
      {
        type: "p",
        text: "We can support a mobile product from early requirements through production release. The scope can include mobile UX and UI, application architecture, API integration, authentication, local state and storage, analytics, testing, release preparation, and post-launch improvements.",
      },
      {
        type: "p",
        text: "Projects can be approached as a new product, an extension of an existing web platform, or a rebuild of an application that has become difficult to maintain.",
      },
      { type: "h2", text: "iOS and Android App Development" },
      {
        type: "p",
        text: "Mobile users expect clear navigation, responsive interactions, and reliable behavior on real devices. We design and build mobile experiences with the target platform and user journey in mind rather than treating mobile as a smaller copy of a desktop site.",
      },
      {
        type: "p",
        text: "Where a product requires separate platform behavior, we can account for those differences in architecture, interactions, performance, notifications, permissions, and release workflows.",
      },
      { type: "h2", text: "Cross-Platform and React Native Development" },
      {
        type: "p",
        text: "For products that benefit from a shared codebase, React Native can be an effective approach. CodingCurves lists React Native work in its delivered product experience and can use cross-platform architecture where it makes sense for the project.",
      },
      {
        type: "p",
        text: "The right approach depends on device capabilities, performance requirements, native integrations, team expertise, and the product roadmap.",
      },
      { type: "h2", text: "Mobile UI/UX and Product Design" },
      {
        type: "p",
        text: "A mobile app succeeds when users can understand what to do next. We connect interface design with the underlying product workflow so screens, states, errors, and edge cases are considered before implementation.",
      },
      {
        type: "p",
        text: "For teams that need deeper design work, our product design services can cover research, information architecture, interface design, and engineering-ready specifications.",
      },
      { type: "h2", text: "APIs, Backend Integration, and Data" },
      {
        type: "p",
        text: "Most mobile applications depend on services outside the app itself. We integrate mobile experiences with APIs, authentication systems, databases, analytics, notifications, and third-party services where required.",
      },
      {
        type: "p",
        text: "When the supporting backend also needs development, our web development services and SaaS development services provide a path to build the broader product platform instead of treating the app as a disconnected layer.",
      },
      { type: "h2", text: "Launch, Monitoring, and Ongoing Improvement" },
      {
        type: "p",
        text: "Shipping an app is only the beginning. Post-launch work can include crash investigation, performance improvements, release management, observability, infrastructure changes, and iterative product development.",
      },
      {
        type: "p",
        text: "Our DevOps and cloud infrastructure services can support the production systems behind the mobile experience, while software scaling services can help when usage and data volume grow.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "Can CodingCurves build both iOS and Android apps?",
        a: "Yes. CodingCurves presents native iOS and Android app development as part of its mobile offering and can also use cross-platform approaches when they fit the product.",
      },
      {
        q: "Do you build the backend for a mobile app?",
        a: "Yes. Mobile products often require APIs, authentication, databases, and other backend systems, which can be included in the wider engagement.",
      },
      {
        q: "Can you improve an existing mobile application?",
        a: "Yes. We can work on an existing codebase, redesign workflows, improve reliability, or rebuild parts of an app when the existing architecture limits progress.",
      },
      {
        q: "Do you support app launch?",
        a: "Yes. Release preparation and post-launch support can be included, depending on project scope.",
      },
      {
        q: "When should we choose cross-platform development?",
        a: "Cross-platform development can be useful when a product benefits from a shared codebase and the target device requirements are compatible with that approach. The choice should follow the product constraints.",
      },
    ],
  },
  {
    slug: "ai-development",
    navTitle: "AI Development",
    title: "AI Development That Fits Your Product",
    excerpt:
      "AI wired into real workflows and data — not a bolted-on chatbot. Automation, integrations, and AI product features that ship.",
    metaDescription:
      "Build practical AI products and automation with CodingCurves. We integrate AI into applications, workflows, data pipelines, and production systems.",
    keyword: "AI development company",
    icon: BrainCircuit,
    gradient: "from-[#773CDD] to-brand-900",
    content: [
      {
        type: "p",
        text: "AI creates value when it is connected to a real workflow, useful data, and a measurable product goal. CodingCurves helps teams integrate AI into existing software, automate repetitive work, build intelligent product features, and connect AI systems to the data and infrastructure they already use.",
      },
      { type: "h2", text: "AI Development Services" },
      {
        type: "p",
        text: "Our AI development work can cover discovery, workflow design, application integration, automation, data pipelines, API-based AI features, and production deployment. The emphasis is on building a usable system rather than adding an isolated chatbot without a clear role in the product.",
      },
      {
        type: "p",
        text: "We can start with an existing product or help a team shape a new AI-enabled product from the beginning.",
      },
      { type: "h2", text: "AI Product Development" },
      {
        type: "p",
        text: "AI features are most useful when they solve a specific problem for a specific user. We help define the task, inputs, outputs, workflow, failure states, and human review requirements before implementing the experience.",
      },
      {
        type: "p",
        text: "Examples can include structured information extraction, document workflows, search and retrieval experiences, intelligent classification, summarization, recommendation workflows, support automation, and internal productivity tools.",
      },
      { type: "h2", text: "AI Integration and Automation" },
      {
        type: "p",
        text: "Many businesses already have the systems where valuable work happens: customer platforms, databases, internal tools, ticketing systems, and operational workflows. AI can be connected to those systems instead of becoming another disconnected application.",
      },
      {
        type: "p",
        text: "Our web development services can provide the application layer, while DevOps and cloud infrastructure services can support deployment, monitoring, secrets, and operational reliability.",
      },
      { type: "h2", text: "AI and Data Pipelines" },
      {
        type: "p",
        text: "Useful AI depends on reliable inputs. We can design data flows that collect, transform, validate, and move information into the systems where AI features need it.",
      },
      {
        type: "p",
        text: "For products with growing data volumes or more demanding processing requirements, our software scaling services can address architecture and performance concerns alongside the AI layer.",
      },
      { type: "h2", text: "Generative AI Applications" },
      {
        type: "p",
        text: "Generative AI can support product experiences such as search, drafting, summarization, knowledge interfaces, and structured content generation. The implementation should include clear product boundaries, appropriate data access, user controls, and evaluation criteria.",
      },
      {
        type: "p",
        text: "The goal is not to force generative AI into every workflow. It is to identify the workflows where the technology can improve the user experience or reduce manual effort without creating unnecessary operational risk.",
      },
      { type: "h2", text: "Building AI into an MVP" },
      {
        type: "p",
        text: "For an early-stage product, AI should support the core product hypothesis rather than become the entire product strategy. Our MVP development services help teams scope the smallest useful release and decide which AI capabilities belong in the first version.",
      },
      {
        type: "p",
        text: "As the product proves demand, the system can evolve into stronger data pipelines, richer integrations, and more robust infrastructure.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "Does CodingCurves build AI applications or only integrate AI APIs?",
        a: "The offering can include both AI-enabled product features and integration into existing applications and workflows, depending on the requirements.",
      },
      {
        q: "Can you connect AI to our existing business data?",
        a: "Yes. AI features often depend on application data and operational systems, so integration and data flow design can be part of the project.",
      },
      {
        q: "Do you build generative AI products?",
        a: "CodingCurves can develop generative AI features where they are appropriate to the product use case and system requirements.",
      },
      {
        q: "How should we decide whether to add AI to our product?",
        a: "Start with the workflow and the user problem. Define the expected outcome, inputs, failure modes, and operational cost before choosing an AI implementation.",
      },
      {
        q: "Can AI development be part of an MVP?",
        a: "Yes. AI can be included in an MVP when it directly supports the product hypothesis and the first-release scope remains focused.",
      },
    ],
  },
  {
    slug: "mvp-development",
    navTitle: "MVP Development",
    title: "MVP Development for Startups and Growing Products",
    excerpt:
      "Turn an idea into a focused first release — the smallest useful product, built on a foundation that can grow.",
    metaDescription:
      "Build and launch your MVP with CodingCurves. We help startups turn product ideas into focused web and mobile products with scalable foundations.",
    keyword: "MVP development company",
    icon: Rocket,
    gradient: "from-accent-400 to-accent-600",
    content: [
      {
        type: "p",
        text: "A strong MVP is the smallest useful product that can test an important business assumption with real users. CodingCurves helps startups and product teams turn an idea into a working web or mobile product while keeping the first release focused and the technical foundation ready for iteration.",
      },
      { type: "h2", text: "MVP Development Services" },
      {
        type: "p",
        text: "Our MVP development process can cover product discovery, user flows, interface design, technical architecture, frontend and backend development, integrations, deployment, and post-launch improvements.",
      },
      {
        type: "p",
        text: "We aim to reduce unnecessary scope without sacrificing the product's core experience. The result should be usable enough to learn from real users and structured enough to support the next release.",
      },
      { type: "h2", text: "From Product Idea to First Release" },
      {
        type: "p",
        text: "Early product development often involves uncertainty about features, user behavior, pricing, workflow, and technical requirements. We help turn those unknowns into a concrete first-release scope.",
      },
      {
        type: "p",
        text: "Discovery identifies the core user journey, design clarifies the interaction model, and architecture defines the systems required to support the product. The build then proceeds in focused increments so stakeholders can review working software.",
      },
      { type: "h2", text: "MVP UI/UX Design" },
      {
        type: "p",
        text: "MVP design should make the core workflow understandable without investing in every possible screen before there is evidence that the product needs them. Our product design services can cover user flows, interface design, and design systems appropriate to the first release.",
      },
      {
        type: "p",
        text: "For mobile-first products, our mobile app development services can carry the same product thinking into the mobile experience.",
      },
      { type: "h2", text: "MVP Web and Mobile Development" },
      {
        type: "p",
        text: "CodingCurves builds both web and mobile products. A web MVP can be a fast way to test a business workflow, while a mobile MVP can make sense when the use case depends on device behavior, notifications, or a mobile-first audience.",
      },
      {
        type: "p",
        text: "For products that need both surfaces, we can plan the shared backend, authentication, data model, and product logic so the experience remains coherent across platforms.",
      },
      { type: "h2", text: "Architecture That Can Evolve" },
      {
        type: "p",
        text: "An MVP should be focused, but it should not intentionally create avoidable technical debt. We choose architecture appropriate to the current scale while keeping sensible paths for future features, integrations, and users.",
      },
      {
        type: "p",
        text: "As the product grows, our SaaS development services, DevOps and cloud infrastructure services, and software scaling services can extend the technical foundation without forcing a new vendor relationship.",
      },
      { type: "h2", text: "AI-Enabled MVPs" },
      {
        type: "p",
        text: "AI can be part of an MVP when it directly supports the product hypothesis. Our AI development services can help identify where AI belongs, connect the necessary data and application workflows, and keep the first release focused.",
      },
      {
        type: "p",
        text: "The product should still be designed so the core user experience remains understandable and measurable.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "What does an MVP development company do?",
        a: "An MVP development partner helps define a focused first release, design the product experience, build the software, and prepare it for real users and future iterations.",
      },
      {
        q: "How long does MVP development take?",
        a: "The timeline depends on scope, platforms, integrations, and team availability. A focused first release is generally easier to deliver when the core user journey is clearly defined.",
      },
      {
        q: "Can you build an MVP from a Figma design?",
        a: "Yes. CodingCurves can take an existing product design into engineering, and can also provide design support when the product still needs UX or UI work.",
      },
      {
        q: "Can you build both web and mobile MVPs?",
        a: "Yes. CodingCurves works across web and mobile products and can help determine which platform mix fits the first release.",
      },
      {
        q: "What happens after an MVP launches?",
        a: "The next step is learning from real usage, then prioritizing improvements, new features, reliability work, and infrastructure changes based on what the product needs.",
      },
    ],
  },
  {
    slug: "saas-development",
    navTitle: "SaaS Development",
    title: "Custom SaaS Development for Scalable Products",
    excerpt:
      "Multi-tenant architecture, subscriptions, dashboards, and the cloud infrastructure to run a SaaS product at scale.",
    metaDescription:
      "Build scalable SaaS products with CodingCurves. We develop customer-facing applications, multi-tenant systems, APIs, dashboards, and cloud infrastructure.",
    keyword: "SaaS development company",
    icon: Cloud,
    gradient: "from-brand-600 to-growth-600",
    content: [
      {
        type: "p",
        text: "SaaS products need architecture that can support users, organizations, permissions, product workflows, integrations, and continuous development. CodingCurves builds SaaS applications from the ground up or helps existing SaaS businesses modernize the technology behind their product.",
      },
      { type: "h2", text: "SaaS Development Services" },
      {
        type: "p",
        text: "Our SaaS development services can span product discovery, UX and UI, frontend applications, backend services, databases, authentication, APIs, cloud infrastructure, and operational tooling.",
      },
      {
        type: "p",
        text: "We design the product around the business model and user workflows so the software structure can support both current requirements and future product iterations.",
      },
      { type: "h2", text: "Multi-Tenant SaaS Architecture" },
      {
        type: "p",
        text: "Multi-tenant systems need thoughtful boundaries around organizations, accounts, permissions, data access, and configuration. We design these concerns into the application architecture rather than treating them as a late-stage feature.",
      },
      {
        type: "p",
        text: "The exact tenancy model depends on the product and operational requirements. The goal is a predictable system that can support more customers without adding unnecessary complexity.",
      },
      { type: "h2", text: "SaaS Frontend and Backend Development" },
      {
        type: "p",
        text: "The customer-facing interface and the services behind it have to work as one product. We can build web interfaces, APIs, business logic, background processing, and database structures as a connected system.",
      },
      {
        type: "p",
        text: "Our web development services are a natural foundation for SaaS products, while product design services help keep complex workflows understandable to users.",
      },
      { type: "h2", text: "Subscriptions, Integrations, and Product Workflows" },
      {
        type: "p",
        text: "Depending on the business model, a SaaS product may need subscriptions, usage limits, organization roles, notifications, third-party integrations, reporting, and internal administration tools.",
      },
      {
        type: "p",
        text: "We focus on implementing these workflows in a way that is clear for users and manageable for the team responsible for operating the platform.",
      },
      { type: "h2", text: "Cloud Infrastructure and SaaS Reliability" },
      {
        type: "p",
        text: "SaaS products need stable deployment and production operations as their user base grows. Our DevOps and cloud infrastructure services can support CI/CD, containerization, cloud environments, observability, and deployment automation.",
      },
      {
        type: "p",
        text: "When the product reaches new performance or scale constraints, our software scaling services can address application architecture, database behavior, infrastructure capacity, and operational bottlenecks.",
      },
      { type: "h2", text: "AI Features for SaaS Products" },
      {
        type: "p",
        text: "AI can become a useful product capability when it improves a workflow that customers already value. CodingCurves can integrate AI into SaaS applications for tasks such as knowledge interfaces, structured information processing, workflow automation, or user assistance.",
      },
      {
        type: "p",
        text: "Our AI development services can cover the application integration and data flow required to make those features useful in production.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "What is included in SaaS development?",
        a: "SaaS development can include product design, web application development, backend services, databases, authentication, APIs, infrastructure, and ongoing product engineering.",
      },
      {
        q: "Can you build a multi-tenant SaaS application?",
        a: "Yes. Multi-tenant architecture is a common requirement for SaaS and can be designed around the product's account, organization, permissions, and data model.",
      },
      {
        q: "Can you modernize an existing SaaS platform?",
        a: "Yes. CodingCurves can work on existing products, including application architecture, infrastructure, performance, and feature development.",
      },
      {
        q: "Do you build SaaS dashboards and admin tools?",
        a: "Yes. Dashboards, reporting, customer portals, and internal administration workflows can be part of a SaaS platform.",
      },
      {
        q: "Can you add AI to an existing SaaS product?",
        a: "Yes. AI can be integrated into an existing product when it serves a clear customer or operational use case.",
      },
    ],
  },
  {
    slug: "devops-cloud",
    navTitle: "DevOps & Cloud Infrastructure",
    title: "DevOps and Cloud Infrastructure That Scales",
    excerpt:
      "CI/CD, AWS, Docker, and observability — safer releases and production systems your team can actually operate.",
    metaDescription:
      "Improve deployment, reliability, and cloud infrastructure with CodingCurves. CI/CD, AWS, Docker, observability, automation, and scalable production systems.",
    keyword: "DevOps consulting company",
    icon: Server,
    gradient: "from-ink-700 to-ink-950",
    content: [
      {
        type: "p",
        text: "Great software still needs reliable infrastructure. CodingCurves helps engineering teams automate deployments, improve cloud environments, strengthen observability, and build production systems that are easier to operate as traffic and engineering teams grow.",
      },
      { type: "h2", text: "DevOps Services" },
      {
        type: "p",
        text: "Our DevOps services can cover CI/CD, containerization, cloud infrastructure, deployment automation, monitoring, environment management, infrastructure improvements, and production support.",
      },
      {
        type: "p",
        text: "The work is tied to the engineering workflow: the goal is to make releases safer and more repeatable while giving teams better visibility into what is happening in production.",
      },
      { type: "h2", text: "CI/CD and Deployment Automation" },
      {
        type: "p",
        text: "Manual deployments create friction and make releases harder to repeat. We can design CI/CD workflows that automate testing, builds, deployments, and environment changes around the team's development process.",
      },
      {
        type: "p",
        text: "For product teams that are moving quickly, deployment automation creates a clearer path from code changes to production and reduces avoidable manual steps.",
      },
      { type: "h2", text: "AWS, Docker, and Cloud Infrastructure" },
      {
        type: "p",
        text: "CodingCurves lists AWS and Docker among its engineering tools. We can use cloud and containerization approaches where they fit the application's architecture, deployment requirements, and operational model.",
      },
      {
        type: "p",
        text: "Cloud architecture should reflect actual needs: application topology, data services, security boundaries, deployment workflows, and expected growth.",
      },
      { type: "h2", text: "Observability and Production Reliability" },
      {
        type: "p",
        text: "Production systems need enough visibility to answer practical questions when something goes wrong. Observability can include application logs, metrics, traces, alerts, dashboards, and operational ownership.",
      },
      {
        type: "p",
        text: "We connect observability with the product architecture so reliability work is not isolated from application development.",
      },
      { type: "h2", text: "Infrastructure for SaaS and AI Products" },
      {
        type: "p",
        text: "Modern SaaS and AI systems often involve multiple services, background jobs, APIs, data stores, and external integrations. Our SaaS development services and AI development services can be paired with infrastructure work so the application and operations are designed together.",
      },
      {
        type: "p",
        text: "When traffic, data volume, or deployment frequency grows, software scaling services can address the next layer of architecture and capacity planning.",
      },
      { type: "h2", text: "Supporting Product Teams" },
      {
        type: "p",
        text: "DevOps works best when infrastructure is understandable to the people building the product. We help teams create documented, repeatable systems that can be handed over and maintained after the engagement.",
      },
      {
        type: "p",
        text: "For new products, infrastructure can be built alongside the application through our web development services, mobile app development services, and MVP development services.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "What does a DevOps consulting company do?",
        a: "A DevOps partner helps improve the workflows and infrastructure used to build, deploy, monitor, and operate software in production.",
      },
      {
        q: "Can you set up CI/CD pipelines?",
        a: "Yes. CI/CD automation can cover testing, builds, deployment workflows, and environment management based on the project requirements.",
      },
      {
        q: "Does CodingCurves work with AWS and Docker?",
        a: "AWS and Docker are among the technologies CodingCurves works with. Actual tooling depends on the application architecture and team requirements.",
      },
      {
        q: "Can you improve a fragile production environment?",
        a: "Yes. Infrastructure review, deployment improvements, observability, and architecture changes can be used to address recurring operational problems.",
      },
      {
        q: "Do you provide ongoing DevOps support?",
        a: "Post-launch monitoring, infrastructure improvements, and operational support can be part of an ongoing engagement.",
      },
    ],
  },
  {
    slug: "product-design",
    navTitle: "Product Design & UX",
    title: "Product Design That Makes Complex Products Simple",
    excerpt:
      "UX research, interface design, and design systems that make complex products simple to use — and easy to build.",
    metaDescription:
      "Design better digital products with CodingCurves. UX research, product strategy, UI design, design systems, and engineering-ready product experiences.",
    keyword: "product design agency",
    icon: PenTool,
    gradient: "from-accent-500 to-[#773CDD]",
    content: [
      {
        type: "p",
        text: "Good product design connects what users need with what the technology can deliver. CodingCurves combines UX research, product thinking, interface design, and engineering so digital products are clear to use and practical to build.",
      },
      { type: "h2", text: "Product Design Services" },
      {
        type: "p",
        text: "Our product design work can cover discovery, user flows, information architecture, wireframes, interface design, design systems, prototypes, and developer-ready specifications.",
      },
      {
        type: "p",
        text: "The depth of the work depends on the product stage. A new MVP may need a focused user flow and core interface, while an established SaaS product may need deeper workflow redesign and a more consistent design system.",
      },
      { type: "h2", text: "UX Research and Product Discovery" },
      {
        type: "p",
        text: "Before designing screens, it helps to understand who the users are, what they are trying to accomplish, and where the current workflow breaks down. Research and discovery create a clearer foundation for design decisions.",
      },
      {
        type: "p",
        text: "For teams developing an MVP, our MVP development services connect this product work directly to the first release. For existing platforms, research can guide a targeted redesign instead of a purely visual refresh.",
      },
      { type: "h2", text: "UI/UX Design for Web and Mobile" },
      {
        type: "p",
        text: "Interfaces should account for real states: loading, errors, empty data, permissions, edge cases, and changing content. We design these details with the implementation context in mind.",
      },
      {
        type: "p",
        text: "Our web development services and mobile app development services can carry the product design into production, helping reduce gaps between design intent and delivered software.",
      },
      { type: "h2", text: "Design Systems and Consistency" },
      {
        type: "p",
        text: "As a product grows, repeated components, patterns, and interaction rules can become inconsistent. A practical design system gives product teams a shared language for interface decisions and helps new features feel like part of the same product.",
      },
      {
        type: "p",
        text: "We focus on the level of systemization that makes sense for the product, avoiding documentation that exists only for its own sake.",
      },
      { type: "h2", text: "Design for SaaS and Complex Workflows" },
      {
        type: "p",
        text: "Enterprise and SaaS products often contain permissions, data tables, configuration, reporting, onboarding, and multi-step workflows. These experiences need clarity without hiding important functionality.",
      },
      {
        type: "p",
        text: "Our SaaS development services can connect product design with the underlying application architecture so complex workflows remain maintainable as the platform expands.",
      },
      { type: "h2", text: "From Design to Production" },
      {
        type: "p",
        text: "Design decisions are more useful when they survive contact with real engineering constraints. We work toward specifications and interactions that developers can implement and product teams can validate.",
      },
      {
        type: "p",
        text: "For teams building AI-enabled experiences, our AI development services can also connect interface decisions with model inputs, outputs, review steps, and failure states.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "What does a product design agency do?",
        a: "A product design partner helps define user workflows and designs the interfaces and systems that make a digital product understandable and usable.",
      },
      {
        q: "Do you provide UX research?",
        a: "UX research and product discovery can be part of the engagement, depending on the product stage and the decisions that need to be made.",
      },
      {
        q: "Can you design both web and mobile products?",
        a: "Yes. CodingCurves works across web and mobile products and can adapt the design process to the platform and user context.",
      },
      {
        q: "Do you create design systems?",
        a: "Yes. Design systems can be created or improved when consistency, reuse, and product scale make them valuable.",
      },
      {
        q: "Can you work with an existing design system?",
        a: "Yes. We can extend or refine existing systems while aligning new product work with the established patterns.",
      },
    ],
  },
  {
    slug: "software-scaling",
    navTitle: "Software Scaling",
    title: "Scale Your Software Without Rebuilding Everything",
    excerpt:
      "Fix the real bottleneck — database, API, or infrastructure — and scale the product without a risky full rewrite.",
    metaDescription:
      "Modernize legacy applications, improve performance, and prepare software for growth with CodingCurves. Architecture, infrastructure, performance, and scalability.",
    keyword: "software modernization services",
    icon: TrendingUp,
    gradient: "from-growth-500 to-growth-800",
    content: [
      {
        type: "p",
        text: "Growth changes the technical demands placed on software. Applications that worked well with a small user base can become harder to maintain when traffic, data, integrations, and engineering teams grow. CodingCurves helps product teams identify those constraints and address them systematically.",
      },
      { type: "h2", text: "Software Modernization Services" },
      {
        type: "p",
        text: "Modernization does not always mean replacing the whole application. It can mean restructuring a high-friction service, improving database behavior, introducing stronger deployment practices, updating dependencies, or moving selected workloads to a more suitable architecture.",
      },
      {
        type: "p",
        text: "We review the system in context so modernization work is tied to real product and operational priorities.",
      },
      { type: "h2", text: "Application Performance Optimization" },
      {
        type: "p",
        text: "Performance problems can come from inefficient queries, slow APIs, unnecessary rendering work, large assets, poor caching, infrastructure limits, or bottlenecks between services. We look across the stack to identify the constraints that matter.",
      },
      {
        type: "p",
        text: "Our web development services and DevOps and cloud infrastructure services can address frontend, backend, and deployment factors together rather than optimizing one layer in isolation.",
      },
      { type: "h2", text: "Scalable Software Architecture" },
      {
        type: "p",
        text: "Scalable architecture is about making the system predictable as usage grows. That can involve service boundaries, database design, asynchronous processing, caching, queues, observability, and deployment strategy.",
      },
      {
        type: "p",
        text: "The right architecture depends on the current product and the growth it actually needs to support. We avoid adding complexity that the product cannot yet justify.",
      },
      { type: "h2", text: "Legacy Application Modernization" },
      {
        type: "p",
        text: "Older applications often contain valuable business logic even when the implementation is difficult to change. Modernization can be approached incrementally so critical workflows remain available while the system is improved underneath them.",
      },
      {
        type: "p",
        text: "For teams with a customer-facing platform, our SaaS development services can combine modernization with roadmap delivery instead of stopping feature work for a full rewrite.",
      },
      { type: "h2", text: "Infrastructure and Reliability at Scale" },
      {
        type: "p",
        text: "As traffic and deployment frequency increase, infrastructure needs clearer capacity planning, monitoring, and automated delivery. Our DevOps and cloud infrastructure services can strengthen these foundations.",
      },
      {
        type: "p",
        text: "For AI-heavy systems, data processing and service orchestration can also become scaling concerns. Our AI development services can address those workloads as part of the broader architecture.",
      },
      { type: "h2", text: "Scaling Teams as Well as Systems" },
      {
        type: "p",
        text: "Scaling software is also about making the engineering system easier for more people to work in. Clear ownership, documented architecture, repeatable deployments, and understandable code reduce the cost of change.",
      },
      {
        type: "p",
        text: "Where a product needs a broader build team, CodingCurves can combine scaling work with web development services, mobile app development services, or product design services.",
      },
      ...whyCodingCurves,
    ],
    faqs: [
      {
        q: "What are software modernization services?",
        a: "Software modernization improves the architecture, codebase, infrastructure, or delivery practices of an existing application so the product is easier to maintain and evolve.",
      },
      {
        q: "Do you recommend a complete rewrite for legacy systems?",
        a: "Not by default. An incremental approach can preserve valuable business logic while addressing the areas that create the greatest technical constraints.",
      },
      {
        q: "Can you optimize a slow web application?",
        a: "Yes. Performance work can cover frontend behavior, APIs, databases, caching, infrastructure, and deployment depending on the source of the bottleneck.",
      },
      {
        q: "Can you help a SaaS platform scale?",
        a: "Yes. SaaS scaling can involve application architecture, databases, infrastructure, observability, and deployment practices.",
      },
      {
        q: "When should we consider modernization?",
        a: "Common signals include recurring outages, slow releases, hard-to-change code, rising infrastructure cost, performance limits, or architecture that no longer fits the product.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
