export const brand = {
  name: "ASCEN LABS",
  shortName: "Ascen",
  tagline: "Digital product studio",
  headline: ["Kami bangun", "produk digital"],
  subheadline:
    "Studio kecil yang mengerjakan web, API, dan antarmuka — dari sketsa awal sampai rilis ke produksi.",
  status: "Menerima 2 slot proyek untuk kuartal ini",
  location: "Makassar, Indonesia",
  founded: 2023,
};

export const about = {
  paragraphs: [
    "ASCEN LABS adalah studio produk digital berbasis di Makassar, dijalankan berdua oleh dua full stack developer. Tim yang kecil membuat setiap keputusan desain dan teknis tetap punya alasan yang jelas.",
    "Fokus kami sederhana: produk yang cepat, rapi di balik layar, dan enak dipakai. Kami terlibat dari riset ringan dan wireframe, sampai deployment dan pemeliharaan setelahnya.",
    "Setiap proyek dikerjakan langsung oleh orang yang menulis kodenya — tanpa lapisan perantara, tanpa laporan status yang tidak perlu.",
  ],
  stats: [
    { label: "Berdiri sejak", value: "2023" },
    { label: "Anggota tim", value: "2 orang" },
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
 *   by: ["RA", "AS"],                 // opsional — inisial dari `team` di bawah
 *                                     //   RA = Muh. Rifqi Azzahran
 *                                     //   AS = Andi Syafiudin Musafir
 *                                     //   hapus baris ini kalau tak perlu
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
    by: ["RA", "AS"],
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
    by: ["RA", "AS"],
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
    by: ["RA", "AS"],
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
    by: ["RA", "AS"],
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
    by: ["RA", "AS"],
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
    by: ["RA", "AS"],
    github: "",
    live: "",
  }



];

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

export const team = [
  {
    name: "Muh. Rifqi Azzahran",
    role: "Founder · Full Stack Developer",
    note: "Mahasiswa S1 Informatika, Universitas Hasanuddin",
    initials: "RA",
  },
  {
    name: "Andi Syafiudin Musafir",
    role: "Founder · Full Stack Developer",
    note: "Mahasiswa S1 Informatika, Universitas Hasanuddin",
    initials: "AS",
  },
];

export const contact = {
  email: "ascen.labs@gmail.com",
  github: "github.com/rifqiazzahran",
  github2: "github.com/syaafiudinm",
  linkedin: "linkedin.com/in/rifqi-azzahran",
  linkedin2: "linkedin.com/in/andi-syafiudin-musafir",
  whatsapp: "6282196166720",
  whatsappLabel: "+62 821 9616 6720",
};
