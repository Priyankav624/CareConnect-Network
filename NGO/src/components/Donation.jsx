import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Donation = () => {
  return (
    <>
        <Container className="text-center " style={{marginTop:"70px", marginBottom:"70px"}}>
        <Card style={{padding:"40px"}} className='bg-light'>
          <Card.Body>
          <Row className="justify-content-md-center">
          <Col xs={12} lg={6} className="p-0">
          <Card className="h-100 d-flex align-items-center justify-content-center">
                  <Card.Img variant="top" src="https://www.akshayapatra.org/wp-content/themes/akshay-patra/himage/milestones/2009.jpg" />
                </Card>
              </Col>
              <Col xs={12} lg={6} className="p-0">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <Card.Text className="text-center">
                      You can help build a future where people live in harmony with nature.
                      Make your donation today and support WWF's conservation solutions.
                    </Card.Text>
                    <Button variant="primary">Donate</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Donation