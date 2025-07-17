'use client';
import Image from 'next/image';
import { useState } from 'react';
import AmbassadorModal from '../ambassador/AmbassadorModal';

export default function GetInvolvedStep() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly md:items-start gap-10 w-full">
      {/* Left: Cat Image with organic border */}
      <div className="relative flex-shrink-0">
        <div className="w-[559.17px] h-[554.6px] rounded-[50%_45%_50%_55%/55%_50%_45%_50%] border-[18px] border-[#FFF9E1] bg-[#FFF9E1] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/get-involved/Cat-last.png"
            alt="Cat"
            width={380}
            height={380}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center max-w-xl mt-[87px] mb-[87px]">
        <h3 className="font-poppins font-bold text-[32px] leading-[44px] text-[#222] mb-4">Take The First Step...</h3>
        <ol className="font-poppins font-medium text-[16px] leading-[32px] tracking-normal text-[#222] mb-4 list-decimal list-inside">
          <li>Complete the application form located at the bottom of this page.</li>
          <li>Our qualification team will review your application and respond promptly.</li>
          <li>If approved, you will receive:
            <ol className="font-poppins text-[15px] leading-[22px] text-[#222] list-[lower-alpha] list-inside ml-5 mt-1">
              <li>A Welcome Letter</li>
              <li>An ID card (physical and digital)</li>
              <li>A Unique Ambassador Code</li>
              <li>Automatic Enrollment in the Ambassador Credit Back Program.</li>
            </ol>
          </li>
        </ol>
        <button
          onClick={() => setModalOpen(true)}
          className={
            `${CTA_BUTTON_CLASSES} w-[260px] h-[56px] px-[32px] py-0 rounded-[100px] border-none flex items-center justify-center gap-[10px] font-poppins font-semibold text-[16px] leading-[100%] mt-2`
          }
        >
          Become An Ambassador
        </button>
        <AmbassadorModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
} 
import { CTA_BUTTON_CLASSES } from '../common/CTAButtonClasses';