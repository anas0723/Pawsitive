import ShelterHero from './ShelterHero';
import ShelterReceive from './ShelterReceive';
import ShelterRescueCards from './ShelterRescueCards';
import ShelterKit from './ShelterKit';

export default function ShelterRescuePage() {
  return (
    <main className="bg-white min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto w-full px-4">
        <ShelterHero />
        <ShelterRescueCards />
        <ShelterKit />
        <ShelterReceive />
      </div>
    </main>
  );
}