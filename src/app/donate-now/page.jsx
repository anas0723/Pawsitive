import DonateNowHero from "../components/donate-now/DonateNowHero";
import DonateNowFormSection from "../components/donate-now/DonateNowFormSection";
import DonateNowImpactSection from "../components/donate-now/DonateNowImpactSection";
import Footer from "../components/common/Footer";

export default function DonateNowPage() {
  return (
    <>
      <main className="bg-[#F9F9F9] min-h-screen py-6 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full flex justify-center">
            <div className="w-full">
              <DonateNowHero />
            </div>
          </div>
          <h2 className="font-bold text-2xl md:text-3xl mb-4 mt-2 text-gray-900 text-center">
            Donate Today, One-Time Or Monthly,
            <br className="hidden md:block" /> And Help Change Lives!
          </h2>
          <div className="w-full flex justify-center">
            <div className="w-full">
              <DonateNowFormSection />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full">
              <DonateNowImpactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
