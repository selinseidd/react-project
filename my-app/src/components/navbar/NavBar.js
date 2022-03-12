import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTheme } from '../../ThemeContextProvider';
import Toggle from './Toggle';

function NavBar() {

    const [theme] = useTheme();

    return (
        <Navbar bg={theme ? 'light' : 'dark'}
            variant={theme ? 'light' : 'dark'}
            expand="lg">
            <Container>
                <Navbar.Brand href="#home">BookStore</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link href="/">Начало</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/books">
                        <Nav.Link href="/books">Книги</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contacts">
                        <Nav.Link href="/contacts">Контакти</Nav.Link>
                    </LinkContainer>


                </Nav>
                <Toggle />
            </Container>
        </Navbar>
    )
}
export default NavBar;