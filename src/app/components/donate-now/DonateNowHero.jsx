import Image from "next/image";

export default function DonateNowHero() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow mb-8">
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[300px]">
        <Image
          src="/images/donate-now-main-image.png"
          alt="Donate Now Hero"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}
