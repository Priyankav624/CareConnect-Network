import React from 'react';
import { Container } from 'react-bootstrap';
import AchievementSection from './AchievementSection';
import ImpactStats from './ImpactStats';

const carouselItems = [
  {
    imageSrc1: 'https://cdn.pixabay.com/photo/2021/04/28/04/48/ngo-near-me-6212979_960_720.jpg',
    imageSrc2: 'https://images.hindustantimes.com/img/2021/10/30/1600x900/Life_beyond_Numbers_1635579657650_1635579881820.PNG',
    title: 'Empowering Lives',
    description: 'Initiatives that make a positive impact on individuals and communities.',
  },
  {
    imageSrc1: 'https://images.pexels.com/photos/6646877/pexels-photo-6646877.jpeg',
    imageSrc2: 'https://images.unsplash.com/photo-1585984968562-1443b72fb0dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Celebrating Collaboration',
    description: 'Success achieved through collaborative efforts, bringing together diverse talents for positive change.',
  },
  {
    imageSrc1: 'https://plus.unsplash.com/premium_photo-1697211174167-f6c24f67ab47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmdvJTIwdHJ1c3R8ZW58MHx8MHx8fDA%3D',
    imageSrc2: 'https://savioursfoundation.org/wp-content/uploads/2021/02/ngo-1024x768.jpg',
    title: 'Integrity and Transparency',
    description: 'Upholding the highest standards of integrity and ethical practices.',
  },
  {
    imageSrc1: 'https://images.unsplash.com/photo-1652858672796-960164bd632b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageSrc2: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?q=80',
    title: 'Innovative Solutions',
    description: 'Pioneering creative solutions for a sustainable future.',
  },
  {
    imageSrc1: 'https://images.unsplash.com/flagged/photo-1572818640942-05bbb70c9089?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageSrc2: 'https://plus.unsplash.com/premium_photo-1664301656842-8b3013405721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Inclusivity and Equality',
    description: 'Fostering inclusivity, diversity, and equality.',
  },
];

const CoreAch = () => {
  return (
    <>
      <Container className="text-center my-5">
        <h1 className="fw-bold display-5">Core Values & Achievements</h1>
        <p className="lead text-muted">Driven by purpose. Defined by impact.</p>
      </Container>

      {carouselItems.map((item, index) => (
        <AchievementSection key={index} data={item} reverse={index % 2 !== 0} />
      ))}

      <ImpactStats />
    </>
  );
};

export default CoreAch;
