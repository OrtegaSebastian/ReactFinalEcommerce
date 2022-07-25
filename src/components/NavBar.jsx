
import { Nav, Menu,NavBarLink  } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'
import { UsarCarritoContext } from './contexts/CartContext';





const NavBar = () =>  {
  const {IconCarrito, Carrito} = UsarCarritoContext()  

  return (
    <Nav>
      <NavBarLink to="/Cart">
      
      <CartWidget></CartWidget>
      {Carrito.lenght < 1 ? '' : <p> {IconCarrito()} </p>}
      </NavBarLink>
      <Menu>
      
        <NavBarLink to="/">INICIO</NavBarLink>

        <NavBarLink to="/categoria/almacen">ALMACEN</NavBarLink>

        <NavBarLink to="/categoria/panaderia">PANADERIA</NavBarLink>

        <NavBarLink to="/categoria/ferreteria">FERRETERIA</NavBarLink>

        <NavBarLink to="/categoria/verduleria">VERDULERIA</NavBarLink>

        
    </Menu>
    </Nav>
  )
}

export default NavBar