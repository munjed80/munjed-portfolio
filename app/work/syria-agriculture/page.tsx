export const metadata = {
  title: "Syria Agriculture Operations — Munjed Alsaied",
  description:
    "Case study for an offline-aware government agriculture operations MVP focused on production, stock, expenses, tasks, and management reporting.",
};

const modules = [
  ["Production", "Track agricultural and livestock production by governorate, branch, project, date, and product type."],
  ["Stock & inputs", "Monitor feed, seeds, fertilizer, medicine, and essential materials with low-stock visibility."],
  ["Expenses", "Capture essential operating expenses by branch, project, activity, and category."],
  ["Tasks & reporting", "Assign work, record problems and progress, and generate printable PDF/Excel management reports."],
];

export default function SyriaAgricultureCaseStudy() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="/" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <a href="/#work" className="text-sm text-[var(--muted)]">← Selected work</a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Public Sector · Government Operations · MVP
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">
          Syria Agriculture Operations
        </h1>
        <p className="mt-9 max-w-3xl text-xl leading-8 text-[var(--muted)]">
          A deliberately focused government operations platform designed for weak-connectivity environments. The first version answers four management questions: what is being produced, what is in stock, what is being spent, and where operational problems exist.
        </p>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4 lg:px-10">
          {[
            ["Role", "Product & systems design"],
            ["Context", "Government agriculture operations"],
            ["Constraint", "Weak / intermittent internet"],
            ["Approach", "Mobile-first PWA · Offline-aware"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">01 — Problem</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em]">Digitize the decisions that management actually needs first.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            The project intentionally avoids beginning with a large government ERP. Its scope starts with a small operational core that can produce useful data quickly, reduce spreadsheet fragmentation, and remain usable when connectivity is unreliable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-10 border-b border-[var(--foreground)] pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">02 — MVP scope</p>
        </div>
        <div className="grid gap-0 md:grid-cols-2">
          {modules.map(([title, description]) => (
            <article key={title} className="border-b border-[var(--line)] py-8 md:odd:pr-10 md:even:border-l md:even:pl-10">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">03 — Architecture</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">Simple architecture, chosen for deployment reality.</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-neutral-400">Frontend</p>
                <p className="mt-2 text-lg">React · Vite · TypeScript · Tailwind · PWA · IndexedDB</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Backend & data</p>
                <p className="mt-2 text-lg">FastAPI · PostgreSQL · SQLAlchemy · JWT · RBAC</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Reporting</p>
                <p className="mt-2 text-lg">PDF and Excel exports for operational management</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Deliberately deferred</p>
                <p className="mt-2 text-lg">Native mobile, edge servers, Redis, MQTT, CouchDB, cross-ministry integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">04 — Product decisions</p>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-9">
            <div>
              <h3 className="text-2xl font-semibold">Offline-aware before feature-heavy</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The system is shaped around real connectivity limits. Local persistence and later synchronization are more important than adding secondary enterprise modules early.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Every screen should support a management decision</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The design principle is operational clarity: production, stock, cost, task progress, and problems must be visible without excessive complexity.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">RBAC and auditability from the beginning</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Public-sector systems need clear responsibility boundaries and traceable actions even when the first release is intentionally small.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Current status</p>
            <p className="mt-3 text-xl font-semibold">Government MVP / structured implementation foundation</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Publication boundary</p>
            <p className="mt-3 leading-7 text-[var(--muted)]">The portfolio presents the product model, architecture, and operational rationale only. Internal government data, credentials, deployment details, and sensitive workflows are not published.</p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-[var(--muted)] lg:px-10">
        <a href="/">Munjed Alsaied</a>
        <a href="/#work">Selected work ↑</a>
      </footer>
    </main>
  );
}
