import GetInvolvedHero from './GetInvolvedHero';
import GetInvolvedIntro from './GetInvolvedIntro';
import GetInvolvedJoin from './GetInvolvedJoin';
import GetInvolvedHowItWorks from './GetInvolvedHowItWorks';
import GetInvolvedStep from './GetInvolvedStep';

export default function GetInvolvedPage() {
  return (
    <main className="bg-white min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto w-full">
        <GetInvolvedHero />
        <GetInvolvedIntro />
        <GetInvolvedJoin />
        <GetInvolvedHowItWorks />
          <GetInvolvedStep />
        
      </div>
    </main>
  );
} 