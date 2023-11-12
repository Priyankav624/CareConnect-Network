import React from 'react';
import { Container, Row, Col, Card, Placeholder } from 'react-bootstrap';
import Donation from './Donation'

const BlogPage = () => {
    
  const blogPosts = [
    {
      imgsrc: 'https://www.akshayapatra.org/wp-content/themes/akshay-patra/himage/milestones/2009.jpg',
      title: 'Card 1',
      author: 'List item 1',
      Date: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Your description goes here.',
      imgsrc2: 'https://via.placeholder.com/100', 
    },
  
  ];

  return (
    <>
    <Container style={{marginTop:"40px"}}>
      <Row>
        {blogPosts.map((item, index) => (
          <Col key={index} xs={12} md={6} lg={4} xl={3}>
            <Card style={{ marginBottom: '20px' }}>
              {/* First Image */}
              <Card.Img variant="top" src={item.imgsrc} />
              <Card.Body>
                <Card.Title>
                  <Placeholder as="span" animation="glow" /> {item.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <Placeholder as="span" animation="glow" /> {item.Date}
                </Card.Subtitle>
                <Card.Text>
                  <Placeholder as="span" animation="glow" /> {item.author}
                </Card.Text>
                <Card.Text>
                  <Placeholder as="span" animation="glow" /> {item.description}
                </Card.Text>
              </Card.Body>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px',marginBottom: '10px'  }}>
                <Card.Img variant="bottom" src={item.imgsrc2} style={{ maxWidth: '30px' }} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  
    <Donation />
    </>
  );
};

export default BlogPage;
