import LaNeedsOurHelpHero from './LaNeedsOurHelpHero';
import LaNeedsOurHelpSection from './LaNeedsOurHelpSection';
import LaNeedsOurHelpConclusion from './LaNeedsOurHelpConclusion';
import LaNeedsOurHelpBlogs from './LaNeedsOurHelpBlogs';

const blogs = [
  {
    img: '/images/la-need-our-help/Image Container.png',
    title: 'Impact of Smoke from LA Wildfires',
    desc: 'How wildfire smoke affects pets and humans in Los Angeles.',
    date: 'May 10, 2024',
  },
  {
    img: '/images/la-need-our-help/Image Container.png',
    title: 'Emergency Pet Care During Disasters',
    desc: 'Tips for keeping your pets safe during fire emergencies.',
    date: 'May 8, 2024',
  },
  {
    img: '/images/la-need-our-help/Image Container.png',
    title: 'Community Support for LA Animals',
    desc: 'How you can help animals affected by LA wildfires.',
    date: 'May 5, 2024',
  },
];

export default function LaNeedsOurHelpPage() {
  return (
    <main className="bg-white min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto w-full">
        <LaNeedsOurHelpHero />
        <LaNeedsOurHelpSection
          title="Los Angeles Fires And Their Impact On Health"
          text="Los Angeles has faced devastating wildfires, causing destruction and impacting the health of both humans and animals. The smoke and pollutants from these fires can lead to respiratory issues, stress, and long-term health problems. It is crucial to understand these impacts and take steps to protect our loved ones, including our pets."
          image="/images/la-need-our-help/fire.png"
          imageAlt="Fire"
          imageBorderColor="#FF8B71"
          imageOnLeft={false}
        />
        <LaNeedsOurHelpSection
          title="Beyond The Flames: The Hidden Health Crisis Of LA Wildfires"
          text="The aftermath of wildfires goes beyond visible damage. Many animals suffer from trauma, burns, and displacement. Communities must come together to provide support, shelter, and medical care for affected pets and wildlife. Raising awareness and taking action can make a real difference."
          image="/images/la-need-our-help/dog-fire.png"
          imageAlt="Dog and Fire"
          imageBorderColor="#A259FF"
          imageOnLeft={true}
        />
        <LaNeedsOurHelpConclusion />
        <LaNeedsOurHelpBlogs blogs={blogs} />
        </div>
    </main>
  );
} 
