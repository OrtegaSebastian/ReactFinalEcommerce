import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const {id} = useParams()

  useEffect(() => {

    const db = getFirestore();
    const queryCollection = collection(db, "items");

    getDocs(id?query(
      queryCollection, where('categoria', '==', id))
      :queryCollection)
      .then((resp) =>
        setProductos(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setCargando(true));
  },[id]);

  return (
    <div>
      {!cargando ? <p>...Cargando</p> : <ItemList productos={productos}  />  }
    </div>
  );
};

export default ItemListContainer;
