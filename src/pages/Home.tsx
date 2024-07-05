import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/home/Products";
import Filter from "../components/home/Filter";
import Discount from "../components/home/Discount";
import Categories from "../components/home/Categories";
import Flashsale from "../components/home/Flashsale";
import Darazmall from "../components/home/Darazmall";
import JustForYou from "../components/home/JustForYou";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="products">
          <Filter />
          <Discount />
          <Categories />
          <Flashsale />
          <Darazmall />
          <JustForYou />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
