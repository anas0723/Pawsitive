import Image from "next/image";

const features = [
	{
		icon: (
			<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF8B71] text-center text-lg font-bold text-white">
				1
			</span>
		),
		title: "Back by Science, Built for Impact",
		desc: "Our biosecurity suite is designed chemistry that's been independently tested, with EPA-registered disinfectants, ready-to-use formulas, and protocols proven to protect animals and those who care for them.",
	},
	{
		icon: (
			<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD600] text-center text-lg font-bold text-white">
				2
			</span>
		),
		title: "Comprehensive Shelter Support",
		desc: "From food and critical supplies to protocols and ongoing education, we partner with shelters to strengthen programs and empower more positive outcomes.",
	},
	{
		icon: (
			<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2ED47A] text-center text-lg font-bold text-white">
				3
			</span>
		),
		title: "Transparent Partnerships",
		desc: "We remain faithful stewards in our operations, offering shelters full traceability, fair official supply, and ongoing assistance to maximize your impact.",
	},
];

const SalePart = () => {
	return (
		<section className="w-full bg-[#FFF6E9] py-10 px-2 sm:px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-x-hidden">
			{/* Cat Image */}
			<div className="flex-1 flex justify-center md:justify-end items-end w-full max-w-xs md:max-w-sm mb-6 md:mb-0">
				<img
					src="/images/End-main-cat.png"
					alt="Cat"
					className="object-contain h-40 w-auto md:h-72"
				/>
			</div>
			{/* Sale Text */}
			<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xl">
				<h2 className="font-bold text-2xl md:text-3xl mb-4 text-[#222] leading-snug">
					Special Sale for Our Furry Friends!
				</h2>
				<p className="text-gray-700 text-base mb-6">
					Get exclusive discounts on pet essentials. Limited time offer for all
					dog and cat lovers. Shop now and make your pet's day special!
				</p>	
				<button className="bg-[#FF5A5F] text-white rounded-2xl py-3 px-8 font-bold text-base shadow-md hover:bg-[#e14c4f] transition-colors">
					Shop Now
				</button>
			</div>
			{/* Dog Image */}
			<div className="flex-1 flex justify-center md:justify-start items-end w-full max-w-xs md:max-w-sm mt-6 md:mt-0">
				<img
					src="/images/dog-left-end-section.jpg"
					alt="Dog"
					className="object-contain h-40 w-auto md:h-72"
				/>
			</div>
		</section>
	);
};

export default SalePart;
