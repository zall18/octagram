import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OCTAGRAM Labs — Solusi Digital Terjangkau",
  description:
    "Jasa pembuatan Website, Mobile App, Desktop App, dan UI/UX Design untuk UMKM dan Pelajar. Harga bersahabat, kualitas profesional.",
  keywords:
    "freelance developer, web development, mobile app, UI/UX design, Flutter, Kotlin, Next.js, Indonesia",
  openGraph: {
    title: "OCTAGRAM Labs — Solusi Digital Terjangkau",
    description:
      "Jasa pembuatan Website, Mobile App, Desktop App, dan UI/UX Design untuk UMKM dan Pelajar.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: 'logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
