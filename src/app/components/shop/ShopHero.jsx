import Image from 'next/image';

export default function ShopHero() {
  return (
    <div className="w-full rounded-xl overflow-hidden mb-10 relative aspect-[16/5] bg-black">
      <Image
        src="/images/shop/shop-now-main.png"
        alt="Shop Hero"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
    </div>
  );
} 