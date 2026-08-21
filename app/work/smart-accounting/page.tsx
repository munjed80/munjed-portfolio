import { SystemMap } from "../../../components/system-map";

export default function SmartAccountingCaseStudy() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="/" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <a href="/" className="text-sm text-[var(--muted)]">Back to portfolio</a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pb-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">SaaS · Accounting Automation</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Smart Accounting</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted)]">A Dutch-oriented accounting platform that turns uploaded invoices and receipts into structured bookkeeping workflows, combining OCR-assisted document processing, draft transactions, bank reconciliation, accountant review, and operational administration for self-employed professionals.</p>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4 lg:px-10">
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Product maturity</p><p className="mt-2 font-semibold">Advanced product</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Primary market</p><p className="mt-2 font-semibold">Netherlands · ZZP</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Core architecture</p><p className="mt-2 font-semibold">React · FastAPI · PostgreSQL · Redis</p></div>
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Deployment</p><p className="mt-2 font-semibold">Docker · Coolify-oriented</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">The problem</p></div>
        <div className="lg:col-span-8">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em]">Small-business accounting still contains too much repetitive document work.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">Invoices, receipts, bank transactions, customer administration, hours, VAT-oriented records, and accountant review are often handled across disconnected tools. The product was designed around one practical question: how much of that routine can be converted into a controlled workflow without removing human review from financial decisions?</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {[
            ["Document intake", "Users upload invoices and receipts in image or PDF form. Files enter a processing queue rather than being treated as isolated attachments."],
            ["OCR-assisted extraction", "The worker extracts document text with PDF parsing and OCR when needed, then converts useful document information into a structured accounting workflow."],
            ["Draft bookkeeping", "Processed documents create draft transactions for review instead of silently posting financial entries. Debit and credit integrity remains explicit."],
            ["Bank reconciliation", "Accountant-oriented workflows import bank statements, surface matching suggestions, apply reconciliation actions, and keep an audit trail."],
            ["ZZP administration", "The broader product includes practical Dutch self-employed workflows such as customers, invoices, hours, company settings, and administration."],
            ["Operational reliability", "PostgreSQL, Redis Streams, worker separation, health checks, Docker deployment, and idempotency controls keep document processing separate from the user-facing API."],
          ].map(([title, body]) => (
            <article key={title} className="bg-[var(--background)] p-8"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{body}</p></article>
          ))}
        </div>
      </section>

      <SystemMap
        title="Document-to-ledger flow"
        layers={[
          { label: "Input", items: ["Invoices", "Receipts", "Bank statements", "PDF / image uploads"] },
          { label: "Processing", items: ["Redis Streams", "PDF parsing", "Tesseract OCR", "Restartable worker jobs"] },
          { label: "Accounting", items: ["Draft transactions", "Debit / credit checks", "Reconciliation", "Audit trail"] },
          { label: "Application", items: ["React", "FastAPI", "PostgreSQL", "Docker"] },
        ]}
      />

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4"><p className="text-sm uppercase tracking-[0.18em] text-neutral-400">Architecture notes</p></div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em]">Separate the accounting workflow from document processing.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div><p className="font-semibold">Application layer</p><p className="mt-3 leading-7 text-neutral-300">React and TypeScript frontend, FastAPI backend, SQLAlchemy and Alembic for persistence and migrations, PostgreSQL as the system of record.</p></div>
              <div><p className="font-semibold">Processing layer</p><p className="mt-3 leading-7 text-neutral-300">Redis Streams decouples uploaded documents from the worker process. PDF parsing and Tesseract OCR run outside the request path so extraction failures do not block the core application.</p></div>
              <div><p className="font-semibold">Accounting controls</p><p className="mt-3 leading-7 text-neutral-300">Documents create reviewable drafts, reconciliation actions are recorded, and final posting remains subject to accounting balance rules.</p></div>
              <div><p className="font-semibold">Deployment model</p><p className="mt-3 leading-7 text-neutral-300">Dockerized services with explicit frontend build-time configuration, backend runtime configuration, health checks, migrations, and production deployment guidance.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Product decisions</p></div>
        <div className="space-y-10 lg:col-span-8">
          <div><h3 className="text-2xl font-semibold">Automation produces drafts, not unquestioned truth.</h3><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Financial automation is useful when it reduces repetitive work without hiding uncertainty. OCR and matching assistance feed a review flow rather than bypassing bookkeeping controls.</p></div>
          <div><h3 className="text-2xl font-semibold">Accountants and ZZP users need different workflows.</h3><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The product separates client administration from accountant review concerns, including active-client scoping and bank reconciliation operations.</p></div>
          <div><h3 className="text-2xl font-semibold">Processing must be restartable.</h3><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Document jobs move through explicit states and can be retried. Idempotency safeguards matter because a failed worker should not create duplicate accounting transactions when a document is reprocessed.</p></div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Repository</p><p className="mt-2 font-semibold">munjed80/smart-accounting-pla</p></div>
          <a href="https://github.com/munjed80/smart-accounting-pla" className="text-sm font-semibold underline underline-offset-8">View public repository</a>
        </div>
      </section>
    </main>
  );
}
