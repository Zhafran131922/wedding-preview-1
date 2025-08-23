"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // ✅ Import icon dari lucide-react
import First from "@/app/components/first";
import Second from "@/app/components/second";
import Third from "@/app/components/third";
import Fourth from "@/app/components/fourth";
import Fifth from "@/app/components/fifth";
import Sixth from "@/app/components/sixth";
import Seventh from "../components/seventh";
import Eighth from "../components/eighth";

export default function Main() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked by browser:", err);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="bg-vintage-beige relative overflow-hidden">
      {/* Audio Player */}
      <audio ref={audioRef} src="/music/music.mp3" loop preload="auto" />

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-beige-900 pattern-opacity-20 pattern-size-6"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Floral corner decorations */}
        <div className="absolute top-0 left-0 opacity-5">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <path d="M0,0 C30,10 50,40 50,70 C50,40 70,10 100,0 L100,100 L0,100 Z" fill="#8c7b6d" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 opacity-5 rotate-180">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <path d="M0,0 C30,10 50,40 50,70 C50,40 70,10 100,0 L100,100 L0,100 Z" fill="#8c7b6d" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eighth />
      </div>

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-4 right-4 z-50 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Volume2 size={28} className="text-[#5a4f41]" />  
        ) : (
          <VolumeX size={28} className="text-[#5a4f41]" />
        )}
      </button>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-vintage-beige {
          background-color: #d6c6b5;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .pattern-dots {
          background-image: radial-gradient(#8c7b6d 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </main>
  );
}
