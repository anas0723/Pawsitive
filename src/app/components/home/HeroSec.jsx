import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSec = () => {
  return (
    <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-4 flex items-center justify-center">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[657px] mt-[32px] sm:mt-[53px] flex items-center justify-center overflow-hidden rounded-2xl">
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
               <div className=" ">
             <p className="text-white text-base md:text-lg lg:text-xl mt-6 xs:mt-3 sm:mt-4 text-center sm:text-left md:leading-relaxed md:max-w-5xl">
  Pawsitive Change delivers essential tools to shelters across the country—protecting pets from illness
  and giving them a real chance at a healthy, happy future.

          </p>
          </div>
          <div className="flex gap-[10px] mt-3 xs:mt-5 sm:mt-6 flex-row w-full sm:w-auto items-center sm:items-start">
            <Link href="/donate-now" className="flex items-center justify-center gap-[10px] w-[167px] h-[52px] rounded-[16px] border-4 border-[#EE5D56] bg-gradient-to-r from-[#FD7064] to-[#FF8B71] text-white font-semibold text-base px-[28px] py-[14px] shadow-[ -1px_4px_12px_0px_rgba(0,0,0,0.1)] transition-colors whitespace-nowrap">Donate Now</Link>
            <Link href="/request-kit" className="bg-white text-black font-semibold w-[167px] h-[52px] rounded-[16px] shadow border-4 border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center">Request a kit</Link>
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
