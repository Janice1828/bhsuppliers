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
import Orders from "./admin/pages/Orders";
import Cancelledorders from "./admin/pages/Cancelledorders";
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
        <Route Component={Dashboard} path="/admin/dashboard" />
        <Route Component={Users} path="/admin/customers" />
        <Route Component={Product} path="/admin/product" />
        <Route Component={Category} path="/admin/category" />
        <Route Component={Brand} path="/admin/brand" />
        <Route Component={Orders} path="/admin/orders" />
        <Route Component={Cancelledorders} path="/admin/cancel-order" />
      </Routes>
    </>
  );
}

export default App;
