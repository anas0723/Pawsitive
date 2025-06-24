"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroSec from "./HeroSec"; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Shelters & Rescues", href: "/shelters&rescues" },
  { name: "Blogs", href: "/blogs" },
  { name: "Shop", href: "/shop" },
  { name: "Contact Us", href: "/contactus" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between  px-4 py-2 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-start gap-2 select-none ">
          <Image
            src="/images/PawsitiveChangeLogo 1.png"
            alt="Pawsative Logo"
            width={111}
            height={82}
            className="w-10 h-10 object-contain"
            priority
          />
        </Link>
         <div className="md:flex items-center justify-end ml-6">

        {/* Desktop Nav Items links */}
        <div className="hidden md:flex justify-end  ml-6">
          <nav className="flex gap-4 text-sm font-medium text-[#161821]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#FF8B71] font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
       
        {/* Donate Button */}
          <Link
            href="/donate"
            className="ml-8 px-5 py-2   rounded-full bg-[#FF8B71] text-white font-semibold shadow hover:bg-[#FD7064] transition-colors duration-200 text-base"
          >
            Donate Now
          </Link>
          </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 main-bg rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 main-bg rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 main-bg rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 flex flex-col pt-24 px-8 gap-6 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 text-lg font-semibold hover:text-[#FD7064] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
      
        </div>

        {/* Overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  
    
  );
  

}
