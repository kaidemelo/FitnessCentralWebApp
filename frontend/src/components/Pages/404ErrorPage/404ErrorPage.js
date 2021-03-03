import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { errorpage404ObjOne } from './Data';

function ErrorPage404() {
  
  return (
    <>
      <HeroSection {...errorpage404ObjOne} />
    </>
  );
}

export default ErrorPage404;
