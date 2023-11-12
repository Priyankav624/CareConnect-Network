import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    if (e.type === 'click') {
      setActiveIndex(selectedIndex);
    }
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '400px', 
    objectFit: 'cover',
  };

  const carouselItems = [
    {
      caption: '“The best way to find yourself is to lose yourself in the service of others.”',
      author: 'Mahatma Gandhi',
      imageSrc: 'https://via.placeholder.com/800x400', // Placeholder URL, replace with your image URL
    },
    {
      caption: '“Alone, we can do so little; together, we can do so much.”',
      author: 'Helen Keller',
      imageSrc: 'https://via.placeholder.com/800x400', // Placeholder URL, replace with your image URL
    },
    {
      caption: '“Act as if what you do makes a difference. It does.”',
      author: 'William James',
      imageSrc: 'https://via.placeholder.com/800x400', // Placeholder URL, replace with your image URL
    },
  ];

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      data-bs-theme="dark"
      interval={null}
      keyboard={false}
      touch={false}
    >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} onClick={(e) => e.stopPropagation()}>
          <Container className="position-absolute top-0 start-0 end-0"></Container>
          <img
            className="d-block w-100 img-fluid"
            src={item.imageSrc}
            alt={`Slide ${index + 1}`}
            style={imageStyle}
          />
          <Carousel.Caption className="position-absolute bottom-0 start-0 end-0">
            <h5>{item.caption}</h5>
            <p>- {item.author}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
