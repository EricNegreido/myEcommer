import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import data from './MOCK_DATA.json'
import { NavLink } from 'react-router-dom';

const category = data.map(product => product.categoria);
const setCategory = new Set(category);

export const NavBar = () => {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        
        <Container>
          <Navbar.Brand ><NavLink to={`/`} className="nav-link"> My ecoomerce </NavLink> </Navbar.Brand>
          <Nav className="me-auto"> {[...setCategory ].map(item => (
            <NavLink  key={item} className="nav-link" to={`/category/${item}`}> {item}</NavLink>

          ))}
          </Nav>
        
        </Container>
        <CartWidget></CartWidget>
      </Navbar>
      </>
  );
}