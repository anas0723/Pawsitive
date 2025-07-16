import Image from 'next/image';
import { CurvedUnderlineTitle } from '../CurvedUnderline';

export default function AboutHero() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow mb-8">
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[300px]">
        <Image
          src="/images/about-us/about-us-main.jpg" 
          alt="About Us Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col  text-white  items-start ml-[70px] w-full">
          <CurvedUnderlineTitle 
            text="About Us" 
            classNameHeading="font-poppins font-bold text-[75px] leading-[95px] text-white  tracking-normal capitalize"
          />
        </div>
      </div>
    </div>
  );
}