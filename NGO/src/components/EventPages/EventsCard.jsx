import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EventsCard = ({
  id,
  title,
  description,
  date,
  time,
  children,
  onWishlistClick,
  isWishlisted
}) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card
        className="h-100 border-0 shadow-sm"
        style={{
          transition: 'transform .3s',
          borderRadius: 12,
          backgroundColor: '#fffefb'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="fw-bold">{title}</Card.Title>
            <Card.Text><strong>Date:</strong> {date}</Card.Text>
            <Card.Text><strong>Time:</strong> {time}</Card.Text>
            <Card.Text className="text-muted" style={{ fontSize: '0.95rem' }}>
              {description}
            </Card.Text>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex gap-2">
              <Link to={`/event/${id}`}>
                <Button style={{ backgroundColor: "black", border: "none" }} size="sm">
                  Details
                </Button>
              </Link>
              {children}
            </div>
            <span
              role="button"
              title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              onClick={onWishlistClick}
              style={{
                fontSize: '20px',
                color: isWishlisted ? 'red' : 'lightgray',
                cursor: 'pointer'
              }}
            >
              {isWishlisted ? '❤️' : '🤍'}
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EventsCard;
