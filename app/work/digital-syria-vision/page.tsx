import { PortfolioCaseSummary } from "../../../components/portfolio-case-summary";

export const metadata = { title: "Digital Syria Vision | Munjed Alsaied" };

export default function DigitalSyriaVisionCaseStudy() {
  return (
    <PortfolioCaseSummary
      eyebrow="Strategy · National Digital Transformation"
      title="Digital Syria Vision"
      status="Strategy & working prototype"
      summary="A national digital-transformation strategy and working prototype covering digital identity, government cloud, interoperability, citizen services, payments, cybersecurity, governance, procurement, roadmaps, and executive briefing material."
      stack="Strategy docs · OpenAPI 3.1 · Mermaid architecture · HTML/CSS/JS prototype"
      sections={[
        { title: "National architecture", body: "The proposal connects citizen identity, government data exchange, cloud infrastructure, payments, ministry onboarding, service delivery, and cybersecurity as one interoperable national program." },
        { title: "Governance & policy", body: "Data classification, citizen rights, accessibility, secure procurement, vendor-lock-in prevention, risk management, KPIs, and governance are treated as first-class transformation requirements." },
        { title: "Executive delivery", body: "The repository includes a 100-day action plan, 12- and 36-month roadmaps, ministerial speaking notes, a decision memo, objection handling, and an executive presentation package." },
        { title: "Working prototype", body: "A static Arabic citizen portal demonstrates services, request tracking, payments, notifications, consent, data-access logs, ministry dashboards, national command views, and cyber alerts using mock data only." },
      ]}
      boundary="This is a strategic proposal and non-functional working prototype, not an official or live Syrian government system. All prototype records are fictional mock data and all targets are planning scenarios rather than measured results."
      repository="https://github.com/munjed80/Digital-Syria-Vision"
    />
  );
}
