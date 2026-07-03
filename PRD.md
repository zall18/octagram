# Product Requirements Document (PRD) - OCTAGRAM Company Website

## 1. Project Overview
**Nama Proyek:** Website Profil & Jasa Freelance OCTAGRAM
**Tujuan Proyek:** Membangun *landing page* interaktif sebagai wajah digital OCTAGRAM untuk menawarkan jasa pembuatan aplikasi (Mobile, Web, Desktop) dan UI/UX Design kepada target audiens.

## 2. Target Audiens
* **Pelaku UMKM & Bisnis Lokal (Bisa dari daerah mana saja):** Membutuhkan digitalisasi bisnis (web kasir, company profile, aplikasi katalog, dan yang lainnya) dengan harga terjangkau.
* **Mahasiswa & Pelajar:** Membutuhkan jasa desain UI/UX, prototipe, atau *custom web/app* untuk keperluan tugas, penelitian, atau event organisasi.

## 3. Scope & Fitur Utama (Functional Requirements)
Website ini akan berjalan sebagai *Single Page Application* (SPA) atau *Landing Page* statis dengan bagian-bagian berikut:

* **Hero Section:** Headline penawaran (value proposition) dengan tombol Call-to-Action (CTA) "Konsultasi Gratis".
* **Services (Layanan):** Menampilkan paket jasa yang ditawarkan beserta harga mulai dari (start from):
  * Web Development
  * Mobile Development (Kotlin & Flutter)
  * Desktop Development
  * UI/UX Design & Prototyping
  * Custom App (Call to action to WA)
* **Tech Stack Showcase:** Menampilkan logo/ikon teknologi yang dikuasai tim untuk menambah kredibilitas (Kotlin, Java, Flutter, JavaScript, PHP, Prisma ORM, Figma, dan yang lainnya misal node, react dll, tampilkan saja semua dulu nanti ku hapus yang memang tidak relevan).
* **Portfolio / Karya:** Menampilkan *thumbnail* atau *screenshot* proyek yang sudah pernah dikerjakan. (Ini kita baru mulai, mungkin bisa di hide terlebih dahulu tapi sudah di design)
* **Workflow / Cara Kerja:** Penjelasan 4 langkah mudah bekerja sama dengan OCTAGRAM (Konsultasi -> Desain & Koding -> Testing -> Rilis).
* **About OCTAGRAM:** Penjelasan singkat tentang OCTAGRAM. (Masukan dulu penjelasannya, nanti diganti jika memang tidak sama)
* **Contact & CTA:** Formulir kontak sederhana dan tombol langsung terhubung ke WhatsApp representatif tim.

## 4. Kebutuhan Desain (UI/UX Guidelines)
* **Warna Utama (Primary):** `#0098ff` (Biru) - *Digunakan untuk tombol CTA, ikon, dan highlight teks.*
* **Warna Dasar (Background):** `#ffffff` (Putih) - *Digunakan sebagai warna dominan agar terlihat bersih dan modern.*
* **Tipografi:** Menggunakan font *sans-serif* yang modern dan mudah dibaca (contoh: Inter, Poppins, atau Roboto).
* **Prototyping & Desain:** Disini kita menggunakan desain seperti transparant, jadi ada warna biru yang agak transparant dan mungkin kamu juga bisa nambahin warna yang lainnya yang memang dkiranya sesuai, pokoknya buat semenarik mungkin. jadi buat rounded nya sendiri kita pakai yang agak lengkung, dan dibuat agak transparat

## 5. Non-Functional Requirements
* **Responsive Design:** Wajib tampil rapi dan fungsional di perangkat *mobile* (smartphone) karena mayoritas audiens mengakses melalui HP.
* **Performance:** Waktu *loading* maksimal 3 detik. Aset gambar harus dikompresi.

## 6. Tech Stack Recommendations (Website OCTAGRAM)
* **Frontend:** kita menggunakan nextjs dan tailwind


## 7. Metrik Kesuksesan
* Website berhasil *live* dan dapat diakses tanpa *error*.
* Mendapatkan setidaknya [X] *leads* atau pesan WhatsApp dari calon klien dalam bulan pertama peluncuran. (bisa dicoba sendiri sebelum aku setting sendiri)