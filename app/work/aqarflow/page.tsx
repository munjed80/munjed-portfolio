export default function AqarFlowCaseStudy() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="/" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <a href="/" className="text-sm text-[var(--muted)]">Back to portfolio</a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          SaaS · Real Estate Operations
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem]">
          AqarFlow CRM
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-8 text-[var(--muted)]">
          An Arabic-first, multi-tenant real-estate operating platform that connects CRM, property inventory,
          customer matching, contracts, finance, maintenance, owner and tenant portals, and management decision support.
        </p>
      </section>

      <section className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4 lg:px-10">
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Status</p><p className="mt-2 font-semibold">Advanced product</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Interface</p><p className="mt-2 font-semibold">Arabic-first · RTL</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Architecture</p><p className="mt-2 font-semibold">Multi-tenant SaaS</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Domain</p><p className="mt-2 font-semibold">Real estate operations</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">01 — Context</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">Beyond a lead tracker.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Real-estate businesses do not operate through leads alone. Inventory, customer demand, viewings,
            reservations, contracts, installments, owner obligations, maintenance work, documents, and commissions
            all interact. AqarFlow was designed around that full operating model instead of treating CRM as an isolated module.
          </p>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-sm uppercase tracking-[0.16em] text-neutral-400">02 — Product Scope</p>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["CRM & Pipeline", "Organizations, leads, customer activity, follow-up, and structured opportunity management."],
              ["Property Inventory", "Property records, availability, ownership context, and inventory operations."],
              ["Matching & Viewings", "Customer-property matching, viewings, reservations, and handover workflows."],
              ["Contracts & Documents", "Sale and rental contracts, private documents, renewals, contract intelligence, and bounded OCR."],
              ["Finance", "Operational finance, scheduled installments, posted allocations, commissions, and owner statements."],
              ["Maintenance", "Maintenance requests, work orders, service levels, active cost estimates, and operational follow-through."],
              ["Owner & Tenant Portals", "Separated external experiences for owners and tenants rather than exposing internal back-office workflows."],
              ["Auditability", "Immutable audit events and role-aware operations for traceability across sensitive business actions."],
              ["Decision Support", "Arabic management views and portfolio forecasting built from inventory, contracts, installments, and maintenance data."],
            ].map(([title, description]) => (
              <article key={title} className="border-t border-neutral-700 pt-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-neutral-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">03 — Architecture</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">A production-oriented full-stack foundation.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              ["Frontend", "Next.js 16 · React 19 · TypeScript · Tailwind CSS · Radix UI"],
              ["Backend", "FastAPI · Python 3.12 · SQLAlchemy 2 async · Pydantic v2"],
              ["Data", "PostgreSQL 16 · Redis 7 · MinIO object storage"],
              ["Security", "JWT session versioning · Argon2 · HttpOnly refresh cookies · tenant scoping"],
              ["Delivery", "Docker Compose for development · production Dockerfiles · Alembic migrations"],
              ["Quality", "Backend tests · frontend lint/type-check/tests/build · documented development rules"],
            ].map(([title, description]) => (
              <div key={title} className="border-t border-[var(--line)] pt-4">
                <p className="font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">04 — Engineering Decisions</p>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold">Tenant isolation is foundational.</h3>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Organization boundaries are part of the architecture, not an interface filter added later. Operational and forecast data remain scoped to the active tenant.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Business records remain auditable.</h3>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Contracts, finance, maintenance, portals, and management actions are designed around traceable events and controlled permissions rather than opaque state changes.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Decision support does not invent data.</h3>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Portfolio forecasting separates currencies, surfaces missing schedules and assumptions, and avoids fabricating payment dates when source records do not contain them.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Document intelligence is bounded.</h3>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">OCR, retrieval, and contract concepts are constrained to defined document workflows instead of presenting unrestricted AI output as authoritative business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">05 — Current State</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">A broad operating system, still evolving deliberately.</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              The implemented scope already spans secure multi-tenancy, CRM, property operations, contracts, finance,
              maintenance, portals, audit events, dashboards, contract-document intelligence, and management decision support.
              External integrations such as WhatsApp, calendars, accounting providers, and broader forecasting remain planned rather than being presented as complete.
            </p>
            <a
              href="https://github.com/munjed80/aqarflow-crm"
              className="mt-10 inline-block border-b border-[var(--foreground)] pb-1 font-semibold"
            >
              View repository on GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
