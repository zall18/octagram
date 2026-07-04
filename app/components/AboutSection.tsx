"use client";

import Image from "next/image";
import { Target, Users, Zap, Award } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Focused on Results",
    desc: "Kami tidak hanya membuat aplikasi — kami membangun solusi yang benar-benar menjawab masalahmu.",
  },
  {
    icon: Users,
    title: "Client-First",
    desc: "Kamu selalu tahu perkembangan proyek. Komunikasi terbuka di setiap tahap pengerjaan.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Menggunakan workflow modern dan tools terkini untuk pengerjaan yang efisien tanpa mengorbankan kualitas.",
  },
  {
    icon: Award,
    title: "Kualitas Profesional",
    desc: "Standar kode yang bersih, desain yang indah, dan produk yang siap pakai — di harga yang ramah di kantong.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0faff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octa-blue/10 text-octa-blue text-sm font-medium mb-5">
              👋 Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-octa-dark mb-5 leading-tight">
              Kami adalah{" "}
              <span className="gradient-text">OCTAGRAM Labs</span>
            </h2>
            <p className="text-octa-dark/65 leading-relaxed mb-4 text-base">
              OCTAGRAM Labs adalah tim freelance yang berdedikasi menghadirkan
              solusi teknologi digital berkualitas tinggi dengan harga yang
              terjangkau. Kami lahir dari semangat mahasiswa yang ingin membuktikan
              bahwa{" "}
              <strong className="text-octa-dark/80">
                kualitas profesional tidak harus mahal.
              </strong>
            </p>
            <p className="text-octa-dark/65 leading-relaxed mb-6 text-base">
              Dengan menguasai lebih dari 15+ teknologi modern — mulai dari
              pengembangan web, aplikasi mobile (Android &amp; iOS), desktop, hingga
              desain UI/UX — kami siap menjadi mitra digital terpercaya untuk UMKM,
              pelajar, dan siapapun yang butuh solusi digital.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "15+", label: "Teknologi" },
                { value: "4", label: "Layanan" },
                { value: "100%", label: "Dedikasi" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-2xl bg-white border border-octa-border shadow-sm"
                >
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-octa-dark/55 font-medium mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6289514373399?text=Halo%20OCTAGRAM%20Labs%2C%20saya%20ingin%20mengenal%20tim%20kalian%20lebih%20jauh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-octa-blue text-white font-semibold rounded-2xl hover:bg-octa-blue-dark active:scale-95 transition-all duration-200 shadow-lg shadow-octa-blue/30"
            >
              💬 Ngobrol dengan Kami
            </a>
          </div>

          {/* Right: Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-white border border-octa-border hover:border-octa-blue/30 shadow-sm hover:shadow-lg hover:shadow-octa-blue/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-octa-bg border border-octa-blue/15 flex items-center justify-center text-octa-blue mb-3 group-hover:bg-octa-blue group-hover:text-white transition-all duration-300">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-sm text-octa-dark mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-octa-dark/55 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
