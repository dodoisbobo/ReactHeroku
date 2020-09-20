import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Product() {
  return (
    <>
      <HeroSection {...homeObjFour} />
      <Pricing />
    </>
  );
}

export default Product;