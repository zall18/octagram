"use client";

const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Diskusi",
    desc: "Ceritakan kebutuhanmu. Kita ngobrol dulu via WhatsApp untuk pahami visi dan tujuan proyekmu secara detail.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    number: "02",
    emoji: "🎨",
    title: "Desain",
    desc: "Tim desainer kami membuat wireframe dan prototype di Figma. Kamu bisa review dan minta revisi sampai puas.",
    color: "from-purple-500 to-pink-400",
    bg: "bg-purple-50",
  },
  {
    number: "03",
    emoji: "💻",
    title: "Koding",
    desc: "Setelah desain disetujui, tim developer mulai membangun aplikasimu dengan teknologi pilihan yang paling sesuai.",
    color: "from-orange-500 to-yellow-400",
    bg: "bg-orange-50",
  },
  {
    number: "04",
    emoji: "🚀",
    title: "Rilis",
    desc: "Testing menyeluruh, lalu produk diluncurkan! Kami memastikan semua berjalan sempurna sebelum serah terima.",
    color: "from-green-500 to-teal-400",
    bg: "bg-green-50",
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #f0faff 0%, #ffffff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octa-blue/10 text-octa-blue text-sm font-medium mb-4">
            🔄 Cara Kerja
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-octa-dark mb-3">
            4 Langkah{" "}
            <span className="gradient-text">Mudah</span> Bekerja Sama
          </h2>
          <p className="text-octa-dark/60 text-base max-w-xl mx-auto">
            Proses yang transparan dan kolaboratif dari awal hingga selesai.
            Kamu selalu tahu apa yang sedang terjadi.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-400 via-purple-400 via-orange-400 to-green-400 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden absolute left-8 top-full h-6 w-px bg-gradient-to-b from-octa-blue/30 to-transparent z-10" />
                )}

                <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-octa-border hover:border-octa-blue/30 shadow-sm hover:shadow-xl hover:shadow-octa-blue/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Step number + emoji */}
                  <div className="relative mb-5">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-2xl">{step.emoji}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-octa-dark text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-octa-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-octa-dark/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <p className="text-octa-dark/60 text-sm mb-4">
            Siap memulai perjalanan digitalmu? Konsultasi pertama gratis!
          </p>
          <a
            href="https://wa.me/6289514373399?text=Halo%20OCTAGRAM%20Labs%2C%20saya%20ingin%20konsultasi%20proyek%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-octa-blue text-white font-bold rounded-2xl hover:bg-octa-blue-dark active:scale-95 transition-all duration-200 shadow-xl shadow-octa-blue/30"
          >
            💬 Mulai Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
