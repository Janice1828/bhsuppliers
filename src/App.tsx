import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Product from "./admin/pages/Product";
import Category from "./admin/pages/Category";
import Brand from "./admin/pages/Brand";
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
        <Route Component={Checkout} path="/checkout" />
        <Route Component={Dashboard} path="/admin" />
        <Route Component={Users} path="/customers" />
        <Route Component={Product} path="/product" />
        <Route Component={Category} path="/category" />
        <Route Component={Brand} path="/brand" />
      </Routes>
    </>
  );
}

export default App;
