// src/pages/Wishlist.js
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { getWishlist } from '../../utils/wishlistUtils';
import eventsData from '../../data/events.json';
import EventsCard from './EventsCard';

const Wishlist = () => {
  const wishlist = getWishlist();
  const wishEvents = eventsData.filter(e => wishlist.includes(e.id));

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Wishlist</h2>
      {wishEvents.length ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {wishEvents.map(e => (
            <EventsCard key={e.id} {...e} isWishlisted  />
          ))}
        </Row>
      ) : (
        <p className="text-muted">You haven’t added any events to your wishlist yet.</p>
      )}
    </Container>
  );
};

export default Wishlist;
