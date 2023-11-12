import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VolunteerForm from './VolunteerForm';
import Donation from './Donation';

const Volunteer = () => {
  
  return (
    <>
    <Container style={{marginTop:"100px"}}>
      <h2 className="text-center mb-4">To a new journey.</h2>
      <h6 className='text-center mb-4'>
        Volunteering with us allows you to bring about change at the grassroots level. We welcome volunteers from all walks of life. Whatever your interest: be it education, environment, animal welfare or something else, there’s an opportunity to match.
        Being a volunteer allows you to elevate your work to an adventure, a journey to a better tomorrow. So, where do you want to go?</h6>

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
          Volunteer with NGO dedicated to transforming the education of underprivileged children to make a 
          difference in the community. Go beyond monetary assistance and into their lives, bringing change 
          with your own hands and experiencing the fulfillment of your commitment to society.
          At Bhumi, we urge everyone to volunteer and make the change they wish to see in the world. You may 
          achieve change at the grassroots level by volunteering for NGO like us. We urge people from all walks of life to volunteer in 
          NGO based on their interests, whether it is education, the environment, or animal welfare since we have opportunities in these areas available for them.
        </p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
        <h2>Options for Donations</h2>
          <p>
            Choose from the following donation options and make a positive impact:
          </p>
          <ul>
            <li>$10 - Provides a meal for a family in need</li>
            <li>$25 - Supports education for a child for a month</li>
            <li>$50 - Contributes to healthcare services for the underserved</li>
            <li>$100 - Helps in disaster relief efforts</li>
          </ul>
        </Col>

        <Col>
          <VolunteerForm />
        </Col>
      </Row>
    </Container>
    <Donation />
    </>
  );
};

export default Volunteer;
