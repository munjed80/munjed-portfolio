import { SystemMap } from "../../../components/system-map";

export default function AqarFlowLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SystemMap
        title="From demand and inventory to contracts, operations, and management decisions"
        layers={[
          { label: "Demand", items: ["Leads & customers", "Requirements", "Follow-up", "CRM pipeline"] },
          { label: "Inventory", items: ["Properties", "Availability", "Ownership context", "Customer-property matching"] },
          { label: "Transactions", items: ["Viewings", "Reservations", "Sale / rental contracts", "Private documents", "Handovers & renewals"] },
          { label: "Operations", items: ["Installments", "Commissions", "Owner statements", "Maintenance", "Owner & tenant portals"] },
          { label: "Control", items: ["Tenant isolation", "Immutable audit events", "Contract intelligence", "Management decision center", "Portfolio forecast"] },
          { label: "Platform", items: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "MinIO", "Docker"] },
        ]}
      />
    </>
  );
}
