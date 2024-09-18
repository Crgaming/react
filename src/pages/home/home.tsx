import React from "react";
import Banner from "../../img/fillo-hero.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../css/style.css';
import Shoes1 from "../../img/shoes1.png"
import Shoes2 from "../../img/shoes2.png"
import Shoes3 from "../../img/shoes3.png"
import Shoes4 from "../../img/shoes4.png"
import ProductCard from "../../components/productcard";

const Home = () => {
  return (
    <>
      <div className="banner-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div>
              <h1>XTREMA 3</h1>
              <h2>COMFY AND TRENDY</h2>
              <p>
                A shoe is an item of footwear intended to protect and comfort.
                They are often worn with a sock. Shoes are also used as an item
                of decoration and fashion. The design of shoes has varied
                enormously through time and from culture to culture, with form
                originally being tied to function.
              </p>
              <button className="btn btn-outline-light btn-lg btn-custom">
                Shop Here
              </button>
            </div>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={Banner} alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-icons">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-sm-3">
              <i className="bi bi-check2-circle" style={{ color: "#3D399F" }}></i>
              <span>ORIGINAL PRODUCT</span>
            </div>
            <div className="col-6 col-sm-3">
              <i className="bi bi-bag" style={{ color: "#3D399F" }}></i>
              <span>INTERESTING PROMO & DEALS</span>
            </div>
            <div className="col-6 col-sm-3">
              <i className="bi bi-wallet2" style={{ color: "#3D399F" }}></i>
              <span>30 DAYS MONEY-BACK GUARANTEE</span>
            </div>
            <div className="col-6 col-sm-3">
              <i className="bi bi-award" style={{ color: "#3D399F" }}></i>
              <span>EXPERIENCED SELLER</span>
            </div>
          </div>
        </div>
      </div>
     <div className="container mt-5">
  <div className="row">
          <ProductCard imgSrc={Shoes1} title="Shoes 1" price="$20.00" />
          <ProductCard imgSrc={Shoes2} title="Shoes 2" price="$20.00" />
          <ProductCard imgSrc={Shoes3} title="Shoes 3" price="$20.00" />
          <ProductCard imgSrc={Shoes4} title="Shoes 4" price="$20.00" />
          
  </div>
</div>
  <div className="row mt-5">
    <div className="col-md-12">
      <div className="hot-product d-flex justify-content-between">
        <div>
          <h2>HOT PRODUCT.</h2>
          <p></p>
        </div>
        <div>
          <a href="#" className="btn see-more-btn">See More →</a>
        </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default Home;
