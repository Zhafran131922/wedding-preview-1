"use client";
import Image from "next/image";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const flowerVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const flowerRightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const frameVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#faf3f0] to-[#f5e2d3] flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-300 mix-blend-soft-light"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-amber-200 mix-blend-soft-light"></div>
      </div>

      {/* Bunga kiri */}
      <motion.div
        className="absolute top-0 left-0 h-full hidden lg:flex items-center"
        variants={flowerVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/assets/flower-left.png"
          alt="Flower Left"
          className="h-full w-auto object-cover opacity-90"
          width={300}
          height={900}
          priority
        />
      </motion.div>

      {/* Bunga kanan */}
      <motion.div
        className="absolute top-0 right-0 h-full hidden lg:flex items-center"
        variants={flowerRightVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/assets/flower-right.png"
          alt="Flower Right"
          className="h-full w-auto object-cover opacity-90"
          width={300}
          height={900}
          priority
        />
      </motion.div>

      {/* Logo atas */}
      <motion.div
        className="absolute top-8 w-full text-center z-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2
          className={`text-[#a0755e] text-xl tracking-widest ${cormorant.className}`}
        >
          FONDIV
        </h2>
        <div className="w-16 h-px bg-[#a0755e] opacity-60 mx-auto mt-2"></div>
      </motion.div>

      {/* Konten utama */}
      <motion.div
        className="relative z-10 text-center max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header teks */}
        <motion.div className="mb-2 md:mb-12" variants={itemVariants}>
          <p className={`${playfair.className} text-[#8a6d5b] text-sm md:text-base tracking-widest uppercase mt-10 mb-2`}>
            Dengan penuh kebahagiaan kami mengundang Anda
          </p>
          <div className="flex items-center justify-center my-4">
            <div className="w-12 h-px bg-[#d4b8a7]"></div>
            <div className="mx-3 text-[#a0755e]">✻</div>
            <div className="w-12 h-px bg-[#d4b8a7]"></div>
          </div>
          <h3 className={`${playfair.className} text-[#7d5a4f] text-lg md:text-xl mt-4`}>
            Untuk merayakan pernikahan kami
          </h3>
        </motion.div>

        {/* Frame dengan gambar */}
        <motion.div
          className="relative w-full max-w-xl md:max-w-2xl mx-auto aspect-square mb-4"
          variants={frameVariants}
        >
          {/* Frame Image */}
          <Image
            src="/assets/frame.png"
            alt="Frame"
            fill
            className="object-contain drop-shadow-lg"
            priority
          />

          {/* Teks di dalam frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-12">
            {/* Subtitle */}
            <motion.p
              className={`${playfair.className} text-[#8a6d5b] text-sm md:text-base mb-3 tracking-widest uppercase`}
              variants={itemVariants}
            >
              The Wedding of
            </motion.p>

            {/* Nama */}
            <motion.h1
              className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-[#5d4437] mt-2 mb-4 leading-tight`}
              variants={itemVariants}
            >
              Bride
              <span className="block text-[#a0755e] mt-1">&</span>
              <span className="block ml-6">Groom</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Tanggal di luar frame */}
        <motion.p
          className={`${playfair.className} text-[#8a6d5b] text-lg md:text-xl mt-4 tracking-wide`}
          variants={itemVariants}
        >
          12 • 12 • 2023
        </motion.p>

        {/* Tombol */}
        <motion.div className="mt-8 md:mt-12" variants={itemVariants}>
          <motion.button
            className={`${playfair.className} group relative bg-transparent text-[#7d5a4f] px-8 py-4 rounded-full flex items-center gap-3 mx-auto border border-[#d4b8a7] overflow-hidden transition-all duration-500 hover:border-[#a0755e] hover:shadow-lg`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(160, 117, 94, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/main" className="flex items-center gap-2">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Buka Undangan
              </span>
              <span className="relative z-10 material-icons transition-transform duration-500 group-hover:translate-x-1">
                ✉
              </span>
            </Link>

            {/* Efek latar belakang hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#a0755e] opacity-0 group-hover:opacity-100 transition-all duration-500 w-0 group-hover:w-full"></div>
          </motion.button>

          <motion.p
            className={`${playfair.className} text-[#8a6d5b] text-xs mt-4 opacity-70`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Klik untuk membuka undangan digital
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-6 w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className={`${playfair.className} text-[#8a6d5b] text-xs opacity-70`}>
          Made with ❤️
        </p>
      </motion.div>
    </div>
  );
}
