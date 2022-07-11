import   { CarritoContext}   from "../contexts/CartContext";
import Contar from "../ItemCount/ItemCount"; 
import{React, useContext} from "react";


const ItemDetail = ({ item }) => {
  const { nombre, marca, pictureUrl, precio, stock } = item;
  
  const {AgregarAlCarrito} = useContext( CarritoContext);
  
  const onAdd = (cantidad) => {
    
    AgregarAlCarrito(item,cantidad );
  };



  return (
    <>
      <div style={{margin:("30px","50px","50px","50px") }} className="col-12">
        <h2>{nombre}</h2>
        <h3>{marca}</h3>
        <img src={pictureUrl} alt={nombre}  style={{margin:("30px","50px","50px","50px") }} className="col-4"/>
        <h4>Precio ${precio}</h4>
      <Contar stock={stock}  inicial={1} onAdd={onAdd} />
        <p>Unidades disponibles = {stock}</p>
      </div>
    </>
  );
};

export default ItemDetail;
