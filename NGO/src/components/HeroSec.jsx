import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeroSec = () => {
  const imageStyle = {
    width: '100%',  // Set the width to 100% to make sure it fits the container
    height: '400px', // Set the desired height
    objectFit: 'cover', // Use 'cover' to maintain aspect ratio and cover the entire container
  };

  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h5>“The best way to find yourself is to lose yourself in the service of others.”</h5>
          <p>– Mahatma Gandhi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Second slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h5>“Alone, we can do so little; together, we can do so much.”</h5>
          <p>– Helen Keller</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Third slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h5>“Act as if what you do makes a difference. It does.”</h5>
          <p>– William James</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default HeroSec;
