import Image from 'next/image';

export default function LaNeedsOurHelpSection({ title, text, image, imageAlt, imageBorderColor = '#FF8B71', imageOnLeft = false }) {
  return (
    <section className={`grid md:grid-cols-2 gap-8 items-center mb-12`}>
      {imageOnLeft && (
        <div className="flex justify-center order-2 md:order-1">
          <div className={`rounded-full overflow-hidden border-4 w-[14rem] h-[14rem] flex items-center justify-center`} style={{ borderColor: imageBorderColor }}>
            <Image
              src={image}
              alt={imageAlt}
              width={220}
              height={220}
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className={imageOnLeft ? 'order-1 md:order-2' : ''}>
        <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 text-base md:text-lg">{text}</p>
      </div>
      {!imageOnLeft && (
        <div className="flex justify-center">
          <div className={`rounded-full overflow-hidden border-4 w-[14rem] h-[14rem] flex items-center justify-center`} style={{ borderColor: imageBorderColor }}>
            <Image
              src={image}
              alt={imageAlt}
              width={220}
              height={220}
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
} 