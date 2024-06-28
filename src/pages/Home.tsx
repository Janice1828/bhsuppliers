import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="products">
          <Products />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
