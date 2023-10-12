import * as React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {
  return (
    <Navbar expand="lg" className="navbar" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">{props.siteName}</Navbar.Brand>
        {props.menuLists &&
        <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              props.menuLists.map((menulist, index) => (                
                <>                
                {menulist?.Menu_Link &&
                  <>
                  <Nav.Link class="navbar-a" href={menulist?.Menu_Link}>{menulist?.Menu_Name}</Nav.Link>
                  </>
                }
                </>
              ))
            }
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">                
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        </>
        }
        
      </Container>
    </Navbar>
  );
}

export default Header;