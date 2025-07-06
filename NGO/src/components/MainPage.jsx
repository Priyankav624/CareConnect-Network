import React from 'react'
import CoreAch from './HomePages/CoreAch';
import Carousels from './HomePages/CarouselSlide';
import Donation from './HomePages/Donation';

const HomePage = () => {
  return (
    <>
      <Carousels/>
      <CoreAch />
      <Donation />
    </>
  )
}

export default HomePage