import Image from 'next/image';

export default function BlogCard({ image, title, description, date, author }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2 w-full max-w-xs mx-auto">
      <div className="w-full h-40 relative rounded-lg overflow-hidden mb-2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="font-poppins font-bold text-base text-[#222] mb-1">{title}</div>
      <div className="font-poppins text-[15px] text-[#444] mb-1 flex-1">{description}</div>
      <div className="flex justify-between items-center text-xs text-[#888] mt-2">
        <span>{date}</span>
        <span>{author}</span>
      </div>
    </div>
  );
} 