"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-octa-dark text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.svg"
                alt="OCTAGRAM Labs"
                width={32}
                height={32}
                style={{ width: 32, height: 32 }}
                className="brightness-200"
              />
              <span className="font-bold text-lg text-white">
                OCTAGRAM{" "}
                <span className="text-octa-blue-light">Labs</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Solusi digital terjangkau untuk UMKM dan pelajar. Kualitas
              profesional, harga bersahabat.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/octagramstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram OCTAGRAM Labs"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-octa-blue flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://wa.me/6289514373399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp OCTAGRAM Labs"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm text-white/80 uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-white/50 hover:text-octa-blue-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-white/80 uppercase tracking-wider mb-4">
              Layanan
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile App (Flutter & Kotlin)",
                "Desktop Application",
                "UI/UX Design & Prototype",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © 2026 <span className="text-white/60 font-medium">OCTAGRAM Labs</span>. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-octa-blue-light transition-colors duration-200 group"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
