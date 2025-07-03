'use client';
import Image from 'next/image';
import { useState } from 'react';
import AmbassadorModal from '../ambassador/AmbassadorModal';

// This section is now handled in GetInvolvedIntro.jsx as per the latest screenshot.
export default function GetInvolvedJoin() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="mb-10">
      <div className="bg-white shadow-2xl rounded-2xl  flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-0 md:pl-10 md:pr-4">
          <h2 className="font-poppins font-bold text-[45px] leading-[63px] tracking-normal text-[#222] mb-4 w-[552.38px] h-[189px]">
            Join us in making a real difference for animals in need.
          </h2>
          <div className="font-poppins font-semibold text-[24px] leading-[30px] tracking-normal text-[#1CC8AE] mb-2">
            “Let's act with compassion and care for those without a voice.”
          </div>
          <div className="font-poppins text-xs text-[#888] mb-4">Inspired by Proverbs 12:10</div>
          <button onClick={() => setModalOpen(true)} className="font-poppins w-fit px-6 py-2 rounded-full bg-[#FF8B71] text-white font-semibold shadow hover:bg-[#ff6a3d] transition-colors duration-200 text-base mb-[44px]">Become An Ambassador</button>
          <AmbassadorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
        {/* Right Side */}
        <div className="flex-1 min-h-[220px] relative">
          <Image
            src="/images/get-involved/Dog-center-aunt.png"
            alt="Dog and Aunt"
            fill
            className="object-cover object-center w-full h-full rounded-tr-[1rem] rounded-br-[1rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
} 