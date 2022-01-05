import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, userLogOut } = useAuth();
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Logo_07018bb2-eaf1-4479-a80d-98c3a1c9187b_large.png?v=1610088701"
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <InputGroup className="m-3 w-100 rounded-pill">
              <FormControl
                className=""
                placeholder="Product Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className="" variant="dark" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/collections">
              Collection
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            {!user.email && (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
            {!user.email && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link as={Link} to="/login">
                {user.displayName}
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link as={Link} to="/dashboard">
                dashboard
              </Nav.Link>
            )}

            {user.email && (
              <button
                onClick={userLogOut}
                className="btn btn-danger rounded-pill"
                as={Link}
                to="/login"
              >
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
