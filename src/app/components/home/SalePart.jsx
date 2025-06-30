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

export default function SalePart() {
	return (
		<section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 py-14 md:flex-row">
			{/* Left: Text and features */}
			<div className="flex-1 flex-col items-start justify-center gap-6 md:flex">
				<div className="mb-1 text-sm font-semibold text-[#2ED47A]">
					Why Choose Us
				</div>
				<h2 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
					What Sets Us Apart
				</h2>
				<div className="mb-4 flex w-full flex-col gap-4">
					{features.map((f, i) => (
						<div
							key={i}
							className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
						>
							<div className="flex-shrink-0">{f.icon}</div>
							<div>
								<div className="mb-1 text-base font-bold text-gray-900">
									{f.title}
								</div>
								<div className="text-sm font-medium text-gray-600">
									{f.desc}
								</div>
							</div>
						</div>
					))}
				</div>
				<button className="rounded-full bg-[#FF8B71] px-6 py-2 text-base font-semibold text-white shadow hover:bg-[#FD7064] transition-colors duration-200">
					Contact Us
				</button>
			</div>
			{/* Right: Images */}
			<div className="flex-1 flex items-center justify-center relative min-h-[320px]">
				{/* Main cat and dog image in a white circle with shadow */}
				<div className="w-80 h-80 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden relative z-10">
					<Image
						src="/images/dog-cat-main.png"
						alt="Cat and Dog"
						width={320}
						height={320}
						className="object-cover z-10"
					/>
				</div>
				{/* Side dog image in a smaller white circle with shadow, overlapping bottom right */}
				<div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden absolute right-0 bottom-0 z-20 border-4 border-white">
					<Image
						src="/images/side-dog.png"
						alt="Side Dog"
						width={120}
						height={120}
						className="object-cover z-20"
					/>
				</div>
			</div>
		</section>
	);
}
