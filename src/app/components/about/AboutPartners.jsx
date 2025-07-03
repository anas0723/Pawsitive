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
              <p className="font-poppins text-[15px] text-[#444] mb-2">Muttville Senior Dog Rescue rescues and rehomes senior dogs (ages 7+). Every dog gets a loving home, medical care, and a second chance at life. Their mission is to create better lives for senior dogs and the people who love them. <a href="#" className="text-[#FF8B71] underline">Read more</a></p>
              <p className="font-poppins text-[15px] text-[#444]">Muttville works outside senior dog at risk, gives them the care they need and connects them to their loving forever families.</p>
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