//Imports
import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

//Home page which holds all components for this page.
function Home() {
  return (
    <>
    {/* Hero section components with data objects from the home page data file passed into them */}
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Home;
