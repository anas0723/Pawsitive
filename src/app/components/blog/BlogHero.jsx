import Image from 'next/image';

export default function BlogHero() {
  return (
    <div className="w-full rounded-xl overflow-hidden mb-10 relative aspect-[16/5] ">
      <Image
        src="/images/blog/blog-main.png"
        alt="Blogs Hero"
        fill
        className="object-contain object-center w-full h-full"
        priority
      />
    </div>
  );
} 