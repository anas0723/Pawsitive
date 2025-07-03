export default function GetInvolvedForm() {
  return (
    <form className="bg-[#FFF6F2] rounded-xl p-6 shadow flex flex-col gap-4 relative">
      <h4 className="font-bold text-lg mb-2">Let's make a pawsitive change together.</h4>
      <label className="text-sm font-medium">Name
        <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-base" placeholder="Your Name" />
      </label>
      <label className="text-sm font-medium">Email
        <input type="email" className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-base" placeholder="Your Email" />
      </label>
      <label className="text-sm font-medium">Message
        <textarea className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-base" rows={3} placeholder="How would you like to help?" />
      </label>
      <button type="submit" className="mt-2 px-6 py-2 rounded-full bg-[#FF8B71] text-white font-semibold hover:bg-[#ff6a3d] transition-colors duration-200 text-base">Send</button>
    </form>
  );
} 