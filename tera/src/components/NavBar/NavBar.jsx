import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Widget from "../Widget/Widget";


export default function NavBar({componenteContainer}) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">AirCaption</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Drones</Nav.Link>
              <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Baterias</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Helices</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Gimbals</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Todo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button className="disabled border-0" variant="outline-dark">
                <Widget />
              </Button>
              <Button variant="outline-dark">Carrito</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
   
  );
};
