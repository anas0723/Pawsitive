import React from "react";
import HeroSec from "./components/home/HeroSec";
import ServicesSection from "./components/home/ServicesSection";
import HeroSectionCard from "./components/home/HeroSectionCard";
import SalePart from "./components/home/SalePart";
import ProductCards from "./components/home/ProductCards";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import CatForm from "./components/home/CatForm";
import Footer from "./components/common/Footer";
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
  