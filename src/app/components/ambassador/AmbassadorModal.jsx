import React, { useState } from "react";

const AmbassadorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-center font-bold text-red-400 text-2xl mb-6">APPLY HERE</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="input border leading-7 rounded-2xl border-[#A3A3A3] pl-4" required />
            <input type="text" placeholder="Last name" className="input" required />
          </div>
          <input type="email" placeholder="Email" className="input w-full" required />
          <input type="text" placeholder="Phone no." className="input w-full" required />
          <select className="input w-full" required>
            <option value="">Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            {/* Add more countries as needed */}
          </select>
          <input type="text" placeholder="Address line 1" className="input w-full" required />
          <input type="text" placeholder="Address line 2" className="input w-full" />
          <div className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="City" className="input" required />
            <input type="text" placeholder="State" className="input" required />
            <input type="text" placeholder="Zip code" className="input" required />
          </div>
          <input type="text" placeholder="Social media handle (*separated by commas)" className="input w-full" />
          <select className="input w-full" required>
            <option value="">Do you have a heart for animals?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select className="input w-full" required>
            <option value="">Why do you want to be a Pawsitive Change Ambassador?</option>
            <option value="help">To help animals</option>
            <option value="community">To support my community</option>
            {/* Add more options as needed */}
          </select>
          <select className="input w-full" required>
            <option value="">Do you have experience giving love to animals?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <textarea placeholder="If yes, please elaborate on your principles & practices. (500 chars)" className="input w-full min-h-[60px]" />
          <div>
            <label className="block font-medium mb-2">Would you help spread awareness about Pawsitive Change's animal welfare mission?</label>
            <div className="flex flex-wrap gap-2">
              <label className="radio-label"><input type="checkbox" /> Social media</label>
              <label className="radio-label"><input type="checkbox" /> In-person events</label>
              <label className="radio-label"><input type="checkbox" /> Word of mouth</label>
              <label className="radio-label"><input type="checkbox" /> Other</label>
            </div>
          </div>
          <textarea placeholder="If other, we would love to learn about other ways we can keep spreading the Pawsitive Change" className="input w-full min-h-[60px]" />
          <select className="input w-full" required>
            <option value="">Do you currently have pets?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div>
            <label className="block font-medium mb-2">Preferred method of communication?</label>
            <div className="flex gap-4">
              <label className="radio-label"><input type="radio" name="comm" /> Email</label>
              <label className="radio-label"><input type="radio" name="comm" /> Phone</label>
              <label className="radio-label"><input type="radio" name="comm" /> Text</label>
            </div>
          </div>
          <select className="input w-full" required>
            <option value="">T-shirt size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" className="w-full bg-[#FF5A5F] text-white rounded-lg py-3 font-bold text-base mt-2 shadow hover:bg-[#e14c4f] transition-colors">Submit</button>
        </form>
        <style jsx>{`
          .input {
            @apply border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white placeholder-[#FFF];
          }
          .radio-label {
            @apply flex items-center gap-2 text-sm font-normal;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AmbassadorModal; 