type SystemMapProps = {
  title?: string;
  layers: Array<{
    label: string;
    items: string[];
  }>;
};

export function SystemMap({ title = "System architecture", layers }: SystemMapProps) {
  return (
    <section className="border-y border-[var(--line)] bg-white/35">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Architecture</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">{title}</h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.14em] text-[var(--muted)] sm:block">Verified from implementation</span>
        </div>

        <div className="grid gap-3">
          {layers.map((layer, index) => (
            <div key={layer.label} className="grid gap-3 border border-[var(--line)] bg-[var(--background)] p-5 md:grid-cols-12 md:items-start">
              <div className="md:col-span-3">
                <span className="mr-3 text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.12em]">{layer.label}</span>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-9">
                {layer.items.map((item) => (
                  <span key={item} className="border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
