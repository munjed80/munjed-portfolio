import { SystemMap } from "../../../components/system-map";

export default function AlMuheetLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SystemMap
        title="ERP modules coordinated through shared identity, data, printing, and local deployment"
        layers={[
          { label: "Business core", items: ["Accounting", "Sales", "Procurement", "Inventory", "Cash", "Budgeting", "Fixed assets"] },
          { label: "Control plane", items: ["IAM", "JWT sessions", "RBAC", "Audit logging", "Rate limiting", "Fiscal periods"] },
          { label: "Desktop workflow", items: ["Arabic RTL", "Tauri desktop", "First-run setup", "Lookup workflows", "Recent documents"] },
          { label: "Documents", items: ["A4 invoices", "Thermal invoices", "Vouchers", "Journal entries", "Trial balance", "P&L", "Balance sheet"] },
          { label: "Local operations", items: ["NestJS", "Prisma", "PostgreSQL", "Backup / restore", "Windows service", "Installer scaffolding"] },
          { label: "Verification", items: ["130 desktop tests", "134 API tests", "264 passing total", "Build stabilization"] },
        ]}
      />
    </>
  );
}
