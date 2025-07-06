import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselItemCard from './CarouselItemCard';

const CarouselSlide = () => {
  const carouselItems = [
    {
      caption: '“The best way to find yourself is to lose yourself in the service of others.”',
      imageSrc: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=870&auto=format&fit=crop',
    },
    {
      caption: '“Alone, we can do so little; together, we can do so much.”',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1661775311740-7eb652fa31cc?q=80&w=870&auto=format&fit=crop',
    },
    {
      caption: '“Unity for Change”',
      imageSrc: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=870&auto=format&fit=crop',
    },
  ];

  return (
    <Carousel interval={4000} fade controls indicators>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <CarouselItemCard item={item} delay={1000} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
