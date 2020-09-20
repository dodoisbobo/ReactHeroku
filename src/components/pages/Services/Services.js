import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <Pricing />
    </>
  );
}

export default Services;