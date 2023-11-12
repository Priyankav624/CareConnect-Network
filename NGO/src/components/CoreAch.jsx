import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container' ;

const CoreAch = () => {
  return (
    <>
        <div style={{marginTop:"100px"}}>
      <Container>
      <Row>
        
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.akshayapatra.org/wp-content/themes/akshay-patra/himage/milestones/2009.jpg" />
          </Card>
        </Col>
        
        <Col md={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      </Container>
      </div>

      <div style={{marginTop:"100px"}}>
      <Container>
      <Row>
        
        <Col md={4}>
          <Card>
          <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={{ span: 4, offset: 4 }}>
          <Card>
          <Card.Img variant="top" src="https://www.akshayapatra.org/wp-content/themes/akshay-patra/himage/milestones/2009.jpg" />
          </Card>
        </Col>

      </Row>
      </Container>
      </div>
      
      <div className='row g-4' style={{margin:"100px"}}>
        <div className='col-md-6 col-lg-3'>
          <div className='card '>
            <div className='card-body text-centered'>
            <img
              alt="Achivements"
              src="https://th.bing.com/th/id/OIP.nZTkwKsSr_W0_7st-Q7FSwHaGj?w=174&h=180&c=7&r=0&o=5&pid=1.7"
              className="rounded-circle mb-3"
            />
            <h3 className='card-title mb-3'>
              hello
            </h3>
            <p className='card-text'>
              hello
            </p>

            {/* <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} /> */}
            <a href='#'>
              <i className='bi bi-twitter text-dark mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-facebook mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-linkedin mx-1'>

              </i>
            </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-3'>
          <div className='card '>
            <div className='card-body text-centered'>
            <img
              alt="Achivements"
              src="https://th.bing.com/th/id/OIP.nZTkwKsSr_W0_7st-Q7FSwHaGj?w=174&h=180&c=7&r=0&o=5&pid=1.7"
              className="rounded-circle mb-3"
            />
            <h3 className='card-title mb-3'>
              hello
            </h3>
            <p className='card-text'>
              hello
            </p>
            <a href='/'>
              <i className='bi bi-twitter mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-facebook mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-linkedin mx-1'>

              </i>
            </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-3'>
          <div className='card '>
            <div className='card-body text-centered'>
            <img
              alt="Achivements"
              src="https://th.bing.com/th/id/OIP.nZTkwKsSr_W0_7st-Q7FSwHaGj?w=174&h=180&c=7&r=0&o=5&pid=1.7"
              className="rounded-circle mb-3"
            />
            <h3 className='card-title mb-3'>
              hello
            </h3>
            <p className='card-text'>
              hello
            </p>
            <a href='/'>
              <i className='bi bi-twitter mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-facebook mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-linkedin mx-1'>

              </i>
            </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-3'>
          <div className='card '>
            <div className='card-body text-centered'>
            <img
              alt="Achivements"
              src="https://th.bing.com/th/id/OIP.nZTkwKsSr_W0_7st-Q7FSwHaGj?w=174&h=180&c=7&r=0&o=5&pid=1.7"
              className="rounded-circle mb-3"
            />
            <h3 className='card-title mb-3'>
              hello
            </h3>
            <p className='card-text'>
              hello
            </p>
            <a href='/'>
              <i className='bi bi-twitter mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-facebook mx-1'>

              </i>
            </a>
            <a href='/'>
              <i className='bi bi-linkedin mx-1'>

              </i>
            </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CoreAch