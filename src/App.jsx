import "./styles/theme.css";
import "./styles/global.css";
// import { ProductList } from "./components/ProductList";
// import { Header } from "./components/Header";
// import { Route, Routes } from "react-router";
// import { Cart } from "./components/Cart";
// import { CartProvider } from "./service/CartContext";
import CadastrarUsuarios  from "./components/CadastrarUsuarios";
import CadastrarProdutos from "./components/CadastrarProdutos";
import FazerLogin from "./components/FazerLogin";


export default function App() {

  return (
    //React Fragment
    <>
    <FazerLogin />
    <CadastrarUsuarios />
    {/* <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/produtos" element={<TelaProdutos />} />
      </Routes>
    </CartProvider> */}
    <CadastrarProdutos />
    </>
  );
}