import "../css/NavBar.css"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
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

          </NavDropdown>
          
          <NavDropdown title="Seleccionados" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="seleccionados/clasicos">Clásicos con carácter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="seleccionados/tesoros">Tesoros con historia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="seleccionados/miseleccion">Mi selección</NavDropdown.Item>
              
          </NavDropdown>
          <li><NavLink to="ofertas">Joyas en oferta</NavLink></li>
          <li><NavLink to="novedades">Novedades</NavLink></li>
          <li><NavLink to="nosotros">Sobre Nosotros</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
                    
        </ul>
        
          <div className="cart-icon">
          
          <NavLink to="/cart" style={{textDecoration:'none'}}>
            {/* <i className="fas fa-shopping-cart"></i> */}
            
            <CartWidget/>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbarnew;
