import Image from 'next/image';

export default function AboutPartners() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#222] mb-2">Our Partners & Their Stories</h2>
        <p className="font-poppins text-[15px] md:text-[16px] text-[#444] mb-6">Partnered up with shelters, rescues, and training facilities nationwide supplying critical resources, lifesaving support, and rapid relief.</p>
        <div className="bg-white rounded-xl shadow flex flex-col md:flex-row overflow-hidden">
          {/* Left: Partner Info */}
          <div className="flex-1 flex flex-col justify-between p-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image src="/images/about-us/muttville-logo.png" alt="Muttville Logo" width={366} height={72} className="object-contain" />
              </div>
              <p className="font-poppins text-[15px] text-[#000] ">Muttville Senior Dog Rescue rescues and shelters senior dogs ages 7+. Every day dogs in good health with hearts of gold, and wonderful personalities are euthanized. Why? Because they’re older, and not considered adoptable under typical circumstances.
                <p className='mt-6 text-black'>Muttville reaches out to senior dogs at risk, gives them the care they need, and finds them loving forever homes.  </p> </p>
            </div>
            {/* <div className="flex gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-[#FF8B71] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-gray-200 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-gray-200 inline-block"></span>
            </div> */}
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-h-[220px] relative">
            <Image
              src="/images/about-us/wall.png"
              alt="Muttville Wall"
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 