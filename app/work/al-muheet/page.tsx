export default function AlMuheetCaseStudy() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="/" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <a href="/#work" className="text-sm text-[var(--muted)]">Back to work</a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Enterprise · ERP · Arabic-first
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Al Muheet ERP
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-9 text-[var(--muted)]">
          A modular Arabic-first ERP implementation built around accounting, inventory, sales, procurement,
          cash, budgeting, fixed assets, auditability, local desktop deployment, and long-term operational ownership.
        </p>

        <div className="mt-12 grid gap-8 border-y border-[var(--line)] py-8 md:grid-cols-4">
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Status</p><p className="mt-2 font-semibold">Core implementation complete</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Frontend</p><p className="mt-2 font-semibold">Next.js · Tauri · RTL Arabic</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Backend</p><p className="mt-2 font-semibold">NestJS · Prisma · PostgreSQL</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Verification</p><p className="mt-2 font-semibold">264 tests passing</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Product thesis</p>
        </div>
        <div className="space-y-7 lg:col-span-8">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">An ERP designed as an operating system, not an accounting clone.</h2>
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
            The architecture treats accounting as the financial engine, inventory as the operational engine,
            and reporting as the decision layer. The product is structured for Arabic business workflows and for
            environments where a local desktop installation may be preferable to cloud-only software.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Implemented core</p></div>
          <div className="grid gap-7 sm:grid-cols-2 lg:col-span-8">
            {[
              ["Accounting", "Chart of accounts, journal entries, fiscal years and periods, general ledger and financial reporting foundations."],
              ["Operations", "Sales, procurement, inventory, cash, budgeting, fixed assets, closing and workflow modules."],
              ["IAM & audit", "Argon2 password hashing, JWT authentication, RBAC, sessions, audit logging and login rate limiting."],
              ["Desktop delivery", "Arabic RTL desktop experience wrapped with Tauri, first-run setup, local service recovery and Windows installer scaffolding."],
              ["Print layer", "A4 and thermal invoices, vouchers, journal entries, trial balance, P&L and balance-sheet renderers with reprint detection."],
              ["Local operations", "Setup flow, Syria-ready chart of accounts seed, monthly fiscal periods, backup/restore hooks and offline-local installation assumptions."],
            ].map(([title, body]) => (
              <article key={title} className="border-t border-[var(--line)] pt-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Engineering decisions</p></div>
        <div className="space-y-10 lg:col-span-8">
          <div>
            <h3 className="text-2xl font-semibold">Documentation and domain modeling before feature velocity</h3>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The project deliberately prioritizes accounting correctness, module boundaries, database design, and deployment behavior over rapidly accumulating loosely connected screens.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Local-first enterprise deployment</h3>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Tauri, Windows installer scaffolding, PostgreSQL bootstrap scripts, service management, backup and restore are treated as part of the product rather than afterthoughts.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Security as a platform capability</h3>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Identity, permissions, session management and audit logging are centralized in a production-oriented IAM layer so future ERP modules can reuse the same authorization model.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4"><p className="text-sm uppercase tracking-[0.16em] text-neutral-400">Current boundaries</p></div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">Strong core, with production validation still intentionally visible.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              Windows installer end-to-end validation still requires a Windows runner. API integration tests need a live PostgreSQL environment,
              automatic token refresh remains to be wired into the desktop client, and some lookup and unsaved-change helpers are built but not yet integrated everywhere.
              The portfolio therefore presents Al Muheet as a substantial ERP implementation—not a finished commercial rollout.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <a href="/" className="font-semibold text-[var(--foreground)]">← Portfolio</a>
        <span>Al Muheet ERP · Case Study</span>
      </footer>
    </main>
  );
}
