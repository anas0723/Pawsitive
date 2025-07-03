import ShopHero from '../components/shop/ShopHero';
import ShopProductGrid from '../components/shop/ShopProductGrid';

export default function ShopPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-10">
      <ShopHero />
      <ShopProductGrid />
    </main>
  );
} 