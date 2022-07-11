import {  CarritoContext } from "../contexts/CartContext";
import { useContext } from "react";
import CarritoItem from "./CartItem";
import { getFirestore,addDoc, collection } from "firebase/firestore";

const Carrito = () => {
  
  const { carrito , VaciarCarrito, PrecioTotal, IconCarrito } = useContext( CarritoContext);
  
  const generarOrden =()=>{

    const db = getFirestore()
    const queryCollection = collection(db, "ordenes") 
    const total = PrecioTotal()  
    const comprador = {nombre: 'seba', numero:'155333111', email: 'sebastian.ortega@hotmail.com'}
    const orden = {comprador, carrito,total}

    const pedido = addDoc(queryCollection, orden)
    pedido.then((resp)=>{
      alert("usted ha comprado con exito: " + resp.id)})
      .catch((error)=>{console.log(error)})
      .finally((resp)=>{VaciarCarrito()})
  }
    
  return (
    <>
    <div>
    {carrito.length < 1 ? (
        <p>Carrito vacio</p>
    ) : (
        carrito.map((producto) => 
        <CarritoItem key={producto.item.id} producto={producto.item} />)
        )}
     <button  className="btn btn-outline-primary"  onClick={generarOrden} >Terminar Compra</button>    
    </div>
    <button onClick={VaciarCarrito} className="btn btn-outline-danger"> Borrar carrito</button>
    <p>El precio total de los productos es {PrecioTotal()} </p>
    {IconCarrito() < 1 ? 
    <p> </p>
    :<p>La cantidad total del carrito es {IconCarrito()}</p>
    }
    </>
  );
};


export default Carrito;