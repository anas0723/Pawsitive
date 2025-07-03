import Image from 'next/image';


export default function ShelterHero() {
  return (
    <div className="w-full rounded-xl overflow-hidden mb-10 relative h-[120px] md:h-[180px] lg:h-[200px]">
      <Image
        src="/images/shelters-rescues/shelters-rescues.png"
        alt="Shelters & Rescues Hero"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white ml-8 relative">
          Shelters & Rescues
          <span className="block w-32 h-1 bg-[#5A8FFF] mt-2 rounded"></span>
        </h1>
      </div>
    </div>
  );
} 