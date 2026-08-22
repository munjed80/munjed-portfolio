import { PortfolioCaseSummary } from "../../../components/portfolio-case-summary";

export const metadata = { title: "Digital Syria Core | Munjed Alsaied" };

export default function DigitalSyriaCoreCaseStudy() {
  return (
    <PortfolioCaseSummary
      eyebrow="GovTech · Citizen Services · MVP Foundation"
      title="Digital Syria Core"
      status="Government MVP foundation"
      summary="A production-oriented MVP foundation for unified digital citizen services, built around a formal Arabic citizen portal, service catalog, request workflow, role-based government operations, notifications, dashboards, and auditability."
      stack="Next.js · TypeScript · FastAPI · SQLAlchemy · Alembic · JWT"
      sections={[
        { title: "Citizen journey", body: "Registration and login lead into an authenticated service catalog, application flow, request tracking, status history, notifications, and account management." },
        { title: "Government workflow", body: "Employee request handling, status changes, internal notes, supervisor summary data, and an admin foundation establish the operational side of citizen-service delivery." },
        { title: "Backend as source of truth", body: "FastAPI, SQLAlchemy, Alembic, JWT authentication, RBAC, versioned APIs, and audit logs provide the foundation instead of relying on a frontend-only demonstration." },
        { title: "Deliberate MVP boundary", body: "National identity, payment gateway, and ministry integrations are explicitly future phases rather than features claimed as already implemented." },
      ]}
      boundary="This is an MVP foundation using mock data, not a live national government system. The portfolio describes architecture and implemented flows without presenting it as an official Syrian state platform."
      repository="https://github.com/munjed80/Digital-syria-core"
    />
  );
}
