import { PortfolioCaseSummary } from "../../../components/portfolio-case-summary";

export const metadata = { title: "Syria Build | Munjed Alsaied" };

export default function SyriaBuildCaseStudy() {
  return (
    <PortfolioCaseSummary
      eyebrow="Public Sector · Reconstruction Operations"
      title="Syria Build"
      status="Implemented internal system"
      summary="A bilingual reconstruction project-tracking system for governorates and municipalities, combining project progress, contractors, payments, delays, technical notes, audit logs, and role-aware operational control."
      stack="React 19 · TypeScript · Express 5 · SQLite · Vitest · Docker"
      sections={[
        { title: "Project control", body: "Projects, phases, progress updates, technical notes, delays, files, contractors, and dashboard metrics are organized around reconstruction delivery rather than generic task management." },
        { title: "Financial oversight", body: "Payment records and finance-review roles connect project execution with financial follow-through and approval visibility." },
        { title: "Security model", body: "Session authentication, bcrypt password hashing, role-based write permissions, CSRF protection, rate limiting, password policy enforcement, and audit logs are implemented in the backend." },
        { title: "Verification", body: "The repository documents a production build path and 63 Vitest/Supertest tests covering server integration and password-policy behavior." },
      ]}
      boundary="Presented as an implemented internal reconstruction-management system. Deployment credentials, operational records, and government-sensitive data are intentionally excluded from the public portfolio."
    />
  );
}
