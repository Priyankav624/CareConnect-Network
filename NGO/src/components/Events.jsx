import React from 'react';
import EventsCard from './EventsCard';
import { Container , Row} from 'react-bootstrap';
import Donation from './Donation';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Empowerment through Education Workshop',
      description: 'Join us for an interactive workshop focused on empowering underprivileged communities through education. We believe in the transformative power of education to bring positive change.',
      date: '2023-11-15',
      time: '10:00 AM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 2,
      title: 'Health and Wellness Fair',
      description: 'Participate in our Health and Wellness Fair, dedicated to promoting a healthy lifestyle and providing valuable information on healthcare. Join us for a day of learning and well-being.',
      date: '2023-11-20',
      time: '2:00 PM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 3,
      title: 'Green Living Symposium',
      description: 'Attend our Green Living Symposium, where experts will share insights on sustainable living, environmental conservation, and the importance of adopting eco-friendly practices in daily life.',
      date: '2023-11-25',
      time: '4:30 PM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 4,
      title: 'Hope for the Holidays: Charity Drive',
      description: 'Spread hope and joy during the holiday season by participating in our charity drive. Contribute to providing essential items and support for those in need within our community.',
      date: '2023-12-01',
      time: '1:00 PM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 5,
      title: 'Winter Warmth Drive',
      description: 'Join us in the Winter Warmth Drive to provide warm clothing and essentials to those facing the harsh winter conditions. Your participation can make a significant impact.',
      date: '2023-12-05',
      time: '3:45 PM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 6,
      title: 'New Year, New Beginnings: Volunteer Orientation',
      description: 'Start the new year with purpose by attending our Volunteer Orientation. Learn about various volunteer opportunities and how you can contribute to making a positive impact in 2023.',
      date: '2023-12-10',
      time: '11:30 AM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 7,
      title: 'Unity in Diversity: Cultural Celebration',
      description: 'Celebrate the diversity of our community in a cultural extravaganza. Join us for music, dance, and traditional performances that showcase the rich tapestry of cultures within our society.',
      date: '2023-12-15',
      time: '5:00 PM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 8,
      title: 'Tech for Good: Coding Workshop',
      description: 'Explore the world of technology for social impact in our Coding Workshop. Learn how coding skills can be used to create positive change and address community challenges.',
      date: '2023-12-20',
      time: '10:30 AM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 9,
      title: 'Heart to Heart: Community Outreach',
      description: 'Engage in meaningful conversations and community outreach in our Heart to Heart event. Connect with fellow community members, share experiences, and foster a sense of belonging.',
      date: '2023-12-25',
      time: '2:15 PM',
      registrationLink: 'https://eve/events-reg',
    },
    {
      id: 10,
      title: 'Farewell to 2023: Reflection and Celebration',
      description: 'Bid farewell to the year with a reflection and celebration event. Join us as we look back on the achievements and lessons of 2023 and welcome the opportunities of the coming year.',
      date: '2023-12-30',
      time: '4:00 PM',
      registrationLink: 'https://eve/events-reg',
    },
  ];
  
  
  return (
    <Container>
      <h2 style={{textAlign:"center" , marginTop:"40px", marginBottom:"40px"}}>Upcoming Events</h2>
      <Row>
        {events.map((event) => (
          <EventsCard key={event.id} {...event} />
        ))}
      </Row>
      <Donation />
    </Container>
  );

};

export default Events;
