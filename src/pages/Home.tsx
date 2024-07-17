import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/home/Products";
import Filter from "../components/home/Filter";
import Discount from "../components/home/Discount";
import Categories from "../components/home/Categories";
import Flashsale from "../components/home/Flashsale";
import Darazmall from "../components/home/Darazmall";
import JustForYou from "../components/home/JustForYou";
import Sale from "../components/home/Sale";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="navbar pt-0">
          <Navbar />
        </div>
        <div className="products row w-75 m-auto pt-1">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9 p-0">
            <Sale />
          </div>
          <div className="col-12 pt-3 pb-3">
            <Discount />
          </div>
          <div className="col-12">
            <Categories />
          </div>
          <div className="col-12 mt-3">
            <Flashsale />
          </div>
          <div className="col-12 mt-3">
            <Darazmall />
          </div>
          <div className="col-12 mt-3">
            <JustForYou />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
