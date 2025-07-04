import React from "react";
import Header from "./components/common/Header";
import HeroSec from "./components/home/HeroSec";
import ServicesSection from "./components/home/ServicesSection";
import HeroSectionCard from "./components/home/HeroSectionCard";
import SalePart from "./components/home/SalePart";
import ProductCards from "./components/home/ProductCards";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import CatForm from "./components/common/CatForm";

const HomePage = () => {
  return (
    <>
      <HeroSec />
      <ServicesSection />
      <HeroSectionCard /> 
      <SalePart />
      <ProductCards />
      <FrequentlyAskedQuestions />
      <CatForm />
    </>
  );
};

export default HomePage;
