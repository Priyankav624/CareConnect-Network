import React, { useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';

const CarouselSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    if (e.type === 'click') {
      setActiveIndex(selectedIndex);
    }
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '530px', 
    objectFit: 'cover',
  };

  const carouselItems = [
    {
      
      caption: '“The best way to find yourself is to lose yourself in the service of others.”',
      imageSrc: 'https://imgs.search.brave.com/audkaeq9MZOOLFCEVs14ESDUZeAZPhQzbVcxcoJTW6M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhpbmtyaWdodG1l/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMy9VbnRp/dGxlZC1kZXNpZ24t/MzEtMTExMHg2NjIt/MS0xMDI0eDYxMS5w/bmc', 
    
    },
    {
      
      caption: '“Alone, we can do so little; together, we can do so much.”',
      imageSrc: 'https://imgs.search.brave.com/nRezYj4meYZIedltHs9o_EVtGGR89m3WVuNenclkTvk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWZl/bmNlZm9yY2hpbGRy/ZW4ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAyL2No/aWxkcmVuLW9uLXRo/ZS1tb3ZlLmpwZw',
      
    },
    {
      caption: '“Unity for Change”',
      imageSrc: 'https://th.bing.com/th/id/OIP.GCHSbFjhcFwW0lnBxbPpZAHaDt?pid=ImgDet&rs=1',
      
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
          <Carousel.Caption className="position-absolute top-50 end-10 translate-middle-y">
              <h5 style={{ fontSize: '4rem', fontWeight: 'bold' }} >{item.caption}</h5>
            <Button variant="success" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
              Donate
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
