import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardFooter from 'react-bootstrap/CardFooter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

      <CardFooter className="bg-dark text-light pt-5">
        <Container>
          <Row>

            <Col lg={6} className="mb-4">
              <Link to="/" className="text-light text-decoration-none pointer-hover">
                <h4 className="fw-bold">CareConnect Network</h4>
              </Link>
              <p className="text-light">
                CareConnect is committed to empowering lives through meaningful community initiatives.
                Stay connected with us on social platforms for the latest updates.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="pointer-hover">
                  <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/instagram.svg"
                    alt="Instagram"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="pointer-hover">
                  <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/facebook.svg"
                    alt="Facebook"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="pointer-hover">
                  <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/twitter.svg"
                    alt="Twitter"
                    width="24"
                    height="24"
                  />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="pointer-hover">
                  <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/linkedin.svg"
                    alt="LinkedIn"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </Col>

            {/* Our Projects */}
            <Col lg={2} className="mb-4">
              <Link to="/projects" className="text-light text-decoration-none pointer-hover">
                <h5 className="fw-semibold">Our Projects</h5>
              </Link>
              <p className="text-light">Discover the impact of our community-driven programs.</p>
            </Col>

            {/* Get Involved */}
            <Col lg={2} className="mb-4">
              <Link to="/volunteer" className="text-light text-decoration-none pointer-hover">
                <h5 className="fw-semibold">Get Involved</h5>
              </Link>
              <p className="text-light">Join our cause as a volunteer or contributor.</p>
            </Col>

            {/* Contact Us */}
            <Col lg={2} className="mb-4">
              <Link to="/contact" className="text-light text-decoration-none pointer-hover">
                <h5 className="fw-semibold">Contact Us</h5>
              </Link>
              <p className="text-light">Reach out for collaborations, partnerships, or queries.</p>
            </Col>
          </Row>
        </Container>
      </CardFooter>

      {/* Copyright */}
      <CardFooter className="bg-light text-center py-2 border-top">
        <p className="text-muted m-0 small">
          © 2025 CareConnect Network.
        </p>
      </CardFooter>
    </>
  );
};

export default Footer;
