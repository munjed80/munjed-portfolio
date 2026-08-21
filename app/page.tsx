const projects = [
  {
    title: "Dummar Digital Transformation Platform",
    type: "Public Sector · Digital Transformation",
    status: "Operational platform",
    description:
      "Arabic public-sector operations platform spanning citizen complaints, executive work, projects, contracts, investment assets, reporting, field workflows, and resilient low-connectivity operation.",
    stack: "FastAPI · PostgreSQL · PostGIS · Redis · React · PWA",
  },
  {
    title: "Syria Agriculture Operations",
    type: "Public Sector · Government Operations",
    status: "Government MVP",
    description:
      "Offline-aware agricultural operations platform for production, stock and inputs, expenses, tasks, field issues, and printable management reporting.",
    stack: "React · TypeScript · FastAPI · PostgreSQL · PWA",
  },
  {
    title: "Smart Accounting",
    type: "SaaS · Accounting Automation",
    status: "Advanced product",
    description:
      "Accounting platform with invoice and receipt processing, OCR-assisted document extraction, draft bookkeeping transactions, bank reconciliation, accountant workflows, and Dutch ZZP administration features.",
    stack: "React · FastAPI · PostgreSQL · Redis · OCR · Docker",
  },
  {
    title: "AqarFlow CRM",
    type: "SaaS · Real Estate",
    status: "Advanced product",
    description:
      "Arabic-first multi-tenant real-estate CRM covering pipeline, property inventory, customer matching, viewings, contracts, finance, maintenance, portals, audit events, and management decision support.",
    stack: "Next.js · FastAPI · PostgreSQL · Redis · MinIO",
  },
  {
    title: "E-commerce Platform",
    type: "Commerce · Platform Engineering",
    status: "Commerce foundation complete",
    description:
      "Self-hosted European jewelry commerce platform with bilingual storefront, product discovery, cart and checkout, Stripe and Mollie payments, VAT handling, Cloudinary media, and merchant administration.",
    stack: "Next.js · Medusa.js · PostgreSQL · Redis · Stripe · Mollie",
  },
  {
    title: "Smart Rooster",
    type: "Product · Workforce Scheduling",
    status: "Functional MVP",
    description:
      "Workforce scheduling product for employee availability, target hours, shift configuration, automatic schedule generation, swaps, time off, templates, and PDF/CSV export.",
    stack: "React 19 · TypeScript · Tailwind · GitHub Spark",
  },
  {
    title: "SmartOrder Hub",
    type: "Product · Restaurant Operations",
    status: "Prototype",
    description:
      "Restaurant operations concept combining orders, POS, kitchen display, analytics, role-based access, delivery-platform views, and routing workflows in one dashboard.",
    stack: "Node.js · Express · JavaScript · Docker",
  },
  {
    title: "Bayti Syria",
    type: "Platform · Travel & Hospitality",
    status: "Foundation / in development",
    description:
      "Syrian accommodation marketplace architecture for verified properties, booking workflows, host and admin dashboards, local payment flows, messaging, and reviews.",
    stack: "Next.js · TypeScript · Express · PostgreSQL · Docker",
  },
  {
    title: "Al Muheet ERP",
    type: "Enterprise · ERP",
    status: "Strategic build",
    description:
      "Arabic-first modular ERP designed around accounting, inventory, sales, purchasing, POS, multi-company operations, auditability, and long-term business management.",
    stack: "Next.js · NestJS · TypeScript · PostgreSQL · Prisma",
  },
  {
    title: "Field Distribution System",
    type: "Business Systems · Field Operations",
    status: "Architecture / implementation",
    description:
      "Multi-tenant distribution and billing system designed for offline field work, customer balances, invoices, returns, collections, Android synchronization, and Bluetooth ESC/POS printing.",
    stack: "Next.js · Node.js · PostgreSQL · Kotlin · Offline-first",
  },
  {
    title: "Solar Agro Tree",
    type: "Concept · Engineering Visualization",
    status: "Interactive concept",
    description:
      "Solar-agriculture infrastructure concept explored through geometry, land-use modeling, scalable cell layouts, and interactive technical visualization.",
    stack: "Simulation · Geometry · Visualization · Web",
  },
];

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="#top" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <nav className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="https://github.com/munjed80">GitHub</a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid min-h-[72vh] max-w-7xl content-center px-6 py-20 lg:px-10">
        <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Full-Stack Development · Business Systems · Public Sector
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[7.5rem]">
          I build systems for real operations, not software demos.
        </h1>
        <div className="mt-10 grid max-w-5xl gap-8 border-t border-[var(--line)] pt-7 md:grid-cols-3">
          <p className="text-lg leading-7 md:col-span-2">
            Developer and systems builder working across SaaS, ERP and CRM products, commerce,
            automation, infrastructure, and government digital transformation.
          </p>
          <p className="text-sm leading-6 text-[var(--muted)]">
            The work spans public administration, finance, real estate, commerce, scheduling, hospitality,
            restaurant operations, and field distribution.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex items-end justify-between border-b border-[var(--foreground)] pb-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Portfolio</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Selected systems & products</h2>
          </div>
          <span className="text-sm text-[var(--muted)]">01 — {String(projects.length).padStart(2, "0")}</span>
        </div>
        <div>
          {projects.map((project, index) => (
            <article key={project.title} className="grid gap-5 border-b border-[var(--line)] py-9 md:grid-cols-12">
              <div className="text-sm text-[var(--muted)] md:col-span-1">{String(index + 1).padStart(2, "0")}</div>
              <div className="md:col-span-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{project.type}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{project.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">{project.status}</p>
              </div>
              <p className="max-w-2xl leading-7 text-[var(--muted)] md:col-span-5">{project.description}</p>
              <p className="text-sm leading-6 md:col-span-2">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Public Sector</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em]">
              Digital transformation shaped around administrative reality, field constraints, and accountability.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Government work is presented as a core engineering discipline: workflow design, operational data,
              citizen-facing services, reporting, offline resilience, permissions, auditability, and deployment under real infrastructure constraints.
            </p>
          </div>
        </div>
      </section>

      <section id="profile" className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">Profile</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              From infrastructure and networks to products, platforms, and operational software.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              The portfolio is intentionally built around evidence: architecture, product decisions, operational constraints,
              case studies, screenshots, deployments, and working repositories where publication is appropriate.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© 2026 Munjed Alsaied</span>
        <span>Engineering · Products · Digital Transformation</span>
      </footer>
    </main>
  );
}
