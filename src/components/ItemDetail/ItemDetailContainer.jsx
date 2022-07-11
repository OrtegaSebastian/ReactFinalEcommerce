import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productoFiltrado = doc(db, "items", id);

    getDoc(productoFiltrado)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(setCargando(false));
  }, [id]);

  return (
    <>
      {
      cargando?
      <h3>Cargando</h3>
      :<ItemDetail item={producto} />
      }
    </>
  );
};
export default ItemDetailContainer;
