
import Image from 'next/image';
import { CurvedUnderlineTitle } from '../CurvedUnderline';

export default function GetInvolvedHero() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow mb-8">
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[300px]">
        <Image
          src="/images/get-involved/Main-Get-involved.jpg"
          alt="Get Involved Hero"
          fill
          className="object-cover object-center "
          priority
        />
        {/* Gradient overlay only on the image, not on the text */}
        <div className="pointer-events-none absolute inset-0 w-full h-full z-10">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/10 via-black/0 to-transparent" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start w-full ml-[75px]">
          <CurvedUnderlineTitle text="Get Involved" classNameHeading="font-poppins font-bold text-[50px]  leading-[95px] tracking-normal capitalize text-white drop-shadow-lg text-cetner" />
        </div>
      </div>
    </div>
  );
} 