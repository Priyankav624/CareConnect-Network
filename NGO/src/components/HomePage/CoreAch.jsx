import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const CoreAch = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    if (e.type === 'click') {
      setActiveIndex(selectedIndex);
    }
  };

  const carouselItems = [
    {
      imageSrc1: 'https://via.placeholder.com/400x300?text=Empowering+Lives+Image+1',
      imageSrc2: 'https://via.placeholder.com/400x300?text=Empowering+Lives+Image+2',
      title: 'Empowering Lives',
      description: 'Initiatives that make a positive impact on individuals and communities.',
    },
    {
      imageSrc1: 'https://via.placeholder.com/400x300?text=Celebrating+Collaboration+Image+1',
      imageSrc2: 'https://via.placeholder.com/400x300?text=Celebrating+Collaboration+Image+2',
      title: 'Celebrating Collaboration',
      description: 'Success achieved through collaborative efforts, bringing together diverse talents for positive change.',
    },
    {
      imageSrc1: 'https://via.placeholder.com/400x300?text=Integrity+and+Transparency+Image+1',
      imageSrc2: 'https://via.placeholder.com/400x300?text=Integrity+and+Transparency+Image+2',
      title: 'Integrity and Transparency',
      description: 'Upholding the highest standards of integrity, ensuring transparency and ethical practices in all our endeavors.',
    },
    {
      imageSrc1: 'https://via.placeholder.com/400x300?text=Innovative+Solutions+Image+1',
      imageSrc2: 'https://via.placeholder.com/400x300?text=Innovative+Solutions+Image+2',
      title: 'Innovative Solutions',
      description: 'Driving innovation to address challenges, pioneering creative solutions for a sustainable future.',
    },
    {
      imageSrc1: 'https://via.placeholder.com/400x300?text=Inclusivity+and+Equality+Image+1',
      imageSrc2: 'https://via.placeholder.com/400x300?text=Inclusivity+and+Equality+Image+2',
      title: 'Inclusivity and Equality',
      description: 'Fostering inclusivity, diversity, and equality in all aspects of our initiatives.',
    },
  ];
  
  return (
    <>
    <Container className='text-center' style={{ marginTop: '60px' }}>
      <h1>CORE AND ACHEIVEMENTS</h1>
    </Container>
    <Container style={{ marginTop: '60px' }}>
      {[0, 1, 2, 3, 4].map((index) => (
        <Row key={index} className="mb-4">
          {index % 2 === 0 ? (
            <>
              <Col>
                <Row className="justify-content-center align-items-center h-100">
                  <Col xs={12} md={8} lg={6} className="mb-4">
                    <h2 className="text-center text-md-start">{carouselItems[index].title}</h2>
                    <p style={{fontSize:"25px"}} className="text-center text-md-start">{carouselItems[index].description}</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Carousel
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  data-bs-theme="dark"
                  interval={null}
                  keyboard={false}
                  touch={false}
                >
                  <Carousel.Item key={index} onClick={(e) => e.stopPropagation()}>
                    <img
                      className="d-block w-100 img-fluid"
                      src={carouselItems[index].imageSrc1}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                  <Carousel.Item key={index + 1} onClick={(e) => e.stopPropagation()}>
                    <img
                      className="d-block w-100 img-fluid"
                      src={carouselItems[index].imageSrc2}
                      alt={`Slide ${index + 2}`}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </>
          ) : (
            <>
              <Col>
                <Carousel
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  data-bs-theme="dark"
                  interval={null}
                  keyboard={false}
                  touch={false}
                >
                  <Carousel.Item key={index} onClick={(e) => e.stopPropagation()}>
                    <img
                      className="d-block w-100 img-fluid"
                      src={carouselItems[index].imageSrc1}
                      alt={`Slide ${index + 1}`}
                    />
                  </Carousel.Item>
                  <Carousel.Item key={index + 1} onClick={(e) => e.stopPropagation()}>
                    <img
                      className="d-block w-100 img-fluid"
                      src={carouselItems[index].imageSrc2}
                      alt={`Slide ${index + 2}`}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <Row className="justify-content-center align-items-center h-100">
                  <Col xs={12} md={8} lg={6} className="mb-4">
                    <h2  className="text-center text-md-end">{carouselItems[index].title}</h2>
                    <p style={{fontSize:"25px"}} className="text-center text-md-end">{carouselItems[index].description}</p>
                  </Col>
                </Row>
              </Col>
            </>
          )}
        </Row>
      ))}
    </Container>
    </>
  );
};

export default CoreAch;
