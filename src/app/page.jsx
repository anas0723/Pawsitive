import React from "react";
import HeroSec from "./components/HeroSec";
import ServicesSection from "./components/ServicesSection";
import HeroSectionCard from "./components/HeroSectionCard";
import SalePart from "./components/SalePart";
import ProductCards from "./components/ProductCards";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import CatForm from "./components/CatForm";
import Footer from "./components/Footer";
const page = () => {
  return (
    <>
      <HeroSec />
      <ServicesSection />
      <HeroSectionCard />
      <SalePart />
      <ProductCards />
      <FrequentlyAskedQuestions />
      <CatForm />
      <Footer />

    </>
  );
};

export default page;
  