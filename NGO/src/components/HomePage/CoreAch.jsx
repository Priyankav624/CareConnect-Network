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
      imageSrc1: 'https://cdn.pixabay.com/photo/2021/04/28/04/48/ngo-near-me-6212979_960_720.jpg ',
      imageSrc2: 'https://images.hindustantimes.com/img/2021/10/30/1600x900/Life_beyond_Numbers_1635579657650_1635579881820.PNG ',
      title: 'Empowering Lives',
      description: 'Initiatives that make a positive impact on individuals and communities.',
    },
    {
      imageSrc1: 'https://images.pexels.com/photos/6646877/pexels-photo-6646877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
      imageSrc2: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      title: 'Celebrating Collaboration',
      description: 'Success achieved through collaborative efforts, bringing together diverse talents for positive change.',
    },
    {
      imageSrc1: 'https://imgs.search.brave.com/V9SIfg3-t3FefpZ53f_DPEJlexTrB4upX_slsFSxWGE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/OTgwODQ3Ni9waG90/by92b2x1bnRlZXIt/cG9ydHJhaXRzLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPTZOakVJTnhS/XzdsdkFPaEtBZlJl/dGdiUDhiYmt6cVNa/MnU2U0pvdHNZV1E9',
      imageSrc2: 'https://savioursfoundation.org/wp-content/uploads/2021/02/ngo-1024x768.jpg',
      title: 'Integrity and Transparency',
      description: 'Upholding the highest standards of integrity, ensuring transparency and ethical practices in all our endeavors.',
    },
    {
      imageSrc1: 'https://i1.wp.com/www.naijahomebased.com/wp-content/uploads/2018/11/achievement-3556674_1280-compressed-1.jpg?fit=1280%2C891&ssl=1 ',
      imageSrc2: 'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      title: 'Innovative Solutions',
      description: 'Driving innovation to address challenges, pioneering creative solutions for a sustainable future.',
    },
    {
      imageSrc1: 'https://cdn.pixabay.com/photo/2021/04/28/04/48/ngo-near-me-6212979_960_720.jpg ',
      imageSrc2: 'https://images.hindustantimes.com/img/2021/10/30/1600x900/Life_beyond_Numbers_1635579657650_1635579881820.PNG ',
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
