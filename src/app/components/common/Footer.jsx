import { FaInstagram, FaFacebook } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start items-center justify-between gap-8">
        {/* Left: Logo and description */}
        <div className="flex flex-col items-center md:items-start flex-1 min-w-[180px] w-full md:w-auto mb-6 md:mb-0">
          <Image
            src="/images/PawsitiveChangeLogo 1.png"
            alt="Pawsitive Change Logo"
            width={90}
            height={60}
            className="mb-2"
          />
          <p className="text-gray-600 text-sm mb-3 text-center md:text-left max-w-xs">
            From critical supplies to canine rehabilitation, we're making a Pawsitive Change in shelters and behind prison walls.
          </p>
          <div className="flex gap-3 mt-1">
            <a href="#" aria-label="Instagram" className="hover:text-[#FF5A5F]">
              <FaInstagram size={22} className="inline-block" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#FF5A5F]">
              <FaFacebook size={22} className="inline-block" />
            </a>
          </div>
        </div>
        {/* Center: Divider */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 min-w-[80px]">
        </div>
        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row flex-1 gap-44 justify-end min-w-[180px] w-full md:w-auto items-center md:items-start">
          <div className="mb-4 sm:mb-0">
            <h4 className="font-bold mb-2 text-black text-center sm:text-left">Quick Links</h4>
            <ul className="space-y-1 text-sm text-center sm:text-left">
              <li><a href="#" className="hover:text-[#FF5A5F] font-medium">Donate</a></li>
              <li><a href="#" className="hover:text-[#FF5A5F] font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-[#FF5A5F] font-medium">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-black text-center sm:text-left">Our Program</h4>
            <ul className="space-y-1 text-sm text-center sm:text-left">
              <li><a href="#" className="hover:text-[#FF5A5F]">Shelter & Rescues</a></li>
              <li><a href="#" className="hover:text-[#FF5A5F]">Ambassadors Program</a></li>
              <li><a href="#" className="hover:text-[#FF5A5F]">Get Involved</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
