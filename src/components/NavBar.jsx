import "../css/Navbar.css"
import CartWidget from "./CartWidget"
// import logo from '../assets/react.svg'

const Navbar = () => {
    return(
        <nav className="nav-container">
            {/* imagen en carpeta public */}
           <img src="../VicBooks.jpeg" alt='logo' style={{width:'8rem'}}/>
           {/* imagen dentro de src */}
           {/* <img src={logo} alt='logo'/> */}
            <div className="a-container">
                <a style={{fontWeight:"bold", textDecoration:'none', color:'black'}} href="">Nuevos</a>
                <a style={{fontWeight:"bold", textDecoration:'none', color:'black'}} href="">Ofertas</a>
                <a style={{fontWeight:"bold", textDecoration:'none', color:'black'}} href="">Más Vendidos</a>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar