import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export function Header( props ) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          Hello Website
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}