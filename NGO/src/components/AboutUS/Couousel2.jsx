import React from 'react'
import { Carousel, Card, Button} from 'react-bootstrap';

const Couousel2 = () => {
  return (
    <>
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
          </Card>
          </div> 
      </Carousel.Item>
    </Carousel>
      
    </>
  )
}

export default Couousel2