# Web Design & Development Guidelines - OCTAGRAM

Dokumen ini berisi aturan standar untuk desain antarmuka (UI) dan penulisan kode *frontend* dari website utama OCTAGRAM.

## 1. Skema Warna (Color Palette)
Gunakan kode *hex* berikut secara konsisten di seluruh halaman web:
*   **Primary Blue (`#0098ff`):** Warna identitas utama. Gunakan untuk: Logo, Tombol Utama (CTA), *Hover effect*, dan Ikon layanan.
*   **Background White (`#ffffff`):** Warna dasar. Gunakan untuk: Latar belakang utama *website* dan *background* dalam *card* agar terlihat bersih (clean).
*   **Text Dark (`#333333`):** Warna teks utama. Gunakan untuk: *Heading* (H1-H6) dan teks paragraf. Jangan menggunakan hitam pekat (`#000000`) agar mata pengunjung tidak cepat lelah.
*   **Accent Light Blue (`#f0faff`):** Warna pelengkap. Gunakan untuk: Latar belakang *section* (seperti bagian Services atau About) agar halaman tidak monoton putih semua.
*   Bisa ditambahkan jika memang cocok untuk tampilannya, tapi jangan terlalu melenceng

## 2. Tipografi (Typography)
*   **Font Family:** Gunakan font Sans-Serif modern (contoh: **Poppins** atau **Inter**).
*   **Hierarki:**
    *   *Heading* (H1-H3): Gunakan *font-weight* Bold (700) atau Semi-Bold (600).
    *   *Body Text* (P): Gunakan *font-weight* Regular (400) dengan ukuran standar `16px` (1rem).
    *   *Small Text*: Ukuran `14px` untuk teks *footer* atau label *form*.

## 3. Layout & Responsivitas (Breakpoints)
Website harus dirancang dengan pendekatan **Mobile-First**. Pastikan UI terlihat rapi di layar *smartphone* sebelum disesuaikan untuk layar *desktop*.
*   **Mobile (Default):** Lebar layar `< 768px`. Komponen seperti *card* layanan disusun memanjang ke bawah (vertikal).
*   **Tablet:** Lebar layar `768px - 1024px`.
*   **Desktop:** Lebar layar `> 1024px`. Batasi lebar maksimal konten (*container*) di angka `1200px` agar tidak terlalu melebar pada layar monitor besar.

## 4. Standar Penulisan Kode (Frontend)
*   **Semantic HTML:** Gunakan tag HTML5 yang tepat seperti `<nav>`, `<header>`, `<section>`, dan `<footer>` (hindari penggunaan `<div>` secara berlebihan untuk struktur utama).
*   **Konfigurasi CSS/Tailwind:** Jika menggunakan Tailwind CSS, wajib mendaftarkan warna OCTAGRAM di file konfigurasi (`tailwind.config.js`) agar penamaan *class* konsisten:
    ```javascript
    theme: {
      extend: {
        colors: {
          octa: {
            blue: '#0098ff',
            dark: '#333333',
            light: '#f0faff'
          }
        }
      }
    }
    ```
    *(Pemanggilan class nanti menjadi: `bg-octa-blue`, `text-octa-dark`, dll).*

## 5. Aset & Media (Nanti kutambahkan sendiri, yang pasti nanti dalam bentuk svg kalau ngak webp)
*   **Logo & Ikon:** Wajib menggunakan format **SVG** agar tidak pecah saat di-*zoom* dan tetap ringan.
*   **Gambar (Portofolio/Ilustrasi):** Semua gambar *screenshot* atau *mockup* proyek wajib dikompresi (gunakan format `.webp`) sebelum diunggah untuk menjaga waktu *loading* web tetap cepat (di bawah 3 detik).