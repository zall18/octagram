"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0faff 0%, #ffffff 50%, #e8f5ff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0098ff, transparent)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2fabff, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, #0098ff, transparent)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0098ff 1px, transparent 1px), linear-gradient(90deg, #0098ff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-octa-blue/10 border border-octa-blue/20 text-octa-blue text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-octa-blue animate-pulse inline-block" />
              Open for Projects — Indonesia
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-octa-dark mb-5 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Solusi Digital{" "}
              <span className="gradient-text">Terjangkau</span>
              <br />
              Untuk Bisnis &amp;{" "}
              <span className="gradient-text">Kreativitas</span> Anda
            </h1>

            {/* Sub-headline */}
            <p
              className="text-base md:text-lg text-octa-dark/65 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Jasa pembuatan Website, Mobile App, dan UI/UX untuk UMKM dan
              Pelajar.{" "}
              <span className="font-semibold text-octa-dark/80">
                Harga bersahabat, kualitas profesional.
              </span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                id="cta-mulai-proyek"
                href="https://wa.me/6289514373399"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-octa-blue text-white font-semibold rounded-2xl hover:bg-octa-blue-dark active:scale-95 transition-all duration-200 shadow-xl shadow-octa-blue/30 hover:shadow-octa-blue/50"
              >
                Mulai Proyek
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <button
                id="cta-lihat-layanan"
                onClick={scrollToServices}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-octa-blue text-octa-blue font-semibold rounded-2xl hover:bg-octa-blue/8 active:scale-95 transition-all duration-200"
              >
                Lihat Layanan
                <ChevronDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 mt-10 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { value: "15+", label: "Teknologi Dikuasai" },
                { value: "4", label: "Layanan Utama" },
                { value: "100%", label: "Responsif & Modern" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-octa-blue">
                    {stat.value}
                  </div>
                  <div className="text-xs text-octa-dark/55 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Illustration */}
          <div
            className="hidden lg:flex items-center justify-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="animate-float">
                <div className="glass rounded-3xl p-7 shadow-2xl shadow-octa-blue/15">
                  {/* Mock browser bar */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="flex-1 ml-2 h-6 rounded-full bg-octa-bg flex items-center px-3">
                      <span className="text-xs text-octa-dark/40">
                        octagramlabs.id
                      </span>
                    </div>
                  </div>

                  {/* Mock UI content */}
                  <div className="space-y-3">
                    <div className="h-32 rounded-2xl bg-gradient-to-br from-octa-blue/20 to-octa-blue-light/20 flex items-center justify-center">
                      <div className="text-5xl">🚀</div>
                    </div>
                    <div className="h-4 rounded-full bg-octa-blue/20 w-3/4" />
                    <div className="h-3 rounded-full bg-octa-dark/10 w-full" />
                    <div className="h-3 rounded-full bg-octa-dark/10 w-5/6" />
                    <div className="flex gap-2 mt-2">
                      <div className="h-8 rounded-xl bg-octa-blue/80 flex-1 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          Mulai Proyek
                        </span>
                      </div>
                      <div className="h-8 rounded-xl border-2 border-octa-blue/40 flex-1 flex items-center justify-center">
                        <span className="text-octa-blue text-xs font-semibold">
                          Layanan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -right-6 glass rounded-2xl px-4 py-2.5 shadow-lg shadow-octa-blue/15 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📱</span>
                  <div>
                    <div className="text-xs font-bold text-octa-dark">Mobile App</div>
                    <div className="text-[10px] text-octa-blue font-medium">Flutter & Kotlin</div>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-2.5 shadow-lg shadow-octa-blue/15 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎨</span>
                  <div>
                    <div className="text-xs font-bold text-octa-dark">UI/UX Design</div>
                    <div className="text-[10px] text-octa-blue font-medium">Figma Prototype</div>
                  </div>
                </div>
              </div>

              {/* Floating badge 3 */}
              <div className="absolute top-1/2 -right-10 glass rounded-2xl px-3 py-2 shadow-lg shadow-octa-blue/15 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">💻</span>
                  <div className="text-xs font-bold text-octa-dark">Web Dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-octa-dark/40 hover:text-octa-blue transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
