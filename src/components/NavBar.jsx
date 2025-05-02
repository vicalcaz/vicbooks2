import "../css/Navbar.css"
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

          </NavDropdown>
          
          <NavDropdown title="Seleccionados" id="basic-nav-dropdown">
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
          
        </ul>
        
        <CartWidget/>
      </nav>
    </header>
  );
};

export default Navbar;
