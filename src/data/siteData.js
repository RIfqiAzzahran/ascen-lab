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

/*
 * ── TIM ──────────────────────────────────────────────────────────────────────
 * DATA CONTOH — ganti dengan anggota tim yang sebenarnya.
 * photo   → taruh di public/team/ (persegi, mis. 400×400 .webp).
 *           Biarkan "" → tampil inisial nama.
 * links   → opsional; hapus yang tidak dipakai.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const team = [
  {
    name: "Nama Anggota",
    role: "Founder · Full-stack Engineer",
    bio: "Memegang arsitektur dan backend, memastikan setiap rilis stabil di produksi.",
    photo: "",
    links: { github: "", linkedin: "" },
  },
  {
    name: "Nama Anggota",
    role: "Frontend Engineer",
    bio: "Menerjemahkan desain jadi antarmuka yang cepat, rapi, dan responsif.",
    photo: "",
    links: { github: "", linkedin: "" },
  },
  {
    name: "Nama Anggota",
    role: "Product Designer",
    bio: "Riset ringan, wireframe, sampai design system yang siap dipakai developer.",
    photo: "",
    links: { linkedin: "" },
  },
  {
    name: "Nama Anggota",
    role: "Backend Engineer",
    bio: "Merancang API dan database yang aman, terdokumentasi, dan mudah dikembangkan.",
    photo: "",
    links: { github: "", linkedin: "" },
  },
];

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
 *   caseStudy: { ... },               // opsional — muncul tombol "Lihat studi kasus"
 * }
 *
 * caseStudy (lihat contoh di proyek Geely):
 *   client, duration, scope  → ringkasan singkat di bagian atas
 *   challenge                → masalah klien sebelum proyek, 1 paragraf
 *   solution                 → daftar poin apa yang kami bangun
 *   results                  → 2–3 angka hasil: { value: "3×", label: "..." }
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
    image: "work/geely.webp",
    github: "",
    live: "",
    caseStudy: {
      // DATA CONTOH — ganti dengan cerita & angka proyek yang sebenarnya.
      client: "Geely Ricklean Group Makassar",
      duration: "6 minggu",
      scope: "Desain UI, frontend, backend, dashboard leads",
      challenge:
        "Informasi unit, promo, dan jadwal test drive tersebar di media sosial dan chat pribadi sales. Calon pembeli sulit membandingkan model, dan tim sales tidak punya catatan leads yang rapi untuk ditindaklanjuti.",
      solution: [
        "Katalog model lengkap dengan spesifikasi, galeri, dan simulasi harga.",
        "Form booking test drive dan servis yang langsung masuk ke dashboard sales.",
        "Dashboard lead tracking: status tiap calon pembeli, sumber kunjungan, dan PIC sales.",
        "Halaman promo yang bisa diperbarui tim marketing tanpa bantuan developer.",
      ],
      results: [
        { value: "3×", label: "lebih banyak booking test drive" },
        { value: "< 2 dtk", label: "waktu muat halaman utama" },
        { value: "100%", label: "leads tercatat di satu dashboard" },
      ],
    },
  },
  {
    name: "HRIS (Human Resource Information System) Application",
    category: "Web Application",
    year: "2026",
    description:
      "Sebuah sistem atau perangkat lunak berbasis digital yang digunakan oleh divisi Human Resources (HR) untuk mengelola data karyawan, administrasi, dan berbagai proses sumber daya manusia secara terpusat.",
    tags: ["Laravel", "MySQL", "React"],
    image: "work/hris.webp",
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
    image: "work/cpns.webp",
    github: "",
    live: "",
    caseStudy: {
      // DATA CONTOH — ganti dengan cerita & angka proyek yang sebenarnya.
      client: "Sobat Edukasi",
      duration: "8 minggu",
      scope: "Desain UI, frontend, backend, sistem ujian CAT",
      challenge:
        "Peserta latihan CPNS butuh simulasi yang terasa seperti ujian asli: waktu berjalan, navigasi soal, dan penilaian TWK, TIU, TKP yang berbeda bobotnya. Latihan lewat PDF dan grup chat tidak bisa memberi pengalaman itu.",
      solution: [
        "Mesin ujian CAT dengan timer, penanda ragu-ragu, dan navigasi nomor soal.",
        "Penilaian otomatis sesuai passing grade tiap subtes, lengkap dengan pembahasan.",
        "Riwayat skor dan grafik perkembangan untuk setiap peserta.",
        "Panel admin untuk mengelola bank soal dan paket tryout.",
      ],
      results: [
        { value: "1.000+", label: "sesi tryout dikerjakan" },
        { value: "99,9%", label: "uptime saat tryout serentak" },
        { value: "4,8/5", label: "rating kepuasan peserta" },
      ],
    },
  },
  { 
  name: "HIMASTAT (Himpunan Mahasiswa Statistika)",
    category: "Web Application",
    year: "2025",
    description:
      "Pusat informasi digital dan layanan akademik bagi seluruh mahasiswa jurusan Statistika..",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/himastat.webp",
    github: "",
    live: "",
    caseStudy: {
      // DATA CONTOH — ganti dengan cerita & angka proyek yang sebenarnya.
      client: "HIMASTAT FMIPA Unhas",
      duration: "5 minggu",
      scope: "Desain UI, frontend, backend, CMS",
      challenge:
        "Pengumuman, agenda, dan layanan akademik himpunan tersebar di beberapa akun media sosial. Setiap pergantian pengurus, informasi lama hilang dan mahasiswa baru kesulitan mencari rujukan.",
      solution: [
        "Pusat informasi: berita, agenda kegiatan, dan profil kepengurusan.",
        "Halaman layanan akademik dan arsip dokumen yang mudah dicari.",
        "CMS sederhana supaya pengurus baru bisa memperbarui konten sendiri.",
      ],
      results: [
        { value: "1 tempat", label: "untuk semua informasi himpunan" },
        { value: "0", label: "ketergantungan ke developer untuk update konten" },
      ],
    },
  },
  {
  name: "Kupliq Cafe",
    category: "Web Application",
    year: "2025",
    description:
      "Website untuk menampilkan menu dan layanan kafe Kupliq.",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/kupliq.webp",
    github: "",
    live: "",
    caseStudy: {
      // DATA CONTOH — ganti dengan cerita & angka proyek yang sebenarnya.
      client: "Kupliq Cafe",
      duration: "2 minggu",
      scope: "Desain UI, frontend, menu digital",
      challenge:
        "Menu dan harga hanya tersedia di papan kasir dan unggahan Instagram yang cepat tenggelam. Pelanggan sering menanyakan hal yang sama lewat DM — menu terbaru, jam buka, dan lokasi — sementara pemilik kesulitan memperbarui menu saat harga atau stok berubah.",
      solution: [
        "Menu digital lengkap dengan foto, harga, dan kategori minuman & makanan.",
        "QR code di meja yang langsung membuka menu dari HP pelanggan.",
        "Info jam buka, lokasi Google Maps, dan tombol reservasi via WhatsApp.",
        "Panel sederhana untuk mengubah harga dan menandai menu yang habis.",
      ],
      results: [
        { value: "−60%", label: "pertanyaan berulang lewat DM" },
        { value: "< 1 dtk", label: "menu terbuka setelah scan QR" },
        { value: "5 menit", label: "untuk memperbarui menu & harga" },
      ],
    },
  },
  {
  name: "ATAYA SHOP",
    category: "Web Application",
    year: "2025",
    description:
      "Sebagai media digital untuk menyampaikan informasi, menyediakan layanan, atau melakukan transaksi bisnis secara online.",
    tags: ["React", "Go", "PostgreSQL"],
    image: "work/ataya.webp",
    github: "",
    live: "",
  }



];

/*
 * ── KLIEN & TESTIMONI ────────────────────────────────────────────────────────
 * logos  → file di public/Logo/ (WebP, ruang kosong di sekelilingnya dipotong).
 *          `scale` opsional untuk menyamakan ukuran visual logo (default 1).
 * testimonials → CONTOH SAJA. Ganti dengan kutipan asli dari klien
 *          (dengan izin mereka) sebelum website dirilis.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const clients = {
  logos: [
    { name: "Geely Makassar", src: "Logo/geely.webp" },
    { name: "Sobat Edukasi", src: "Logo/sobat.webp" },
    { name: "HIMASTAT FMIPA Unhas", src: "Logo/himastat.webp" },
    { name: "Ataya Shop", src: "Logo/ataya.webp" },
    { name: "Kupliq Cafe", src: "Logo/kupliq.webp", scale: 1.25 },
  ],
  testimonials: [
    {
      quote:
        "Website baru membuat calon pembeli bisa melihat unit dan booking test drive langsung. Tim sales jadi lebih mudah menindaklanjuti leads.",
      company: "Geely Makassar",
      logo: "Logo/geely.webp",
    },
    {
      quote:
        "Sistem CAT-nya terasa seperti ujian sungguhan. Prosesnya rapi, demo rutin, dan setiap masukan kami cepat dikerjakan.",
      company: "Sobat Edukasi",
      logo: "Logo/sobat.webp",
    },
    {
      quote:
        "Informasi himpunan sekarang terpusat di satu tempat. Pengurus baru pun bisa memperbarui konten tanpa kesulitan.",
      company: "HIMASTAT FMIPA Unhas",
      logo: "Logo/himastat.webp",
    },
    {
      quote:
        "Toko online kami lebih efisien dan mempermudah proses penjualan. Pengerjaannya tepat waktu.",
      company: "Ataya Shop",
      logo: "Logo/ataya.webp",
    },
    {
      quote:
        "Pelanggan tinggal scan QR di meja untuk lihat menu, dan kami bisa ganti harga sendiri kapan saja. DM yang tanya menu jadi jauh berkurang.",
      name: "Nama Klien",
      role: "Owner",
      company: "Kupliq Cafe",
      logo: "Logo/kupliq.webp",
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

/*
 * ── FAQ ──────────────────────────────────────────────────────────────────────
 * Urutan di array = urutan tampil. Jawaban yang menyebut kebijakan (revisi,
 * pembayaran, garansi) perlu disesuaikan dengan cara kerja tim yang sebenarnya.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const faq = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Landing page biasanya selesai dalam 1–2 minggu. Web app custom rata-rata 4–8 minggu, tergantung jumlah fitur dan kesiapan materi dari Anda. Jadwal pastinya kami sepakati bersama di tahap discovery.",
  },
  {
    question: "Apa saja yang sudah termasuk dalam paket Landing Page Rp2 jt?",
    answer:
      "Desain custom, tampilan responsif di semua perangkat, tombol WhatsApp dan form kontak, SEO dasar, serta bantuan setup domain dan hosting. Biaya sewa domain dan hosting dibayar terpisah ke penyedianya.",
  },
  {
    question: "Bagaimana cara menentukan harga Custom Web App?",
    answer:
      "Harga dihitung dari ruang lingkup: jumlah halaman, fitur, integrasi, dan kompleksitas data. Setelah konsultasi gratis, kami kirimkan rincian fitur dan estimasi biaya tertulis sebelum pengerjaan dimulai — tanpa biaya tersembunyi.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dibagi bertahap: uang muka di awal proyek, lalu pelunasan setelah website selesai dan Anda setujui sebelum rilis. Untuk proyek besar, termin bisa disesuaikan dengan milestone pengerjaan.",
  },
  {
    question: "Apakah saya bisa minta revisi?",
    answer:
      "Bisa. Kami menunjukkan desain dan demo secara berkala, jadi masukan Anda masuk sejak awal, bukan di akhir. Revisi selama masih dalam ruang lingkup yang disepakati sudah termasuk dalam harga.",
  },
  {
    question: "Saya belum punya desain atau konten, apakah tetap bisa?",
    answer:
      "Tentu. Kami bantu menyusun struktur halaman, wireframe, dan desain dari nol. Untuk konten seperti teks dan foto, kami beri panduan apa saja yang perlu disiapkan.",
  },
  {
    question: "Apakah ada dukungan setelah website rilis?",
    answer:
      "Ada. Kami bantu proses deployment dan memantau website setelah rilis. Untuk perbaikan, pembaruan fitur, atau pemeliharaan rutin, kami sediakan dukungan lanjutan yang bisa dibicarakan sesuai kebutuhan.",
  },
];

export const contact = {
  email: "ascen.labs@gmail.com",
  whatsapp: "6282196166720",
  whatsappLabel: "+62 821 9616 6720",
  // Tanpa "https://", mis. "github.com/ascenlabs". Kosong → link disembunyikan.
  github: "",
  linkedin: "",
};
