'use client';

import Image from "next/image";
import { useState } from "react";

export default function DonateNowFormSection() {
  const [amount, setAmount] = useState(25);
  const [type, setType] = useState("Monthly");

  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch mb-10">
      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex-1 max-w-xl flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-base mb-2">
            How Much Would You Like To Donate Today?
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            All donations directly support our organization and help us further
            our mission.
          </p>
          <div className="flex gap-2 mb-4">
            {[10, 25, 50, 100].map((val) => (
              <button
                key={val}
                className={`px-3 py-1.5 rounded-full border text-sm font-semibold transition-colors duration-200 ${
                  amount === val
                    ? "bg-[#FF5A5F] text-white border-[#FF5A5F]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setAmount(val)}
                type="button"
              >
                ${val}
              </button>
            ))}
            <input
              type="number"
              min={1}
              className="w-20 px-2 py-1.5 rounded-full border border-gray-300 text-sm ml-2 focus:outline-none focus:border-[#FF5A5F]"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="flex gap-2 mb-4">
            <label className="text-xs font-medium">Subscription type</label>
            <select
              className="border rounded px-2 py-1 text-sm focus:outline-none focus:border-[#FF5A5F]"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Monthly">Monthly</option>
              <option value="One-Time">One-Time</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-[#FF5A5F] text-white rounded-2xl py-3 font-bold text-base mt-2 shadow-md hover:bg-[#e14c4f] transition-colors">
          Donate Now
        </button>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-full min-h-[220px] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image
            src="/images/sub-section-right-cat.png"
            alt="Cat on stairs"
            width={350}
            height={220}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
