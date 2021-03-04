//Imports
import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { tosObjOne } from './Data';

//Terms of service page which hold all components for this page.
function TermsOfService() {
  return (
    <>
    {/* Hero section component with data objects from the terms of service data file passed into it */}
      <HeroSection {...tosObjOne} />
    </>
  );
}

export default TermsOfService;
