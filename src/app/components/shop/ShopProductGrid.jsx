import ShopProductCard from './ShopProductCard';

export default function ShopProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {Array.from({ length: 8 }).map((_, idx) => (
        <ShopProductCard key={idx} />
      ))}
    </div>
  );
} 