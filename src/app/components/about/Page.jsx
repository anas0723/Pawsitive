import AboutHero from './AboutHero';
import AboutSection from './AboutSection';
import AboutJoin from './AboutJoin';
import AboutIRSExpenses from './AboutIRSExpenses';
import AboutDonationTransparency from './AboutDonationTransparency';
import AboutPartners from './AboutPartners';
import AboutTestimonials from './AboutTestimonials';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-6 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto w-full px-4">
        <AboutHero />
        <AboutSection
          title="Who We Are"
          text="Pawsitive Change exists to improve the lives of animals by providing essential resources, innovative solutions, and driven people. We bring together the hearts, hands, and minds of animal lovers, shelters, and advocates. Whether you're a donor, volunteer, or adopter, Pawsitive Change works with you in advancing animal health and well-being."
          image="/images/about-us/dog-with-lady.png"
          imageBorderColor="#FFF9E1"
          imageRight={true}
        />
        <AboutSection
          title="Our Mission"
          text="Pawsitive Change exists to promote the health and well-being of animals through education, collaboration, and community action. We're passionate about building a kinder, safer environment for pets just like the people who love them."
          image="/images/about-us/cat-child.png"
          imageBorderColor="#FFD6D6"
          imageRight={false}
        />
        <AboutSection
          title="Our Commitment"
          text="We are fueled by scientific research to provide a fair animal care system for shelters to benefit the animals in their care. We are committed to transparency, accountability, and compassion in everything we do. Every donation, every volunteer hour, and every act of kindness helps us build our ability to protect, heal, and uplift the animals and communities we serve."
          image="/images/about-us/dog.png"
          imageBorderColor="#C6F6E6"
          imageRight={true}
        />
        <AboutJoin />
      </div>
      <AboutIRSExpenses />
      <AboutDonationTransparency />
      <AboutPartners />
      <AboutTestimonials />
      
    </main>
  );
} 