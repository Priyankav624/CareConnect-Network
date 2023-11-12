import React from 'react'
import EventsCard from './Eventscard';

const Events = () => {
    const events = [
      {
        id:1,
        title: 'Event 1',
        description: 'Description for Event 1',
        date: '2023-11-15',
        time: '10:00 AM',
        registrationLink: 'https://example.com/event1-registration',
      }
    ];
  
    return (
      <div style={{ textAlign:"Center"}}>
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <EventsCard key={event.id} {...event} />
        ))}
      </div>
    );
  };


export default Events