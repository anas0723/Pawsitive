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
    image: '/images/shelters-rescues/right-car.png',
    border: '#B6F2E6',
  },
];

export default function ShelterRescueCards() {
  return (
    <section
      className="relative flex flex-row gap-[31px] w-full max-w-[1293px] mx-auto mb-12 justify-center items-center"
      style={{ minHeight: '554px' }}
    >
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow flex flex-row items-center w-[631px] h-[554px] p-0">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div
              className={
                `absolute top-0 left-[152.87px] w-[325.26px] h-[322.6px] rounded-full border-[12px] flex items-center justify-center overflow-hidden`
              }
              style={{ background: card.border, borderColor: card.border }}
            >
              <Image src={card.image} alt={card.title} width={325} height={323} className="object-cover w-full h-full" priority />
            </div>
            <div className="absolute bottom-0 left-0 w-full px-8 pb-8 flex flex-col items-center">
              <h3 className="font-poppins font-bold text-lg text-[#222] mb-2">{card.title}</h3>
              <p className="font-poppins text-[15px] text-[#444] text-center">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} 