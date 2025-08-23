"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

export default function GallerySection() {
  const sliderImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
  ];

  const heroImage = "/images/hero-couple.jpg";

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section
      className={`${playfair.variable} ${cormorant.variable} ${parisienne.variable} bg-[#f8f4ef]`}
    >
      {/* Hero Full Width */}
      <div className="relative w-full h-[70vh] md:h-[90vh]">
        <Image
          src={heroImage}
          alt="Couple Hero"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-b-[2rem]"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${parisienne.className} text-white text-5xl md:text-7xl font-normal text-center px-4 drop-shadow-lg`}
          >
            Bride & Groom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`${cormorant.className} text-white mt-4 text-lg md:text-2xl drop-shadow-md italic`}
          >
            14 Februari 2026
          </motion.p>
        </div>
      </div>

      {/* Container untuk Slider */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          className={`${playfair.className} text-3xl md:text-4xl text-center mb-8 text-[#5a4f41] tracking-wide`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our Gallery
        </motion.h2>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {sliderImages.map((img, index) => (
              <div key={index} className="px-2 focus:outline-none">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <Image
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots li button:before {
          color: #8a5f4c;
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #5a4f41;
        }
      `}</style>
    </section>
  );
}
