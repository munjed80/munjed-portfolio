import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munjed Alsaied — Full-Stack Developer & Digital Systems Architect",
  description:
    "Selected software, SaaS, public-sector digital transformation, automation, and infrastructure work by Munjed Alsaied.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
