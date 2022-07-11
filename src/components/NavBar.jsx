import React from 'react'
import { Nav, Menu,NavBarLink  } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'




const NavBar = () => {
  return (
    <Nav>
      <NavBarLink to="/Cart">
        <CartWidget></CartWidget>
      </NavBarLink>
      <Menu>
        <NavBarLink to="/">INICIO</NavBarLink>

        <NavBarLink to="/categoria/almacen">ALMACEN</NavBarLink>

        <NavBarLink to="/categoria/panaderia">PANADERIA</NavBarLink>

        <NavBarLink to="/categoria/ferreteria">FERRETERIA</NavBarLink>

        <NavBarLink to="/categoria/verduleria">VERDULERIA</NavBarLink>

    </Menu>
    </Nav>
  );
}

export default NavBar