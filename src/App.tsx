import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={ProductLists} path="/products" />
        <Route Component={Login} path="/login" />
        <Route Component={Signup} path="/signup" />
      </Routes>
    </>
  );
}

export default App;
