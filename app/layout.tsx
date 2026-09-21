import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rachel's Refuge",
    template: "Rachel's Refuge | %s",
  },
  description:
    "Rachel's Refuge creates opportunities for girls and women through basketball, mentorship, education, and leadership.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
