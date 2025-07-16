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
    iconBg: "",
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
      <span className="bg-[#F59E0B] text-white rounded-lg p-2 text-xl ">
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
            className="bg-white rounded shadow-xl p-4 sm:p-6 flex flex-col items-center h-[116px] min-w-[140px]"
          >
            <span className="text-xl sm:text-2xl font-bold">{stat.value}</span>
            <span className="text-gray-500 text-sm mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Services Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between  gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#2ED47A] bg-[#E6FFF3] rounded px-3 py-1 text-xs font-semibold">
            Our Services
          </span>
        </div>
      </div>

      {/* Main Heading & Subheading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between sm:mb-8 gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2E2E38] leading-tight">
          Comprehensive
          <br className="hidden sm:block" /> Support For Animal Shelters
        </h2>
        <p className="text-[#333333] text-sm sm:text-base md:text-right max-w-md md:max-w-lg">
          We provide biosecurity solutions that transform animal shelters and
          rescues nationwide
        </p>
      </div>

      {/* Service Cards */}
      <div className="w-full justify-center grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 md:px-0 box-border">
        {services.map((service, i) => (
          <div
            key={i}
            className={`rounded-2xl ${service.cardBg} p-4 sm:p-6 shadow-sm flex flex-col relative overflow-hidden`}
          >
            <div className="  mb-4">
              <div
                className={
                  service.iconBg +
                  " rounded-lg p-2 flex items-center "
                }
              >
                {service.icon}
              </div>
              <span className="font-poppins font-extrabold text-[24px] sm:text-[28px] md:text-[32px] leading-[25.76px] tracking-normal text-gray-900 z-10">
                {service.title}
              </span>
            </div>
            <p className="text-[#333333] text-xs sm:text-sm md:text-base font-medium">
              {service.desc}
            </p>

            {/* Card Decorations */}
            {service.title === "Critical Supplies" && (
              <span className="absolute top-0 right-0 pointer-events-none bg-[#FFDBDFBF] rounded-bl-[161px] rounded-tr-[32px] w-[93px] h-[100.15px]" />
            )}
            {service.title === "Biosecurity Kits" && (
              <span className="absolute top-0 right-0 pointer-events-none bg-[#FDEFB1BF] rounded-bl-[161px] rounded-tr-[32px] w-[93px] h-[100.15px]" />
            )}
            <span className="absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none rounded-tr-[1rem]" />
          </div>
        ))}
      </div>

      {/* Pawsitive Program Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center items-start gap-8 lg:gap-16 bg-white mt-10 lg:mt-16">
        {/* Image */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full xs:w-[220px] sm:w-[340px] md:w-[420px] lg:w-[469.81px] h-[220px] xs:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[569.26px] mb-8 lg:mb-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] xs:w-[220px] sm:w-[340px] md:w-[420px] lg:w-[478.97px] h-[180px] xs:h-[220px] sm:h-[340px] md:h-[420px] lg:h-[478.97px] bg-[#EAF7FF] rounded-full z-0"></div>
          <Image
            src="/images/aunt-with-dog.png"
            alt="Woman with dog"
            width={320}
            height={320}
            className="relative z-10 object-contain drop-shadow-xl w-[140px] xs:w-[180px] sm:w-[260px] md:w-[320px] lg:w-[469.81px] h-[140px] xs:h-[180px] sm:h-[260px] md:h-[320px] lg:h-[569.26px]"
            priority
          />
          <div className="absolute bottom-2 right-2 opacity-20 z-0 hidden xs:block">
            <Image
              src="/images/paw-print.svg"
              alt="Paw Print"
              width={32}
              height={32}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4 w-full lg:ml-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            A Pawsitive Program
          </h2>
          <div className="flex flex-row  flex-wrap gap-[10px] w-full mb-4">
            <div className="flex flex-row items-center gap-[10px] w-[280px] h-[116px] rounded-[14px] border border-gray-200 p-[10px] bg-white shadow-lg font-poppins">
              Pawsitive Change drives a movement of urgency around animal welfare.
            </div>
            <div className="flex flex-row items-center gap-[10px] w-[280px] h-[116px] rounded-[14px] border border-gray-200 p-[10px] bg-white shadow-lg font-poppins">
              Supports all deserving animal care facilities.
            </div>
            <div className="flex flex-row items-center gap-[10px] w-[280px] h-[116px] rounded-[14px] border border-gray-200 p-[10px] bg-white shadow-lg font-poppins">
              Donates critical supplies to empower these facilities.
            </div>
            <div className="flex flex-row items-center gap-[10px] w-[280px] h-[116px] rounded-[14px] border shadow-lg border-gray-200 p-[10px] bg-white  font-poppins">
              Helps create healthier, safer, and more efficient environments.
            </div>
          </div>
          <button className="">
            <a
              href="/donate-now"
              className="flex items-center justify-center w-[167px] h-[52px] rounded-[16px] border-4 border-[#FF5D5D] bg-gradient-to-r from-[#FF8B71] to-[#FF5D5D] text-white font-semibold px-[28px] py-[14px] gap-[10px] text-base shadow-lg transition-all duration-150 hover:from-[#FD7064] hover:to-[#FF8B71] focus:outline-none"
              style={{ alignSelf: 'center' }}
            >
              Learn more
            </a>
          </button>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
