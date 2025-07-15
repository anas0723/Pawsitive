import React from "react";
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Back by Science, Built for Impact",
    desc:
      "Our biosecurity kits use EPA-Registered chemistry that's been independently tested to eliminate harmful pathogens without harsh chemicals—protecting both animals and the people who care for them.",
    color: "text-[#FF8B71] border-[#FF8B71] bg-[#FFF7F2]",
  },
  {
    number: "02",
    title: "Comprehensive Shelter Support",
    desc:
      "From food and supplies to certified training programs and disaster response, we provide tailored resources that empower shelters to operate safely and effectively.",
    color: "text-[#FFD600] border-[#FFD600] bg-[#FFFBEA]",
  },
  {
    number: "03",
    title: "Transparent Partnerships",
    desc:
      "We maintain full transparency in our operations, offering shelters free biosecurity kits, critical supplies, and ongoing assistance to maximize their impact.",
    color: "text-[#2ED47A] border-[#2ED47A] bg-[#E6FFF3]",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 md:gap-0 bg-white">
      {/* Left: Text & Features */}
      <div className="flex-1 flex flex-col items-start justify-center gap-6 max-w-xl">
        <span className="text-[#2ED47A] font-semibold text-sm mb-2">Why Choose Us</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What Sets Us Apart</h2>
        <div className="flex flex-col gap-6 w-full">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 font-bold text-base ${f.color}`}>{f.number}</div>
              <div>
                <div className="font-bold text-lg text-gray-900 mb-1">{f.title}</div>
                <div className="text-gray-500 text-base font-medium leading-snug">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 flex items-center justify-center w-[140px] h-[44px] rounded-[12px] border border-[#FF8B71] bg-[#FF8B71] text-white font-semibold px-6 py-2 gap-2 text-base shadow-sm transition-all duration-150 hover:bg-[#FD7064] focus:outline-none">Contact us</button>
      </div>
      {/* Right: Images */}
      <div className="flex-1 flex items-center justify-center relative min-h-[370px]">
        {/* Large circle with dog and cat */}
        <div className="relative w-[320px] h-[320px] md:w-[352px] md:h-[352px] rounded-full bg-white shadow-lg flex items-center justify-center overflow-visible">
          <Image
            src="/images/last-sub-section/dog-cat-main.png"
            alt="Dog and Cat"
            width={320}
            height={320}
            className="object-cover z-10 rounded-full"
            priority
          />
        </div>
        {/* Small circle with side dog, overlapping bottom right */}
        <div className="absolute right-[-30px] bottom-[-20px] w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-white shadow-lg flex items-center justify-center overflow-visible">
          <Image
            src="/images/last-sub-section/side-dog.png"
            alt="Dog"
            width={120}
            height={120}
            className="object-cover z-20 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
