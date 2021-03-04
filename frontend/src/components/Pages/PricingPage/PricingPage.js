//Imports
import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { pricingObjOne } from './Data';
import PricingComponent from '../../PricingComponent/Pricing';

//Pricing page which holds all components for this page.
function PricingPage() {
  return (
    <>
    {/* Hero section component with data object from the pricing page data file passed into it */}
      <HeroSection {...pricingObjOne} />
      {/* Pricing component */}
      <PricingComponent />
    </>
  );
}

export default PricingPage;
