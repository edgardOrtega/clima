import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="link" to="/">
            <nav>Home</nav>
          </Link>
          <Link className="link"  to="/Santiago">
            <nav >Santiago</nav>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
