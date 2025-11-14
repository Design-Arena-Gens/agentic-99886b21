import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circuit POS | Modern POS SaaS",
  description: "Circuit POS is a fintech SaaS delivering omnichannel point-of-sale intelligence for growing retailers.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-midnight">{children}</body>
    </html>
  );
}
