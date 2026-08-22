export type FeaturedProject = {
  index: string;
  title: string;
  type: string;
  status: string;
  href: string;
  description: string;
  stack: string;
};

export type SupportingProject = readonly [
  title: string,
  status: string,
  href: string | undefined,
  stack: string,
];

export const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    title: "Dummar Digital Transformation Platform",
    type: "Public Sector · Digital Transformation",
    status: "Operational platform",
    href: "/work/dummar",
    description:
      "Arabic public-sector operations platform for complaints, executive work, contracts, investment assets, reporting, field workflows, and resilient low-connectivity operation.",
    stack: "FastAPI · PostgreSQL · PostGIS · Redis · React · PWA",
  },
  {
    index: "02",
    title: "Smart Accounting",
    type: "SaaS · Accounting Automation",
    status: "Advanced product",
    href: "/work/smart-accounting",
    description:
      "Dutch-oriented accounting automation with OCR-assisted document intake, draft bookkeeping, bank reconciliation, accountant review, and ZZP administration workflows.",
    stack: "React · FastAPI · PostgreSQL · Redis · OCR · Docker",
  },
  {
    index: "03",
    title: "AqarFlow CRM",
    type: "SaaS · Real Estate Operations",
    status: "Advanced product",
    href: "/work/aqarflow",
    description:
      "Arabic-first multi-tenant real-estate operating platform spanning CRM, inventory, matching, contracts, finance, maintenance, portals, audit events, and management decision support.",
    stack: "Next.js · FastAPI · PostgreSQL · Redis · MinIO",
  },
  {
    index: "04",
    title: "Al Muheet ERP",
    type: "Enterprise · ERP",
    status: "Core implementation complete",
    href: "/work/al-muheet",
    description:
      "Arabic-first ERP implementation with accounting, inventory, sales, procurement, cash, budgeting, fixed assets, IAM, desktop delivery, printing, and audit-ready foundations.",
    stack: "Next.js · Tauri · NestJS · PostgreSQL · Prisma",
  },
];

export const supportingProjects: SupportingProject[] = [
  ["Syria Agriculture Operations", "Government MVP", "/work/syria-agriculture", "Public-sector operations · Offline-aware PWA"],
  ["E-commerce Platform", "Commerce foundation complete", "/work/ecommerce", "Next.js · Medusa · Stripe · Mollie"],
  ["Smart Rooster", "Functional MVP", undefined, "Workforce scheduling · React · TypeScript"],
  ["SmartOrder Hub", "Prototype", undefined, "Restaurant operations · Node.js · Express"],
  ["Bayti Syria", "Foundation / in development", undefined, "Travel & hospitality · Next.js · PostgreSQL"],
  ["Field Distribution System", "Architecture / implementation", undefined, "Offline field billing · Kotlin · PostgreSQL"],
  ["Solar Agro Tree", "Interactive concept", undefined, "Engineering visualization · Geometry · Web"],
];

export const capabilities = [
  "Public-sector digital transformation",
  "SaaS product architecture",
  "ERP / CRM operating systems",
  "Offline-first and low-connectivity workflows",
  "Commerce and payment infrastructure",
  "Linux / VPS / Docker deployment",
] as const;
