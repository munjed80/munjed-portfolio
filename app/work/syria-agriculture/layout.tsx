import { SystemMap } from "../../../components/system-map";

export default function SyriaAgricultureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>main>footer]:hidden">
      {children}
      <SystemMap
        title="Offline-aware field data converted into management visibility"
        layers={[
          { label: "Field input", items: ["Production", "Stock & inputs", "Expenses", "Tasks & problems"] },
          { label: "Local resilience", items: ["Mobile-first PWA", "IndexedDB", "Offline-aware capture", "Later synchronization"] },
          { label: "Application", items: ["React", "TypeScript", "FastAPI", "JWT / RBAC"] },
          { label: "System of record", items: ["PostgreSQL", "SQLAlchemy", "Auditability", "Structured operational data"] },
          { label: "Management", items: ["Production visibility", "Low-stock awareness", "Cost visibility", "Task progress", "PDF / Excel reports"] },
        ]}
      />
      <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-[var(--muted)] lg:px-10">
        <a href="/">Munjed Alsaied</a>
        <a href="/#work">Selected work ↑</a>
      </footer>
    </div>
  );
}
