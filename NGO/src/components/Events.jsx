import React from 'react';
import EventsCard from './EventsCard';
import { Container , Row} from 'react-bootstrap';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1',
      date: '2023-11-15',
      time: '10:00 AM',
      registrationLink: 'https://example.com/event1-registration',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2',
      date: '2023-11-20',
      time: '2:00 PM',
      registrationLink: 'https://example.com/event2-registration',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Description for Event 3',
      date: '2023-11-25',
      time: '4:30 PM',
      registrationLink: 'https://example.com/event3-registration',
    },
    {
      id: 4,
      title: 'Event 4',
      description: 'Description for Event 4',
      date: '2023-12-01',
      time: '1:00 PM',
      registrationLink: 'https://example.com/event4-registration',
    },
    {
      id: 5,
      title: 'Event 5',
      description: 'Description for Event 5',
      date: '2023-12-05',
      time: '3:45 PM',
      registrationLink: 'https://example.com/event5-registration',
    },
    {
      id: 6,
      title: 'Event 6',
      description: 'Description for Event 6',
      date: '2023-12-10',
      time: '11:30 AM',
      registrationLink: 'https://example.com/event6-registration',
    },
    {
      id: 7,
      title: 'Event 7',
      description: 'Description for Event 7',
      date: '2023-12-15',
      time: '5:00 PM',
      registrationLink: 'https://example.com/event7-registration',
    },
    {
      id: 8,
      title: 'Event 8',
      description: 'Description for Event 8',
      date: '2023-12-20',
      time: '10:30 AM',
      registrationLink: 'https://example.com/event8-registration',
    },
    {
      id: 9,
      title: 'Event 9',
      description: 'Description for Event 9',
      date: '2023-12-25',
      time: '2:15 PM',
      registrationLink: 'https://example.com/event9-registration',
    },
    {
      id: 10,
      title: 'Event 10',
      description: 'Description for Event 10',
      date: '2023-12-30',
      time: '4:00 PM',
      registrationLink: 'https://example.com/event10-registration',
    },
  ];
  
  return (
    <Container>
      <h2 style={{textAlign:"center"}}>Upcoming Events</h2>
      <Row>
        {events.map((event) => (
          <EventsCard key={event.id} {...event} />
        ))}
      </Row>
    </Container>
  );

};

export default Events;
