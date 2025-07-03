import React from "react";

const KitOrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-center font-bold text-2xl mb-6">Ready To Get Started?</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Contact Name" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" required />
          <input type="text" placeholder="Facility Name" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" required />
          <select className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" required>
            <option value="">Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            {/* Add more countries as needed */}
          </select>
          <input type="text" placeholder="Address line 1" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" required />
          <input type="text" placeholder="Address line 2" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" />
          <div className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="City" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4" required />
            <input type="text" placeholder="State" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4" required />
            <input type="text" placeholder="Zip code" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4" required />
          </div>
          <input type="text" placeholder="Phone no." className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" required />
          <input type="email" placeholder="Email" className="input border leading-10 rounded-2xl border-[#A3A3A3] pl-4 w-full" required />
          <button type="submit" className="w-full bg-[#FF5A5F] text-white rounded-lg py-3 font-bold text-base mt-2 shadow hover:bg-[#e14c4f] transition-colors">Order your kit now</button>
        </form>
        <style jsx>{`
          .input {
            @apply border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white placeholder-[#FFF];
          }
        `}</style>
      </div>
    </div>
  );
};

export default KitOrderModal; 