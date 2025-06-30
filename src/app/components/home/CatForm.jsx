'use client';

import React from 'react';
import Image from 'next/image';

const CatForm = () => {
  return (
    <section className="relative flex items-end min-h-[420px] w-full overflow-hidden bg-[#FFF6E9] p-0">
      {/* Cat main image with paw print overlay - hidden on small screens */}
      <div className="relative min-w-[340px] h-[420px] items-end z-20 hidden md:flex">
        <Image
          src="/images/End-main-cat.png"
          alt="cat"
          width={260}
          height={340}
          className="object-contain absolute left-0 bottom-0 z-20"
        />
        <Image
          src="/images/fott-print-with-cat.png"
          alt="paw print"
          width={260}
          height={340}
          className="object-contain absolute left-0 bottom-0 z-30 pointer-events-none"
        />
      </div>
      {/* Form and paw print bg - always visible */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-30 min-h-[420px] w-full">
        <div className="relative w-full max-w-[420px] pt-8">
          <h2 className="font-bold text-2xl mb-6 text-center text-[#222] leading-snug">
            Let's Make A Pawsitive<br />Change, Together!
          </h2>
          <form className="flex flex-wrap gap-3 justify-center relative z-40">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 min-w-[120px] border border-[#F9CD86] rounded-2xl  px-3 py-2 text-sm bg-white"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 min-w-[120px] border border-[#F9CD86] rounded-2xl  px-3 py-2 text-sm bg-white"
              required
            />
            <input
              type="number"
              placeholder="Phone No."
              className="flex-1 min-w-[120px] border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 min-w-[120px] border border-[#F9CD86] rounded-2xl  px-3 py-2 text-sm bg-white"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-[#F9CD86] rounded-2xl  px-3 py-2 text-sm bg-white"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full border border-[#F9CD86] rounded-2xl  px-3 py-2 text-sm bg-white min-h-[60px] resize-vertical"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#FF5A5F] text-white rounded-2xl  py-3 font-bold text-base mt-2 shadow-md hover:bg-[#e14c4f] transition-colors"
            >
              Submit
            </button>
          </form>
          {/* Paw print bg under form */}
          <Image
            src="/images/fott-print-with-from.png"
            alt="paw print bg"
            width={420}
            height={120}
            className="pointer-events-none opacity-70 absolute left-1/2 bottom-0 -translate-x-1/2 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default CatForm;
