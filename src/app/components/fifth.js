"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Fifth() {
  return (
    <section className={`bg-transparent py-16 ${cormorant.className}`}>
      {/* Bagian Lokasi (Judul dan deskripsi) */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-3xl md:text-4xl italic text-[#5a4f41] mb-4">
          Lokasi
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Dengan penuh rasa hormat kami mengharapkan kehadiran Bapak/Ibu/Saudara
          sekalian pada Acara Pernikahan kami yang akan kami laksanakan pada :
        </p>
        <p className="font-semibold text-[#5a4f41] mt-4 text-lg">
          Minggu, 5 Mei 2025
        </p>
        <p className="text-gray-700 text-sm mt-2 leading-relaxed">
          Besar harapan kami akan kehadiran Bapak/Ibu/Saudara sekalian tentunya
          dengan memperhatikan anjuran dari Pemerintah. Untuk itu kami
          memberlakukan protokol kesehatan sebagaimana instruksi di bawah ini.
        </p>
      </div>

      {/* Frame Acara */}
      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto px-4">
        {/* Frame 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl italic text-[#5a4f41] mb-4">
            Acara Pernikahan
          </h3>
          <div className="relative w-64 h-80 flex justify-center items-center">
            {/* Gambar frame */}
            <Image
              src="/assets/frame5.png"
              alt="Frame"
              fill
              className="object-contain"
              priority
            />
            {/* Konten teks di dalam frame */}
            <div className="absolute flex flex-col items-center">
              <p className="italic text-gray-500 text-sm">Saturday</p>
              <h4 className="text-4xl font-bold text-[#5a4f41]">08</h4>
              <p className="text-gray-600">May 2027</p>
              <p className="mt-2 text-gray-700">08:00 - 10:00</p>
            </div>
          </div>

          {/* Dress code */}
          <p className="mt-4 text-sm italic text-gray-600">Dress Code :</p>
          <div className="flex gap-2 mt-2">
            {["#8c8c6f", "#b1977d", "#d7bca2", "#e6d4c6"].map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">Any kind of pastel</p>
        </div>

        {/* Frame 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl italic text-[#5a4f41] mb-4">Resepsi</h3>
          <div className="relative w-64 h-80 flex justify-center items-center">
            {/* Gambar frame */}
            <Image
              src="/assets/frame5.png"
              alt="Frame"
              fill
              className="object-contain"
              priority
            />
            {/* Konten teks di dalam frame */}
            <div className="absolute flex flex-col items-center">
              <p className="italic text-gray-500 text-sm">Saturday</p>
              <h4 className="text-4xl font-bold text-[#5a4f41]">08</h4>
              <p className="text-gray-600">May 2027</p>
              <p className="mt-2 text-gray-700">15:00 - 17:00</p>
            </div>
          </div>

          {/* Dress code */}
          <p className="mt-4 text-sm italic text-gray-600">Dress Code :</p>
          <div className="flex gap-2 mt-2">
            {["#8c8c6f", "#b1977d", "#d7bca2", "#e6d4c6"].map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">Any kind of pastel</p>
        </div>
      </div>

      {/* Lokasi Tengah */}
      <div className="relative bg-[#f5efe6] rounded-lg shadow-md mt-16 w-full max-w-3xl px-10 py-12 text-center mx-auto overflow-hidden">
        {/* Gambar bunga kiri */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="/assets/flower.png"
            alt="Bunga kiri"
            width={200}
            height={200}
            className="h-56 w-auto"
          />
        </div>

        {/* Gambar bunga kanan */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-180">
          <Image
            src="/assets/flower.png"
            alt="Bunga kanan"
            width={200}
            height={200}
            className="h-56 w-auto"
          />
        </div>

        {/* Konten */}
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#8c7b6d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
              />
            </svg>
          </div>
          <h4 className="text-3xl italic text-[#4a4033]">
            Hotel Shangri-La
          </h4>
          <p className="text-base text-[#6f6054] mt-6 leading-relaxed max-w-2xl mx-auto">
            Jl. Jend. Sudirman No.Kav. 1, Karet Tengsin, Kecamatan Tanah
            Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220
          </p>
          <button className="mt-8 px-10 py-3 bg-[#8c7b6d] text-white rounded-full shadow hover:bg-[#6f6054] transition-all duration-300">
            Location
          </button>
        </div>
      </div>
    </section>
  );
}
