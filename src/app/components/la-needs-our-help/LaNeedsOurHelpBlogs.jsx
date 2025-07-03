import Image from 'next/image';

export default function LaNeedsOurHelpBlogs({ blogs }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Popular blogs:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="w-full h-40 relative rounded-lg overflow-hidden mb-3">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-xs text-gray-400 mb-1">{blog.date}</div>
            <div className="font-bold text-base mb-1">{blog.title}</div>
            <div className="text-gray-600 text-sm mb-2 flex-1">{blog.desc}</div>
            <button className="mt-auto px-4 py-2 rounded-full bg-[#FF8B71] text-white font-semibold hover:bg-[#ff6a3d] transition-colors duration-200 text-sm">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
} 