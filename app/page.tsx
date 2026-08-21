const featuredProjects = [
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

const supportingProjects = [
  ["Syria Agriculture Operations", "Government MVP", "/work/syria-agriculture", "Public-sector operations · Offline-aware PWA"],
  ["E-commerce Platform", "Commerce foundation complete", "/work/ecommerce", "Next.js · Medusa · Stripe · Mollie"],
  ["Smart Rooster", "Functional MVP", undefined, "Workforce scheduling · React · TypeScript"],
  ["SmartOrder Hub", "Prototype", undefined, "Restaurant operations · Node.js · Express"],
  ["Bayti Syria", "Foundation / in development", undefined, "Travel & hospitality · Next.js · PostgreSQL"],
  ["Field Distribution System", "Architecture / implementation", undefined, "Offline field billing · Kotlin · PostgreSQL"],
  ["Solar Agro Tree", "Interactive concept", undefined, "Engineering visualization · Geometry · Web"],
] as const;

const capabilities = [
  "Public-sector digital transformation",
  "SaaS product architecture",
  "ERP / CRM operating systems",
  "Offline-first and low-connectivity workflows",
  "Commerce and payment infrastructure",
  "Linux / VPS / Docker deployment",
];

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-7 sm:px-6 lg:px-10">
        <a href="#top" className="text-xs font-bold tracking-[0.2em] sm:text-sm">MUNJED ALSAIED</a>
        <nav className="flex gap-4 text-xs text-[var(--muted)] sm:gap-6 sm:text-sm">
          <a href="#featured">Work</a>
          <a href="#profile">Profile</a>
          <a href="https://github.com/munjed80">GitHub</a>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm">
              Full-Stack Development · Business Systems · Public Sector
            </p>
            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[7.3rem]">
              Systems built for real operations.
            </h1>
          </div>
          <div className="lg:col-span-3 lg:pb-2">
            <p className="max-w-sm text-base leading-7 text-[var(--muted)]">
              SaaS, ERP, CRM, commerce, automation, infrastructure, and government digital transformation—presented through working systems, architecture, and operational constraints.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-[var(--foreground)] pt-6 sm:grid-cols-3 lg:mt-20">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Focus</p>
            <p className="mt-2 font-semibold">Operational software</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Range</p>
            <p className="mt-2 font-semibold">Government · SaaS · Enterprise</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Evidence</p>
            <p className="mt-2 font-semibold">Case studies · Architecture · Repositories</p>
          </div>
        </div>
      </section>

      <section id="featured" className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
          <div className="mb-12 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Featured work</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Four systems that best represent the depth of the work.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group flex min-h-[340px] flex-col justify-between border border-[var(--line)] bg-[var(--background)] p-7 transition hover:-translate-y-1 hover:border-[var(--foreground)] sm:p-9"
              >
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs text-[var(--muted)]">{project.index}</span>
                    <span className="text-right text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{project.status}</span>
                  </div>
                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">{project.type}</p>
                  <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">{project.description}</p>
                </div>
                <div className="mt-10 flex items-end justify-between gap-6 border-t border-[var(--line)] pt-5">
                  <p className="max-w-md text-xs leading-5 text-[var(--muted)]">{project.stack}</p>
                  <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mb-10 grid gap-6 border-b border-[var(--foreground)] pb-5 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">More systems</p>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Additional products and implementation work across public administration, commerce, scheduling, hospitality, distribution, and engineering visualization.
            </p>
          </div>
        </div>

        <div>
          {supportingProjects.map(([title, status, href, stack], index) => {
            const content = (
              <div className="grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-12 sm:items-center">
                <span className="text-xs text-[var(--muted)] sm:col-span-1">{String(index + 5).padStart(2, "0")}</span>
                <span className="text-xl font-semibold tracking-[-0.02em] sm:col-span-4">{title}</span>
                <span className="text-sm text-[var(--muted)] sm:col-span-4">{stack}</span>
                <span className="text-xs uppercase tracking-[0.1em] text-[var(--muted)] sm:col-span-3 sm:text-right">{status}</span>
              </div>
            );

            return href ? (
              <a key={title} href={href} className="block transition hover:pl-2">{content}</a>
            ) : (
              <div key={title}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Public sector</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Digital transformation shaped around administrative reality, field constraints, and accountability.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-300">
              Government systems are treated as operational engineering: citizen-facing services, internal responsibility, field execution, reporting, permissions, auditability, and resilience under imperfect infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Profile</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              From infrastructure and networks to full-stack products and digital operating systems.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              The work combines long-term systems experience with product architecture and implementation. The portfolio intentionally emphasizes evidence over labels: real constraints, architecture decisions, operational flows, maturity status, and published code where appropriate.
            </p>
            <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="bg-[var(--background)] p-5 text-sm font-semibold">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <span>© 2026 Munjed Alsaied</span>
          <div className="flex gap-5">
            <a href="https://github.com/munjed80">GitHub</a>
            <a href="#top">Top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
