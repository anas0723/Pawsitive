"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
      <h2 className="font-bold text-xl md:text-2xl mb-6 text-[#222] leading-snug">
        Let’s Make A Pawsitive<br />Change, Together!
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
          required
        />
        <input
          type="text"
          placeholder="Last name"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
          required
        />
        <input
          type="text"
          placeholder="Phone No."
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-1"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white col-span-2"
          required
        />
        <textarea
          placeholder="Message"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white min-h-[60px] resize-vertical col-span-2"
          required
        />
        <button
          type="submit"
          className="col-span-2 bg-[#FF5A5F] text-white rounded-lg py-3 font-bold text-base mt-2 shadow hover:bg-[#e14c4f] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 