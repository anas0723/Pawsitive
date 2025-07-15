import Image from "next/image";

const products = [
  {
    img: "/images/product-image.png",
    title: "Bird Feeder and BioShed Protectant",
    price: "$24.99 – $105.23"
  },
  {
    img: "/images/product-image.png",
    title: "Bird Feeder and BioShed Protectant",
    price: "$24.99 – $105.23"
  },
  {
    img: "/images/product-image.png",
    title: "Bird Feeder and BioShed Protectant",
    price: "$24.99 – $105.23"
  },
  {
    img: "/images/product-image.png",
    title: "Bird Feeder and BioShed Protectant",
    price: "$24.99 – $105.23"
  }
];

export default function ProductCards() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="mb-1 text-[#2ED47A] font-semibold text-sm">Shop</div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Shop Our Partner Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-4">
            <Image src={p.img} alt={p.title} width={120} height={120} className="object-contain" />
            <div className="font-bold text-base text-gray-900 text-center">{p.title}</div>
            <div className="text-gray-500 text-sm mb-4">{p.price}</div>
            <button
              className="flex items-center justify-center w-[262px] h-[52px] rounded-[16px] border  bg-white  font-semibold px-[28px] py-[14px] gap-[10px] text-base shadow-sm transition-all duration-150 hover:bg-[#FF8B71] hover:text-white"
              style={{ alignSelf: 'center' }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
