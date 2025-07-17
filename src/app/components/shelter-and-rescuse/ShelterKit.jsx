import Image from 'next/image';

const kit = [
  {
    title: 'ByoPro Electrostatic Applicator',
    text: 'A cutting-edge applicator for sanitizing surfaces quickly and efficiently, ensuring a safe environment for animals and staff. Easy to use and highly effective.',
    image: '/images/shelters-rescues/cleaning-bypro.png',
  },
  {
    title: 'Clean Republic Multi-Purpose Disinfectant',
    text: 'A powerful, non-toxic disinfectant that kills 99.9% of germs and viruses. Safe for use around animals, staff, and visitors, keeping your facility sanitized and healthy.',
    image: '/images/shelters-rescues/multi-purpose-cleaning.png',
  },
  {
    title: 'CleansAir Air Cleaning Cards',
    text: 'Innovative air cleaning cards that help reduce airborne contaminants, improving air quality and safety for everyone in your shelter or rescue.',
    image: '/images/shelters-rescues/clean-air-card.png',
  },
];

export default function ShelterKit() {
  return (
    <section className="flex flex-col w-full max-w-[1315px] mx-auto mb-12 gap-[45px]" style={{ minHeight: '561px' }}>
      <h2 className="font-poppins font-bold text-[45px] leading-[63px] text-[#2E2E38] tracking-normal">What's in the Kit?</h2>
      <div className="flex flex-row w-full max-w-[1279px] mx-auto gap-[53px] justify-center items-center" style={{ minHeight: '561px' }}>
        {kit.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[14px] border-[2px] border-[#E5E5E5] shadow-lg flex flex-col items-center w-[391px]  p-0">
            <div className="flex flex-col w-[380px] h-auto mt-[63px] ml-[5.83px] mb-[63px] items-center">
              <div className="mb-4">
                <Image src={item.image} alt={item.title} width={90} height={90} className="object-contain w-[90px] h-[90px]" priority />
              </div>
              <h3 className="font-poppins font-bold text-base text-[#222] mb-2 text-center">{item.title}</h3>
              <p className="font-poppins text-[15px] text-[#444] text-center">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 