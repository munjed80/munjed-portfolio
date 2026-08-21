import { SystemMap } from "../../../components/system-map";

export default function SyriaAgricultureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
