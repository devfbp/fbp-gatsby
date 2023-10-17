import * as React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.scss';

function Header(props) {
  const defaultMenu = "Root";
  const childMenuList = [];
  const dummyArray = [defaultMenu];
  if(props.siteConfig.Top_Menu) {
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
  console.log("log:",dummyArray)
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/"><Image src={props?.siteConfig?.Logo?.file?.publicURL} /></Navbar.Brand>
          <Nav className="me-auto">
          {props.siteConfig.Top_Menu.map((menulist, index) => (
              <>
                {menulist?.Menu?.Parent_Menu?.Name===defaultMenu &&  !dummyArray.includes(menulist?.Menu?.Name) &&
                    <a className="navbar-a" href={menulist?.Menu?.Menu_Link}>{menulist?.Menu?.Name}</a>                         
                }
                {menulist?.Menu && dummyArray.includes(menulist?.Menu?.Name) &&
                  <>                           
                    <NavDropdown title={menulist?.Menu?.Name}>
                      {childMenuList[menulist?.Menu?.Name].map((childmenu, cindex) => (
                        <a className="navbar-a" href={childmenu.link}>{childmenu.name}</a>
                      ))}
                    </NavDropdown>
                  </>
                }
              </>
            ))
          }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;