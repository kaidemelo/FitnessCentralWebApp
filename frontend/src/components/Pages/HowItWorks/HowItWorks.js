//Imports
import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { howitworksObjOne, howitworksObjTwo, howitworksObjThree, howitworksObjFour,  howitworksObjFive} from './Data';

//How it works page which holds all components for this page.
function HowItWorks() {
  return (
    <>
    {/* Hero section components with data objects from the how it works data file passed into them */}
      <HeroSection {...howitworksObjOne} />
      <HeroSection {...howitworksObjTwo} />
      <HeroSection {...howitworksObjThree} />
      <HeroSection {...howitworksObjFour} />
      <HeroSection {...howitworksObjFive} />
    </>
  );
}

export default HowItWorks;
