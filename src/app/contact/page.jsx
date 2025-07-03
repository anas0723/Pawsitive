import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto w-full px-4 pt-8">
        <div className="rounded-2xl overflow-hidden relative h-[180px] md:h-[240px] flex items-center">
          <Image
            src="/images/contact/contact-main.png"
            alt="Contact Us Cat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute left-0 top-0 w-full h-full flex items-center px-8">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white drop-shadow-lg">
              Contact Us
              <span className="block w-32 h-1 bg-[#FF8B71] mt-2 rounded"></span>
            </h1>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 mt-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-8 items-stretch">
          {/* Form */}
          <div className="flex-1 flex items-center justify-center">
            <ContactForm />
          </div>
          {/* Office Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden w-full h-[320px] md:h-auto flex items-center justify-center bg-gray-100">
              <Image
                src="/images/contact/csr.png"
                alt="Office"
                width={500}
                height={350}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 