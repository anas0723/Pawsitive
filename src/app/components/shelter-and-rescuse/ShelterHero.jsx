import Image from 'next/image';
import { CurvedUnderlineTitle } from '../CurvedUnderline';


export default function ShelterHero() {
  return (
    <div className="w-full rounded-xl overflow-hidden mb-10 relative h-[120px] md:h-[180px] lg:h-[200px]">
      <Image
        src="/images/shelters-rescues/shelters-rescues.jpg"
        alt="Shelters & Rescues Hero"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
      {/* Right-to-left gradient overlay for improved text visibility */}
      <div className="pointer-events-none absolute inset-0 w-full h-full ">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      {/* Heading with curved underline, positioned and styled like Get Involved hero */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start w-full ml-[75px] z-20">
        <CurvedUnderlineTitle text="Shelter & Rescues" classNameHeading="font-poppins font-bold text-[40px] md:text-[50px] leading-[95px] tracking-normal capitalize text-white drop-shadow-lg text-center" />
      </div>
    </div>
  );
} 