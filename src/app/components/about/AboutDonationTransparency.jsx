"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: 'What Does 501(c)(3) Mean?',
    answer: 'A 501(c)(3) is a tax-exempt nonprofit organization recognized by the IRS. Donations are tax-deductible and support our mission to help animals.',
  },
  {
    question: 'IRS Determination Letter',
    answer: 'Our IRS determination letter confirms our 501(c)(3) status. Contact us to request a copy for your records or for employer matching.',
  },
  {
    question: 'Our Employer Identification Number (EIN)',
    answer: 'Our EIN is 12-3456789. Use this number for tax purposes or employer matching donations.',
  },
];

export default function AboutDonationTransparency() {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left: FAQ */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-2">Donation Transparency</h2>
          <p className="font-poppins text-[15px] md:text-[16px] text-[#444] mb-4">Pawsitive Change is a 501(c)(3) non-profit, keeping your animals dedicated to saving shelter animals, improving their care, and helping them find forever homes.</p>
          <div className="divide-y divide-gray-200 bg-white rounded-xl shadow">
            {faqData.map((faq, idx) => (
              <div key={idx} className="py-4 px-2 flex items-start gap-4">
                <div className="flex-1">
                  <div
                    className="font-poppins font-semibold text-[16px] text-[#222] cursor-pointer flex items-center justify-between"
                    onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                  >
                    {faq.question}
                    <span
                      className={`inline-block w-7 h-7 rounded-full text-center font-bold text-lg leading-7 cursor-pointer select-none transition-colors duration-200 ml-2 ${openIndex === idx ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-900'}`}
                      aria-label={openIndex === idx ? 'Collapse' : 'Expand'}
                    >
                      {openIndex === idx ? '–' : '+'}
                    </span>
                  </div>
                  {openIndex === idx && faq.answer && (
                    <div className="font-poppins text-[15px] text-[#444] mt-2">{faq.answer}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0">
          <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image src="/images/about-us/dog-cat-right-end.png" alt="Cat and Dog" width={835} height={580} className="object-cover w-full h-full" priority />
          </div>
        </div>
      </div>
    </section>
  );
} 