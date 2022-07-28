import { CarritoContext } from "../contexts/CartContext";
import Contar from "../ItemCount/ItemCount";
import { React, useContext, useState } from "react";
import {Link} from "react-router-dom"

const ItemDetail = ({ item }) => {
  const { nombre, marca, pictureUrl, precio, stock } = item;
  const [ocultar, setOcultar] = useState(false);

  const { AgregarAlCarrito } = useContext(CarritoContext);

  const onAdd = (cantidad) => {
    AgregarAlCarrito(item, cantidad);
    setOcultar(true);
  };

  return (
    <>
      <div
        style={{ margin: ("30px", "50px", "50px", "50px") }}
        className="col-6"
      >
        <h2>{nombre}</h2>
        <h3>{marca}</h3>
        <img
          src={pictureUrl}
          alt={nombre}
          style={{ margin: ("30px", "50px", "50px", "50px") }}
          className="col-4"
        />
        <h4>Precio ${precio}</h4>
        <p>Unidades disponibles = {stock}</p>
        {!ocultar ? (
          <Contar stock={stock} inicial={1} onAdd={onAdd} />
        ) : (
          <div>
             <button type="button" className="btn btn-outline-dark" > <Link to="/cart">Ir al carrito</Link>    </button>
            <button type="button" className="btn btn-outline-dark" ><Link to="/">Seguir Comprando </Link></button>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
