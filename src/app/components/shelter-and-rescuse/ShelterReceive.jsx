"use client";
import { FaVideo, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import KitOrderModal from '../kit/KitOrderModal';

const cards = [
  {
    icon: <FaVideo className="text-[#5A8FFF] text-2xl mx-auto" />,
    title: 'Video training',
    desc: 'On how to safely set up and use the applicator',
  },
  {
    icon: <FaShieldAlt className="text-[#A259FF] text-2xl mx-auto" />,
    title: 'Clean, Disinfect, and Protect protocol',
    desc: 'A clear, easy-to-follow instructions',
  },
  {
    icon: <FaHeadset className="text-[#FF8B71] text-2xl mx-auto" />,
    title: 'Ongoing support',
    desc: 'From our team whenever you need help',
  },
];

export default function ShelterReceive() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="w-full py-12">
      {/* What You'll Receive Cards */}
      <div className="max-w-7xl mx-auto w-full px-4 mb-12">
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-8">What You’ll Receive?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
              <div className="mb-3">{card.icon}</div>
              <div className="font-poppins font-bold text-base text-[#222] mb-1">{card.title}</div>
              <div className="font-poppins text-[15px] text-[#444]">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* For Shelters and Rescues Section */}
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center rounded-2xl overflow-hidden bg-gradient-to-r from-[#F6FBFF] to-[#fff] shadow">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center py-10 px-6 md:px-12">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-3">For Shelters and Rescues, And All Animal Care Facilities</h3>
          <p className="font-poppins text-[15px] md:text-[16px] text-[#444] mb-5 max-w-md">To help improve the health and safety of your environment, we’re offering a CleanAir Kit (valued at $400) delivered at no cost to your organization. It’s like a biosecurity training you need to simplify cage sanitation while reducing stress and risk for animals and staff or protocol.</p>
          <button onClick={() => setModalOpen(true)} className="font-poppins w-fit px-6 py-2 rounded-full bg-[#FF8B71] text-white font-semibold shadow hover:bg-[#ff6a3d] transition-colors duration-200 text-base">Order your kit now</button>
          <KitOrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
        {/* Right: Image */}
        <div className="flex-1 min-h-[260px] relative w-full h-[260px] md:h-[340px]">
          <Image
            src="/images/shelters-rescues/cage-cat.png"
            alt="Cats in Cage"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
} 