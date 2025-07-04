"use client";
import React from "react";
import Image from "next/image";

const stats = [
  { value: "14,000", label: "Animal helped" },
  { value: "120+", label: "Shelters supported" },
  { value: "$240K", label: "Supplies Delivered" },
];

const services = [
  {
    iconBg: "bg-[#FFE6E6]",
    icon: (
      <span className="bg-[#FF5D5D] text-white rounded-lg p-2 text-xl">
        <Image
          src="/icon/icon-1.png"
          width={24}
          height={24}
          alt="Critical Supplies Icon"
          className="h-6 w-6"
        />
      </span>
    ),
    title: "Critical Supplies",
    desc: "Monthly shipments of food, bedding, medical supplies, and cleaning kits ensure shelters stay safe, clean, and stocked.",
    cardBg: "bg-[#FFF5F5]",
  },
  {
    iconBg: "bg-[#FFF8E1]",
    icon: (
      <span className="bg-[#FFD600] text-white rounded-lg p-2 text-xl ">
        <Image
          src="/icon/icon-2.png"
          width={24}
          height={24}
          alt="Biosecurity Kits Icon"
          className="w-6 h-6"
        />
      </span>
    ),
    title: "Biosecurity Kits",
    desc: "Free EPA-registered kits (valued at $1,500) include disinfectant applicators, protectants, protocols, and ongoing training support.",
    cardBg: "bg-[#FFFBEA]",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full max-w-[1493px] mx-auto px-4 sm:px-10 py-6 sm:py-10">
      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 sm:mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#FFEBEC8A] rounded-xl shadow p-4 sm:p-6 flex flex-col items-center min-w-[140px]"
          >
            <span className="text-xl sm:text-2xl font-bold">{stat.value}</span>
            <span className="text-gray-500 text-sm mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Services Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#2ED47A] bg-[#E6FFF3] rounded px-3 py-1 text-xs font-semibold">
            Our Services
          </span>
        </div>
      </div>

      {/* Main Heading & Subheading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Comprehensive
          <br className="hidden sm:block" /> Support For Animal Shelters
        </h2>
        <p className="text-[#333333] text-sm sm:text-base md:text-right max-w-md md:max-w-lg">
          We provide biosecurity solutions that transform animal shelters and
          rescues nationwide
        </p>
      </div>

      {/* Service Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 md:px-0 box-border">
        {services.map((service, i) => (
          <div
            key={i}
            className={`rounded-2xl ${service.cardBg} p-4 sm:p-6 shadow-sm flex flex-col relative overflow-hidden`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={
                  service.iconBg +
                  " rounded-lg p-2 flex items-center justify-center"
                }
              >
                {service.icon}
              </div>
              <span className="font-bold text-base sm:text-lg text-gray-900 z-10">
                {service.title}
              </span>
            </div>
            <p className="text-[#333333] text-sm sm:text-base font-medium">
              {service.desc}
            </p>

            {/* Card Decorations */}
            {service.title === "Critical Supplies" && (
              <span className="absolute top-0 right-0 pointer-events-none bg-[#FFDBDFBF] rounded-bl-[161px] rounded-tr-[32px] w-[93px] h-[100.15px]" />
            )}
            {service.title === "Biosecurity Kits" && (
              <span className="absolute top-0 right-0 pointer-events-none bg-[#FFE8A3] rounded-bl-[161px] rounded-tr-[32px] w-[93px] h-[100.15px]" />
            )}
            <span className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-bl-full pointer-events-none rounded-tr-[1rem]" />
          </div>
        ))}
      </div>

      {/* Pawsitive Program Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 bg-white mt-10 md:mt-16">
        {/* Image */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[#EAF7FF] rounded-full z-0"></div>
          <Image
            src="/images/aunt-with-dog.png"
            alt="Woman with dog"
            width={320}
            height={320}
            className="relative z-10 object-contain drop-shadow-xl w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80"
            priority
          />
          <div className="absolute bottom-4 right-4 opacity-20 z-0 hidden sm:block">
            <Image
              src="/images/paw-print.svg"
              alt="Paw Print"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4 w-full">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            A Pawsitive Program
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-4">
            <div className="bg-white rounded-xl shadow p-4 text-gray-700 text-sm sm:text-base font-medium">
              Pawsitive Change drives a movement of urgency around animal
              welfare.
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-gray-700 text-sm sm:text-base font-medium">
              Supports all deserving animal care facilities.
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-gray-700 text-sm sm:text-base font-medium">
              Donates critical supplies to empower these facilities.
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-gray-700 text-sm sm:text-base font-medium">
              Helps create healthier, safer, and more efficient environments.
            </div>
          </div>
          <button className="px-6 py-2 rounded-full bg-[#FF8B71] text-white font-semibold shadow hover:bg-[#FD7064] transition-colors duration-200 text-sm sm:text-base">
            Learn more
          </button>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
