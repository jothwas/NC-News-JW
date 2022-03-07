import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AccountCircleSharp, CellTowerOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <Navbar variant="dark" className="color-nav">
      <Container>
        <Navbar.Brand href="/">
          <CellTowerOutlined className="nav-icon-margin" />
          readdit: a nc news app
        </Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link href="#home">
            <span className="nav-menuText-colour">all articles</span>
          </Nav.Link>
          <Nav.Link href="#features">
            <span className="nav-menuText-colour">coding</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className="nav-menuText-colour">football</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className="nav-menuText-colour">cooking</span>
          </Nav.Link>
          <NavDropdown title="More Topics" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Topic 1</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Topic 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Navbar.Brand href="#home">
            <AccountCircleSharp className="nav-icon-margin" />
            login
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
