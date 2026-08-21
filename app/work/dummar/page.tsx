export const metadata = {
  title: "Dummar Digital Transformation Platform | Munjed Alsaied",
  description:
    "Case study of a public-sector digital transformation platform for complaints, contracts, field execution, reporting, and low-connectivity operations.",
};

const capabilities = [
  "Citizen complaint intake and tracking",
  "Internal task and field-work coordination",
  "Operational and investment contract workflows",
  "Investment asset administration",
  "Role-based access and auditability",
  "PDF reporting and structured operational records",
  "Offline-aware and low-connectivity workflows",
  "Production deployment with PostgreSQL/PostGIS and Docker",
];

const architecture = [
  ["Frontend", "React · TypeScript · Vite · Tailwind"],
  ["Backend", "FastAPI · SQLAlchemy · Alembic"],
  ["Data", "PostgreSQL · PostGIS"],
  ["Operations", "Docker · nginx · production deployment"],
  ["Documents", "PDF generation · controlled uploads · OCR-supported workflows"],
];

export default function DummarCaseStudy() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="/" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <a href="/#work" className="text-sm text-[var(--muted)]">← Selected work</a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
        <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Public Sector · Digital Transformation
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[6.8rem]">
          Dummar Digital Transformation Platform
        </h1>
        <div className="mt-10 grid gap-8 border-t border-[var(--foreground)] pt-7 md:grid-cols-12">
          <p className="text-xl leading-8 md:col-span-7">
            A public-sector operations platform designed to replace fragmented administrative workflows with structured, traceable digital processes.
          </p>
          <div className="space-y-2 text-sm leading-6 text-[var(--muted)] md:col-span-5 md:pl-10">
            <p><span className="font-semibold text-[var(--foreground)]">Role:</span> Product architecture, workflow design, full-stack implementation and deployment direction</p>
            <p><span className="font-semibold text-[var(--foreground)]">Environment:</span> Government operations with legacy processes and constrained connectivity</p>
            <p><span className="font-semibold text-[var(--foreground)]">Status:</span> Operational platform</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">The problem</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em]">
              The engineering challenge was not simply to digitize forms. It was to create operational continuity across departments, field teams, contracts, complaints, and management reporting.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              The platform was shaped around real administrative constraints: disconnected records, manual follow-up, weak traceability, unreliable internet access, mixed office and field work, and the need to preserve clear responsibility for every action.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">System scope</p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-x-10 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <div key={item} className="border-t border-[var(--line)] py-5">
                  <span className="mr-4 text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">Architecture</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em]">A conventional, maintainable stack chosen for operational reliability.</h2>
              <div className="mt-10">
                {architecture.map(([label, value]) => (
                  <div key={label} className="grid gap-3 border-t border-neutral-700 py-5 sm:grid-cols-4">
                    <span className="text-sm text-neutral-400">{label}</span>
                    <span className="sm:col-span-3">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Design decisions</p>
          </div>
          <div className="space-y-10 lg:col-span-8">
            <div>
              <h3 className="text-2xl font-semibold">Workflow before interface</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Screens were designed around responsibility, status transitions, approvals, operational ownership, and evidence rather than around generic dashboard components.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Low-connectivity resilience</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The system treats poor connectivity as a design constraint, not an edge case. Critical workflows are structured to remain usable under unstable network conditions.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Traceability by default</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Role boundaries, activity records, contract trails, complaint status history, and controlled access were treated as core product requirements.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Public and internal surfaces are separated</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Citizen-facing complaint flows are kept distinct from privileged administrative functions, reducing friction for the public while preserving internal controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Public portfolio note</p>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-xl leading-8">
              This case study intentionally documents product architecture, operational scope, and engineering decisions without publishing confidential records, credentials, citizen data, or sensitive infrastructure details.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[var(--line)] px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© 2026 Munjed Alsaied</span>
        <a href="/#work">Back to selected work</a>
      </footer>
    </main>
  );
}
