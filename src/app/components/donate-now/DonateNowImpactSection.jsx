import Image from "next/image";

export default function DonateNowImpactSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mt-8">
      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-[40%] overflow-hidden border-4 border-[#AEE9F7] w-[220px] h-[220px] md:w-[260px] md:h-[260px] flex items-center justify-center bg-white">
          <Image
            src="/images/dog-left-end-section.png"
            alt="Dog resting"
            width={260}
            height={260}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl md:text-2xl mb-2">Every Donation Makes<br />A Difference.</h3>
        <p className="text-gray-600 text-sm md:text-base mb-2">
          No matter the amount, your donation helps provide shelters with the tools they need to create cleaner, safer environments for the animals in their care. Every contribution brings us closer to improving the lives of countless animals.
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          Looking to seriously make an ongoing impact? Join our movement by choosing a monthly subscription and, just $25/mo, your recurring support covers the most essential needs all year, making a huge consistent impact to those that need it most.
        </p>
      </div>
    </section>
  );
}
