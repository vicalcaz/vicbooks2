import "../css/Navbar.css"
<<<<<<< HEAD
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbarnew = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo"> 
          <Navbar.Brand as={NavLink} to = "/">
             <img src='../VicBooks.jpeg' alt='logo' style={{width:'8rem'}}/>
          </Navbar.Brand>   
        </div>

        <ul className="nav-links">
           
          <li>
          <NavLink to="/home">Inicio</NavLink>
          </li>
          
              <NavDropdown title="Categorías" id="basic-nav-dropdown"> 
              <NavDropdown.Item as={NavLink} to="/category/ficcion">Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/noficcion">No Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/infantil">Infantil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/juvenil">Juvenil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/cienciaficcion">Ciencia Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/novela">Novela</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/terror">Terror</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/autoayuda">Autoayuda</NavDropdown.Item>
=======
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
        <img src='../VicBooks.jpeg' alt='logo' style={{width:'8rem'}}/>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.2">No Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.3">Infantil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">Juvenil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">Ciencia Ficción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">Novela</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">Terror</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">Autoayuda</NavDropdown.Item>
>>>>>>> d6af2a61ec33fbaddb1ac016bf4c7f3e90127510

          </NavDropdown>
          
          <NavDropdown title="Seleccionados" id="basic-nav-dropdown">
<<<<<<< HEAD
              <NavDropdown.Item as={NavLink} to="seleccionados/clasicos">Clásicos con carácter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="seleccionados/tesoros">Tesoros con historia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="seleccionados/miseleccion">Mi selección</NavDropdown.Item>
              
          </NavDropdown>
          <li><NavLink to="ofertas">Joyas en oferta</NavLink></li>
          <li><NavLink to="novedades">Novedades</NavLink></li>
          <li><NavLink to="nosotros">Sobre Nosotros</NavLink></li>
          <li><NavLink to="contacto">Contacto</NavLink></li>
                    
=======
              <NavDropdown.Item href="#action/3.1">Clásicos con carácter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Tesoros con historia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Mi selección</NavDropdown.Item>
              
          </NavDropdown>
          
          <li><a href="#ofertas">Joyas en oferta</a></li>
          <li><a href="#novedades">Novedades</a></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
          
>>>>>>> d6af2a61ec33fbaddb1ac016bf4c7f3e90127510
        </ul>
        
        <CartWidget/>
      </nav>
    </header>
  );
};

<<<<<<< HEAD
export default Navbarnew;
=======
export default Navbar;
>>>>>>> d6af2a61ec33fbaddb1ac016bf4c7f3e90127510
