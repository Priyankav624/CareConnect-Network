import React from 'react'
import { useParams } from 'react-router-dom';


const events = [
    {
      id:1,
      title: 'Event 1',
      description: 'Description for Event 1',
      date: '2023-11-15',
      time: '10:00 AM',
      registrationLink: 'https://example.com/event1-registration',
    },
    // Add more events as needed
  ];

function EventDetails() {
    const { id } = useParams();
    const eventId = parseInt(id)
    const event = events.find((e) => e.id === eventId);
  
    if (!event) {
      return <div>Event not found</div>;
    }
  
    return (
      <div>
        <h2>{event.title}</h2>
        <h5>{event.date}</h5>
        <h5>{event.time}</h5>
        <p>{event.description}</p>
      </div>
    );
  };
  

export default EventDetails