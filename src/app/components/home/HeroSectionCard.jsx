'use client';
import { FaHeart, FaHome, FaFire } from "react-icons/fa";
import { useState } from "react";
import AmbassadorModal from '../ambassador/AmbassadorModal';
import Link from 'next/link';

const cards = [
	{
		iconBg: "bg-[#FFE6E6]",
		icon: <FaHeart className="text-[#FF5D5D] w-7 h-7" />, // Heart icon
		title: "Join Our Ambassador Program",
		desc: "Use our Pawsitive Change card to shop local supplies matched by us dollar for dollar.",
		button: "Become An Ambassador",
		buttonLink: "/ambassador",
	},
	{
		iconBg: "bg-[#FFF8E1]",
		icon: <FaHome className="text-[#FFD600] w-7 h-7" />, // Home icon
		title: "Get A Kit For Your Shelter",
		desc: "Request free biosecurity kits and critical supplies tailored to your facility's needs.",
		button: "Request Partnership",
		buttonLink: "/partnership",
	},
	{
		iconBg: "bg-[#E6F7FF]",
		icon: <FaFire className="text-[#2ED47A] w-7 h-7" />, // Fire icon
		title: "Nominate Your Favorite Shelter",
		desc: "Activate rapid response aid and other special support where shelters need it most.",
		button: "Request Relief",
		buttonLink: "/relief",
	},
];

export default function HeroSectionCard() {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<section className="w-full max-w-7xl mx-auto px-4 py-10 bg-gradient-to-r from-[#FFF7F2] to-[#F7F7F7]">
			<div className="mb-2 text-[#2ED47A] font-semibold text-sm">
				Join Our Mission
			</div>
			<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
				Make A Pawsitive Change
			</h2>
			<p className="text-gray-500 text-base mb-8">
				There are many ways to contribute to our mission and help animals in need
			</p>
			<div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6">
				{cards.map((card, i) => (
					<div
						key={i}
						className="flex-1 min-w-[280px] max-w-[400px] md:basis-[45%] lg:basis-0 bg-white rounded-2xl shadow p-8 flex flex-col items-start gap-4 mx-auto md:mx-0"
					>
						<div
							className={`w-12 h-12 flex items-center justify-center rounded-lg ${card.iconBg}`}
						>
							{card.icon}
						</div>
						<h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
						<p className="text-gray-600 text-base font-medium">{card.desc}</p>
						{i === 0 ? (
							<>
								<button
									onClick={() => setModalOpen(true)}
									className="mt-auto px-5 py-2 rounded-full border border-gray-300 bg-white text-gray-900 font-semibold shadow-sm hover:bg-[#FF8B71] hover:text-white transition-colors duration-200 text-base"
								>
									{card.button}
								</button>
								<AmbassadorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
							</>
						) : (
							<Link href={card.buttonLink} className="mt-auto px-5 py-2 rounded-full border border-gray-300 bg-white text-gray-900 font-semibold shadow-sm hover:bg-[#FF8B71] hover:text-white transition-colors duration-200 text-base">
								{card.button}
							</Link>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
