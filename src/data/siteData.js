export const brand = {
  name: "ASCEN LABS",
  shortName: "Ascen",
  tagline: "Digital product studio",
  headline: ["Kami bangun", "produk digital"],
  subheadline:
    "Studio yang mengerjakan web, API, dan antarmuka dari sketsa awal sampai rilis ke produksi.",
  location: "Makassar, Indonesia",
};

export const about = {
  paragraphs: [
    "ASCEN LABS adalah studio produk digital berbasis di Makassar. Tim yang kecil membuat setiap keputusan desain dan teknis tetap punya alasan yang jelas.",
    "Fokus kami sederhana: produk yang cepat, rapi di balik layar, dan enak dipakai. Kami terlibat dari riset ringan dan wireframe, sampai deployment dan pemeliharaan setelahnya.",
    "Setiap proyek dikerjakan langsung oleh orang yang menulis kodenya tanpa lapisan perantara, tanpa laporan status yang tidak perlu.",
  ],
  stats: [
    { label: "Berdiri sejak", value: "2023" },
    { label: "Rata-rata rilis", value: "4–8 minggu" },
    { label: "Basis", value: "Makassar, ID" },
  ],
};

export const services = [
  {
    id: "01",
    title: "Web Application",
    description:
      "Aplikasi web modern yang responsif dan cepat, dibangun di atas React dan Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    id: "02",
    title: "Backend & API",
    description:
      "REST API yang rapi, aman, dan terdokumentasi, lengkap dengan model data yang matang.",
    tags: ["Node.js", "Express", "Laravel", "PostgreSQL", "REST API"],
  },
  {
    id: "03",
    title: "Product Design",
    description:
      "Wireframe, prototipe, dan design system yang siap langsung diterjemahkan ke kode.",
    tags: ["Figma", "Prototyping", "Design System", "Wireframe"],
  },
  {
    id: "04",
    title: "Infrastructure",
    description:
      "Pipeline deployment, monitoring, dan setup server supaya rilis jadi urusan rutin.",
    tags: ["Docker", "CI/CD", "Vercel", "Linux", "Git"],
  },
];

/*
 * ── FORMAT PROYEK ────────────────────────────────────────────────────────────
 * Salin blok di bawah ini untuk setiap proyek. Timpa contoh yang ada.
 *
 * {
 *   name: "Nama Proyek",              // wajib — judul yang tampil
 *   category: "E-commerce",           // wajib — label singkat, 1–2 kata
 *   year: "2025",                     // wajib — tahun rilis
 *   description: "Satu-dua kalimat.", // wajib — apa yang dibangun & untuk siapa
 *   tags: ["React", "Laravel"],       // wajib — stack utama, 2–4 item
 *   image: "/work/nama-file.png",     // opsional — taruh file di folder public/work/
 *                                     //   rasio ideal 16:10 (mis. 800×500 px)
 *                                     //   biarkan "" → tampil placeholder inisial
 *   github: "https://github.com/...", // opsional — hapus/kosongkan jika privat
 *   live: "https://...",              // opsional — hapus/kosongkan jika belum rilis
 * }
 *
 * Urutan di array = urutan tampil di halaman (paling atas tampil pertama).
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const work = [
  {
    name: "Geely Ricklean Group Makassar",
    category: "Company Profile & Lead Tracking",
    year: "2026",
    description:
      "Website Geely Makassar dirancang sebagai digital showroom yang tidak hanya memberikan informasi produk, tetapi juga menjadi kanal pemasaran, lead generation, sales conversion, dan aftersales.",
    tags: ["React", "Laravel", "MySQL"],
    image: "work/GEELY.png",
    github: "",
    live: "",
  },
  {
    name: "HRIS (Human Resource Information System) Application",
    category: "Web Application",
    year: "2026",
    description:
      "Sebuah sistem atau perangkat lunak berbasis digital yang digunakan oleh divisi Human Resources (HR) untuk mengelola data karyawan, administrasi, dan berbagai proses sumber daya manusia secara terpusat.",
    tags: ["Laravel", "MySQL", "React"],
    image: "work/HRIS.png",
    github: "",
    live: "",
  },
  {
    name: "Sobat Edukasi",
    category: "Web Application",
    year: "2026",
    description:
      "Website untuk menguji kemampuan menghadapi Tes CPNS dengan latihan soal TWK, TIU, TKP menggunakan sistem CAT/CBT yang mirip ujian sesungguhnya.",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/CPNS.png",
    github: "",
    live: "",
  },
  { 
  name: "HIMASTAT (Himpunan Mahasiswa Statistika)",
    category: "Web Application",
    year: "2025",
    description:
      "Pusat informasi digital dan layanan akademik bagi seluruh mahasiswa jurusan Statistika..",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/HIMASTAT.png",
    github: "",
    live: "",
  },
  {
  name: "Kupliq Cafe",
    category: "Web Application",
    year: "2025",
    description:
      "Website untuk menampilkan menu dan layanan kafe Kupliq.",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/KUPLIQ.jpeg",
    github: "",
    live: "",
  },
  {
  name: "ATAYA SHOP",
    category: "Web Application",
    year: "2025",
    description:
      "Sebagai media digital untuk menyampaikan informasi, menyediakan layanan, atau melakukan transaksi bisnis secara online.",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/ATAYA.png",
    github: "",
    live: "",
  }



];

/*
 * ── KLIEN & TESTIMONI ────────────────────────────────────────────────────────
 * logos  → file di public/Logo/. `scale` untuk menyamakan ukuran visual logo
 *          yang punya ruang kosong besar di dalam filenya (default 1).
 * testimonials → CONTOH SAJA. Ganti dengan kutipan asli dari klien
 *          (dengan izin mereka) sebelum website dirilis.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const clients = {
  logos: [
    { name: "Geely Makassar", src: "Logo/Geely.png", scale: 1.1 },
    { name: "Sobat Edukasi", src: "Logo/Sobat.png", scale: 1.5 },
    { name: "HIMASTAT FMIPA Unhas", src: "Logo/Himastat.svg", scale: 1.1 },
    { name: "Ataya Shop", src: "Logo/Ataya.svg", scale: 1.15 },
  ],
  testimonials: [
    {
      quote:
        "Website baru membuat calon pembeli bisa melihat unit dan booking test drive langsung. Tim sales jadi lebih mudah menindaklanjuti leads.",
      company: "Geely Makassar",
      logo: "Logo/Geely.png",
    },
    {
      quote:
        "Sistem CAT-nya terasa seperti ujian sungguhan. Prosesnya rapi, demo rutin, dan setiap masukan kami cepat dikerjakan.",
      company: "Sobat Edukasi",
      logo: "Logo/Sobat.png",
    },
    {
      quote:
        "Informasi himpunan sekarang terpusat di satu tempat. Pengurus baru pun bisa memperbarui konten tanpa kesulitan.",
      company: "HIMASTAT FMIPA Unhas",
      logo: "Logo/Himastat.svg",
    },
    {
      quote:
        "Toko online kami lebih efisien dan mempermudah proses penjualan. Pengerjaannya tepat waktu.",
      company: "Ataya Shop",
      logo: "Logo/Ataya.svg",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Kami dengarkan masalahnya dulu, lalu susun ruang lingkup dan prioritas bersama.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframe dan prototipe supaya arah produk terlihat sebelum satu baris kode ditulis.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Pengerjaan bertahap dengan demo berkala, jadi tidak ada kejutan di akhir.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Rilis ke produksi, pemantauan, dan dukungan lanjutan setelah produk berjalan.",
  },
];

export const pricing = {
  trust: {
    value: "10+",
    label: "perusahaan & organisasi",
    headline: "Dipercaya lebih dari 10 perusahaan untuk membangun wajah digitalnya.",
    description:
      "Dari dealer otomotif, kafe, toko online, sampai organisasi kampus mereka memilih kami karena hasilnya rapi, tepat waktu, dan bisa langsung dipakai untuk menghasilkan.",
    clients: ["Geely Makassar", "Sobat Edukasi", "HIMASTAT", "Kupliq Cafe", "Ataya Shop"],
  },
  plans: [
    {
      id: "landing",
      name: "Landing Page",
      price: "Rp2 jt",
      priceNote: "sekali bayar",
      description:
        "Halaman yang bekerja sebagai sales 24 jam untuk memperkenalkan bisnis Anda dan mengubah pengunjung jadi calon pelanggan.",
      features: [
        "Desain custom, bukan template pasaran",
        "Responsif di HP, tablet, dan desktop",
        "Tombol WhatsApp & form kontak siap pakai",
        "SEO dasar supaya mudah ditemukan di Google",
        "Bantuan setup domain & hosting",
        "Selesai dalam 1–2 minggu",
      ],
      cta: "Pesan landing page",
      featured: true,
      badge: "Harga pasti",
    },
    {
      id: "custom",
      name: "Custom Web App",
      price: "Custom",
      priceNote: "sesuai kebutuhan",
      description:
        "Sistem yang dibangun khusus untuk alur kerja bisnis Anda seperti dashboard, manajemen data, sampai aplikasi untuk pelanggan.",
      features: [
        "Analisis kebutuhan & ruang lingkup bersama",
        "Desain UI/UX dan prototipe sebelum coding",
        "Frontend, backend, dan database dari nol",
        "Dashboard admin & manajemen pengguna",
        "Deployment ke server produksi",
        "Dukungan & pemeliharaan setelah rilis",
      ],
      cta: "Konsultasi gratis",
    },
  ],
};

export const contact = {
  email: "ascen.labs@gmail.com",
  whatsapp: "6282196166720",
  whatsappLabel: "+62 821 9616 6720",
};
