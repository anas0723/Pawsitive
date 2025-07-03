import Image from 'next/image';

export default function ShopProductCard() {
  return (
    <div className="flex flex-col items-center border border-[#E5E7EB] rounded-xl p-4 bg-white shadow-sm transition hover:shadow-md">
      <div className="w-[120px] h-[160px] flex items-center justify-center mb-2">
        <Image
          src="/images/shop/product-card.png"
          alt="Bird Feeder and Birdhouse Protectant"
          width={120}
          height={160}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="font-poppins font-semibold text-center text-[15px] leading-tight text-[#222] mb-1">
        Bird Feeder and Birdhouse Protectant
      </div>
      <div className="font-poppins text-[15px] text-[#444] mb-3 text-center">
        $13.49 – $103.23
      </div>
      <button className="w-full py-1.5 rounded-md border border-[#222] font-poppins font-medium text-[15px] text-[#222] bg-white hover:bg-[#FF8B71] hover:text-white transition-colors duration-200">
        Buy Now
      </button>
    </div>
  );
} 