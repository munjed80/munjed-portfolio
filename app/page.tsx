const projects = [
  {
    title: "Dummar Digital Transformation Platform",
    type: "Public Sector · Digital Transformation",
    description:
      "An Arabic operations platform designed around complaints, executive work, projects, investment assets, contracts, reporting, and resilient workflows for low-connectivity environments.",
    stack: "FastAPI · PostgreSQL · PostGIS · Redis · PWA",
  },
  {
    title: "Government Agriculture Digital Project",
    type: "Public Sector · Government Systems",
    description:
      "Digital platform work for public-sector agricultural operations, focused on turning administrative processes and field information into structured digital workflows.",
    stack: "Web Platform · Data · Workflow Design",
  },
  {
    title: "AqarFlow CRM",
    type: "Product · Real Estate",
    description:
      "Arabic-first real-estate CRM for managing leads, properties, customer activity, operational workflows, and structured follow-up.",
    stack: "CRM · Arabic RTL · Automation",
  },
  {
    title: "ZZPers Hub",
    type: "SaaS · Netherlands",
    description:
      "Administrative SaaS for self-employed professionals covering invoices, expenses, hours, VAT-oriented workflows, and business administration.",
    stack: "Next.js · TypeScript · SaaS",
  },
  {
    title: "Commerce Platform",
    type: "Commerce · Platform Engineering",
    description:
      "Modern commerce architecture separating the storefront from the commerce backend, with payments, catalog, data, and deployment concerns treated as one product system.",
    stack: "Next.js · Medusa · PostgreSQL · Redis",
  },
  {
    title: "Solar Agro Tree",
    type: "Concept · Engineering Visualization",
    description:
      "A solar-agriculture infrastructure concept explored through geometry, land-use modeling, and interactive technical presentation.",
    stack: "Simulation · Visualization · Web",
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
          Full-Stack Development · Digital Systems · Public Sector
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[7.5rem]">
          I build systems that move work from paper and friction into software.
        </h1>
        <div className="mt-10 grid max-w-5xl gap-8 border-t border-[var(--line)] pt-7 md:grid-cols-3">
          <p className="text-lg leading-7 md:col-span-2">
            Developer and systems builder working across SaaS, business platforms, automation,
            infrastructure, and government digital transformation.
          </p>
          <p className="text-sm leading-6 text-[var(--muted)]">
            Based between technology, operations, and implementation — with a focus on systems that are actually used.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex items-end justify-between border-b border-[var(--foreground)] pb-5">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Selected work</h2>
          <span className="text-sm text-[var(--muted)]">01 — 06</span>
        </div>
        <div>
          {projects.map((project, index) => (
            <article key={project.title} className="grid gap-5 border-b border-[var(--line)] py-9 md:grid-cols-12">
              <div className="text-sm text-[var(--muted)] md:col-span-1">0{index + 1}</div>
              <div className="md:col-span-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{project.type}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{project.title}</h3>
              </div>
              <p className="max-w-2xl leading-7 text-[var(--muted)] md:col-span-5">{project.description}</p>
              <p className="text-sm leading-6 md:col-span-2">{project.stack}</p>
            </article>
          ))}
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
              My work spans technical infrastructure, full-stack product development, SaaS, automation, and systems designed around real operational constraints. The portfolio will document selected projects as case studies, not as a list of technologies.
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
