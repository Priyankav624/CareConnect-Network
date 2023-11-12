import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel, Card, Placeholder } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
      <div className="card bg-dark text-white">
        <img src="https://th.bing.com/th/id/OIP._Pgj9Zrtk9biDTl0Ne3sYAHaD4?w=318&h=180&c=7&r=0&o=5&pid=1.7" class="card-img" alt="About" />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
      </div>
      <div>
        <div className='text-center' style={{marginTop:"70px"}}>
            <h1>Who We Are</h1>
            <p>Hello</p>
    </div>
    <Container>
      <h2 className="text-center mb-4">Welcome to [NGO Name]</h2>
      <h2 className='text-center mb-4'>Our History:</h2>

      <Row className="mb-5">
        <Col md={6}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
          alt="First slide"
        />
        </Col>
        <Col md={6}>
          <p>
            Over the years, we've woven a tapestry of positive change, starting from [mention any significant milestones or early projects]. Guided by the belief that every action, no matter how small, contributes to a brighter future, we've steadily grown into a beacon of hope and impact.
          </p>
        </Col>
      </Row>

      <h2 className='text-center mb-4'>Our History:</h2>
      <Row className="mb-5">
        <Col md={6}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
          alt="First slide"
        />
          
        </Col>
        <Col md={6}>
        
          <p>
            Accompanying our journey are powerful visuals that tell stories of resilience, joy, and progress. Explore our timeline below to witness the transformative moments that define us.
          </p>
          {/* Add Visual Timeline Component here */}
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h4>Call-to-Action:</h4>
          <p>
            Join us in this ongoing story of positive change. Together, we can create a future where every individual has the opportunity to thrive.
          </p>
          <Button variant="primary">Get Involved</Button>
        </Col>
      </Row>
    </Container>
 
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image 1" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div> </Carousel.Item>

          <Carousel.Item>
          <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
          
            <Card.Img variant="top" src="holder.js/100px180?text=Image 2" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div> 
          
          
      </Carousel.Item>
      <Carousel.Item>
          <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
          
            <Card.Img variant="top" src="holder.js/100px180?text=Image 2" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></div> 
          
          
      </Carousel.Item>
      

      {/* Additional Carousel.Items for more pages */}
    </Carousel>
  



  




      </div>
    </>
  )
}

export default AboutUs