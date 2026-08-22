import { PortfolioCaseSummary } from "../../../components/portfolio-case-summary";

export const metadata = { title: "Smart Inbox Platform | Munjed Alsaied" };

export default function SmartInboxCaseStudy() {
  return (
    <PortfolioCaseSummary
      eyebrow="SaaS · Customer Support Operations"
      title="Smart Inbox Platform"
      status="Full-stack support platform"
      summary="A bilingual customer-support operating platform for conversations, tickets, customers, reporting, and workspace administration, with a real backend, PostgreSQL persistence, authorization, validation, and Docker deployment."
      stack="Next.js 15 · Express · PostgreSQL · Prisma · JWT · Docker"
      sections={[
        { title: "Unified support workflow", body: "Inbox, tickets, customers, notes, assignments, priorities, filters, and reporting are organized around day-to-day support operations rather than isolated message views." },
        { title: "Full-stack persistence", body: "Express services and controllers sit over PostgreSQL and Prisma, with separate database services for authentication, conversations, tickets, customers, reports, and settings." },
        { title: "Security & validation", body: "JWT authentication, bcrypt password hashing, Zod validation, Helmet security headers, rate limiting, and role-aware authorization protect sensitive actions." },
        { title: "Dutch-market readiness", body: "The interface supports English and Dutch through next-intl, while Docker Compose and Coolify documentation provide a practical deployment path." },
      ]}
      boundary="Email, WhatsApp, and chat are represented as support channels in the product model. External provider integrations should be described only when configured and verified in a deployment."
    />
  );
}
