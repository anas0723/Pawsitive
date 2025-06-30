import Header from "../components/common/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* <Header /> */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/hero-section.jpg"
            alt="About Us Hero"
            width={1200}
            height={350}
            className="w-full h-[220px] sm:h-[300px] md:h-[350px] object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-5xl font-extrabold drop-shadow-lg">
              About Us
            </h1>
          </div>
        </div>
        {/* Add more about content here as needed */}
      </section>
    </>
  );
}
