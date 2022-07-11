import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Carrito from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  CarritoContextProvider  from "./components/contexts/CartContext";

function App() {
  return (
    <CarritoContextProvider>
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
    </CarritoContextProvider>
    
  );
}

export default App;
