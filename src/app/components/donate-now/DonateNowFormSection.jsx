'use client';

import Image from "next/image";
import { useState } from "react";

export default function DonateNowFormSection() {
  const [amount, setAmount] = useState(25);
  const [type, setType] = useState("Monthly");

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch gap-0 md:gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Left: Form */}
      <div className="flex-1 p-8 flex flex-col justify-center min-w-[320px]">
        <h3 className="font-bold text-lg md:text-xl mb-2">
          How Much Would You Like To Donate Today?
        </h3>
        <p className="text-xs text-gray-500 mb-4 max-w-xs">
          All donations directly impact our organization and help us further our
          mission.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 mb-3">
            {[25, 50].map((val) => (
              <label
                key={val}
                className={`flex items-center px-3 py-2 rounded-full border text-sm font-semibold cursor-pointer transition-colors duration-200 ${
                  amount === val
                    ? "bg-[#FF5A5F] text-white border-[#FF5A5F]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name="donation-amount"
                  value={val}
                  checked={amount === val}
                  onChange={() => setAmount(val)}
                  className="mr-2 accent-[#FF5A5F]"
                />
                ${val.toFixed(2)}
              </label>
            ))}
            <label
              className={`flex items-center px-3 py-2 rounded-full border text-sm font-semibold cursor-pointer transition-colors duration-200 ${
                amount !== 25 && amount !== 50
                  ? "bg-[#FF5A5F] text-white border-[#FF5A5F]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="donation-amount"
                value="custom"
                checked={amount !== 25 && amount !== 50}
                onChange={() => setAmount(0)}
                className="mr-2 accent-[#FF5A5F]"
              />
              <input
                type="number"
                min={1}
                placeholder="Enter custom amount"
                className="w-32 px-2 py-1 rounded-full border-none text-sm bg-transparent text-inherit focus:outline-none"
                value={amount !== 25 && amount !== 50 ? amount : ""}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex gap-2">
            <label className="flex-1">
              <input
                type="radio"
                name="donation-type"
                value="Monthly"
                checked={type === "Monthly"}
                onChange={() => setType("Monthly")}
                className="hidden"
              />
              <span
                className={`block w-full text-center px-4 py-2 rounded-lg border font-semibold text-sm cursor-pointer transition-colors duration-200 ${
                  type === "Monthly"
                    ? "bg-[#FF5A5F] text-white border-[#FF5A5F]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Monthly
              </span>
            </label>
            <label className="flex-1">
              <input
                type="radio"
                name="donation-type"
                value="One-time only"
                checked={type === "One-Time"}
                onChange={() => setType("One-Time")}
                className="hidden"
              />
              <span
                className={`block w-full text-center px-4 py-2 rounded-lg border font-semibold text-sm cursor-pointer transition-colors duration-200 ${
                  type === "One-Time"
                    ? "bg-[#FF5A5F] text-white border-[#FF5A5F]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                One-time only
              </span>
            </label>
          </div>
        </div>
        <button className="w-full bg-[#FF5A5F] text-white rounded-2xl py-3 font-bold text-base mt-2 shadow-md hover:bg-[#e14c4f] transition-colors">
          Donate Now
        </button>
      </div>
      {/* Right: Cat Image */}
      <div className="flex-1 min-w-[260px] flex items-center justify-center bg-[#F7F7F7]">
        <Image
          src="/images/sub-section-right-cat.png"
          alt="Cat on stairs"
          width={420}
          height={320}
          className="object-cover object-center w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
