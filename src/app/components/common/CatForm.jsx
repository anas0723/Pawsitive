"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatForm = () => {
  return (
    <section className="relative w-full min-h-[420px] flex flex-col md:flex-row items-end justify-center overflow-hidden bg-[#FFF6E9] p-0">
      {/* Top pink curve */}
      <Image
        src="/images/Pink-curve-line.png"
        alt="Pink curve line"
        width={1600}
        height={180}
        className="absolute top-0 left-0 w-full h-[80px] md:h-[120px] object-cover z-0"
        priority
      />
      {/* Paw print background */}
      <Image
        src="/images/fott-print-with-from.png"
        alt="Paw print bg"
        width={600}
        height={400}
        className="absolute right-0 bottom-0 w-2/3 md:w-[60%] h-2/3 md:h-[80%] object-contain opacity-40 z-0 pointer-events-none"
      />
      {/* Cat image left */}
      <div className="relative z-10 flex-1 flex justify-center md:justify-end items-end min-w-0 max-w-xs md:max-w-[340px] h-[220px] md:h-[420px] mx-auto md:mx-0">
        <Image
          src="/images/end-main-cat.png"
          alt="Cat"
          width={200}
          height={400}
          className="object-contain h-full w-auto"
        />
        {/* Side paw print */}
        <Image
          src="/images/fott-print-with-cat.png"
          alt="Side paw print"
          width={80}
          height={120}
          className="absolute left-0 bottom-0 w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain opacity-70 z-20"
        />
      </div>
      {/* Form section */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center min-h-[320px] md:min-h-[420px] w-full max-w-md px-2 sm:px-4 md:px-4 mx-auto">
        <h2 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center text-[#222] leading-snug">
          Let's Make A Pawsitive
          <br />Change, Together!
        </h2>
        <form className="flex flex-wrap gap-2 md:gap-3 justify-center w-full">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 min-w-0 md:min-w-[120px] border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 min-w-0 md:min-w-[120px] border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white"
            required
          />
          <input
            type="text"
            placeholder="Phone No."
            className="flex-1 min-w-0 md:min-w-[120px] border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 min-w-0 md:min-w-[120px] border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white"
            required
          />
          <textarea
            placeholder="Message"
            className="w-full border border-[#F9CD86] rounded-2xl px-3 py-2 text-sm bg-white min-h-[60px] resize-vertical"
            required
          />
          <Link href="/donate-now" className="w-full bg-[#FF5A5F] text-white rounded-2xl py-3 font-bold text-base mt-2 shadow-md hover:bg-[#e14c4f] transition-colors block text-center">
            Submit
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CatForm;

