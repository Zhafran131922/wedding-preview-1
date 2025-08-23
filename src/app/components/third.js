"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Parisienne,
} from "next/font/google";

// Load fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
  display: "swap",
});

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  // Target tanggal pernikahan
  const targetDate = new Date("2025-12-12T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / (1000 * 60)) % 60);
        const secs = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, mins, secs });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`${playfair.variable} ${cormorant.variable} ${parisienne.variable} min-h-screen bg-transparent flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden`}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 opacity-20">
        <svg viewBox="0 0 100 100" className="text-[#d4bebe]">
          <path
            fill="currentColor"
            d="M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z M50,10 C27.909,10 10,27.909 10,50 C10,72.091 27.909,90 50,90 C72.091,90 90,72.091 90,50 C90,27.909 72.091,10 50,10 Z"
          ></path>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-48 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" className="text-[#d4bebe]">
          <path
            fill="currentColor"
            d="M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z M50,10 C27.909,10 10,27.909 10,50 C10,72.091 27.909,90 50,90 C72.091,90 90,72.091 90,50 C90,27.909 72.091,10 50,10 Z"
          ></path>
        </svg>
      </div>

      {/* Header with names and date */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          className={`text-4xl md:text-5xl text-[#5d4437] mb-6 ${playfair.className}`}
        >
          Our Love
        </h2>
        <div className="flex justify-center items-center mb-6">
          <div className="w-12 h-px bg-[#d4b8a7]"></div>
          <div className="mx-4 text-[#a0755e]">
            <Heart size={20} fill="#a0755e" />
          </div>
          <div className="w-12 h-px bg-[#d4b8a7]"></div>
        </div>
      </motion.div>

      {/* FRAME + FOTO */}
      <motion.div
        className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Frame */}
        <Image
          src="/assets/frame.png"
          alt="Frame"
          fill
          className="object-contain z-10"
        />

        {/* Foto di dalam frame */}
        <div className="absolute inset-8 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/assets/couple.png"
            alt="Couple"
            fill
            className="object-cover"
          />
        </div>

        {/* Ornamen bunga kiri */}
        <motion.div
          className="absolute -left-16 top-8 w-32 z-20"
          initial={{ rotate: -10 }}
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Image
            src="/assets/flower.png"
            alt="Flowers Left"
            width={128}
            height={128}
          />
        </motion.div>

        {/* Ornamen bunga kanan */}
        <motion.div
          className="absolute -right-16 bottom-8 w-32 z-20"
          initial={{ rotate: 10 }}
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Image
            src="/assets/flower.png"
            alt="Flowers Right"
            width={128}
            height={128}
          />
        </motion.div>
      </motion.div>

      {/* Countdown - Diubah tanpa box dan dengan font italic */}
      <motion.div
        className="flex gap-8 mt-10 text-[#5d4437] mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <span
              className={`text-4xl md:text-5xl font-light italic ${cormorant.className}`}
            >
              {value}
            </span>
            <span
              className={`text-xs mt-2 tracking-widest uppercase font-medium italic text-[#7a6a65] ${cormorant.className}`}
            >
              {label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Tombol Save The Date - Diubah lebih kecil */}
      <motion.a
        href="#our-story"
        className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#a0755e] to-[#c29f8b] text-white font-medium font-cormorant text-base tracking-widest overflow-hidden group mb-16"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span
          className={`relative px-8 py-3 rounded-full bg-gradient-to-r from-[#a0755e] to-[#c29f8b] text-white font-medium text-base tracking-[0.2em] uppercase ${cormorant.className} overflow-hidden group mb-16`}
        >
          SAVE THE DATE
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8a5f4c] to-[#b18e7b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
          <div className="absolute -inset-10 rotate-45 bg-white/10 group-hover:animate-shine"></div>
        </div>
      </motion.a>

      {/* Our Story - Diubah dengan desain lebih minimalis dan elegan */}
      <motion.div
        id="our-story"
        className="mt-16 max-w-2xl text-center text-[#5d4437] px-4 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            className="text-[#d4bebe]"
          >
            <path
              fill="currentColor"
              d="M20,0 C31,0 40,9 40,20 C40,11 31,20 20,20 C9,20 0,11 0,20 C0,9 9,0 20,0 Z"
            ></path>
          </svg>
        </div>

        <h2
          className={`text-2xl md:text-3xl font-semibold mb-8 text-[#8a5f4c] tracking-wider ${cormorant.className}`}
        >
          OUR STORY
        </h2>

        <div className="relative">
          <div className="absolute -left-6 top-2 opacity-40">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#d4bebe]"
            >
              <path
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <p
            className={`text-base md:text-lg leading-relaxed text-[#7a6a65] text-center italic ${cormorant.className}`}
          >
            &quot;Cinta tidak kenal waktu, kondisi, berapa usiamu, dan siapa kamu.
            Cinta adalah perjalanan yang tidak ada habisnya. Cinta bukan apa-apa
            bagi yang tidak pernah merasakan. Sebab ia hanya sebuah kata. Mudah
            diucap. Namun tidak mudah untuk dijelaskan. Cinta itu yang kami
            rasakan. Cinta itu adalah asal mula...&quot;
          </p>
          <h3
            className={`text-3xl text-[#a0755e] mb-4 ${parisienne.className}`}
          >
            Bride & Groom
          </h3>

          <div className="absolute -right-6 bottom-2 opacity-40 rotate-180">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#d4bebe]"
            >
              <path
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute left-10 bottom-1/4 opacity-20">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="text-[#d4bebe] animate-float"
        >
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute right-16 top-1/3 opacity-20">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="text-[#d4bebe] animate-float"
          style={{ animationDelay: "1s" }}
        >
          <circle
            cx="15"
            cy="15"
            r="13"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
