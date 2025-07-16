"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Gabriella Jew',
    title: 'Director',
    avatar: '/images/about-us/lady.png',
    text: '“Your donations have been a game changer for Muttville. Your disinfection solutions and equipment have allowed us to make our open shelter model work and still healthy for the dogs. They have also energized our volunteers because they are so easy to use, anyone at any age can operate them. We’ve had volunteers fighting over the chance to clean and disinfect!”',
  },
  // Add more testimonials as needed
];

export default function AboutTestimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(idx === 0 ? testimonials.length - 1 : idx - 1);
  const next = () => setIdx(idx === testimonials.length - 1 ? 0 : idx + 1);
  const t = testimonials[idx];
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-5xl mx-auto w-full px-4">
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-8">What Are Our Customers Saying?</h2>
        <div className="relative flex justify-center items-center">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow w-9 h-9 flex items-center justify-center text-[#222] hover:bg-[#FF8B71] hover:text-white transition-colors duration-200 z-10">
            <FaChevronLeft />
          </button>
          <div className="bg-white rounded-2xl shadow-lg px-8 py-8 max-w-2xl w-full flex flex-col items-center text-center relative z-0">
            <Image src={t.avatar} alt={t.name} width={56} height={56} className="rounded-full mb-2 object-cover" />
            <div className="font-poppins font-bold text-lg text-[#222]">{t.name}</div>
            <div className="font-poppins text-[15px] text-[#888] mb-3">{t.title}</div>
            <div className="font-poppins text-[16px] leading-[25.76px] text-[#3D3D3D]">{t.text}</div>
          </div>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow w-9 h-9 flex items-center justify-center text-[#222] hover:bg-[#FF8B71] hover:text-white transition-colors duration-200 z-10">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
} 