import React, { createContext, useState, useContext } from "react";

export const CarritoContext = createContext([]);
export const UsarCarritoContext = () => useContext(CarritoContext)


const CarritoContextProvider = ({ children }) => {
  const [Carrito, setCarrito] = useState([]);
 
  const Intercambiabilidad = ()=>{
    const [inputType, setInputType]= useState('button')
    const handleInter=()=>{
      setInputType('input')
    }  
    return( inputType === 'button')?
      <button handleInter={handleInter}/>
      :
      <inputCount/> 
  }
  const AgregarAlCarrito = (item, cantidad) => {
    let producto = {item, cantidad};
    
    let auxiliarCarrito =[];

    if (EstaEnCarrito(item.id)) {
    
      producto = Carrito.find(e => e.item.id === item.id);
      producto.cantidad += cantidad;
    } else {
      auxiliarCarrito = [producto, ...Carrito]
    }
    setCarrito(auxiliarCarrito)
  };
  

  const DelItem = (id) => {
    const items = Carrito.filter((producto) => producto.item.id !== id);
    setCarrito(items);
    return;
  };
  const IconCarrito = () => {
    return Carrito.reduce((acum, i) => acum + i.cantidad, 0);
  };
  const PrecioTotal = () => {
    return Carrito.reduce((acum, i) => acum + i.cantidad * i.item.precio, 0);
  };
  const VaciarCarrito = () => {
    return setCarrito([]);
  };

  const EstaEnCarrito = (id) => {
    return Carrito && Carrito.some((i) => i.item.id === id);
  };
  return (
    <CarritoContext.Provider
      value={{
        AgregarAlCarrito,
        Carrito,
        VaciarCarrito,
        DelItem,
        PrecioTotal,
        IconCarrito,
        Intercambiabilidad
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
export default CarritoContextProvider;
