import { Link } from "react-router-dom";
import NavLogo from "../../src/Images/nav-logo.png";
import NavWhiteLogo from "../../src/Images/daraz-white-nav-logo.png";
import languageLogo from "../../src/Icons/internet.png";
import cartImg from "../../src/Icons/icons8-cart-24.png";
import userIcon from "../../src/Icons/user.png";
const Navbar = () => {
  return (
    <div className="nav pt-0 d-block w-100 pb-3">
      <div className="w-75 m-auto">
        <div className="hero d-flex justify-content-between">
          <div className="d-flex gap-4">
            <Link
              to="#"
              className="navbar-links text-decoration-none text-dark"
            >
              Become a Seller
            </Link>
            <Link
              to="#"
              className="navbar-links text-decoration-none text-dark"
            >
              Payments & Recharge
            </Link>
            <Link
              to="#"
              className="navbar-links text-decoration-none text-dark"
            >
              Help & Support
            </Link>
            <Link
              to="#"
              className="navbar-links text-decoration-none text-dark"
            >
              Daraz Logistics Partner
            </Link>
          </div>
          <div className="d-flex align-items-center bg-dark bg-opacity-25 p-1 rounded-2 cursor-pointer">
            <img src={NavLogo} alt="" id="nav-daraz-logo" />
            <span className="mx-2 app-discount text-light">
              Save More on App
            </span>
          </div>
        </div>
        <div className="nav-section d-flex gap-4 align-items-center">
          <Link to="/">
            <img src={NavWhiteLogo} id="nav-daraz-white-logo" alt="" />
          </Link>
          <form action="#" className="w-100">
            <input
              onClick={() => alert("Work On Progress ! ")}
              type="text"
              className="w-100 px-3 py-2 border"
              id="nav-search-input"
              placeholder="Search in Daraz"
            />
          </form>
          <div className="d-flex gap-4 align-items-center">
            <Link
              to="/login"
              className="login-link text-decoration-none d-flex align-items-center gap-2"
            >
              <img src={userIcon} alt="" id="nav-user-icon" />

              <span> Login</span>
            </Link>
            <p className="border-y bg-light"></p>
            <Link to="/signup" className="signup-link text-decoration-none">
              <span>Signup</span>
            </Link>
            <div
              className="d-flex align-items-center gap-1 cursor-pointer"
              onClick={() => alert("Work On Progress ! ")}
            >
              <img src={languageLogo} alt="" id="language-logo" />
              <span id="language">EN</span>
            </div>
            <Link to="/cart">
              <img src={cartImg} alt="" id="nav-cart-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
