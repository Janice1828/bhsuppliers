import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Facebook from "../../src/Icons/icons8-facebook-24.png";
import Googleplus from "../../src/Icons/icons8-google-plus-50.png";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container pt-5">
        <div className="login-container-width m-auto m-0">
          <div className="row m-0">
            <h3 className="login-title col-md-6">
              Welcome to Daraz! Please login.
            </h3>
            <div className="d-flex justify-content-end  col-md-6">
              <span className="login-register-link">
                New member?{" "}
                <Link to="/signup" className="text-decoration-none txt-blue">
                  Register
                </Link>{" "}
                here.
              </span>
            </div>
            <form action="" className="col-12 row m-0 login-form mt-3 gx-sm-5 ">
              <div className="col-sm-6">
                <label htmlFor="" className="login-form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="login-form-input"
                  placeholder="Please enter your Phone Number"
                />
              </div>
              <div className="col-sm-6">
                <button className="login-btn" style={{ marginTop: "17px" }}>
                  LOGIN
                </button>
              </div>
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <span className="or-login-with">Or, login with</span>
              </div>
              <div className="col-sm-6">
                <label htmlFor="" className="login-form-label">
                  Password*
                </label>
                <input
                  type="text"
                  className="login-form-input"
                  placeholder="Please enter your password"
                />
              </div>
              <div className="col-sm-6">
                <Link
                  to="#"
                  className="login-with-facebook justify-content-center text-decoration-none d-flex align-items-center gap-3"
                  style={{ marginTop: "15px" }}
                >
                  <img src={Facebook} className="login-facebook-icon" alt="" />
                  <span>Facebook</span>
                </Link>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <Link
                  to="#"
                  className="reset-password text-decoration-none txt-blue fs-12"
                  style={{ paddingTop: "13px" }}
                >
                  Reset Your Password
                </Link>
              </div>
              <div className="col-sm-6">
                <Link
                  to="#"
                  className="login-with-google justify-content-center text-decoration-none d-flex align-items-center gap-3"
                >
                  <img
                    src={Googleplus}
                    className="login-googleplus-icon"
                    alt=""
                  />
                  <span> Google</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
