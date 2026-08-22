type CaseSection = { title: string; body: string };

type PortfolioCaseSummaryProps = {
  eyebrow: string;
  title: string;
  status: string;
  summary: string;
  stack: string;
  sections: CaseSection[];
  boundary?: string;
  repository?: string;
};

export function PortfolioCaseSummary({ eyebrow, title, status, summary, stack, sections, boundary, repository }: PortfolioCaseSummaryProps) {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 sm:px-6 lg:px-10">
        <a href="/" className="text-xs font-bold tracking-[0.2em] sm:text-sm">MUNJED ALSAIED</a>
        <a href="/#featured" className="text-sm text-[var(--muted)]">← Portfolio</a>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 lg:px-10 lg:pt-24">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl">{title}</h1>
        <div className="mt-10 grid gap-8 border-t border-[var(--foreground)] pt-7 lg:grid-cols-12">
          <p className="max-w-4xl text-xl leading-8 lg:col-span-8">{summary}</p>
          <div className="space-y-3 text-sm leading-6 text-[var(--muted)] lg:col-span-4">
            <p><strong className="text-[var(--foreground)]">Status:</strong> {status}</p>
            <p><strong className="text-[var(--foreground)]">Stack:</strong> {stack}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-20 sm:grid-cols-2 sm:px-6 lg:px-10">
          {sections.map((section) => (
            <article key={section.title} className="border-t border-[var(--line)] py-7 sm:odd:pr-8 sm:even:pl-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{section.title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      {boundary && (
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Publication boundary</p>
          <p className="mt-5 max-w-4xl text-xl leading-8">{boundary}</p>
        </section>
      )}

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <a href="/#featured">← Selected work</a>
          {repository ? <a href={repository}>View repository ↗</a> : <span>Private or selectively published project</span>}
        </div>
      </footer>
    </main>
  );
}
