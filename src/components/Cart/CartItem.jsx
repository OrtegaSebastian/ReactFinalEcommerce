import { useContext } from 'react'
import{ CarritoContext} from "../contexts/CartContext";

const CarritoItem = ({producto}) => {
    const {DelItem} = useContext( CarritoContext);
    const {nombre, precio,id,pictureUrl}= producto;
    return (
    <div style={{margin:("30px","50px","50px","50px") }} className="col-md6" >
        <h4>Producto = {nombre}</h4>
        <img src={pictureUrl} alt='producto' style={{margin:("30px","50px","50px","50px") }} className="col-2"/>

        <h4>Precio = {precio}</h4>
        <button onClick={()=> DelItem(id)}>borrar item</button>
    </div>
    )
}

export default CarritoItem