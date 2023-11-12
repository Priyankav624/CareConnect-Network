import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VolunteerForm from './VolunteerForm';
import Donation from './Donation';

const Volunteer = () => {
  
  return (
    <>
    <Container style={{marginTop:"50px"}}>
      <h2 className="text-center mb-4">To a new journey.</h2>
      <Row className="mb-5" style={{marginTop:"50px"}}>
        <Col md={6}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
          alt="First slide"
        />
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
            <p className="text-center">
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
    <Container style={{marginTop:"50px"}} className='text-center'> 
        <img 
          src='https://www.righttolive.org/resources/Right%20to%20Live/Volunteer/IndividualVolunteer.jpeg'
          alt ='Volunteer'
          style={{height:"300px", width:"400px"}}
        ></img>
          <br /><br />
    <VolunteerForm />
    </Container>
    <Donation />
    </>
  );
};

export default Volunteer;
