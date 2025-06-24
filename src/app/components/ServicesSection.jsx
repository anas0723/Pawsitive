import React from "react";

const stats = [
  {
    value: "14,000",
    label: "Animal helped",
  },
  {
    value: "120+",
    label: "Shelters supported",
  },
  {
    value: "$240K",
    label: "Supplies Delivered",
  },
];

const services = [
  {
    iconBg: "bg-[#FFE6E6]",
    icon: (
      <span className="bg-[#FF5D5D] text-white rounded-lg p-2 text-xl">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="currentColor"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "Critical Supplies",
    desc: "Monthly shipments of food, bedding, medical supplies, and cleaning kits ensure shelters stay safe, clean, and stocked.",
    cardBg: "bg-[#FFF5F5]",
  },
  {
    iconBg: "bg-[#FFF8E1]",
    icon: (
      <span className="bg-[#FFD600] text-white rounded-lg p-2 text-xl">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="currentColor"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    title: "Biosecurity Kits",
    desc: "Free EPA-registered kits (valued at $1,500) include disinfectant applicators, protectants, protocols, and ongoing training support.",
    cardBg: "bg-[#FFFBEA]",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full max-w-[1493px] mx-auto px-4 py-10">
      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center min-w-[180px]">
            <span className="text-2xl font-bold">{stat.value}</span>
            <span className="text-gray-500 text-sm mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Services Header */}
      {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#2ED47A] bg-[#E6FFF3] rounded px-3 py-1 text-xs font-semibold">Our Services</span>
          <span className="bg-[#0094FF] text-white rounded px-3 py-1 text-xs font-semibold">1493 × 150 Hug</span>
        </div>
      </div> */}
      {/* Main Heading & Subheading */}
      {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Comprehensive<br className="hidden sm:block" /> Support For Animal Shelters
        </h2>
        <p className="text-gray-500 text-base md:text-right max-w-md md:max-w-lg">
          We provide biosecurity solutions that transform animal shelters and rescues nationwide
        </p>
      </div> */}
      {/* Service Cards */}
      {/* <div className="flex flex-col md:flex-row gap-6">
        {services.map((service, i) => (
          <div key={i} className={`flex-1 rounded-2xl ${service.cardBg} p-6 shadow-sm flex flex-col min-w-[280px] relative overflow-hidden`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={service.iconBg + " rounded-lg p-2 flex items-center justify-center"}>
                {service.icon}
              </div>
              <span className="font-bold text-lg text-gray-900">{service.title}</span>
            </div>
            <p className="text-gray-600 text-base font-medium">{service.desc}</p>
            Decorative corner
            <span className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-bl-full pointer-events-none" style={{borderTopRightRadius:'1rem'}}></span>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default ServicesSection;
