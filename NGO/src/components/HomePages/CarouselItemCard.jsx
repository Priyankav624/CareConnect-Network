import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const CarouselItemCard = ({ item, delay }) => {
  const [showCaption, setShowCaption] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCaption(true);
    }, delay || 1000); 

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="position-relative">
      <img
        className="d-block w-100"
        src={item.imageSrc}
        alt="Slide"
        style={{ maxHeight: '530px', objectFit: 'cover' }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

      {showCaption && (
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h5 className="fw-bold text-light bg-dark bg-opacity-75 px-3 py-2 rounded mb-3">
            {item.caption}
          </h5>
          <Nav.Link as={Link} to="/volunteer">
            <Button variant="success" className="fw-bold">
              Donate
            </Button>
          </Nav.Link>
        </div>
      )}
    </div>
  );
};

export default CarouselItemCard;
