import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { ToastContext } from '../../context/ToastContext';

const HeroSec = () => {
  const { user, logout } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('redirectAfterLogin');
    setToast({ show: true, message: 'Logged out successfully' });
    navigate('/');
  };

  return (
    <>
      <Navbar className="border-bottom" style={{ minHeight: '40px', padding: '2px 0' }}>
        <Container fluid className="d-flex justify-content-between align-items-center px-2" style={{ minHeight: '20px' }}>
          <div className="d-flex align-items-center text-black" style={{ fontSize: '14px' }}>
            <img
              alt="Mail"
              src="https://logodix.com/logo/1072537.png"
              width="30"
              height="16"
              className="me-2"
            />
            <Link to="/contact" className="text-black text-decoration-none">
              careconnw@gmail.com
            </Link>
          </div>

        <Nav className="ms-auto d-flex align-items-center gap-2 flex-nowrap">
          {!user ? (
            <>
              <Nav.Link as={Link} to="/login" className="p-0">
                <Button
                  className="fw-semibold px-2 py-1"
                  style={{
                    fontSize: '12px',
                    backgroundColor: 'black',
                    whiteSpace: 'nowrap',
                     border: 'none',
                  }}
                >
                  Login
                </Button>
              </Nav.Link>
            </>
          ) : (
            <>
            <Link to={"/dashboard"} >
              <span
                className="fw-semibold text-dark d-none d-sm-inline"
                style={{ fontSize: '13px' }}
              >
                Hi, {user.name.split(' ')[0]}
              </span>
              </Link>
              <Button
                variant="outline-danger"
                className="fw-semibold px-2 py-1"
                style={{ fontSize: '12px', whiteSpace: 'nowrap', border: 'none'}}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
          <Nav.Link as={Link} to="/volunteer" className="p-0">
            <Button
              className="text-white fw-semibold px-2 py-1"
              style={{
                fontSize: '12px',
                backgroundColor: 'black',
                border: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Donate
            </Button>
          </Nav.Link>
        </Nav>


        </Container>
      </Navbar>

      {/* Main Navigation */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
            <img
              alt="logo"
              src="https://th.bing.com/th/id/OIP.XwYFe07ZN-pBCkhp9jYIIgHaHa?pid=ImgDet&rs=1"
              width="40"
              height="40"
              className="me-2"
            />
            <span
              style={{
                background: 'linear-gradient(to right, #4caf50, #2196f3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              CareConnect Network
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center" style={{fontSize: '18px'}} >
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
              <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeroSec;
