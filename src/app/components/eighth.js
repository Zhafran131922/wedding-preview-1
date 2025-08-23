"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Eight() {
  return (
    <section
      className={`bg-transparent py-16 px-4 flex flex-col items-center ${cormorant.className}`}
    >
      {/* Frame dengan gambar */}
      <div className="relative flex items-center justify-center mb-12">
        {/* Frame */}
        {/* <Image
          src="/assets/frame5.png" // Gambar frame ornamen
          alt="Frame"
          width={400}
          height={500}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
        /> */}
        {/* Foto di dalam frame */}
        <div className="relative z-0">
          <Image
            src="/images/gallery1.jpg" // Foto pasangan
            alt="Couple"
            width={280}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Dekorasi bunga kiri */}
        <Image
          src="/assets/flower.png"
          alt="Flower Left"
          width={120}
          height={320}
          className="absolute -left-28 top-16 z-20"
        />
        {/* Dekorasi bunga kanan */}
        <Image
          src="/assets/flower.png"
          alt="Flower Right"
          width={120}
          height={320}
          className="absolute -right-28 top-16 z-20"
        />
      </div>

      {/* Text Thank You */}
      <h2 className="text-3xl md:text-4xl italic text-[#5a4f41] mb-6">
        Thank You
      </h2>
      <p className="text-[#5a4f41] text-center max-w-xl text-base leading-relaxed">
        Kami mengucapkan terima kasih kepada Bapak/Ibu/Saudara yang telah menghadiri
        seluruh rangkaian acara pernikahan kami.
        <br />
        <br />
        Semoga waktu yang diberikan oleh Bapak/Ibu/Saudara sekalian menjadi berkah dan
        manfaat yang kelak dibalas oleh Tuhan Yang Maha Esa. Terima kasih atas seluruh
        ucapan yang diberikan. Semoga kami menjadi pasangan yang berbahagia dunia dan
        akhirat :)
      </p>
    </section>
  );
}
