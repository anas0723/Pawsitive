import { FaHeart, FaIdBadge, FaBriefcase } from 'react-icons/fa';

export default function GetInvolvedIntro() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">We Love Pets & Care For Them</h2>
      <p
        className="mb-6 font-poppins font-normal text-[16px] leading-[25.76px] tracking-normal text-[#444] max-w-[567px] min-h-[129px]"
      >
        At Pawsitive Change, we believe that every animal deserves a safe, loving home. By supporting our mission, you help improve the welfare of pets and animals in communities across the country. There are several ways to get involved and make a lasting impact:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column: two stacked cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-[#FFE0E0] rounded-xl p-6 flex flex-col gap-2 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFF6F2] mb-2">
              <FaHeart className="text-[#FF8B71] text-xl" />
            </div>
            <h3 className="font-extrabold text-lg mb-1">Make a Direct Donation</h3>
            <p className="mb-6 font-poppins font-normal text-[16px] leading-[25.76px] tracking-normal text-[#444] max-w-[567px] min-h-[129px]">Your generous donation directly supports animal shelters and welfare programs. Plus, your contribution is tax-deductible, so you can write it off on your income taxes at the end of the year. Every dollar counts and helps provide food, medical care, and essential resources to animals in need.</p>
          </div>
          <div className="bg-white border border-[#C6E6FF] rounded-xl p-6 flex flex-col gap-2 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F2FAFF] mb-2">
              <FaBriefcase className="text-[#4FC3F7] text-xl" />
            </div>
            <h3 className="font-extrabold text-lg mb-1">Workplace Giving Program</h3>
            <p className="font-poppins font-normal text-[16px] leading-[25.76px] tracking-normal text-[#444] max-w-[567px] min-h-[129px]">If your employer is a participating company, you can choose to have your donation deducted directly from your paycheck. This convenient option makes supporting animals easy and seamless. Just like direct donations, payroll deductions are tax-deductible, allowing you to claim them on your income taxes each year.</p>
          </div>
        </div>
        {/* Right column: ambassador card */}
        <div className="bg-white border border-[#FFEBC6] rounded-xl p-6 flex flex-col gap-2 shadow-sm h-full justify-between">
          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFF9F2] mb-2">
              <FaIdBadge className="text-[#FFC46B] text-xl" />
            </div>
            <h3 className="font-extrabold text-lg mb-1">Become an Animal Welfare Ambassador</h3>
            <p className="mb-6 font-poppins font-normal text-[16px] leading-[25.76px] tracking-normal text-[#444] max-w-[567px] min-h-[129px]">Take your support to the next level by becoming an Animal Welfare Ambassador. When you join this program, you'll receive a Pawsitive Change credit card loaded with the amount you donated. You can use this card to purchase items that support the welfare of your pets or other animals in your community. From pet food and supplies to essential veterinary care, your donation goes even further by directly helping animals in your local area.</p>
          </div>
          <button className="mt-4 w-full px-4 py-2 rounded-xl border border-gray-400 bg-white text-black font-semibold hover:bg-[#FF8B71] hover:text-white transition-colors duration-200 text-sm">Become An Ambassador</button>
        </div>
      </div>
    </section>
  );
} 