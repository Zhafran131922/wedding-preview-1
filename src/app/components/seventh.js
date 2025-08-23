"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Seventh() {
  return (
    <section
      className={`bg-transparent py-16 px-4 flex flex-col items-center ${cormorant.className}`}
    >
      {/* E-Angpao */}
      <h2 className="text-3xl md:text-4xl italic text-[#5a4f41] mb-6">
        E-Angpao
      </h2>
      <div className="flex gap-4 mb-4">
        <button className="bg-[#8c7b6d] text-white px-8 py-2 rounded-full hover:bg-[#6f6054]">
          E-Angpao
        </button>
        <button className="bg-[#d8d1c7] text-[#5a4f41] px-8 py-2 rounded-full hover:bg-[#c1b8ae]">
          Gift Registry
        </button>
      </div>
      <p className="text-center text-[#5a4f41] max-w-lg mb-6 text-base leading-relaxed">
        Bapak/Ibu/Saudara sekalian dapat memberikan hadiah digital kepada kami
        melalui form dibawah. Bagi yang telah mengisi dan memberikan hadiah
        kepada kami, kami mengucapkan banyak terima kasih. Semoga hadiah dari
        Bapak/Ibu/Saudara dapat bermanfaat bagi kami dalam mengarungi bahtera
        rumah tangga.
      </p>
      <button className="bg-[#8c7b6d] text-white rounded-full py-2 px-10 hover:bg-[#6f6054] mb-12">
        Send Gift
      </button>

      {/* Apology */}
      <div className="bg-[#ede8e3] rounded-[15rem] w-[680px] h-[360px] flex flex-col items-center justify-center text-center mb-16 px-6">
        <h3 className="italic text-2xl text-[#5a4f41] mb-2">Apology</h3>
        <p className="text-[#5a4f41] text-sm leading-relaxed">
          Tanpa mengurangi rasa hormat, izinkan kami mengharapkan kehadiran
          Bapak/Ibu/Saudara melalui undangan digital ini, serta dapat memberikan
          doa restu kepada kami.
          <br />
          <br />
          Terima kasih.
        </p>
      </div>

      {/* Live Streaming */}
      <h2 className="text-3xl md:text-4xl italic text-[#5a4f41] mb-6">
        Live Streaming
      </h2>
      <button className="bg-[#8c7b6d] text-white rounded-full py-2 px-10 hover:bg-[#6f6054] mb-6">
        Join Youtube
      </button>
      <div className="bg-[#e5ded4] rounded-lg p-6 text-center max-w-lg">
        <h4 className="italic text-xl text-[#5a4f41] mb-2">
          Susunan Acara Live Wedding
        </h4>
        <p className="text-[#5a4f41] mb-2">10.00 - Acara Pernikahan</p>
        <h4 className="italic text-xl text-[#5a4f41] mb-2">Live Wedding</h4>
        <p className="text-[#5a4f41] text-sm leading-relaxed">
          Silahkan menonton melalui YouTube Live mempelai untuk menyaksikan
          serangkaian acara pernikahan secara Live.
        </p>
      </div>
    </section>
  );
}
