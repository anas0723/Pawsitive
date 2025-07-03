import { FaHeart, FaIdBadge, FaBriefcase, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    icon: <FaHeart className="text-[#FF8B71] text-2xl mx-auto" />, 
    iconBg: 'bg-[#FFF6F2]',
    title: 'Credit Back Program',
    desc: 'Your donation earns rewards through the Pawsitive Change Credit Card—giving back while you give to animals.'
  },
  {
    number: '02',
    icon: <FaIdBadge className="text-[#FFC46B] text-2xl mx-auto" />, 
    iconBg: 'bg-[#FFF9F2]',
    title: 'Tax-Deductible Donations',
    desc: 'All contributions are 100% tax-deductible, reducing your taxable income while supporting animal welfare.'
  },
  {
    number: '03',
    icon: <FaBriefcase className="text-[#4FC3F7] text-2xl mx-auto" />, 
    iconBg: 'bg-[#F2FAFF]',
    title: 'Employer Matching',
    desc: 'Many employers match donations—turning $1,000 into $1,500 for animal care and boosting your impact.'
  },
  {
    number: '04',
    icon: <FaChartLine className="text-[#B39DDB] text-2xl mx-auto" />, 
    iconBg: 'bg-[#F6F2FF]',
    title: 'Financial Empowerment',
    desc: 'Get tools and guidance to plan for your pet\'s health and make smart, cost-saving decisions.'
  }
];

export default function GetInvolvedHowItWorks() {
  return (
    <section className="mb-12">
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#222] mb-2">How It Works?</h2>
      <p className="font-poppins font-normal text-[16px] leading-[25.76px] text-[#444] mb-8 max-w-4xl">At Pawsitive Change, we understand the deep bond you share with your pets and the passion you have for animal welfare. That's why we're excited to introduce a unique program that not only supports our furry friends but also rewards you financially—like a salary raise just for loving animals!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative bg-white border-gray-300 border shadow rounded-xl p-6 flex flex-col items-center h-full">
            <div className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-lg bg-[#F5F5F5] font-poppins font-bold text-lg text-[#222]">{step.number}</div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-2 mt-2 ${step.iconBg}`}>{step.icon}</div>
            <div className="font-poppins font-bold text-lg text-[#222] mb-2 text-center mt-2">{step.title}</div>
            <div className="font-poppins font-normal text-[15px] text-[#444] text-center">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 