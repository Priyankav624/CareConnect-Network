import React from 'react'
import CoreAch from './HomePage/CoreAch';
import Carousels from './HomePage/Carousels';
import Donation from './Donation';

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