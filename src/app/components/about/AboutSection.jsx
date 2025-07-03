import Image from 'next/image';

export default function AboutSection({ title, text, image, imageBorderColor, imageRight }) {
  return (
    <section className={`flex flex-col md:flex-row ${imageRight ? 'md:flex-row-reverse' : ''} items-center gap-8 mb-12`}>
      {/* Image */}
      <div className="flex-shrink-0">
        <div
          className={`w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-[50%_45%_50%_55%/55%_50%_45%_50%] border-4`}
          style={{ background: imageBorderColor, borderColor: imageBorderColor }}
        >
          <Image
            src={image}
            alt={title}
            width={260}
            height={260}
            className="object-cover w-full h-full rounded-[50%_45%_50%_55%/55%_50%_45%_50%]"
            priority
          />
        </div>
      </div>
      {/* Text */}
      <div className="flex-1">
        <h2 className="font-poppins font-bold text-xl md:text-2xl text-[#222] mb-2">{title}</h2>
        <p className="font-poppins text-[15px] md:text-[16px] leading-[25.76px] text-[#444]">{text}</p>
      </div>
    </section>
  );
} 