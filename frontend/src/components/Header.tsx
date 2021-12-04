import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from "../redux/actions/userAction"

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state: any) => state.userLogin)
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed="top">
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              STHEC 2021 Hitachi Solution Prototype
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* Using font awesome for icons */}
              {/* <Link to='/aboutproject'> */}
                <Nav.Link href='/aboutproject'>
                  <i className='fas fa-project-diagram'></i>About This Project
                </Nav.Link>
              {/* </Link> */}
              {/* <Link to='/product'> */}
                <Nav.Link href='/product'>
                  <i className='fas fa-store'></i> Product
                </Nav.Link>
              {/* </Link> */}
              {/* <Link to='/cart'> */}
                <Nav.Link href='/cart'>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              {/* </Link> */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Nav.Link href="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Nav.Link>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href='/login'>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
