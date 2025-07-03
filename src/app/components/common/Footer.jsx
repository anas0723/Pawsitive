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
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block"><path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7Z" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#FF5A5F]">
              {/* Facebook SVG icon (official look) */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/>
              </svg>
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
