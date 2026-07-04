"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const serviceOptions = [
  "Web Development — Landing Page",
  "Web Development — Sistem Informasi / Web App",
  "Mobile App — Basic",
  "Mobile App — Pro (Sistem Kompleks)",
  "Desktop Application",
  "UI/UX Design & Prototype",
  "Lainnya / Custom Request",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      // Replace these with your actual EmailJS IDs
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="kontak"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #f0faff 0%, #ffffff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octa-blue/10 text-octa-blue text-sm font-medium mb-5">
              📬 Kontak
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-octa-dark mb-4 leading-tight">
              Ada Proyek?{" "}
              <span className="gradient-text">Yuk, Diskusi!</span>
            </h2>
            <p className="text-octa-dark/60 leading-relaxed mb-8 text-base">
              Konsultasi pertama gratis. Ceritakan kebutuhanmu dan kami akan
              bantu temukan solusi terbaik sesuai budget.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="https://wa.me/6289514373399?text=Halo%20OCTAGRAM%20Labs%2C%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-octa-border hover:border-green-400/50 shadow-sm hover:shadow-md hover:shadow-green-100 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-2xl group-hover:bg-green-100 transition-colors duration-200">
                  📱
                </div>
                <div>
                  <div className="font-semibold text-sm text-octa-dark">
                    WhatsApp
                  </div>
                  <div className="text-xs text-octa-dark/55">
                    +62 895-1437-3399 — Respon cepat!
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/octagramstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-octa-border hover:border-pink-400/50 shadow-sm hover:shadow-md hover:shadow-pink-100 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-2xl group-hover:bg-pink-100 transition-colors duration-200">
                  📸
                </div>
                <div>
                  <div className="font-semibold text-sm text-octa-dark">
                    Instagram
                  </div>
                  <div className="text-xs text-octa-dark/55">
                    @octagramstudio
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass rounded-3xl p-7 shadow-xl shadow-octa-blue/10 border border-octa-blue/10">
            <h3 className="font-bold text-lg text-octa-dark mb-6">
              Kirim Pesan 📝
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-green-500 mb-3" />
                <h4 className="font-bold text-octa-dark text-lg mb-1">
                  Pesan Terkirim!
                </h4>
                <p className="text-octa-dark/60 text-sm mb-5">
                  Terima kasih! Kami akan segera menghubungimu.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 text-sm font-semibold text-octa-blue border-2 border-octa-blue/30 rounded-xl hover:bg-octa-blue/8 transition-all duration-200"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="text-xs font-semibold text-octa-dark/70 mb-1.5 block"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      placeholder="Budi Santoso"
                      className="w-full px-4 py-2.5 rounded-xl border border-octa-border text-sm text-octa-dark placeholder:text-octa-dark/30 focus:outline-none focus:border-octa-blue focus:ring-2 focus:ring-octa-blue/20 transition-all duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reply_to"
                      className="text-xs font-semibold text-octa-dark/70 mb-1.5 block"
                    >
                      Email *
                    </label>
                    <input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      required
                      placeholder="budi@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-octa-border text-sm text-octa-dark placeholder:text-octa-dark/30 focus:outline-none focus:border-octa-blue focus:ring-2 focus:ring-octa-blue/20 transition-all duration-200 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service_type"
                    className="text-xs font-semibold text-octa-dark/70 mb-1.5 block"
                  >
                    Kebutuhan Jasa *
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-octa-border text-sm text-octa-dark focus:outline-none focus:border-octa-blue focus:ring-2 focus:ring-octa-blue/20 transition-all duration-200 bg-white appearance-none cursor-pointer"
                  defaultValue=""
                  >
                    <option value="" disabled>
                      Pilih layanan yang dibutuhkan
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-octa-dark/70 mb-1.5 block"
                  >
                    Ceritakan Proyekmu *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Saya butuh website untuk UMKM kuliner saya, ada fitur menu online dan kontak WhatsApp..."
                    className="w-full px-4 py-2.5 rounded-xl border border-octa-border text-sm text-octa-dark placeholder:text-octa-dark/30 focus:outline-none focus:border-octa-blue focus:ring-2 focus:ring-octa-blue/20 transition-all duration-200 bg-white resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    <span>Gagal mengirim. Coba via WhatsApp ya!</span>
                  </div>
                )}

                <button
                  id="submit-contact-form"
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-octa-blue text-white font-semibold rounded-2xl hover:bg-octa-blue-dark active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-octa-blue/30"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Pesan
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-octa-dark/40">
                  Atau langsung WA kami di{" "}
                  <a
                    href="https://wa.me/6289514373399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-octa-blue hover:underline font-medium"
                  >
                    +62 895-1437-3399
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
