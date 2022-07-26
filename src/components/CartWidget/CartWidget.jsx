//logo de compras BiCart
import {React, useContext} from 'react'
import { BsCartFill } from 'react-icons/bs'
import { CarritoContext } from "../contexts/CartContext";



const CartWidget = () =>{

    const {IconCarrito} = useContext(CarritoContext)
    return(
        <div>{IconCarrito()<1?"":<p style={{color:"green"}}>{IconCarrito()}</p> }<BsCartFill/></div>
    )

}

export default CartWidget