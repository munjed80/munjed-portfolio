import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://munjed80.github.io/munjed-portfolio/"),
  title: {
    default: "Munjed Alsaied — Full-Stack Developer & Digital Systems Architect",
    template: "%s | Munjed Alsaied",
  },
  description:
    "Portfolio of Munjed Alsaied: public-sector digital transformation, SaaS, ERP/CRM systems, commerce platforms, automation, and infrastructure engineering.",
  keywords: [
    "Munjed Alsaied",
    "Full-Stack Developer",
    "Digital Systems Architect",
    "Public Sector Digital Transformation",
    "SaaS",
    "ERP",
    "CRM",
    "Next.js",
    "FastAPI",
    "NestJS",
  ],
  authors: [{ name: "Munjed Alsaied" }],
  creator: "Munjed Alsaied",
  openGraph: {
    title: "Munjed Alsaied — Full-Stack Developer & Digital Systems Architect",
    description:
      "Operational software, public-sector digital transformation, SaaS, ERP/CRM systems, commerce, and infrastructure engineering.",
    type: "website",
    siteName: "Munjed Alsaied Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Munjed Alsaied — Full-Stack Developer & Digital Systems Architect",
    description:
      "Operational software, public-sector digital transformation, SaaS, ERP/CRM systems, commerce, and infrastructure engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Munjed Alsaied",
    url: "https://github.com/munjed80",
    sameAs: ["https://github.com/munjed80"],
    jobTitle: "Full-Stack Developer and Digital Systems Architect",
    knowsAbout: [
      "Full-stack development",
      "SaaS architecture",
      "ERP and CRM systems",
      "Public-sector digital transformation",
      "Infrastructure engineering",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
