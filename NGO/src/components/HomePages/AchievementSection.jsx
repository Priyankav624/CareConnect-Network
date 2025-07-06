import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import useTypingEffect from './useTypingEffect';
import './AchievementSection.css'; 

const AchievementSection = ({ data, reverse }) => {
  const [index, setIndex] = useState(0);
  const typedTitle = useTypingEffect(data.title, 30);

  const cleanImage = (url) => url?.trim() || '';

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found';
  };

  return (
    <Container
      fluid
      className={`py-5 px-3 px-md-5 ${
        reverse ? 'block-bg-odd' : 'block-bg-even'
      } achievement-container`}
    >
      <Row className="align-items-center">
        <Col
          md={6}
          className={`mb-4 mb-md-0 ${reverse ? 'order-md-2' : 'order-md-1'} order-1`}
        >
          <Carousel
            activeIndex={index}
            onSelect={(selectedIndex) => setIndex(selectedIndex)}
            interval={4000}
            controls
            indicators
            fade
          >
            {[data.imageSrc1, data.imageSrc2].map((src, i) => (
              <Carousel.Item key={i}>
                <img
                  src={cleanImage(src)}
                  onError={handleImageError}
                  className="d-block w-100 rounded shadow achievement-img"
                  alt={`Slide ${i + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col
          md={6}
          className={`text-center text-md-start animate__animated animate__fadeInRight ${
            reverse ? 'order-md-1' : 'order-md-2'
          } order-2`}
        >
          <h2 className="mb-3">{typedTitle}</h2>
          <div className="heading-bar mb-3 mx-auto mx-md-0"></div>
          <p className="fs-5 text-muted">{data.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AchievementSection;
