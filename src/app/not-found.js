"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Home, ArrowLeft } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-beige-wedding flex items-center justify-center relative overflow-hidden px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 pattern-diamonds pattern-beige-500 pattern-size-8 pattern-opacity-20"></div>
        
        {/* Floral pattern corners */}
        <div className="absolute top-10 left-10 opacity-15">
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

      {/* Animated flowers */}
      <div className="absolute top-20 left-10 opacity-40 animate-float-slow">
        <Image
          src="/assets/flower.png"
          alt="Floral decoration"
          width={60}
          height={60}
          className="rotate-12"
        />
      </div>
      <div className="absolute bottom-20 right-10 opacity-40 animate-float-slower -rotate-12">
        <Image
          src="/assets/flower.png"
          alt="Floral decoration"
          width={60}
          height={60}
        />
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-md">
        {/* Wedding rings illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-8 mx-auto w-48 h-48"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-beige-dark opacity-30"></div>
            <div className="absolute w-20 h-20 rounded-full border-4 border-beige-dark opacity-50"></div>
            <Heart
              size={48}
              className="text-beige-dark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="#8a6d5b"
              opacity={0.7}
            />
          </div>
          <div className="text-9xl font-serif text-beige-dark opacity-80">404</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-2xl md:text-3xl text-beige-dark mb-4 ${cormorant.className}`}
        >
          Halaman Tidak Ditemukan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-beige-dark mb-8 leading-relaxed"
        >
          Sepertinya halaman yang Anda cari telah dipindahkan atau tidak ada.
          Mari kembali ke perayaan kami!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-beige-dark text-white px-6 py-3 rounded-full hover:bg-beige-darker transition-colors duration-300"
          >
            <Home size={18} />
            <span>Kembali ke Beranda</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-beige-dark text-beige-dark px-6 py-3 rounded-full hover:bg-beige-dark hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span>Kembali ke Halaman Sebelumnya</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 text-beige-dark text-sm"
        >
          <p className={`${cormorant.className} italic`}>
            "Cinta tidak selalu menemukan jalan yang lurus, 
            tetapi selalu menemukan jalan pulang."
          </p>
        </motion.div>
      </div>

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
        
        .text-beige-dark {
          color: #8a6d5b;
        }
        
        .bg-beige-dark {
          background-color: #8a6d5b;
        }
        
        .bg-beige-darker {
          background-color: #6d5647;
        }
        
        .border-beige-dark {
          border-color: #8a6d5b;
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes float-slower {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}