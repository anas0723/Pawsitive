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
    <section className="w-full mb-12">
      <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-8">What's in the Kit?</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {kit.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-xs w-full">
            <div className="mb-4">
              <Image src={item.image} alt={item.title} width={90} height={90} className="object-contain w-[90px] h-[90px]" priority />
            </div>
            <h3 className="font-poppins font-bold text-base text-[#222] mb-2 text-center">{item.title}</h3>
            <p className="font-poppins text-[15px] text-[#444] text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 