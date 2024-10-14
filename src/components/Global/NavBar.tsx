import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                {/* <Navbar.Brand href="/">Integrify</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/budget-app">Budget App</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar