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
  if (props.siteConfig.Top_Menu) {
    props.siteConfig.Top_Menu.map((menu, index) => {
      var obj = { 'name': menu?.Menu?.Name, 'link': menu?.Menu?.Menu_Link };
      var m = menu?.Menu?.Parent_Menu?.Name;
      if (!dummyArray.includes(m)) {
        dummyArray.push(m);
        childMenuList[m] = [];
        //console.log("log:",menulist)
      }
      if (childMenuList[m]) {
        //dummyArray.push(menu?.Menu?.Name);
        childMenuList[m].push(obj);
      }
    });
    dummyArray.splice(0, 1)
  }
  console.log("log:", dummyArray)
  //console.log("log:",props.menuLists)
  return (
    <Navbar expand="lg" className="navbar" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/"><Image src={props?.siteConfig?.Logo?.file?.publicURL} /></Navbar.Brand>
        {props.siteConfig.Top_Menu &&
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {
                  props.siteConfig.Top_Menu.map((menulist, index) => (
                    <>
                      {menulist?.Menu?.Parent_Menu?.Name === defaultMenu && !dummyArray.includes(menulist?.Menu?.Name) &&
                        <Nav.Link class="navbar-a" href={menulist?.Menu?.Menu_Link}>{menulist?.Menu?.Name}</Nav.Link>
                      }
                      {menulist?.Menu && dummyArray.includes(menulist?.Menu?.Name) &&
                        <>
                          <NavDropdown title={menulist?.Menu?.Name}>
                            {childMenuList[menulist?.Menu?.Name].map((childmenu, cindex) => (
                              <NavDropdown.Item href={childmenu.link}>{childmenu.name}</NavDropdown.Item>
                            ))}
                          </NavDropdown>
                        </>
                      }
                    </>
                  ))
                }
              </Nav>
            </Navbar.Collapse>
          </>
        }
        {props.siteConfig.Contacts && props.siteConfig.Contacts.map((contact, index) => (
          <>
            <div className="d-flex">
              <a href={contact?.Link} className="navbar-icon"><i className={contact?.Icon}></i></a>
            </div>
          </>
        ))
        }

      </Container>
    </Navbar>
  );
}

export default Header;