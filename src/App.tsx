import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={ProductLists} path="/products" />
        <Route Component={Login} path="/login" />
        <Route Component={Signup} path="/signup" />
        <Route Component={ProductDetail} path="/productdetail" />
        <Route Component={Cart} path="/cart" />
      </Routes>
    </>
  );
}

export default App;
