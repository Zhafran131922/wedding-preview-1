"use client";

import Image from "next/image";
import { Instagram, Music2 } from "lucide-react"; // Music2 untuk TikTok vibe

export default function Footer() {
  return (
    <footer className="bg-[#f8f4ef] border-t border-[#e0d8d0] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Logo dan Nama */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/assets/fondiv-logo.png" // Ganti dengan path logo fondiv
            alt="Fondiv Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-[#5a4f41] font-semibold text-lg">Fondiv</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/fondiv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a4f41] hover:text-[#a18b74] transition"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://tiktok.com/@fondiv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a4f41] hover:text-[#a18b74] transition"
            aria-label="TikTok"
          >
            <Music2 size={24} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-[#8c7b6d] mt-4">
        © {new Date().getFullYear()} Fondiv. All rights reserved.
      </div>
    </footer>
  );
}
