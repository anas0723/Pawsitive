import Image from 'next/image';

export default function AboutJoin() {
  return (
    <section className="w-full rounded-xl overflow-hidden shadow mb-10 flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-0 md:pl-12 md:pr-8 bg-gradient-to-r from-[#E0EDFF] to-[#EDFFE6]">
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-3">Join us in making a<br/>Pawsitive Change</h2>
        <p className="font-poppins text-[16px] leading-[25.76px] text-[#444] mb-4 max-w-md">Together, we're creating healthier, safer, and more sustainable environments for animals everywhere. Because every animal deserves a fighting chance, and every individual or organization dedicated to their care deserves a strong community of helpers. All donations go to animal care & rescue</p>
        <button className="font-poppins w-fit px-6 py-2 rounded-full bg-[#FF8B71] text-white font-semibold shadow hover:bg-[#ff6a3d] transition-colors duration-200 text-base">Join us</button>
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