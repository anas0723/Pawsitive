import Image from 'next/image';

export default function LaNeedsOurHelpHero() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow mb-8">
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[300px]">
        <Image
          src="/images/la-need-our-help/la-needs-our-helps-dog.png"
          alt="LA Needs Our Help Hero Dog"
          fill
          className="object-cover object-center"
          priority
        />
      
      </div>
    </div>
  );
} 