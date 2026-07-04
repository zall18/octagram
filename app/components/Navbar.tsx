"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#karya", label: "Karya" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${scrolled
        ? "glass shadow-lg shadow-blue-100/40 rounded-full mx-8"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/logo.svg"
            alt="OCTAGRAM Labs Logo"
            width={36}
            height={36}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-lg text-octa-dark leading-tight">
            OCTAGRAM <span className="text-octa-blue">Labs</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-octa-dark/80 hover:text-octa-blue hover:bg-octa-blue/8 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6289514373399"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-octa-blue text-white text-sm font-semibold rounded-xl hover:bg-octa-blue-dark active:scale-95 transition-all duration-200 shadow-md shadow-octa-blue/30"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-octa-dark hover:bg-octa-blue/10 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="glass border-t border-octa-blue/10 px-5 pb-5 pt-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 rounded-xl text-sm font-medium text-octa-dark/80 hover:text-octa-blue hover:bg-octa-blue/8 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/6289514373399"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-octa-blue text-white text-sm font-semibold rounded-xl text-center hover:bg-octa-blue-dark transition-all duration-200 shadow-md shadow-octa-blue/30"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </header>
  );
}
