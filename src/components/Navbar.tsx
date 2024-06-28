import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav d-block w-100">
      <div className="hero d-flex justify-content-between">
        <div>
          <Link to="#">Become a Seller</Link>
          <Link to="#">Payments & Recharge</Link>
          <Link to="#">Help & Support</Link>
          <Link to="#">Daraz Logistics Partner</Link>
        </div>
        <div>
          <p>Save More on App</p>
        </div>
      </div>
      <div className="nav-section d-flex justify-content-between">
        <p>Daraz Img</p>
        <form action="#">
          <input type="text" />
        </form>
        <div>
          <Link to="#">Login</Link>
          <Link to="#">Signup</Link>
          <Link to="#">Language</Link>
          <Link to="#">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
