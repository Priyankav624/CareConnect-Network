import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AuthContext } from '../../App';
import VolunteerForm from './VolunteerForm';
import { useNavigate } from 'react-router-dom';

const Volunteer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-5 p-5 mb-5">
        <h2 className="text-center mb-4">Be the Change: Volunteer Today!</h2>
        <Row className="mb-5">
          <Col md={6}>
            <img
              className="img-fluid rounded"
              src="https://media.istockphoto.com/id/1465678597/photo/community-heart-shape-word-cloud-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=WeGCTV6h3wRBtKuwFEp6lAQgKfT1qQJacBza-_4Dvb8="
              alt="Volunteer banner"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p>
               Volunteer with NGO dedicated to transforming the education of underprivileged children to make a 
          difference in the community. Go beyond monetary assistance and into their lives, bringing change 
          with your own hands and experiencing the fulfillment of your commitment to society.
          At Bhumi, we urge everyone to volunteer and make the change they wish to see in the world. You may 
          achieve change at the grassroots level by volunteering for NGO like us. We urge people from all walks of life to volunteer in 
          NGO based on their interests, whether it is education, the environment, or animal welfare since we have opportunities in these areas available for them.
            </p>
          </Col>
        </Row>

        <Container className="text-center">
          {!user ? (
            <>
              <h5 className="text-danger">You must be logged in to volunteer.</h5>
              <Button variant="dark" onClick={() => navigate('/login')}>Login</Button>
            </>
          ) : (
            <VolunteerForm />
          )}
        </Container>
      </Container>
      <Container className='mb-4'>
        {user && (
            <>
              <h4 className="mt-5 mb-5 text-center">What Our Volunteers Say</h4>
              <Row>
                {[
                  {
                    name: 'Ananya Sharma',
                    message: 'Volunteering here gave me a sense of purpose. The kids are amazing and the team is so supportive!',
                    date: 'June 12, 2025'
                  },
                  {
                    name: 'Rahul Verma',
                    message: 'A life-changing experience! Teaching underprivileged children made me realize how much impact small efforts can have.',
                    date: 'May 28, 2025'
                  },
                  {
                    name: 'Sneha Kapoor',
                    message: 'Loved the environment and energy! I contributed to the animal welfare drive and it felt incredible.',
                    date: 'April 10, 2025'
                  }
                ].map((feedback, idx) => (
                  <Col md={4} className="mb-4" key={idx}>
                    <div className="p-3 border rounded shadow-sm bg-white h-100">
                      <h6 className="fw-bold">{feedback.name}</h6>
                      <p className="text-muted" style={{ fontSize: "0.9rem" }}>{feedback.date}</p>
                      <p>{feedback.message}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </>
          )}

      </Container>
    </>
  );
};

export default Volunteer;
