import Image from 'next/image';

const filters = [
  'Food and Nutrition',
  'Veterinary Care',
  'Grooming',
  'Supplies and Equipment',
  'Training and Behavior',
  'Shelter and Housing',
  'Transportation',
  'Adoption Fees',
  'Community Programs',
  'Emergency Care Supplies',
  'Rescue & Rehabilitation',
  'Micro-chipping',
];

export default function AboutIRSExpenses() {
  return (
    <section className="w-full py-10 bg-[#F7F6FB]">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-2">IRS List Of Qualifying Expenses</h2>
        <p className="font-poppins text-[15px] md:text-[16px] text-[#444] mb-4">Here's a list of IRS-approved expenses eligible under the Pawsitive Change Credit Back program to support local animal welfare.</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter, idx) => (
            <span key={idx} className="font-poppins text-[14px] px-4 py-1 rounded-full bg-white border border-[#E0E0E0] text-[#222] cursor-pointer hover:bg-[#FF8B71] hover:text-white transition-colors duration-200">
              {filter}
            </span>
          ))}
        </div>
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 min-h-[260px]">
          {/* Left: Image with paw print bg */}
          <div className="relative flex-shrink-0 z-10">
            <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image src="/images/about-us/dog-food.png" alt="Dog Food" width={240} height={240} className="object-cover w-full h-full" priority />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-10 z-0" style={{background: 'url(/images/paw-print.svg) center/cover no-repeat'}}></div>
          </div>
          {/* Right: Card - absolutely positioned on md+ */}
          <div className="w-full md:w-auto md:absolute md:left-[calc(240px+115px)] md:top-1/2 md:-translate-y-1/2 z-20">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 max-w-md w-full">
              <h3 className="font-poppins font-bold text-lg text-[#222] mb-2">Food And Nutrition</h3>
              <ul className="font-poppins text-[15px] text-[#444] mb-3 list-disc list-inside">
                <li>Pet food (dry, wet, and specialty diets)</li>
                <li>Nutritional supplements and vitamins</li>
              </ul>
              <button className="font-poppins w-fit px-5 py-2 rounded-full bg-[#FF8B71] text-white font-semibold shadow hover:bg-[#ff6a3d] transition-colors duration-200 text-sm">Join us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 