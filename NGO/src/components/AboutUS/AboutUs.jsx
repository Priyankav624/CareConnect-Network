import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const journeyData = [
{
year: '2019',
title: 'CareConnect Launched',
desc: 'Founded with a mission to reach marginalized communities through direct action and grassroots development.',
icon: '🚀'
},
{
year: '2020',
title: 'Pandemic Relief Efforts',
desc: 'Distributed 10,000+ relief kits during COVID-19. Partnered with local health workers for awareness programs.',
icon: '🧼'
},
{
year: '2021',
title: 'Digital Literacy Labs',
desc: 'Launched 5 rural tech labs in Madhya Pradesh and Odisha to teach digital skills to over 1,000 children.',
icon: '💻'
},
{
year: '2023',
title: 'Skill Training for Women',
desc: 'Started tailoring and digital finance training for over 500 women in Bihar and Jharkhand.',
icon: '🧵'
}
];

const AboutUs = () => {
return (
<>
  <section className="text-center py-5 bg-light hero-section">
  <Container>
  <h1 className="display-5 fw-bold">Welcome to <span>CareConnect Network</span></h1>
  <p className="lead text-muted">
      Empowering unheard voices, building digital bridges, and driving sustainable impact across India.
  </p>
  </Container>
  </section>

  <section className="py-5 bg-white border-bottom">
  <Container>
    {/* Mission Section */}
    <Row className="align-items-center mb-5">
      <Col md={6}>
        <img
          src="https://media.istockphoto.com/id/2171791995/photo/volunteers-embracing-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=D9FbFOw4xa88GN625bL_HYn34alFMtK4RVy-Vg1j6_4="
          alt="Mission"
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: '280px', objectFit: 'cover', width: '100%' }}
        />
      </Col>
      <Col md={6}>
        <h3 className="fw-bold text-primary mb-3">Our Mission</h3>
        <p className="text-muted">
          At CareConnect, our mission is to ignite grassroots change by providing sustainable education,
          healthcare, and livelihood opportunities. We believe every individual, regardless of background,
          deserves the right tools to lead an empowered life.
        </p>
        <p className="text-muted">
          Through digital inclusion, community outreach, and capacity building, we work hand-in-hand with underserved
          communities to turn compassion into measurable progress.
        </p>
      </Col>
    </Row>

    {/* Vision Section */}
    <Row className="align-items-center flex-md-row-reverse">
      <Col md={6}>
        <img
          src="https://media.istockphoto.com/id/2004769943/photo/the-concept-of-mutual-assistance-in-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=zOgFemwqrbaYlfMVRF46KwJsB32xCi1XEKyE6aFx-io="
          alt="Vision"
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: '280px', objectFit: 'cover', width: '100%' }}
        />
      </Col>
      <Col md={6}>
        <h3 className="fw-bold text-success mb-3">Our Vision</h3>
        <p className="text-muted">
          We envision a world where opportunity is not dictated by birthplace. A world where rural talent thrives,
          women lead boldly, and children dream fearlessly. CareConnect is committed to breaking cycles of
          generational inequality with scalable, tech-driven impact.
        </p>
        <p className="text-muted">
          Our vision is rooted in humanity and built on innovation, equity, and unwavering commitment to change.
        </p>
      </Col>
    </Row>
  </Container>
</section>


    <section className="py-5 bg-light border-top border-bottom journey-container">
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Journey</h2>
        <div className="horizontal-journey d-flex flex-nowrap overflow-auto gap-4">
          {journeyData.map((step, i) => (
            <div className="journey-card p-4 text-center flex-shrink-0" key={i}>
              <div className="icon mb-3 fs-1">{step.icon}</div>
              <h5 className="fw-bold">{step.year}</h5>
              <h6 className="text-primary">{step.title}</h6>
              <p className="text-muted small">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section className="py-5 bg-white border-bottom">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Voices of Change</h2>
        <Carousel indicators={false}>
          {[
            {
              name: 'Aarti, Rajasthan',
              quote: 'CareConnect helped me restart my education after marriage and rebuild my confidence.'
            },
            {
              name: 'Karan, Mumbai',
              quote: 'As a volunteer, I discovered a deeper purpose. It changed my life too.'
            }
          ].map((t, i) => (
            <Carousel.Item key={i}>
              <Card className="text-center mx-auto shadow" style={{ maxWidth: '600px' }}>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>"{t.quote}"</p>
                    <footer className="blockquote-footer mt-2">{t.name}</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>

    <section className="py-5 text-center bg-light">
      <Container>
        <h2 className="fw-bold mb-3">Join Us in Making a Difference</h2>
        <p className="text-muted mb-4">
          We’re building a movement of changemakers. Be the spark for someone’s tomorrow.
        </p>
        <Button as={Link} to="/volunteer" size="lg" style={{backgroundColor:"black", border: "none"}}>
          Become a Volunteer
        </Button>
      </Container>
    </section>
</>
);
};

export default AboutUs;