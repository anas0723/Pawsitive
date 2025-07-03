"use client";
import React from "react";
import Image from "next/image";

const CatForm = () => {
  return (
    <div className="relative w-full min-h-[500px] bg-[#FFEBD8] overflow-hidden flex flex-col items-center justify-center py-10">
      {/* Top Curve */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,120 C300,200 600,0 900,120 C1200,240 1440,40 1440,120 L1440,0 L0,0 Z"
        ></path>
      </svg>

      {/* Paw prints as background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Multiple paw prints, soft and scattered */}
        <Image
          src="/images/fott-print-with-from.png"
          alt="Paw prints background from"
          width={120}
          height={120}
          className="absolute left-[10%] top-[30%] opacity-20 rotate-12"
          style={{zIndex: 1}}
        />
        <Image
          src="/images/fott-print-with-from.png"
          alt="Paw prints background from"
          width={100}
          height={100}
          className="absolute left-[40%] top-[50%] opacity-20 -rotate-6"
          style={{zIndex: 1}}
        />
        <Image
          src="/images/fott-print-with-from.png"
          alt="Paw prints background from"
          width={90}
          height={90}
          className="absolute left-[70%] top-[20%] opacity-20 rotate-3"
          style={{zIndex: 1}}
        />
        <Image
          src="/images/fott-print-with-from.png"
          alt="Paw prints background from"
          width={110}
          height={110}
          className="absolute left-[80%] top-[60%] opacity-20 -rotate-12"
          style={{zIndex: 1}}
        />
        <Image
          src="/images/fott-print-with-from.png"
          alt="Paw prints background from"
          width={80}
          height={80}
          className="absolute left-[60%] top-[80%] opacity-20 rotate-6"
          style={{zIndex: 1}}
        />
      </div>

      {/* Main Content aligned with header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
        {/* Cat Image */}
        <div className="flex-shrink-0 flex items-end justify-center w-full md:w-1/2">
          <Image
            src="/images/End-main-cat.png"
            alt="Cat"
            width={260}
            height={340}
            className="object-contain"
            priority
          />
        </div>
        {/* Form Section */}
        <div className="w-[479px] h-[472px] md:w-1/2 bg-transparent rounded-2xl  p-6 md:p-8 flex flex-col items-center">
          <h2 className="font-bold text-xl md:text-2xl mb-6 text-[#222] leading-snug text-center">
            Let’s Make A Pawsitive<br />Change, Together!
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
              required
            />
            <input
              type="text"
              placeholder="Phone No."
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-2"
              required
            />
            <textarea
              placeholder="Message"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white min-h-[60px] resize-vertical col-span-2"
              required
            />
            <button
              type="submit"
              className="col-span-2 bg-[#FF5A5F] text-white rounded-lg py-3 font-bold text-base mt-2 shadow hover:bg-[#e14c4f] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CatForm;

