import Image from 'next/image';

export default function GetInvolvedStep() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="rounded-full overflow-hidden border-4 border-[#FF8B71] w-56 h-56 flex items-center justify-center mb-4">
        <Image
          src="/images/get-involved/Cat-last.png"
          alt="Cat"
          width={220}
          height={220}
          className="object-cover"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2">Take The First Step...</h3>
      <button className="px-6 py-2 rounded-full bg-[#FF8B71] text-white font-semibold hover:bg-[#ff6a3d] transition-colors duration-200 text-base">Become a Volunteer</button>
    </div>
  );
} 