import Image from 'next/image';
import { CTA_BUTTON_CLASSES } from '../common/CTAButtonClasses';

export default function AboutJoin() {
  return (
    <section className="w-full rounded-xl overflow-hidden shadow mb-10 flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-0 md:pl-12 md:pr-8 bg-gradient-to-r from-[#E0EDFF] to-[#EDFFE6]">
        <h2 className="font-poppins font-bold text-[35px] leading-[50px] tracking-normal text-[#2E2E38] mb-3">Join us in making a<br/>Pawsitive Change</h2>
        <p className="font-poppins text-[16px]  text-[#000] mb-4 max-w-md">Together, we’re creating healthier, safer, and more sustainable environments for animals everywhere. Because every animal deserves a fighting chance, and every individual or organization dedicated to their care deserves a strong support system.
          <span className='block mt-6 text-[16px] '>
          All donations go to animal welfare. All board members and administrators are volunteers.
          </span>
        </p>
        <button className={CTA_BUTTON_CLASSES + ' font-poppins w-[167px] h-[52px] rounded-[16px] border-4 px-[28px] py-[14px] flex items-center justify-center gap-[10px] text-base'}>Join us</button>
      </div>
      {/* Right Side */}
      <div className="flex-1 min-h-[260px] relative bg-white">
        <Image
          src="/images/about-us/dog-cat-center.png"
          alt="Dog and Cat"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
    </section>
  );
} 