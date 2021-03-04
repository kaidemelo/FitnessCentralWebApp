//Imports
import React from 'react';
import HeroSection2 from '../../HeroSection2/HeroSection2';
import HeroSection from '../../HeroSection/HeroSection';
import { testObjOne, testObjTwo, testObjThree } from './Data';

//Testimonials page which holds all components for this page.
function Testimonials() {
  return (
    <>
    {/* Hero section components with data objects from the testimonials data file passed into them */}
      <HeroSection {...testObjOne} />
      <HeroSection2 {...testObjTwo} />
      <HeroSection2 {...testObjThree} />
    </>
  );
}

export default Testimonials;
