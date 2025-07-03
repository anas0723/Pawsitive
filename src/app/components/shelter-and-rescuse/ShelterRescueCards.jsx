import Image from 'next/image';

const cards = [
  {
    title: 'Shelters',
    text: 'At Pawsitive Change, we partner with shelters to provide the dedicated teams and resources necessary for every pet to thrive. Our network supports animal intake, medical care, adoption, and community outreach, building a safety net for animals in need.',
    image: '/images/shelters-rescues/left-cat.png',
    border: '#E0EDFF',
  },
  {
    title: 'Rescues',
    text: 'To help increase the number of pets saved by our movement, we partner with rescue organizations to provide resources, foster care, and emergency support. Every rescue story is unique, and every animal deserves a second chance. We help provide the tools and support needed.',
    image: '/images/shelters-rescues/cage-cat.png',
    border: '#B6F2E6',
  },
];

export default function ShelterRescueCards() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-8 mb-12 justify-center items-center">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
          <div className="mb-4">
            <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-[50%_45%_50%_55%/55%_50%_45%_50%] flex items-center justify-center overflow-hidden" style={{ background: card.border, border: `4px solid ${card.border}` }}>
              <Image src={card.image} alt={card.title} width={140} height={140} className="object-cover w-full h-full" priority />
            </div>
          </div>
          <h3 className="font-poppins font-bold text-lg text-[#222] mb-2">{card.title}</h3>
          <p className="font-poppins text-[15px] text-[#444] text-center">{card.text}</p>
        </div>
      ))}
    </section>
  );
} 