import { Component } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './NavigationBar.css';

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          {/* <Navbar.Brand href="#home">SourcERA</Navbar.Brand>
          <LinkContainer to={'/'}>
              <Navbar.Brand>
                <span style={{color:"orange"}}>sourcERA</span>
              </Navbar.Brand>
            </LinkContainer> */}
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <img
                src="logo.jpg"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <span style={{ color: "orange" }}>SourcERA</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={"/about-us"}>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Classroom Trainings"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/civil-autocad"}>
                    <Nav.Link className="link">AutoCAD Civil</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/mech-autocad"}>
                    <Nav.Link className="link">AutoCAD Mechanical</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/electrical-autocad"}>
                    <Nav.Link className="link">AutoCAD Electrical</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/mech-catia"}>
                    <Nav.Link className="link">CATIA</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/civil-etabs"}>
                    <Nav.Link className="link">ETABS</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/electrical-nxcad"}>
                    <Nav.Link className="link">NX-CAD</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Online Trainings"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/civil-autocad"}>
                    <Nav.Link className="link">AutoCAD Civil</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/mech-autocad"}>
                    <Nav.Link className="link">AutoCAD Mechanical</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/electrical-autocad"}>
                    <Nav.Link className="link">AutoCAD Electrical</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/mech-catia"}>
                    <Nav.Link className="link">CATIA</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/it-ccna"}>
                    <Nav.Link className="link">CCNA</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/civil-etabs"}>
                    <Nav.Link className="link">ETABS</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/electrical-nxcad"}>
                    <Nav.Link className="link">NXCAD</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item className="linkitem">
                  <LinkContainer to={"/it-testing"}>
                    <Nav.Link className="link">Software Testing</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to={"/signup"}>
                <Nav.Link className="link2">
                  <Button variant="primary">Student Login</Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
              {/* <LinkContainer to={"/student-portal"}>
                <Nav.Link>
                  <Button variant="primary">Student Portal</Button>
                </Nav.Link>
              </LinkContainer> */}
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
