import {  CarritoContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
import CarritoItem from "./CartItem";
import { getFirestore,addDoc, collection } from "firebase/firestore";
import Formulario from "../Formulario/Formulario";
import "./cart.css"

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
  
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    fechaNacimiento: "",    
  });

  const inputs =[
    {
      id:1,
      nombre: "nombre",
      type: "text",
      placeholder: "Nombre",
      error: "El nombre debe contener entre 3 y 15 caracteres",
      label: "Nombre",
      pattern: "^[A-Z-a-z]{3,16}$",
      required: true,
    },
    {
      id:2,
      nombre: "apellido",
      type: "text",
      placeholder: "Apellido",
      error: "El Apellido debe contener entre 3 y 15 caracteres",
      label: "Apellido",
      pattern: "^[A-Z-a-z]{3,16}$",
      required: true,
    },
    {
      id:3,
      nombre: "correo",
      type: "email",
      placeholder: "Correo",
      error: "El correo que ingreso contiene errores",
      label: "Correo",
      required: true,
    },
    {
      id:4,
      nombre: "fechaNacimiento",
      type: "date",
      placeholder: "FechaNacimiento",
      label: "FechaNacimiento"    
    },
  ]


  const handleSubmit =(e)=>{
    e.preventDefault();
    alert("FormularioEnviado")
    window.location.reload()     
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div style={{margin:("30px","50px","50px","50px") }} className="col-md6">
    {carrito.length < 1 ? (
        <h3>Carrito vacio</h3>
    ) : (
        carrito.map((producto) => 
        <CarritoItem key={producto.item.id} producto={producto.item} cantidad={producto.cantidad} />)
        )}
    <button  className="btn btn-success"  onClick={generarOrden} >Terminar Compra</button>    
    
    <button onClick={VaciarCarrito} className="btn btn-outline-danger"> Borrar carrito</button>
    <p>El precio total de los productos es {PrecioTotal()} </p>
    </div>
    {IconCarrito() < 1 ? 
    <p> </p>
    :<div style={{margin:("30px","50px","50px","50px") }} className="col-md6">La cantidad total del carrito es {IconCarrito()}</div>
    
    }
    <form onSubmit={handleSubmit}>
      {inputs.map((input)=>(
    <Formulario key={input.id}
    {...input}
    value={values[input.name]}
    onChange={onChange}
    />
      ))}
    <button >Enviar</button>
    </form>
    </>
  );
};


export default Carrito;