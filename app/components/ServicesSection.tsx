"use client";

import { Globe, Smartphone, Monitor, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    emoji: "🌐",
    color: "from-blue-500/10 to-cyan-400/10",
    iconColor: "text-blue-500",
    packages: [
      {
        name: "Landing Page",
        desc: "Web 1 halaman, responsif, integrasi medsos & maps",
        price: "Rp 400k – Rp 850k",
        tech: ["HTML/Tailwind", "WordPress", "React/Vue", "Open Request Tech"],
      },
      {
        name: "Sistem Informasi / Web App",
        desc: "Dashboard admin, login user, CRUD lengkap",
        price: "Rp 1.200k – Rp 3.500k",
        tech: ["PHP/Laravel", "Node.js + Prisma", "Open Request Tech"],
      },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    emoji: "📱",
    color: "from-purple-500/10 to-pink-400/10",
    iconColor: "text-purple-500",
    packages: [
      {
        name: "Mobile App Basic",
        desc: "Aplikasi informasi, profil, atau katalog dinamis",
        price: "Rp 1.800k – Rp 3.000k",
        tech: ["Flutter", "Kotlin Native", "Open Request Tech"],
      },
      {
        name: "Mobile App Pro",
        desc: "Database online, API integration, fitur spesifik",
        price: "Rp 3.500k – Rp 6.000k++",
        tech: ["Flutter", "Kotlin High Perf", "Open Request Tech"],
      },
    ],
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop Application",
    emoji: "💻",
    color: "from-orange-500/10 to-yellow-400/10",
    iconColor: "text-orange-500",
    packages: [
      {
        name: "Aplikasi Kasir / Manajemen",
        desc: "Software offline langsung diinstall di PC/Laptop",
        price: "Rp 1.000k – Rp 2.500k",
        tech: ["Java", "C# Desktop"],
      },
    ],
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    emoji: "🎨",
    color: "from-green-500/10 to-teal-400/10",
    iconColor: "text-green-500",
    packages: [
      {
        name: "Design & Prototype",
        desc: "Desain visual lengkap sebelum dikoding",
        price: "Rp 250k – Rp 750k",
        tech: ["Figma", "Interactive Prototype"],
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="layanan"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #f0faff 0%, #ffffff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octa-blue/10 text-octa-blue text-sm font-medium mb-4">
            💼 Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-octa-dark mb-4">
            Apa yang Bisa{" "}
            <span className="gradient-text">OCTAGRAM Labs</span> Bantu?
          </h2>
          <p className="text-octa-dark/60 max-w-xl mx-auto text-base leading-relaxed">
            Kami menawarkan solusi digital yang fleksibel, dari desain hingga
            pengembangan penuh. Harga menyesuaikan kebutuhanmu.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-octa-border hover:border-octa-blue/40 shadow-sm hover:shadow-xl hover:shadow-octa-blue/10 transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative p-7">
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-octa-bg border border-octa-blue/15 ${service.iconColor}`}>
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-octa-dark">
                          {service.title}
                        </h3>
                        <span className="text-2xl">{service.emoji}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-octa-blue/10 text-octa-blue font-semibold px-2.5 py-1 rounded-full">
                      Tersedia
                    </span>
                  </div>

                  {/* Packages */}
                  <div className="space-y-4">
                    {service.packages.map((pkg, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-octa-bg/60 border border-octa-blue/8 hover:bg-octa-bg transition-colors duration-200"
                      >
                        <div className="flex items-start justify-between mb-1.5 flex-wrap gap-1">
                          <span className="font-semibold text-sm text-octa-dark">
                            {pkg.name}
                          </span>
                          <span className="text-xs font-bold text-octa-blue whitespace-nowrap">
                            {pkg.price}
                          </span>
                        </div>
                        <p className="text-xs text-octa-dark/55 mb-2 leading-relaxed">
                          {pkg.desc}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {pkg.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-octa-blue/20 text-octa-blue/80 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    id={`cta-service-${service.id}`}
                    href={`https://wa.me/6289514373399?text=Halo%20OCTAGRAM%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-octa-blue/30 text-octa-blue text-sm font-semibold hover:bg-octa-blue hover:text-white hover:border-octa-blue transition-all duration-200 group/btn"
                  >
                    Pesan Layanan Ini
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom request note */}
        <div className="mt-10 p-6 rounded-3xl bg-octa-blue text-white text-center shadow-xl shadow-octa-blue/30">
          <div className="text-2xl mb-2">🛠️</div>
          <h3 className="font-bold text-lg mb-1">Ada Kebutuhan Khusus?</h3>
          <p className="text-white/80 text-sm mb-4">
            Kami mendukung{" "}
            <strong>sistem &quot;Tech by Request&quot;</strong> — pilih teknologi yang
            sesuai budget dan kebutuhan proyekmu.
          </p>
          <a
            id="cta-custom-request"
            href="https://wa.me/6289514373399?text=Halo%20OCTAGRAM%20Labs%2C%20saya%20punya%20kebutuhan%20khusus%20yang%20ingin%20didiskusikan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-white text-octa-blue font-bold text-sm hover:bg-octa-bg active:scale-95 transition-all duration-200 shadow-md"
          >
            Diskusi Kebutuhan Saya
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
