import GetInvolvedHero from './GetInvolvedHero';
import GetInvolvedIntro from './GetInvolvedIntro';
import GetInvolvedCards from './GetInvolvedCards';
import GetInvolvedJoin from './GetInvolvedJoin';
import GetInvolvedHowItWorks from './GetInvolvedHowItWorks';
import GetInvolvedStep from './GetInvolvedStep';
import GetInvolvedForm from './GetInvolvedForm';

export default function GetInvolvedPage() {
  return (
    <main className="bg-white min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto w-full">
        <GetInvolvedHero />
        <GetInvolvedIntro />
        <GetInvolvedCards />
        <GetInvolvedJoin />
        <GetInvolvedHowItWorks />
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <GetInvolvedStep />
          <GetInvolvedForm />
        </div>
      </div>
    </main>
  );
} 