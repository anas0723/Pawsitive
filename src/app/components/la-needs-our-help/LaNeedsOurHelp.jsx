import React from 'react';
import Header from '../common/Header';

const LaNeedsOurHelp = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    {/* Hero Section */}
    <section className="w-full flex flex-col items-center mt-4">
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden relative">
        <img src="/images/hero-section.jpg" alt="Dog looking up" className="w-full h-[220px] object-cover" />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl font-bold drop-shadow-lg text-center">LA Needs Our Help</h1>
      </div>
    </section>
    {/* Main Content */}
    <main className="w-full max-w-[1493px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] py-10 flex-1">
      {/* First Content Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 items-center">
        <div className="flex-1 order-2 md:order-1 w-full">
          <h2 className="text-xl font-bold mb-2">Los Angeles Fires And Their Impact On Health</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Los Angeles wildfires pose a significant danger to both humans and animals. The smoke and ash can cause respiratory issues, eye irritation, and worsen existing health conditions. Pets are especially vulnerable, as they may spend more time outdoors and have sensitive respiratory systems. Immediate evacuation and proper shelter are crucial during wildfire events.
          </p>
        </div>
        <div className="flex-1 flex justify-center order-1 md:order-2 w-full max-w-xs md:max-w-none">
          <div className="rounded-[40px] overflow-hidden border-4 border-[#FFD6A0] p-2 bg-white shadow-md w-[220px] h-[160px] md:w-[260px] md:h-[200px] flex items-center justify-center">
            <img src="/images/la-need-our-help/fire.png" alt="Fire burning" className="object-cover w-full h-full rounded-[32px]" />
          </div>
        </div>
      </div>
      {/* Second Content Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 items-center">
        <div className="flex-1 flex justify-center w-full max-w-xs md:max-w-none">
          <div className="rounded-[40px] overflow-hidden border-4 border-[#FFD6A0] p-2 bg-white shadow-md w-[220px] h-[160px] md:w-[260px] md:h-[200px] flex items-center justify-center">
            <img src="/images/la-need-our-help/dog-fire.png" alt="Dog near fire" className="object-cover w-full h-full rounded-[32px]" />
          </div>
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-xl font-bold mb-2">Beyond The Flames: The Hidden Health Crisis Of LA Wildfires</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            The aftermath of wildfires often leads to long-term health problems. Many families and their pets face ongoing challenges, including poor air quality and limited access to medical care. Community support and donations are essential to help those affected recover and rebuild their lives.
          </p>
        </div>
      </div>
      {/* Conclusion */}
      <div className="mb-10">
        <h3 className="text-lg font-bold mb-1">Conclusion</h3>
        <p className="text-gray-700 text-base">
          The impact of LA wildfires extends far beyond the flames. It is crucial to support affected communities and raise awareness about the ongoing health crisis. Together, we can make a difference.
        </p>
      </div>
      {/* Popular Blogs */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">Popular blogs:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-3 flex flex-col">
              <img src="/images/la-need-our-help/Image Container.png" alt="Blog" className="rounded-xl w-full h-32 object-cover mb-3" />
              <h4 className="font-semibold text-base mb-1">{[
                'Impact of Smoke on Pets',
                'How to Help LA Animals',
                'Wildfire Safety Tips',
              ][i-1]}</h4>
              <p className="text-xs text-gray-500 mb-2">{[
                'July 1, 2025',
                'June 28, 2025',
                'June 20, 2025',
              ][i-1]}</p>
              <a href="#" className="text-[#FF5A5F] font-bold text-sm mt-auto hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </main>
    {/* Footer */}
    <footer className="w-full border-t border-gray-200 py-4 bg-white flex justify-center">
      <div className="flex gap-4 text-xs text-gray-500 flex-wrap justify-center">
        <span>@2025</span>
        <span>Pawsitive Change</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  </div>
);

export default LaNeedsOurHelp;
