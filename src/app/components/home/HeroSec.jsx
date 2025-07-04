import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSec = () => {
  return (
    <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-4 flex items-center justify-center">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[657px] mt-[32px] sm:mt-[53px] flex items-center justify-center overflow-hidden rounded-r-2xl">
        <Image
          src="/images/hero-section.jpg"
          alt="Hero Image"
          fill
          className="object-cover w-full h-full rounded-r-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-90 rounded-r-2xl z-10"></div>
        <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 sm:top-[44px] sm:left-[44px] sm:-translate-x-0 w-[95vw] max-w-[98vw] xs:max-w-[90vw] sm:max-w-xl p-2 xs:p-4 sm:p-8 flex flex-col items-center sm:items-start">
          <h1 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight text-center sm:text-left break-words">
            Empowering <br className="hidden xs:block" />
            Shelter
            <span className="text-[#EE5D56] block">
              Transforming Lives?
            </span>
          </h1>
          <div className="flex gap-[10px] mt-3 xs:mt-5 sm:mt-6 flex-row w-full sm:w-auto items-center sm:items-start">
            <Link href="/donate-now" className="bg-[#EE5D56] text-white font-semibold w-[140px] xs:w-[167px] h-[44px] xs:h-[52px] rounded-[16px] shadow hover:bg-[#ff7a6c] transition-colors px-4 py-2 text-base xs:text-lg leading-none flex items-center justify-center whitespace-nowrap">Donate Now</Link>
            <Link href="/request-kit" className="bg-white text-black font-semibold w-[167px] h-[52px] rounded-[16px] shadow border-4 border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center">Request a kit</Link>
          </div>
             <p className="text-[#fff] text-xs mt-6 xs:text-sm sm:text-base md:text-lg lg:text-xl xs:mt-3 sm:mt-4 text-right sm:text-left max-w-full xs:max-w-[90vw] sm:max-w-md">
            Pawsitive Change delivers essential tools to shelters across the country—protecting pets from illness and giving them a real chance at a healthy, happy future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
