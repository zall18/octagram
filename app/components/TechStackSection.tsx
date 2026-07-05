"use client";

const techStack = [
  // Mobile
  { name: "Kotlin", emoji: "🟣", category: "Mobile" },
  { name: "Java", emoji: "☕", category: "Mobile" },
  { name: "Flutter", emoji: "🐦", category: "Mobile" },
  { name: "Dart", emoji: "🎯", category: "Mobile" },
  // Web Frontend
  { name: "JavaScript", emoji: "🟨", category: "Web" },
  { name: "TypeScript", emoji: "🔷", category: "Web" },
  { name: "React", emoji: "⚛️", category: "Web" },
  { name: "Next.js", emoji: "▲", category: "Web" },
  { name: "Vue.js", emoji: "💚", category: "Web" },
  { name: "Tailwind CSS", emoji: "🎨", category: "Web" },
  // Backend
  { name: "Node.js", emoji: "🟢", category: "Backend" },
  { name: "PHP", emoji: "🐘", category: "Backend" },
  { name: "Laravel", emoji: "🔴", category: "Backend" },
  { name: "Express.js", emoji: "⚡", category: "Backend" },
  // Database & ORM
  { name: "MySQL", emoji: "🐬", category: "Database" },
  { name: "PostgreSQL", emoji: "🐘", category: "Database" },
  { name: "Prisma ORM", emoji: "🔺", category: "Database" },
  { name: "Firebase", emoji: "🔥", category: "Database" },
  // Design & Tools
  { name: "Figma", emoji: "🎭", category: "Design" },
  { name: "Git", emoji: "🌿", category: "Tools" },
  { name: "VS Code", emoji: "🔵", category: "Tools" },
  { name: "Android Studio", emoji: "🤖", category: "Tools" },
  // Desktop
  { name: "Java Swing", emoji: "☕", category: "Desktop" },
  { name: "C#", emoji: "💜", category: "Desktop" },
];

// Duplicate for seamless marquee loop
const doubled = [...techStack, ...techStack];

export default function TechStackSection() {
  return (
    <section
      id="techstack"
      className="section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0faff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octa-blue/10 text-octa-blue text-sm font-medium mb-4">
            ⚡ Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-octa-dark mb-3">
            Teknologi yang Kami{" "}
            <span className="gradient-text">Kuasai</span>
          </h2>
          <p className="text-octa-dark/60 text-base max-w-xl mx-auto">
            Kami selalu menggunakan teknologi modern dan terupdate untuk
            memastikan produk yang kami bangun scalable dan maintainable.
          </p>
        </div>

        {/* Marquee Row 1 — left to right */}
        <div className="relative mb-4 overflow-hidden">
          <div className="flex gap-3 animate-marquee w-max">
            {doubled.map((tech, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-octa-border shadow-sm hover:border-octa-blue/40 hover:shadow-md hover:shadow-octa-blue/10 transition-all duration-200 whitespace-nowrap cursor-default group flex-shrink-0"
              >
                <span className="text-lg">{tech.emoji}</span>
                <span className="text-sm font-semibold text-octa-dark/80 group-hover:text-octa-blue transition-colors duration-200">
                  {tech.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-octa-bg text-octa-blue/70 font-medium">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Marquee Row 2 — right to left (reversed) */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-3 w-max"
            style={{
              animation: "marquee 50s linear infinite reverse",
            }}
          >
            {[...doubled].reverse().map((tech, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-octa-border shadow-sm hover:border-octa-blue/40 hover:shadow-md hover:shadow-octa-blue/10 transition-all duration-200 whitespace-nowrap cursor-default group flex-shrink-0"
              >
                <span className="text-lg">{tech.emoji}</span>
                <span className="text-sm font-semibold text-octa-dark/80 group-hover:text-octa-blue transition-colors duration-200">
                  {tech.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-octa-bg text-octa-blue/70 font-medium">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-octa-bg to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-octa-bg to-transparent pointer-events-none z-10" />
        </div>

        {/* Category summary */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-12">
          {[
            { label: "Mobile", count: 4, emoji: "📱" },
            { label: "Desktop", count: 2, emoji: "💻" },
            { label: "Web / Frontend", count: 6, emoji: "🌐" },
            { label: "Backend", count: 4, emoji: "⚙️" },
            { label: "Database", count: 4, emoji: "🗄️" },
            { label: "Design & Tools", count: 4, emoji: "🎨" },
          ].map((cat) => (
            <div
              key={cat.label}
              className="text-center p-4 rounded-2xl bg-white border border-octa-border hover:border-octa-blue/30 hover:shadow-md hover:shadow-octa-blue/8 transition-all duration-200"
            >
              <div className="text-2xl mb-1">{cat.emoji}</div>
              <div className="text-lg font-bold text-octa-blue">{cat.count}+</div>
              <div className="text-xs text-octa-dark/55 font-medium">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
