import * as React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.scss';

function Header(props) {
  //console.log("log:",props.siteConfig.Top_Menu)
  //const [theArray, setTheArray] = useState([]);
  const defaultMenu = "Root";
  const childMenuList = [];
  const dummyArray = [defaultMenu];
  /*if(props.siteConfig.Top_Menu) {
    props.siteConfig.Top_Menu.map((menu, index) => {
      var obj = {'name':menu?.Menu?.Name,'link':menu?.Menu?.Menu_Link};
      var m = menu?.Menu?.Parent_Menu?.Name;      
      if(!dummyArray.includes(m)) {
        dummyArray.push(m);
        childMenuList[m] = [];
        //console.log("log:",menulist)
      }
      if(childMenuList[m]) {
        //dummyArray.push(menu?.Menu?.Name);
        childMenuList[m].push(obj);
      }            
    });
    dummyArray.splice(0, 1)
  }
  console.log("log:",dummyArray)*/
  console.log("log:",props.menuLists)
  return (
    <Navbar expand="lg" className="navbar" variant="dark" fixed="top">
    <Container fluid>
      <Navbar.Brand href="/"><Image src={props?.siteConfig?.Logo?.file?.publicURL} /></Navbar.Brand>
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
                        <Nav.Link class="navbar-a" href={menulist?.Menu_Link}>{menulist?.Name}</Nav.Link>
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