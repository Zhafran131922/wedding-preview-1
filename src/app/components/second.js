"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SecondPage() {
  return (
    <section className="relative bg-transparent py-20 text-center overflow-hidden">
      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 px-4"
      >
        <h2
          className={`text-4xl md:text-5xl text-[#5d4437] mb-6 ${playfair.className}`}
        >
          Bride & Groom
        </h2>
        <div className="flex justify-center items-center mb-6">
          <div className="w-12 h-px bg-[#d4b8a7]"></div>
          <div className="mx-4 text-[#a0755e]">
            <Heart size={20} fill="#a0755e" />
          </div>
          <div className="w-12 h-px bg-[#d4b8a7]"></div>
        </div>
        <p
          className={`max-w-2xl mx-auto text-[#8a6d5b] text-lg ${cormorant.className}`}
        >
          Dengan penuh kebahagiaan dan sukacita, kami mengundang Anda untuk
          merayakan hari istimewa kami dan menjadi saksi ikrar cinta kami.
        </p>
      </motion.div>

      {/* Kontainer Responsive */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4">
        {/* Groom Block */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Gambar Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-[280px] h-[380px] md:w-[300px] md:h-[400px]"
          >
            <Image
              src="/assets/men.png"
              alt="Frame Groom"
              fill
              className="object-contain z-10 drop-shadow-lg"
            />
            <div className="absolute inset-[20px] rounded-lg overflow-hidden">
              <Image
                src="/assets/flower.png"
                alt="Groom"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Deskripsi Groom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-xs"
          >
            <h3
              className={`text-2xl md:text-3xl text-[#5d4437] mb-4 ${cormorant.className}`}
            >
              Bride Dwi Saputra
            </h3>
            <div className="w-16 h-px bg-[#d4b8a7] mx-auto md:mx-0 mb-4"></div>
            <p
              className={`text-[#8a6d5b] text-sm md:text-base mb-4 italic ${cormorant.className}`}
            >
              Putra dari Bapak Tjipto Gunawan <br /> & Ibu Felicia Susanto
            </p>

            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#a0755e" }}
              transition={{ duration: 0.2 }}
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8a6d5b] text-white hover:bg-[#a0755e] transition-colors duration-300"
            >
              <Instagram size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Bride Block */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Gambar Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-[280px] h-[380px] md:w-[300px] md:h-[400px]"
          >
            <Image
              src="/assets/women.png"
              alt="Frame Bride"
              fill
              className="object-contain z-10 drop-shadow-lg"
            />
            <div className="absolute inset-[20px] rounded-lg overflow-hidden">
              <Image
                src="/assets/flower.png"
                alt="Bride"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Deskripsi Bride */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-xs"
          >
            <h3
              className={`text-2xl md:text-3xl text-[#5d4437] mb-4 ${cormorant.className}`}
            >
              Groom Tyas Saputri
            </h3>
            <div className="w-16 h-px bg-[#d4b8a7] mx-auto md:mx-0 mb-4"></div>
            <p   className={`text-[#8a6d5b] text-sm md:text-base mb-4 italic ${cormorant.className}`}>
              Putri dari Bapak Budiman Thamrin <br /> & Ibu Sarah Erawati
            </p>
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#a0755e" }}
              transition={{ duration: 0.2 }}
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8a6d5b] text-white hover:bg-[#a0755e] transition-colors duration-300"
            >
              <Instagram size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
