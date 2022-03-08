import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AccountCircleSharp, CellTowerOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
      <Container>
        <Navbar.Brand href="/">
          <CellTowerOutlined className="nav-icon-margin" />
          // readdit: a nc news app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="all">all articles</Nav.Link>
            <Nav.Link href="coding">coding</Nav.Link>
            <Nav.Link href="football">football</Nav.Link>
            <Nav.Link href="cooking">cooking</Nav.Link>
            <NavDropdown
              title="more"
              id="collasible-nav-dropdown"
            ></NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <AccountCircleSharp className="nav-icon-margin" />
              // login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
