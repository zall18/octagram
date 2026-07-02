import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octagram",
  description: "Here to help your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
