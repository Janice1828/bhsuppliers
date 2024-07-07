import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={ProductLists} path="/products" />
      </Routes>
    </>
  );
}

export default App;
