import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="w-full rounded-xl overflow-hidden mb-10 relative h-[120px] md:h-[180px] lg:h-[200px]">
      <Image
        src="/images/about-us/about-us-main.png"
        alt="About Us Hero"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
    </div>
  );
} 