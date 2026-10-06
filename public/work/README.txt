Taruh gambar pratinjau proyek di folder ini.

- Rasio 16:10, lebar 1280 px, format .webp (kualitas ~78) supaya ringan.
  Contoh konversi: cwebp -q 78 -resize 1280 0 asli.png -o nama.webp
- Rujuk dari src/data/siteData.js dengan path absolut, contoh:
    image: "/work/toko-online.png"
- Nama file: huruf kecil, pakai tanda hubung, tanpa spasi.
- Kalau image dibiarkan "", halaman menampilkan placeholder inisial.
