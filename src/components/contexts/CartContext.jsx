import { createContext, useState } from "react";

export const CarritoContext = createContext([]);

const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const AgregarAlCarrito = (item, cantidad) => {
    let producto = {item, cantidad};

    let auxiliarCarrito =[];

    if (EstaEnCarrito(item.id)) {
      producto = carrito.find(e => e.item.id === item.id);
      producto.cantidad += cantidad;
    } else {
      auxiliarCarrito = [producto, ...carrito]
    }
    setCarrito(auxiliarCarrito)
  };
  

  const DelItem = (id) => {
    const items = carrito.filter((producto) => producto.item.id !== id);
    setCarrito(items);
    return;
  };
  const IconCarrito = () => {
    return carrito.reduce((acum, i) => acum + i.cantidad, 0);
  };
  const PrecioTotal = () => {
    return carrito.reduce((acum, i) => acum + i.cantidad * i.item.precio, 0);
  };
  const VaciarCarrito = () => {
    return setCarrito([]);
  };

  const EstaEnCarrito = (id) => {
    return carrito && carrito.some((i) => i.item.id === id);
  };
  return (
    <CarritoContext.Provider
      value={{
        AgregarAlCarrito,
        carrito,
        VaciarCarrito,
        DelItem,
        PrecioTotal,
        IconCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
export default CarritoContextProvider;
