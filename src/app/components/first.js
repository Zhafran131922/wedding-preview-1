"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";

// Font elegan
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FirstPage() {
  return (
    <section className="relative min-h-screen bg-beige-wedding flex items-center justify-center overflow-hidden px-4">
      {/* Background pattern elegan */}
      <div className="absolute inset-0 z-0">
        {/* Pattern utama */}
        <div className="absolute inset-0 opacity-30 pattern-diamonds pattern-beige-500 pattern-size-8 pattern-opacity-20"></div>
        
        {/* Efek cahaya lembut */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-beige-light to-transparent opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-beige-light to-transparent opacity-40"></div>
        
        {/* Floral pattern corners */}
        <div className="absolute top-10 left-10 opacity-15">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-beige-dark">
            <path d="M60,10 A50,50 0 1,1 60,110 A50,50 0 1,1 60,10 Z" fill="currentColor" />
            <path d="M40,40 A20,20 0 1,1 40,80 A20,20 0 1,1 40,40 Z" fill="currentColor" />
            <path d="M80,40 A20,20 0 1,1 80,80 A20,20 0 1,1 80,40 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-10 right-10 opacity-15 rotate-90">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-beige-dark">
            <path d="M60,10 A50,50 0 1,1 60,110 A50,50 0 1,1 60,10 Z" fill="currentColor" />
            <path d="M40,40 A20,20 0 1,1 40,80 A20,20 0 1,1 40,40 Z" fill="currentColor" />
            <path d="M80,40 A20,20 0 1,1 80,80 A20,20 0 1,1 80,40 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 opacity-15 -rotate-90">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-beige-dark">
            <path d="M60,10 A50,50 0 1,1 60,110 A50,50 0 1,1 60,10 Z" fill="currentColor" />
            <path d="M40,40 A20,20 0 1,1 40,80 A20,20 0 1,1 40,40 Z" fill="currentColor" />
            <path d="M80,40 A20,20 0 1,1 80,80 A20,20 0 1,1 80,40 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-15 rotate-180">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-beige-dark">
            <path d="M60,10 A50,50 0 1,1 60,110 A50,50 0 1,1 60,10 Z" fill="currentColor" />
            <path d="M40,40 A20,20 0 1,1 40,80 A20,20 0 1,1 40,40 Z" fill="currentColor" />
            <path d="M80,40 A20,20 0 1,1 80,80 A20,20 0 1,1 80,40 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Frame utama */}
      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center z-10">
        {/* Border dekoratif */}
        <div className="absolute inset-0 border-2 border-beige-dark rounded-lg shadow-lg"></div>
        <div className="absolute inset-8 border border-beige-dark rounded-lg"></div>

        {/* Foto pasangan */}
        <div className="absolute inset-4 md:inset-8 rounded-lg overflow-hidden z-0 shadow-xl">
          <Image
            src="/assets/couple.png"
            alt="Couple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        </div>

        {/* Teks di atas foto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-sm md:text-base tracking-widest uppercase mb-2 text-beige-light ${cormorant.className}`}
          >
            We Are Getting Married
          </motion.p>

          {/* Divider dengan icon hati */}
          <div className="flex items-center justify-center my-2">
            <div className="w-8 h-px bg-beige-light"></div>
            <div className="mx-3 text-beige-light">
              <Heart size={16} fill="#d4b8a7" />
            </div>
            <div className="w-8 h-px bg-beige-light"></div>
          </div>

          {/* Nama pengantin */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`text-4xl md:text-5xl lg:text-6xl mb-2 ${playfair.className}`}
          >
            Bride
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-2xl md:text-3xl text-beige-light mb-2 ${cormorant.className}`}
          >
            &
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className={`text-4xl md:text-5xl lg:text-6xl mb-4 ${playfair.className}`}
          >
            Groom
          </motion.h1>

          {/* Garis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="w-16 h-px bg-beige-light my-3"
          />

          {/* Subjudul */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className={`text-lg md:text-xl text-beige-light mb-8 tracking-wider ${cormorant.className}`}
          >
            Our Wedding Day
          </motion.p>

          {/* Tombol scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-6 w-12 h-12 border-2 border-beige-light rounded-full flex items-center justify-center cursor-pointer hover:bg-beige-light hover:bg-opacity-20 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} className="text-beige-light" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tanggal di bagian bawah */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.8 }}
        className="absolute bottom-8 text-center z-10"
      >
        <p className={`text-beige-dark text-sm md:text-base tracking-widest ${cormorant.className}`}>
          12 . 12 . 2023
        </p>
      </motion.div>

      {/* Custom styles */}
      <style jsx global>{`
        .bg-beige-wedding {
          background-color: #f5ebe0;
          background-image: 
            radial-gradient(circle at 100% 100%, rgba(210, 180, 160, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 0% 0%, rgba(210, 180, 160, 0.1) 0%, transparent 20%),
            linear-gradient(45deg, rgba(210, 180, 160, 0.1) 25%, transparent 25%, transparent 75%, rgba(210, 180, 160, 0.1) 75%),
            linear-gradient(-45deg, rgba(210, 180, 160, 0.1) 25%, transparent 25%, transparent 75%, rgba(210, 180, 160, 0.1) 75%);
          background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
          background-position: 0 0, 0 0, 0 0, 20px 20px;
        }
        
        .pattern-diamonds {
          background-image: 
            linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%),
            linear-gradient(-45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
        }
        
        .text-beige-light {
          color: #f5e2d3;
        }
        
        .text-beige-dark {
          color: #8a6d5b;
        }
        
        .border-beige-dark {
          border-color: #8a6d5b;
        }
        
        .bg-beige-light {
          background-color: #f5e2d3;
        }
      `}</style>
    </section>
  );
}