"use client";

// Portfolio section — hidden until real projects are available
// Uncomment className to show: remove "hidden" from the section tag

const portfolioItems = [
  {
    id: 1,
    title: "Proyek 1",
    category: "Web Development",
    tech: ["React", "Laravel"],
    emoji: "🌐",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Proyek 2",
    category: "Mobile App",
    tech: ["Flutter", "Firebase"],
    emoji: "📱",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 3,
    title: "Proyek 3",
    category: "UI/UX Design",
    tech: ["Figma"],
    emoji: "🎨",
    color: "from-green-400 to-teal-400",
  },
];

export default function PortfolioSection() {
  return (
    // HIDDEN: Remove "hidden" class when portfolio is ready
    <section id="karya" className="hidden section-padding">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octa-blue/10 text-octa-blue text-sm font-medium mb-4">
            🏆 Portofolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-octa-dark mb-3">
            Karya <span className="gradient-text">Terbaik</span> Kami
          </h2>
          <p className="text-octa-dark/60 text-base max-w-xl mx-auto">
            Beberapa proyek yang telah kami selesaikan dengan penuh dedikasi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-white border border-octa-border hover:border-octa-blue/40 shadow-sm hover:shadow-xl hover:shadow-octa-blue/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div
                className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-6xl">{item.emoji}</div>
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s infinite",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-octa-blue font-semibold bg-octa-bg px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-bold text-octa-dark mt-3 mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-octa-bg border border-octa-border text-octa-dark/60 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
