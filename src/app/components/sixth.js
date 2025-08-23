"use client";

import Image from "next/image";
import { useState } from "react";
import flowerFrame from "../../../public/assets/flower.png";  

export default function Sixth() {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 300;

  const handleWishesChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <section className="bg-transparent py-16 flex flex-col items-center px-4">
      {/* RSVP */}
      <h2 className="text-2xl md:text-3xl font-serif italic text-[#5a4f41] mb-6">
        RSVP
      </h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
        />
        <input
          type="number"
          placeholder="Number of Guest"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
        />
        <select className="border border-gray-300 rounded-md px-4 py-2 bg-white">
          <option>Confirmation of Attendance</option>
          <option>Yes, I will attend</option>
          <option>No, I can&apos;t attend</option>
        </select>
        <button className="bg-[#8c7b6d] text-white rounded-full py-2 mt-4 hover:bg-[#6f6054]">
          Send
        </button>
      </form>

      {/* Image Frame */}
      <div className="relative mt-12 mb-12">
        {/* Flower Frame (Background) */}
        <Image
          src={flowerFrame}
          alt="Flower Frame"
          width={350}
          height={350}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />

        {/* Main Image */}
        <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-[#d4cfc7] relative z-10">
          <Image
            src="/images/gallery2.jpg"
            alt="Wedding Gallery"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Wedding Wishes */}
      <h2 className="text-2xl md:text-3xl font-serif italic text-[#5a4f41] mb-6">
        Wedding Wishes
      </h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
        />
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
        />
        <textarea
          placeholder="Write your wishes"
          className="border border-gray-300 rounded-md px-4 py-2 bg-white"
          rows={4}
          maxLength={maxChars}
          onChange={handleWishesChange}
        ></textarea>
        <p className="text-sm text-gray-500">
          Characters left: {maxChars - charCount}
        </p>
        <button className="bg-[#8c7b6d] text-white rounded-full py-2 hover:bg-[#6f6054]">
          Send
        </button>
      </form>
    </section>
  );
}
