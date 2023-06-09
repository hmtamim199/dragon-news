import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { user, logout } = useContext(AuthContext)

  const handleLogoutButton = () => {
    logout()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand > <Link to="/">DRagon news</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All Category</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">

              {
                user?.uid ?
                  <>
                    {user?.displayName}
                    <Button onClick={handleLogoutButton} variant="outline-info">Logout</Button>{' '}
                  </>
                  :
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>

              }


            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ?
                <Image
                  roundedCircle
                  src={user?.photoURL}
                  style={{ height: '30px' }}
                ></Image>
                :
                <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
