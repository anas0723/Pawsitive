'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const faqData = [
	{
		question: 'What is Pawsitive Change?',
		answer:
			'Pawsitive Change is a nonprofit organization dedicated to improving the lives of animals and people through innovative shelter support, rehabilitation programs, and emergency relief services.',
	},
	{
		question: 'How do you support animal shelters?',
		answer: 'We support animal shelters through donations, volunteer programs, and community outreach to improve animal welfare and adoption rates.',
	},
];

const FrequentlyAskedQuestions = () => {
	const [openIndex, setOpenIndex] = useState(-1);

	return (
		<section className="bg-white pt-10">
			<div className="max-w-3xl mx-auto relative z-20">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-green-400 font-bold text-xs">FAQs</span>
				</div>
				<h2 className="font-bold text-2xl mb-8">Frequently Asked Questions</h2>
				{faqData.map((faq, idx) => (
					<div key={idx} className="border-b border-gray-200 py-6 flex items-start gap-6">
						<div className="font-bold text-4xl text-gray-400 min-w-[40px]">
							{(idx + 1).toString().padStart(2, '0')}
						</div>
						<div className="flex-1">
							<div
								className="font-bold text-base mb-2 text-gray-900 cursor-pointer"
								onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
							>
								{faq.question}
							</div>
							{openIndex === idx && faq.answer && (
								<div className="text-gray-600 text-sm mb-2">{faq.answer}</div>
							)}
						</div>
						<div className="mt-1.5">
							<span
								className={`inline-block w-6 h-6 rounded-full text-center font-bold text-lg leading-6 cursor-pointer select-none transition-colors duration-200 ${
									openIndex === idx ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-900'
								}`}
								onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
								aria-label={openIndex === idx ? 'Collapse' : 'Expand'}
							>
								{openIndex === idx ? '–' : '+'}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FrequentlyAskedQuestions;
