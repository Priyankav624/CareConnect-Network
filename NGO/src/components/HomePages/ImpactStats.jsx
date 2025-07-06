import React from 'react';
import { Container, Card } from 'react-bootstrap';
import useCounter from './useCounter';
import './ImpactStats.css';

const ImpactStats = () => {
  const volunteers = useCounter(1200, 2000);
  const projects = useCounter(36, 1500);
  const states = useCounter(18, 1700);
  const donations = useCounter(85, 1800);

  const stats = [
    { label: 'Volunteers', count: volunteers, icon: '🧑‍🤝‍🧑' },
    { label: 'Projects Done', count: projects, icon: '✅' },
    { label: 'States Reached', count: states, icon: '📍' },
    { label: 'Donations (Lakh ₹)', count: donations, icon: '💰' },
  ];

  const repeatedStats = [...stats, ...stats, ...stats];

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Our Impact</h2>
      <div className="impact-carousel-wrapper">
        <div className="impact-carousel-track">
          {repeatedStats.map((item, index) => (
            <Card key={index} className="impact-card text-center mx-4">
              <Card.Body>
                <div className="impact-icon">{item.icon}</div>
                <h2 className="mt-2 fw-bold">{item.count}+</h2>
                <p className="text-muted fs-5">{item.label}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ImpactStats;
