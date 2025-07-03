export default function GetInvolvedCards() {
  return (
    <section className="mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#FFF6F2] rounded-xl p-6 flex flex-col gap-2 shadow">
          <div className="text-3xl">🐾</div>
          <h3 className="font-bold text-lg mb-1">Volunteer Opportunities</h3>
          <p className="text-gray-700 text-sm">Help us care for animals, organize events, and spread awareness. Every helping hand makes a difference!</p>
        </div>
        <div className="bg-[#FFF6F2] rounded-xl p-6 flex flex-col gap-2 shadow">
          <div className="text-3xl">🌟</div>
          <h3 className="font-bold text-lg mb-1">Ambassador Program</h3>
          <p className="text-gray-700 text-sm">Become a Pawsitive Change Ambassador and inspire your community to support animal welfare.</p>
        </div>
      </div>
    </section>
  );
} 