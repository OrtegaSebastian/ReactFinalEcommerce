import {  CarritoContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
import CarritoItem from "./CartItem";
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom";
import { getFirestore,addDoc, collection } from "firebase/firestore";




const Carrito = () => {
  
  const { Carrito , VaciarCarrito, PrecioTotal, IconCarrito } = useContext( CarritoContext);
  
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });



  async function generarOrden (e){
  e.preventDefault() 
  let orden = {}


  orden.comprador = datosFormulario
  orden.total = PrecioTotal()

  orden.items = Carrito.map((carritoItem) => {

    const id = carritoItem.item.id
    const nombre = carritoItem.item.nombre
    const precio = carritoItem.item.precio * carritoItem.cantidad
    
    return { id, nombre, precio }

  })  

    console.log(orden)
    const db = getFirestore()
    const queryCollection = collection(db, "ordenes") 
    
    const pedido = addDoc(queryCollection, orden)
    pedido.then((resp)=>{
      alert("usted ha comprado con exito: " + resp.id)})
      .catch((error)=>{console.log(error)})
      .finally((resp)=>{VaciarCarrito()
      })
  }
    const handleChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.nombre]: e.target.value,
    })
  }
  
  return (
    <div style={{margin:("30px","50px","50px","50px"), className="col-md6"}}>
    {Carrito.length < 1 ? (
     <p>Carrito vacio</p>
        <Link to={"/"}>
        <button className="btn btn-outline-primary">Seguir Comprando</button>
        </Link>
      }
     
    ) : (
       Carrito.map((producto) => 
        <CarritoItem key={producto.item.id} producto={producto.item} cantidad={producto.cantidad}/>)
       
    <button  className="btn btn-outline-primary"  onClick={generarOrden} >Terminar Compra</button>    
    </div>
    <button onClick={VaciarCarrito} className="btn btn-outline-danger"> Borrar carrito</button>
    <p>El precio total de los productos es {PrecioTotal()} </p>
    {IconCarrito() < 1 ? 
    <p> </p>
    :<p>La cantidad total del carrito es {IconCarrito()}</p>
    }
    <div className="form">
            <h4>Please, complete this form</h4>
            <Form onSubmit={generarOrden}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required={true}
                  id="nombre"
                  name="nombre"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="NumeroTelefono"
                  onChange={handleChange}
                  required={true}
                  id="NumeroTelefono"
                  name="NumeroTelefono"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo"
                  onChange={handleChange}
                  required={true}
                  id="correo"
                  name="correo"
                />
              </Form.Group>

              <Button variant="success" size='sm' type="submit">
                Confirm order
              </Button>
            </Form>
          </div>
        </div>
      </div>
      </>
      )}
  

export default Carrito;